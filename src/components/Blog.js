import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/Blog.css';
import dotLineDot from '../img/dotLineDot.png';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import placeholder1 from '../img/view2.png';
import placeholder2 from '../img/view2.png';
import placeholder3 from '../img/view2.png';
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Blog extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs={{span: 10, offset: 1}}>
            <div className='blogTitle'>
              <h3>Blog</h3>
              <p className='blogDesc pt-3 pb-2'>A brief story how this process works, keep an eye till the end.</p>
              <img src={dotLineDot}></img>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className='w-120'>
            <div className='blogContent1'>
              <Card style={{width: '100%'}}>
                <Card.Img variant='top' src={placeholder1} />
                <Card.Body>
                  <Card.Title>
                    John Doe @ (17/06/2019)
                  </Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.                  </Card.Text>
                  <Button>
                    Go to post
                  </Button>
                </Card.Body>
              </Card>
              <Card style={{width: '100%'}}>
                <Card.Img variant='top' src={placeholder2} />
                <Card.Body>
                  <Card.Title>
                    John Doe @ (17/06/2019)
                  </Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.                  </Card.Text>
                  <Button>
                    Go to post
                  </Button>
                </Card.Body>
              </Card>
              <Card style={{width: '100%'}}>
                <Card.Img variant='top' src={placeholder3} />
                <Card.Body>
                  <Card.Title>
                    John Doe @ (17/06/2019)
                  </Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.                  </Card.Text>
                  <Button>
                    Go to post
                  </Button>
                </Card.Body>
              </Card>

            </div>
            <div className='blogContent2'>
              <Carousel>
                <Carousel.Item>
                  <svg width='100%' height='590' xmlns='http://www.w3.org/2000/svg' className='blogBckgrSVG'>
                    <rect width='100%' height='100%' fill='#fff'></rect>
                  </svg>
                  <Carousel.Caption>
                    <div className='test4'>
                      <Col>
                        <div className='blogItem'>
                          <img
                            className='blogIllustrationIMG'
                            src={placeholder1}
                            alt='Concept art 1'
                          />
                          <h5>John Doe @ 17/06/2019</h5>
                          <div className='blogPsSection'>
                            <p className='p1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                          </div>
                          <a href='https://twitter.com/'><FontAwesomeIcon icon={['fab', 'twitter']} size='lg'/></a>
                        </div>
                      </Col>
                      <Col>
                        <div className='blogItem'>
                          <img
                            className='blogIllustrationIMG'
                            src={placeholder2}
                            alt='Concept art 1'
                          />
                          <h5>John Doe @ 17/06/2019</h5>
                          <div className='blogPsSection'>
                            <p className='p1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                          </div>
                          <a href='https://twitter.com/'><FontAwesomeIcon icon={['fab', 'twitter']} size='lg'/></a>
                        </div>
                      </Col>
                      <Col>
                        <div className='blogItem'>
                          <img
                            className='blogIllustrationIMG'
                            src={placeholder3}
                            alt='Concept art 1'
                          />
                          <h5>John Doe @ 17/06/2019</h5>
                          <div className='blogPsSection'>
                            <p className='p1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                          </div>
                          <a href='https://twitter.com/'><FontAwesomeIcon icon={['fab', 'twitter']} size='lg'/></a>
                        </div>
                      </Col>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <svg width='100%' height='590' xmlns='http://www.w3.org/2000/svg' className='blogBckgrSVG'>
                    <rect width='100%' height='100%' fill='#fff'></rect>
                  </svg>
                  <Carousel.Caption>
                    <div className='test4'>
                      <Col>
                        <div className='blogItem'>
                          <img
                            className='blogIllustrationIMG'
                            src={placeholder1}
                            alt='Concept art 1'
                          />
                          <h5>John Doe @ 17/06/2019</h5>
                          <div className='blogPsSection'>
                            <p className='p1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                          </div>
                          <a href='https://twitter.com/'><FontAwesomeIcon icon={['fab', 'twitter']} size='lg'/></a>
                        </div>
                      </Col>
                      <Col>
                        <div className='blogItem'>
                          <img
                            className='blogIllustrationIMG'
                            src={placeholder2}
                            alt='Concept art 1'
                          />
                          <h5>John Doe @ 17/06/2019</h5>
                          <div className='blogPsSection'>
                            <p className='p1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                          </div>
                          <a href='https://twitter.com/'><FontAwesomeIcon icon={['fab', 'twitter']} size='lg'/></a>
                        </div>
                      </Col>
                      <Col>
                        <div className='blogItem'>
                          <img
                            className='blogIllustrationIMG'
                            src={placeholder3}
                            alt='Concept art 1'
                          />
                          <h5>John Doe @ 17/06/2019</h5>
                          <div className='blogPsSection'>
                            <p className='p1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                          </div>
                          <a href='https://twitter.com/'><FontAwesomeIcon icon={['fab', 'twitter']} size='lg'/></a>
                        </div>
                      </Col>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </Col>
        </Row>
        <div className='devLogs'>
          <Row>
            <Col xl={8}>

            </Col>
            <Col xl={4}>

            </Col>
          </Row>
          <Row>
            <Col>

            </Col>
            <Col>

            </Col>
            <Col>

            </Col>
          </Row>
        </div>
      </Container>
    )
  }
}

export default Blog;
