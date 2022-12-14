import React from "react";

export default class Searchbar extends React.Component {

    
    
    render(){
       return <header className="searchbar">
          <form className="SearchForm" onSubmit={this.props.onSubmit}>
            <button type="submit" className="searchForm-button">
              <span className="searchForm-button-label">Search</span>
            </button>

            <input
              className="searchForm-input"
              name="name"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </form>
        </header>
    }

}