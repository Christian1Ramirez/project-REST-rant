const React = require('react')
const Def = require('./default')

function error404 () {
 return (
   <Def>
       <main>
           <h1>404: PAGE NOT FOUND</h1>
           <p>This page has ghosted you!</p>
           <div>
                 <img src="images/ghosted.jpg" alt="Multiple bean tacos" width="330" height="500"/>
                <div>
                   Photo by <a href="https://unsplash.com/photos/8Ef813JYl3U">Bahnijit Barman</a> on <a href="https://unsplash.com/s/photos/free">Unsplash</a>
                </div>
                </div>
       </main>
   </Def>
 )
}

module.exports = error404
