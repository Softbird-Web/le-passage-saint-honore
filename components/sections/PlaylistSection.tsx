export default function PlaylistSection() {
  return (
    <section className="section playlist">
      <svg className="noise" preserveAspectRatio="none">
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
      <div className="max">
        <div className="section-head">
          <div>
            <div className="section-num">— 10 / Playlist</div>
            <span className="eyebrow" style={{ marginTop: 18 }}>le son de la maison…</span>
            <h2 className="display" data-words-pullup style={{ marginTop: 24 }}>
              Une&nbsp;<span className="ital">heure douze.</span>
            </h2>
          </div>
        </div>

        <div className="playlist-card" data-reveal>
          <div className="playlist-vinyl" aria-hidden="true">
            <div className="playlist-label">
              Le Passage
              <small>VOL. 04 · PRINTEMPS</small>
            </div>
          </div>

          <div className="playlist-info">
            <span className="eyebrow">curated by Camille…</span>
            <h3 className="display" style={{ marginTop: 20 }}>
              Chanson&nbsp;<span className="ital">française.</span>
            </h3>
            <p className="body-lg" style={{ marginTop: 16, opacity: 0.85, maxWidth: '42ch' }}>
              Quelques surprises. Idéal entre l'apéritif et le dessert.
            </p>

            <div className="playlist-tracks">
              <div className="track">
                <span className="num">01</span>
                <div className="title-row">
                  <span className="title">Les eaux de mars</span>
                  <span className="artist">Georges Moustaki</span>
                </div>
                <span className="duration">3:48</span>
              </div>
              <div className="track">
                <span className="num">02</span>
                <div className="title-row">
                  <span className="title">Sous le ciel de Paris</span>
                  <span className="artist">Yves Montand</span>
                </div>
                <span className="duration">2:55</span>
              </div>
              <div className="track">
                <span className="num">03</span>
                <div className="title-row">
                  <span className="title">La belle vie</span>
                  <span className="artist">Sacha Distel</span>
                </div>
                <span className="duration">4:12</span>
              </div>
              <div className="track">
                <span className="num">04</span>
                <div className="title-row">
                  <span className="title">Quartier latin</span>
                  <span className="artist">Henri Salvador</span>
                </div>
                <span className="duration">3:21</span>
              </div>
            </div>

            <div style={{ marginTop: 32, display: 'flex', gap: 12 }}>
              <a className="btn" href="#">Écouter sur Spotify <span className="arrow">↗</span></a>
              <a className="btn ghost" href="#">Apple Music</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
