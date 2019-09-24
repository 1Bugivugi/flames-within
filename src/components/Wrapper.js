import React, { Component } from 'react';
import Header from './Header';
import FeaturesSection from './FeaturesSection';
import Vids from './Vids';
import Gallery from './Gallery';
import Subscribe from './Subscribe';
import Blog from './Blog';
import stuff from '../img/Header - Background.png';
import '../css/Wrapper.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Wrapper extends Component {
  render() {
    return (
      <div className='dunno'>
        <Header />
        <Container>
          <Row>
            <Col>
              <div className='dunno2'>
                <FeaturesSection />
                <Vids />
                <Gallery />
                <Subscribe />
                <Blog />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Wrapper;
