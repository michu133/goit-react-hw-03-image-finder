import { Searchbar } from './Searchbar';
import { Component } from 'react';
import { ImageGallery } from './ImageGallery';
import { Button } from './Button';
import { Audio } from 'react-loader-spinner';

export class App extends Component {
  state = {
    images: [],
    query: '',
    totalHits: 0,
    perPage: 12,
    page: 1,
    isLoading: false,
  };

  fetchImages = async (query, perPage, page) => {
    const URL = 'https://pixabay.com/api/';
    const KEY = '37022905-cc72506166b9ffbf95abb4909';

    this.setState({ isLoading: true });

    try {
      const response = await fetch(
        `${URL}?key=${KEY}&q=${query}&per_page=${perPage}&page=${page}&image_type=photo`
      );

      const data = await response.json();

      this.setState(prevState => ({
        ...prevState,
        images: [...prevState.images, ...data.hits],
        totalHits: data.totalHits,
        isLoading: false,
      }));
    } catch (error) {
      console.log('error', error);
      this.setState({ isLoading: false });
    }
  };

  handleLoadMore = () => {
    this.setState(
      prevState => ({ page: prevState.page + 1 }),
      () => {
        console.log(this.state.page);
        this.fetchImages(this.state.query, this.state.perPage, this.state.page);
      }
    );
  };
  handleSearch = query => {
    if (query !== this.state.query) {
      // Jeśli zapytanie się zmieniło, wyczyść obrazy
      this.setState({
        query,
        images: [],
      });
    }

    this.fetchImages(query, this.state.perPage, this.state.page);
  };

  render() {
    const { isLoading } = this.state;
    console.log(this.state.totalHits);
    return (
      <div>
        <Searchbar
          onSubmit={this.handleSearch}
          query={this.state.query}
        ></Searchbar>
        {isLoading ? (
          <Audio
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
          />
        ) : (
          <ImageGallery images={this.state.images}>
            {this.state.totalHits > 12 ? (
              <Button onClick={this.handleLoadMore}></Button>
            ) : null}
          </ImageGallery>
        )}
      </div>
    );
  }
}
