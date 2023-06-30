import React from 'react';
import './App.css';
import $ from 'jquery';
import { FaQuoteLeft, FaTwitter, FaTumblr } from 'react-icons/fa';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      quotes: [
        {
          text: 'The only way to do great work is to love what you do',
          author: 'Steve Jobs'
        },
        {
          text: 'The future belongs to those who believe in the beauty of their dreams',
          author: 'Eleanor Roosevelt'
        },
        {
          text: 'Life is what happens when you\'re busy making other plans',
          author: 'John Lennon'
        },
        {
          text: 'The best way to predict the future is to create it',
          author: 'Abraham Lincoln'
        },
        {
          text: 'Success is not final, failure is not fatal: It is the courage to continue that counts',
          author: 'Winston Churchill'
        },
        {
          text: 'You miss 100% of the shots you don\'t take',
          author: 'Wayne Gretzky'
        },
        {
          text: 'The only limit to our realization of tomorrow will be our doubts of today',
          author: 'Franklin D. Roosevelt'
        },
        {
          text: 'Strive not to be a success, but rather to be of value',
          author: 'Albert Einstein'
        },
        {
          text: 'In the end, it\'s not the years in your life that count. It\'s the life in your years',
          author: 'Abraham Lincoln'
        },
        {
          text: 'The journey of a thousand miles begins with one step',
          author: 'Lao Tzu'
        },
        {
          text: 'It always seems impossible until it\'s done',
          author: 'Nelson Mandela'
        },
        {
          text: 'Your time is limited, don\'t waste it living someone else\'s life',
          author: 'Steve Jobs'
        },
        {
          text: 'Believe you can and you\'re halfway there',
          author: 'Theodore Roosevelt'
        },
        {
          text: 'The only person you are destined to become is the person you decide to be',
          author: 'Ralph Waldo Emerson'
        },
        {
          text: 'Do what you can, with what you have, where you are',
          author: 'Theodore Roosevelt'
        },
        {
          text: 'It\'s not the load that breaks you down, it\'s the way you carry it',
          author: 'Lou Holtz'
        },
        {
          text: 'Don\'t watch the clock; do what it does. Keep going',
          author: 'Sam Levenson'
        },
        {
          text: 'If you want to lift yourself up, lift up someone else',
          author: 'Booker T. Washington'
        },
        {
          text: 'The best time to plant a tree was 20 years ago. The second best time is now',
          author: 'Chinese Proverb'
        },
        {
          text: 'What you get by achieving your goals is not as important as what you become by achieving your goals',
          author: 'Zig Ziglar'
        },
      ],
      currentQuoteIndex: 0,
      colors: [ '#103952','#1b4f72', '#1f618d', '#2471a3', '#2980b9', '#1a0000','#002241','#003d00','#1a0000','#2e1c0c','#103952', '#1b4f72','#f1c40f','#a04000', '#d35400', '#e67e22', ]
    }
    this.fadeInElements = this.fadeInElements.bind(this);
  }

  componentDidMount() {
    $(document).ready(() => {
      this.fadeInElements();
    });
  }
  
  fadeInElements() {
    $('#text').animate({ opacity: 1 }, 1000);
    $('#author').animate({ opacity: 1 }, 1000);
  }
  
  setRandomQuote = () => {
    const {quotes} = this.state;
    const randIndx = Math.floor(Math.random() * quotes.length );
    const { colors, currentQuoteIndex } = this.state;
    const currColor = colors[currentQuoteIndex % colors.length];

    $('#btn-quote, #new-quote, #tweet-quote, #root').addClass('transition-color');
    $('#btn-quote, #new-quote, #tweet-quote, #root').css('background-color', currColor);
    
    $('#text').animate({ opacity: 0 }, 300);
    $('#author').animate({ opacity: 0 }, 300, () => {
      this.setState({ currentQuoteIndex: randIndx }, () => {
        this.fadeInElements();
      });
      document.documentElement.style.setProperty('--curr-color', currColor);
    });
  }

  render(){
    const { quotes, currentQuoteIndex } = this.state;
    const { text, author } = quotes[currentQuoteIndex];

    return (
    <div className="App">
      <div id='quote-box'>
        <div id='text'>
          <FaQuoteLeft /> {text}.
        </div>
        <div id='author'>- {author}</div>
        <div id="controls">
          <div id='tag-controls'>
            <a id='new-quote' title='Tweet Quote' href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                  `"${text}" - ${author}`
                )}`}
                target="_blank"  rel="noopener noreferrer"><FaTwitter /></a>
            <a id='tweet-quote' href='./App.css'><FaTumblr /></a>
          </div>
          <button id='btn-quote' onClick={this.setRandomQuote}>New Quote</button>
          </div>
      </div>
      <a id='dev' target="_blank" rel="noopener noreferrer" href="https://github.com/Raphael0025" >by Raphael Isla</a>
    </div>
  );}
}

export default App;