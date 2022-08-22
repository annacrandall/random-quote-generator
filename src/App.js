import React, { Component } from "react";
import axios from 'axios'


class RandomQuote extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quote: "",
      author: ""
    }
  }

  componentDidMount() {
    this.getQuote()
  }

  getQuote() {
    let quoteSource = "https://www.breakingbadapi.com/api/quotes"

    axios.get(quoteSource).then(response => {
      let data = response.data.quotes
      let quoteSelection = Math.floor(Math.random() * data.length)
      let randomQuote = data[quoteSelection]

      this.setState({
        quote: randomQuote["quote"], 
        author: randomQuote["author"]
      })
    })
}
getNewQuote = () => {
  this.getQuote()
}
render() {
  const {quote, author} = this.state
  return (
    <div className="border-2 border-black">
      <header className="justify-center">Breaking Bad Quote App</header>
      <div id="quote-box">
        <div id="text"><p>{quote}</p></div>
        <div id="author"><p>{author}</p></div>
        <button className="border-2 border-pink" onClick={this.getNewQuote}>Click me!</button>
      </div>
    </div>
  );
}
}

export default RandomQuote;
