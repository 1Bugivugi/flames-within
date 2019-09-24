import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import './subCSS/Vids.css';

class VidModal extends Component {
  render() {
    return (
      <Modal
        {...this.props}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Body>
          <iframe className='vid align-middle' width="100%" height="415" src={this.props.src} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen='true'></iframe>
        </Modal.Body>
      </Modal>
    )
  }
}

export default VidModal;
