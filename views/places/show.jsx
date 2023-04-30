const React = require('react')
const Def = require('../default')

function show(data) {
  return (
    <Def>
      <main>
        <div className="show-container">
          <div className="image-container">
            <img src={data.place.pic} alt={data.place.name}/>
            <h3>
              Located in {data.place.city}, {data.place.state}
            </h3>
          </div>
          <div className="info-container">
            <h1>{data.place.name}</h1>
            <section className="description-rating">
              <h2>Rating</h2>
              <p>Currently unrated</p>
            </section>
            <section className="description-rating">
              <h2>Description</h2>
              <h3>
                {data.place.showEstablished()}
              </h3>
              <h4>
                Serving {data.place.cuisines}
              </h4>
            </section>
        <div className="buttons-container">
          <a href={`/places/${data.id}/edit`} className="btn btn-warning">
            Edit <i className="fas fa-pencil-alt fa-inverse" aria-hidden="true"></i>
          </a>
          <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
            <button type="submit" className="btn btn-danger">
              Delete <i className="fa fa-trash" aria-hidden="true"></i>
            </button>
          </form>
        </div>
          </div>
        </div>
        <section>
          <h2>Comments</h2>
          <p>No comments yet!</p>
        </section>
      </main>
    </Def>
  )
}

module.exports = show
