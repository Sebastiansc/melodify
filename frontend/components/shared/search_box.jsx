import React from 'react';

export default class SearchBox extends React.Component{
  constructor(){
    super();
  }

  fetchResults(e){

  }

  render(){
    return(
      <form className='search-box'>
        <i className="fa fa-search" aria-hidden="true"></i>
        <input type='text' placeholder='Search photos, people...'
          className='search-input'
          onChange={e => this.fetchResults(e)}>
        </input>
      </form>
    );
  }
}
