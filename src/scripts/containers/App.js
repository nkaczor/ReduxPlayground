import React, { Component } from 'react';
import Router, {RouteHandler, Link} from 'react-router';



export default class App extends Component {

  render() {
    return (
      <div className="wraper">
        <aside className="navigation">
        <h2>Hello Redux!</h2>
        <h5>EXAMPLES</h5>

          <nav >

              <strong>Example 1</strong><Link to={'/'} className="navLink">Todo List</Link>
              <strong>Example 2</strong><Link to={'/api'} className="navLink">Reddit API</Link>

          </nav>
        </aside>
        <main className="main">
          <section className="container">
            <RouteHandler/>
          </section>
          <footer className="footer">Bye bye! By Natalia</footer>
        </main>

      </div>
    );
  }
}
