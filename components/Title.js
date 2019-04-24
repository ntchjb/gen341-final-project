import moment from 'moment'

const Author = (props) => {
  if (props.author === undefined) {
    return null;
  } else {
    return (
      <div>
        <hr />
        <p className="subtitle is-5 has-text-centered">{"by " + props.author + " | " + moment(props.publishedDate).fromNow()}</p>
        <style jsx>{`
          .title, .subtitle {
            ${props.thumbnailUrl === undefined ? "" : "color: white;"}
          }
        `}</style>
      </div>
    );
  }
}

const Title = (props) => {
  return (
    <div>
      <section className="hero is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container">
            <h1 className="title has-text-centered is-1">
              {props.title}
            </h1>
            <h2 className="subtitle has-text-centered is-3">
              {props.subtitle}
            </h2>
            <Author author={props.author} publishedDate={props.publishedDate} thumbnailUrl={props.thumbnailUrl} />
          </div>
        </div>
      </section>
      <style jsx>{`
      .hero {
        background: 
          ${props.thumbnailUrl === undefined ? "" : "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),"} 
          url(${props.thumbnailUrl === undefined ? "" : props.thumbnailUrl});
        background-size: cover;
        background-position: center center;
      }
      .title, .subtitle {
        ${props.thumbnailUrl === undefined ? "" : "color: white;"}
      }
    `}</style>
    </div>
  )
}

export default Title