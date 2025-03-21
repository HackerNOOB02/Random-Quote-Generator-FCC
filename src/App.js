import React, {useState} from 'react';
import './App.scss';

function App() {
  const [quote, setQuote] = useState("Money is not the most important thing in the world. Love is. Fortunately, I love money.");
  const [author, setAuthor] = useState("Jackie Mason");
  const [randomNumber, setRandomNumber] = useState(0);
  
  const getRandomQuote = () => {
    let randomInteger = Math.floor(quotesArray.length*Math.random());
    setRandomNumber(randomInteger);
    setQuote(quotesArray[randomInteger].quote);
    setAuthor(quotesArray[randomInteger].author);
    
  }

  const quotesArray = [{quote: "Hire me already. If not impressed, view my next project", author: "Lucio Corker"}, 
    {quote: "When days are dark, friends are few", author: "Sipho Gumede"}, 
    {quote: "Life is what happens to you while you're busy making other plans.", author: "John Lennon"},
    {quote: "The only way to do great work is to love what you do.", author: "Steve Jobs"},
    {quote: "You can't blame gravity for falling in love.", author: "Albert Einstein"},
    {quote: "The only thing we have to fear is fear itself.", author: "Franklin D. Roosevelt"},
    {quote: "Money makes the world go round.", author: "Unknown"},
    {quote: "The only thing we know is that we know nothing.", author: "Socrates"},
    {quote: "I think, therefore I am.", author: "René Descartes"}];

  

  

  return (
    <div className="App">
      <header className="App-header">
        <div id="quote-box">
        <p id="text">"{quote}"</p>
        <p id="author">-{author}</p>
       <button id="new-quote" onClick={()=>getRandomQuote()}>Generate new Random Quote:</button>
       <button id="twitter"><a id="tweet-quote" href={"https://twitter.com/intent/tweet"}>Tweet</a></button>
       </div>
      </header>
    </div>
  );
}

export default App;
    
        
       