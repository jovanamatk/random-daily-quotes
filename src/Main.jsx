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
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[quotes])

  return ( 
     <div className="container">
      {randomQuote.text 
      ? 
      <>
        <h1>{randomQuote.text ? `"`+randomQuote.text+`"` : null}</h1> 
        <h2>{randomQuote.author ? `~`+randomQuote.author : null}</h2>
      </>
  : null}
       </div>
   );
}
 
export default Main;