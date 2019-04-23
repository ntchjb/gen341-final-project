const Title = ({title, subtitle}) => {
  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <h1 className="title has-text-centered">
            {title}
          </h1>
          <h2 className="subtitle has-text-centered">
            {subtitle}
          </h2>
        </div>
      </div>
    </section>
  )
}

export default Title