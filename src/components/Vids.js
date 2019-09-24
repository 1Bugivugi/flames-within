import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/Vids.css';
import Carousel from 'react-bootstrap/Carousel';
import VidModal from './subComponents/VidModal';
import placeholder from '../img/vidPlaceholder.png';
import Button from 'react-bootstrap/Button';

class Vids extends Component {

  constructor(...args) {
    super(...args);

    this.state = { modalShow: false,
      src1:'https://www.youtube.com/embed/3tJahCHjVhI',
      src2:'https://www.youtube.com/embed/3tJahCHjVhI',
      src3:'https://www.youtube.com/embed/3tJahCHjVhI'
    };
  }

  state = {

  }

  render() {
    let modalClose = () => this.setState({ modalShow: false })

    return (
      <Container>
        <Row>
          <Col>
            <div className='mobileVids'>
              <Carousel>
                <Carousel.Item>
                  <svg width='100%' height='350' xmlns='http://www.w3.org/2000/svg' className='vidsSVG'>
                    <rect width='100%' height='100%' fill='#fff' />
                  </svg>
                  <Carousel.Caption>
                    <div className='mx-auto mainVid1 align-middle'>
                      <iframe width="380" height="100%" src="https://www.youtube.com/embed/3tJahCHjVhI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen='true'></iframe>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <svg width='100%' height='350' xmlns='http://www.w3.org/2000/svg' className='vidsSVG'>
                    <rect width='100%' height='100%' fill='#fff' />
                  </svg>
                  <Carousel.Caption>
                    <div className='mx-auto mainVid1 align-middle'>
                      <iframe width="380" height="100%" src="https://www.youtube.com/embed/3tJahCHjVhI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen='true'></iframe>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <svg width='100%' height='350' xmlns='http://www.w3.org/2000/svg' className='vidsSVG'>
                    <rect width='100%' height='100%' fill='#fff' />
                  </svg>
                  <Carousel.Caption>
                    <div className='mx-auto mainVid1 align-middle'>
                      <iframe width="380" height="100%" src="https://www.youtube.com/embed/3tJahCHjVhI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen='true'></iframe>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <svg width='100%' height='350' xmlns='http://www.w3.org/2000/svg' className='vidsSVG'>
                    <rect width='100%' height='100%' fill='#fff' />
                  </svg>
                  <Carousel.Caption>
                    <div className='mx-auto mainVid1 align-middle'>
                      <iframe width="380" height="100%" src="https://www.youtube.com/embed/3tJahCHjVhI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen='true'></iframe>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className='mx-auto mainVid2'>
              <iframe width="995px" height="415" src="https://www.youtube.com/embed/3tJahCHjVhI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen='true'></iframe>
            </div>
          </Col>
        </Row>
        <div className='smallVids mx-auto'>
          <Row className='pt-4'>
            <Col xl={4}>
              <img
                src={placeholder}
                className='vidPlaceholder w-100'
                onClick={ () => this.setState({ modalShow: true })}
                />
              <VidModal
                show={this.state.modalShow}
                onHide={modalClose}
                src={this.state.src1}
              />
            </Col>
            <Col xl={4}>
              <img
                src={placeholder}
                className='vidPlaceholder w-100'
                onClick={ () => this.setState({ modalShow: true })}
                />
              <VidModal
                show={this.state.modalShow}
                onHide={modalClose}
                src={this.state.src1}
              />
            </Col>
            <Col xl={4}>
              <img
                src={placeholder}
                className='vidPlaceholder w-100'
                onClick={ () => this.setState({ modalShow: true })}
                />
              <VidModal
                show={this.state.modalShow}
                onHide={modalClose}
                src={this.state.src1}
              />
            </Col>
          </Row>
        </div>
      </Container>
    )
  }
}

export default Vids;
