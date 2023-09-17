import { ImageGalleryItem } from 'components/ImageGalleryItem';
import { Component } from 'react';

export class ImageGallery extends Component {
  render() {
    return (
      <ul className="ImageGallery">
        {this.props.images.map(el => {
          return (
            <ImageGalleryItem
              key={el.id}
              src={el.webformatURL}
              alt={el.tags}
              srcModal={el.largeImageURL}
            ></ImageGalleryItem>
          );
        })}
        {this.props.children}
      </ul>
    );
  }
}
