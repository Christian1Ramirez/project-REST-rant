const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
            {/* Add a Rating section */}
            <section>
              <h2>Rating</h2>
              <p>Currently unrated</p>
            </section>
            {/* Add a Comments section */}
            <section>
              <h2>Comments</h2>
              <p>No comments yet!</p>
              <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
                Edit
              </a>  
              <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                <button type="submit" className="btn btn-danger">
                  Delete
                </button>
              </form>     
            </section>
          </main>
        </Def>
    )
}

module.exports = show
