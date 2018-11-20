import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'


class App extends Component {
  render() {
    const {
      route: { routes }
    } = this.props
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/basket'>Basket</Link>
            {renderRoutes(routes)}
        </div>
    )
  }
}

export default App