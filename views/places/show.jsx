const React = require('react')
const Def = require('../default')

function show(data) {
  let comments = (
    <h3 className="inactive">
      No comments yet!
    </h3>
  )
  let rating = (
    <h3 className="inactive">
      Not yet rated
    </h3>
  )
  if (data.place.comments.length) {
    let sumRatings = data.place.comments.reduce((tot, c) => {
      return tot + c.stars
    }, 0)
    let averageRating = Math.round(sumRatings / data.place.comments.length)
    let stars = ''
    for (let i = 0; i < averageRating; i++) {
      stars += '⭐️'
    }
    rating = (
      <h3>
        {stars}
      </h3>
    )
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
              {rating}
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
              <label htmlFor="content">Content:</label>
              <textarea id="content" name="content" rows="2" cols="150" required />
              <br></br>
              <label htmlFor="author">Author:</label>
              <input type="text" id="author" name="author" required />
              <label htmlFor="stars">Star Rating</label>
              <input type="range" id="stars" name="stars" min="0" max="5"></input>
              <label htmlFor="rant">Rant:</label>
              <input type="checkbox" id="rant" name="rant" />
              <br></br>
              <br></br>
              <button type="submit" className="btn btn-primary">Submit Comment</button>
            </form>
      </main>
    </Def>
  )
}

module.exports = show
