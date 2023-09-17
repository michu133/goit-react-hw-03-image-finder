import { Component } from 'react';
import { Modal } from 'components/Modal';

export class ImageGalleryItem extends Component {
  state = {
    isModalVisible: false,
  };

  showModal = () => {
    this.setState({ isModalVisible: true });
  };

  hideModal = () => {
    this.setState({ isModalVisible: false });
  };
  render() {
    console.log(this.props.srcModal, 'srcmodal');
    console.log(this.props.alt, 'alt');

    return (
      <li className="ImageGalleryItem">
        <img
          className="ImageGalleryItem-image"
          src={this.props.src}
          alt={this.props.alt}
          onClick={this.showModal}
        ></img>
        {this.state.isModalVisible ? (
          <Modal
            closeModal={this.hideModal}
            src={this.props.srcModal}
            alt={this.props.alt}
          ></Modal>
        ) : null}
      </li>
    );
  }
}
