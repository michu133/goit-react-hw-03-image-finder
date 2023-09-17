import { Component } from 'react';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = e => {
    const { value } = e.target;

    this.setState(prevState => ({ ...prevState, query: value }));
  };

  handleSubmit = e => {
    e.preventDefault();
    const { query } = this.state;
    this.props.onSubmit(query); // Przekazujemy aktualną wartość query
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button className="SearchForm-button" type="submit">
            <span className="SearchForm-button-label"></span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            onChange={this.handleChange}
            value={this.state.query}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
