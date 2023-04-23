const React = require('react')
const Def = require('../default')

function show(data) {
  return (
    <Def>
      <main>
        <div className="show-container">
          <div className="image-container">
            <img src={data.place.pic} alt={data.place.name} />
          </div>
          <div className="info-container">
            <h1>{data.place.name}</h1>
            <section className="description-rating">
              <h2>Rating</h2>
              <p>Currently unrated</p>
            </section>
            <section className="description-rating">
              <h2>Description</h2>
              <p>Located in {data.place.city}, {data.place.state} and serving {data.place.cuisines}</p>
            </section>
          </div>
        </div>
        <section>
          <h2>Comments</h2>
          <p>No comments yet!</p>
        </section>
        <div className="buttons-container">
          <a href={`/places/${data.id}/edit`} className="btn btn-warning">
            Edit
          </a>
          <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
            <button type="submit" className="btn btn-danger">
              Delete
            </button>
          </form>
        </div>
      </main>
    </Def>
  )
}

module.exports = show
