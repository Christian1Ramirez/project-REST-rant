const React = require('react')
const Def = require('../default')

function show(data) {
  let comments = (
    <h3 className="inactive">
      No comments yet!
    </h3>
  )
  if (data.place.comments.length) {
    comments = data.place.comments.map(c => {
      return (
        <div className="border">
          <h2 className="rant">{c.rant ? 'Rant! ðŸ˜¡' : 'Rave! ðŸ˜»'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong>- {c.author}</stong>
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      )
    })
  }
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
          <a href={`/places/${data.place.id}/edit`} className="btn btn-warning">
            Edit <i className="fas fa-pencil-alt fa-inverse" aria-hidden="true"></i>
          </a>
          <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}>
            <button type="submit" className="btn btn-danger">
              Delete <i className="fa fa-trash" aria-hidden="true"></i>
            </button>
          </form>
        </div>
          </div>
        </div>
        <section>
        <h2>Comments</h2>
            {comments}
        </section>
              <form action={`/places/${data.place.id}/comment`} method="post">
              <input type="hidden" name="placeId" value={data.place.id} />
              <label htmlFor="author">Author:</label>
              <input type="text" id="author" name="author" required />
              <label htmlFor="content">Content:</label>
              <textarea id="content" name="content" rows="4" cols="50" required />
              <label htmlFor="starRating">Star Rating:</label>
              <input type="number" id="starRating" name="stars" step="0.5" min="0" max="5" required />
              <label htmlFor="rant">Rant:</label>
              <input type="checkbox" id="rant" name="rant" />
              <button type="submit">Submit Comment</button>
            </form>
      </main>
    </Def>
  )
}

module.exports = show
