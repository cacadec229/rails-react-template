// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import App from './src/App.js'

const app = (
  <HashRouter>
    <App />
  </HashRouter>
)



document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    app,
    document.body.appendChild(document.createElement('div')),
  )
})
