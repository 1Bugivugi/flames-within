import React, { Component } from 'react';
import dotLineDot from '../img/dotLineDot.png';
import '../css/Gallery.css';
import { Container, Row, Col } from 'react-bootstrap';
import gal1 from '../img/view1.png';
import gal2 from '../img/view1.png';
import gal3 from '../img/view1.png';
import view1 from '../img/view1.png';
import view2 from '../img/view2.png';
import view3 from '../img/view3.png';
import view4 from '../img/view4.png';
import Button from 'react-bootstrap/Button';

class Gallery extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs={{span: 10, offset: 1}}>
            <div className='gallerySectionTitle'>
              <h3>Gallery</h3>
              <p className='galleryDesc pt-3 pb-2'>A brief story how this process works, keep an eye till the end.</p>
              <img src={dotLineDot}></img>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className='galleryContent mx-auto'>
              <img src={gal1} alt='Gallery picture 1' className='pic1' />
              <img src={gal2} alt='Gallery picture 2' className='pic2' />
              <img src={gal3} alt='Gallery picture 3' className='pic3' />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className='galleryContent2 mx-auto'>
              <Row>
                <Col className='fixedHeight1'>
                <img src={view1} alt='Gallery picture 1' className='view1' />
                </Col>
                <Col>
                    <Row className='h-50'>
                      <Col className='fixedHeight2'>
                      <img src={view2} alt='Gallery picture 1' className='view2' />
                      </Col>
                    </Row>
                    <Row className='h-50'>
                      <Col className='fixedHeight2'>
                      <img src={view3} alt='Gallery picture 1' className='view3' />
                      </Col>
                    </Row>
                </Col>
              </Row>
              <Row>
                <Col className=''>
                <img src={view4} alt='Gallery picture 1' className='view4' />
                </Col>
              </Row>
            </div>
            <Row>
              <Col xs={{span: 10, offset: 1}}>
                <div className='goToGallery'>
                  <p>
                  Browse the rest of the cool stuff we've got for you!
                  </p>
                </div>
                <Button variant='danger'>
                Go to Gallery
                </Button>
            </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Gallery;
