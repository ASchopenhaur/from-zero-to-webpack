import React from 'react';

export default class HelloWorld extends React.Component {
  
  render() {
    return <h1>{['Hello', 'Everyone'].map((item,i) => <span key={i}>{ item }&nbsp;</span>)}</h1>;
  }
}