"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Image from "next/image"
import { useLenis } from "@/components/providers/LenisProvider"
import { urlFor } from "@/lib/sanity"
import type { GalleryImageData } from "@/lib/sanity.types"
import WordsPullUp from "@/components/ui/WordsPullUp"

const FALLBACK_IMAGES = [
  { _id: "1", src: "/images/food/raspberry-tartlets-overhead.jpg", alt: "Tartelettes aux framboises", isSanity: false },
  { _id: "2", src: "/images/ambiance/bar-interior.jpg", alt: "Intérieur du bar, Le Passage", isSanity: false },
  { _id: "3", src: "/images/terrace/terrace-perspective.jpg", alt: "Terrasse du Passage Saint-Honoré", isSanity: false },
  { _id: "4", src: "/images/food/burrata-prosciutto.jpg", alt: "Burrata et prosciutto", isSanity: false },
  { _id: "5", src: "/images/ambiance/staff-terrace.jpg", alt: "Équipe en terrasse", isSanity: false },
  { _id: "6", src: "/images/food/pizza-hand.jpg", alt: "Pizza maison", isSanity: false },
  { _id: "7", src: "/images/terrace/terrace-waiter.jpg", alt: "Service en terrasse", isSanity: false },
  { _id: "8", src: "/images/food/tartare-drinks-bokeh.jpg", alt: "Tartare et cocktails", isSanity: false },
  { _id: "9", src: "/images/ambiance/macrame-lamp.jpg", alt: "Décoration intérieure", isSanity: false },
]

interface Props { data?: GalleryImageData[] | null }

export default function GallerySection({ data }: Props) {
  const [activeIdx, setActiveIdx] = useState<number | null>(null)
  const lenis = useLenis()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const stRef = useRef<any[]>([])
  const thumbRefs = useRef<(HTMLImageElement | null)[]>([])
  const lightboxImgRefs = useRef<(HTMLImageElement | null)[]>([])

  // Normalise Sanity data or fall back to static images
  const images = data?.length
    ? data.map((item) => ({
        _id: item._id,
        src: urlFor(item.image).width(1400).format("webp").quality(85).url(),
        alt: item.alt,
        isSanity: true,
      }))
    : FALLBACK_IMAGES

  const openLightbox = useCallback(async (idx: number) => {
    const { default: gsap } = await import("gsap")
    const { Flip } = await import("gsap/Flip")
    gsap.registerPlugin(Flip)
    lenis?.stop()
    const thumb = thumbRefs.current[idx]
    const lightImg = lightboxImgRefs.current[idx]
    if (!thumb || !lightImg) { setActiveIdx(idx); return }
    const state = Flip.getState(thumb)
    setActiveIdx(idx)
    requestAnimationFrame(() => { Flip.from(state, { targets: lightImg, duration: 0.7, ease: "expo.out", absolute: true }) })
  }, [lenis])

  const closeLightbox = useCallback(async () => {
    const idx = activeIdx
    if (idx === null) return
    const { default: gsap } = await import("gsap")
    const { Flip } = await import("gsap/Flip")
    gsap.registerPlugin(Flip)
    const thumb = thumbRefs.current[idx]
    const lightImg = lightboxImgRefs.current[idx]
    if (!thumb || !lightImg) { setActiveIdx(null); lenis?.start(); return }
    const state = Flip.getState(lightImg)
    setActiveIdx(null)
    requestAnimationFrame(() => { Flip.from(state, { targets: thumb, duration: 0.5, ease: "expo.inOut", absolute: true, onComplete: () => lenis?.start() }) })
  }, [activeIdx, lenis])

  const navigate = useCallback((dir: 1 | -1) => {
    setActiveIdx((prev) => prev === null ? null : (prev + dir + images.length) % images.length)
  }, [images.length])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (activeIdx === null) return
      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowRight") navigate(1)
      if (e.key === "ArrowLeft") navigate(-1)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [activeIdx, closeLightbox, navigate])

  return (
    <section id="galerie" className="py-24 md:py-32 bg-[var(--color-bg-alt)]" data-anim-section data-nav-theme="light">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="mb-12 md:mb-16">
          <p className="font-eyebrow text-[var(--color-primary)] mb-4" data-anim-item>Galerie</p>
          <WordsPullUp
            as="h2"
            text="Notre univers en images"
            style={{ fontFamily: "var(--font-cormorant, Cormorant, Georgia, serif)", fontSize: "clamp(2.2rem, 4vw, 3.2rem)", letterSpacing: "-0.02em", lineHeight: 1.1, color: "var(--color-text)" }}
          />
        </div>

        {/* Gallery grid — do NOT add overflow:hidden here (breaks Flip) */}
        <div className="gallery-grid" data-anim-card-grid>
          {images.map((img, i) => (
            <div key={img._id} className="gallery-grid__item">
              <button className="gallery-item__button" onClick={() => openLightbox(i)} aria-label={`Ouvrir ${img.alt}`}>
                <div className="relative aspect-[4/3] rounded-[0.375em] overflow-hidden">
                  <Image
                    ref={(el) => { thumbRefs.current[i] = el as unknown as HTMLImageElement }}
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 479px) calc(50vw - 1.5em), (max-width: 767px) calc(50vw - 1em), calc(33vw - 2em)"
                    className="gallery-item__img object-cover"
                  />
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <div className={`lightbox-wrap ${activeIdx !== null ? "is-active" : ""}`} style={{ background: "rgba(26,32,53,0.96)" }} role="dialog" aria-modal="true" aria-label="Galerie lightbox">
        <div className="lightbox-img__wrap">
          <div className="lightbox-img__list">
            {images.map((img, i) => (
              <div key={img._id} className={`lightbox-img__item ${activeIdx === i ? "is-active" : ""}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img ref={(el) => { lightboxImgRefs.current[i] = el }} src={img.src} alt={img.alt} className="lightbox-img" />
              </div>
            ))}
          </div>
        </div>
        <div className="lightbox-nav">
          <div className="lightbox-nav__col start">
            <button className="lightbox-nav__button" onClick={closeLightbox} aria-label="Fermer la galerie">
              <span className="lightbox-nav__dot" />
              <span className="lightbox-nav__text">Fermer</span>
            </button>
          </div>
          <div className="lightbox-nav__col center">
            <button className="lightbox-nav__button" onClick={() => navigate(-1)} aria-label="Image précédente">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M10 13L5 8l5-5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            <span className="lightbox-nav__text">{activeIdx !== null ? `${activeIdx + 1} / ${images.length}` : ""}</span>
            <button className="lightbox-nav__button" onClick={() => navigate(1)} aria-label="Image suivante">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
          </div>
          <div className="lightbox-nav__col end">
            <span className="lightbox-nav__text opacity-60">{activeIdx !== null ? images[activeIdx].alt : ""}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
