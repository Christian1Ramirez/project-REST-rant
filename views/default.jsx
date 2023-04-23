const React = require('react');

function Def(html) {
  return (
    <html>
      <head>
        <title>Rest-rant</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        ></link>
        <link rel="stylesheet" href="/style.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
      </head>
      <body>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              Rest-rant
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/places">
                    Places
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/places/new">
                    New Place
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {html.children}
        <footer className="bg-light text-center text-lg-start">
          <div className="container p-4">
            <p className="text-muted">
              &copy; 2022-{new Date().getFullYear()} Christian J Ramirez / Rest-rant. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}

module.exports = Def;
