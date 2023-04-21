const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                 <img src="../images/bean_tacos.jpg" alt="Multiple bean tacos" width="300"/>
                <div>
                   Photo by <a href="https://unsplash.com/photos/J04BD4ysoh8">Edgar Castrejon</a> on <a href="https://unsplash.com/s/photos/free">Unsplash</a>
                </div>
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home