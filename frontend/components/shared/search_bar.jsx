// Usage: Blackbox implementation. Drop and use
// <SearchBar
//   className='klass'
// />
import React from 'react';

export default class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.query = '';
  }

  update(e){
    this.query = e.target.value;
  }

  search(){
    // this.props.search(this.query)
  }

  render(){
    return(
      <form
        className={`${this.props.formClass} ${this.props.className}`}>
      <input type='text'
             onChange={e => this.update(e)}
             className={`searchbar-input ${this.props.inputClass}`}
             placeholder='Search for songs, artists, albums and more'>
      </input>
      <button className={`searchbar-button ${this.props.buttonClass}`}
              onClick={() => this.search()}
              type='submit'>
      </button>
    </form>
    );
  }
}
