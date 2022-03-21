import React, { Component } from 'react'
import QuoteText from '../QuoteComponents/QuoteText'
import QuoteAuthor from '../QuoteComponents/QuoteAuthor'
import './Quote.css'
import Buttons from '../QuoteComponents/Buttons'
import axios from 'axios'

export default class Quote extends Component {
    state={
        quote:'The purpose of our lives is to be happy',
        author:' Dalai Lama',
        quotesData:[],
        color:'rgb(243,156,18)',

    };
    randomColor = () => {
        let colorPatterns = "1234567890ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
          color += colorPatterns[Math.floor(Math.random() * 16)];
        }
        return color;
      };
    
      componentDidMount() {
        if (this.state.quotesData.length > 0) {
          return;
        } else {
          this.fetchQuotes();
        }
      }
    
      fetchQuotes = () => {
        axios
          .get(
            "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
          )
          .then((res) => {
            const quotesData = [...res.data.quotes];
            const color = this.randomColor;
            document.body.style.color = color;
            document.body.style.backgroundColor = color;
    
            this.setState({
              quotesData: quotesData,
              color: color,
            });
          })
          .catch((error) => console.log(error));
      };
    
      handleClick = () => {
        let randomIndex = Math.floor(Math.random() * 16);
        let { quote, author } = this.state.quotesData[randomIndex];
    
        const color = this.randomColor();
        document.body.style.color = color;
        document.body.style.backgroundColor = color;
    
        this.setState({
          quote: quote,
          author: author,
          color: color,
        });
      };

  render() {
    return (
      <div id='quote-box'>
          <QuoteText quote={this.state.quote} color={this.state.color}/>
          <QuoteAuthor author={this.state.author} color={this.state.color}/>
          <Buttons handleClick={this.handleClick} color={this.state.color}/>
      </div>
    )
  }
}


