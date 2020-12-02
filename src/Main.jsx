import React, { useEffect, useState } from 'react';

const Main = () => {
  const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState([]);

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
  .then(response => {
    return response.json();
  }).then(data => {
    setQuotes(data);
  });
  },[]);
  
  let getRandomQuote = () => {
    if (quotes.length) {
      let index = Math.floor(Math.random() * quotes.length)
      setRandomQuote(quotes[index])
    }
  }
  
    useEffect(() => {
      getRandomQuote();
    },[quotes])

  return ( <div className="container"><ul>
      <li>{randomQuote.text} - {randomQuote.author}</li>
  </ul></div> );
}
 
export default Main;