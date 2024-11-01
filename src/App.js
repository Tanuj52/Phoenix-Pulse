
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  c = "Jaaanu meenu baby rucha";
  render() {
    return (
      <div>
        <Navbar />
        <News pageSize={10} />
      </div>
    )
  }
}
