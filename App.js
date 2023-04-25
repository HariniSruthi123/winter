import "./component/style.css";
import { useState, useEffect } from "react";

function getRandomQuote(quotes) {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

export default function App() {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((json) => {
        setQuotes(json);
        setQuote(json[0]);
      });
  }, []);

  function getNewQuote() {
    setQuote(getRandomQuote(quotes));
  }

  return (
    <main>
    <br></br>
      <h1 id="header">Quotes Generator</h1>
      <h2 id="h2">Choose Your <bold>Favourite Quote</bold></h2> 
      <a id="tweetquote"className="button" href={`https://twitter.com/intent/tweet`} target="_blank">
     </a>
      <section>
        <button onClick={getNewQuote}><bold><em>Change Your Quote to Change Your Thought</em></bold></button>
        <h3>
          <span>“</span>
          {quote?.text}
        </h3>
        
        <i>- {quote?.author}</i>
      </section>
      <h2 id ="footer">Done by <em>K.P. HARINI SRUTHI</em></h2>
      < img border="0" alt="W3Schools" src="https://static.vecteezy.com/system/resources/thumbnails/018/930/745/small/twitter-logo-twitter-icon-transparent-free-free-png.png" width="100"  height="100" padding="right"></img>
     
    </main>
  );
}