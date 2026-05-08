export default function InfiniteScrollBanner() {
  return (
    <div className="marquee" data-speed="55">
      <div className="marquee-track">
        <span className="word script">Bienvenue</span>
        <span className="dot"></span>
        <span className="word"><em>Petit-déjeuner</em></span>
        <span className="dot alt"></span>
        <span className="word script">Déjeuner</span>
        <span className="dot cream"></span>
        <span className="word"><em>Apéritif</em></span>
        <span className="dot"></span>
        <span className="word script">Dîner</span>
        <span className="dot alt"></span>
        <span className="word"><em>Brunch&nbsp;dominical</em></span>
        <span className="dot cream"></span>
      </div>
    </div>
  )
}
