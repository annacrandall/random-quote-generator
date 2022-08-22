import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";
import Button from "./Button";
import twitter from "./twitter-logo.svg"; 




const RandomQuote = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const getQuote = () => {
    axios.get("https://www.breakingbadapi.com/api/quote/random").then(({ data }) => {
      let randomQuote = data[0]
      setQuote(randomQuote.quote);
      setAuthor(randomQuote.author);
    })
  }

  useEffect(getQuote, []);
  return (
    <div className="flex items-center flex-col h-screen justify-center">
      <h1>Breaking Bad Quote App</h1>
      <div className="flex items-center flex-col" id="quote-box">
        <div id="text">
          <p>{quote}</p>
        </div>
        <div id="author">
          <p>{author}</p>
        </div>

        <Button id="new-quote" onClick={getQuote}><h1>New Quote</h1></Button>
        <Button id="tweet-quote" href="https://twitter.com/intent/tweet"><img alt="tweet this quote" src={twitter}/></Button>
      </div>
    </div>
  );
}

export default RandomQuote;
