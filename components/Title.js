const Title = ({ title, subtitle, thumbnailUrl }) => {
  return (
    <div>
      <section className="hero is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container">
            <h1 className="title has-text-centered is-1">
              {title}
            </h1>
            <h2 className="subtitle has-text-centered is-3">
              {subtitle}
            </h2>
          </div>
        </div>
      </section>
      <style jsx>{`
      .hero {
        background: 
          ${thumbnailUrl === undefined ? "": "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),"} 
          url(${thumbnailUrl === undefined ? "": thumbnailUrl});
        background-size: cover;
        background-position: center center;
      }
      .title, .subtitle {
        ${thumbnailUrl === undefined ? "": "color: white;"}
      }
    `}</style>
    </div>
  )
}

export default Title