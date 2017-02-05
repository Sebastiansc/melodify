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
      <form className={this.props.formClass}>
      <input type='text'
             onChange={e => this.update(e)}
             className={this.props.inputClass}
             placeholder='Search for songs, artists, albums and more'>
      </input>
      <button className={this.props.buttonClass}
              onClick={() => this.search()}
              type='submit'>
      </button>
    </form>
    );
  }
}
