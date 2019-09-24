import React, { Component } from 'react';
import '../css/FeaturesSection.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import dotLineDot from '../img/dotLineDot.png';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import illustration1 from '../img/illustration.png';
import white from '../img/whiteShit.png';
import background from '../img/view1.png';

class FeaturesSection extends Component {

  state = {
    xlHeight: 'height: 500px'
  }

  render() {
    return (
      <Container>
        <Row>
          <Col xs={{span: 10, offset: 1}} sm md lg={{span: 5, offset: 7}} xl={{span: 6, offset: 6}} >
            <div className='MFsectionTitle'>
              <h3>Main Features</h3>
              <p className='MFdesc'>A brief story how this process works, keep an eye till the end.</p>
              <img src={dotLineDot}></img>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className='MFsectionContent'>
              <Carousel>
                <Carousel.Item>
                  <svg width='100%' height='480' xmlns='http://www.w3.org/2000/svg' className='MFbckgrSVG'>
                    <rect width='100%' height='100%' fill='#fff'></rect>
                  </svg>
                  <Carousel.Caption>
                    <div className='test'>
                    <img
                      className='MFillustrationIMG'
                      src={illustration1}
                      alt='Concept art 1'
                    />
                      <h3>Feature 1</h3>
                      <div className='MFpsSection'>
                        <p className='p1'>Lorem ipsum is simply dummy text of the printing and typesetting let.</p>
                        <p className='p2'>Lorem ipsum has been the industry. Lorem ipsum is simply dummy text of the printing and typesetting let.</p>
                        <p className='p3'>Lorem ipsum has been the industry. Printing and typelorem Ipsum has been the setting let.</p>
                      </div>
                      <Button variant='danger'>
                        READ MORE
                      </Button>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <svg width='100%' height='480' xmlns='http://www.w3.org/2000/svg' className='MFbckgrSVG'>
                    <rect width='100%' height='100%' fill='#fff'></rect>
                  </svg>
                  <Carousel.Caption>
                    <div className='test'>
                    <img
                      className='MFillustrationIMG'
                      src={illustration1}
                      alt='Concept art 2'
                    />
                      <h3>Feature 2</h3>
                      <div className='MFpsSection'>
                        <p className='p1'>Lorem ipsum is simply dummy text of the printing and typesetting let.</p>
                        <p className='p2'>Lorem ipsum has been the industry. Lorem ipsum is simply dummy text of the printing and typesetting let.</p>
                        <p className='p3'>Lorem ipsum has been the industry. Printing and typelorem Ipsum has been the setting let.</p>
                      </div>
                      <Button variant='danger'>
                        READ MORE
                      </Button>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>


            <div className='MFsectionContentPC'>
              <div className='feature feature1'>
                <div className='feature1desc'>
                  <Carousel>
                    <Carousel.Item>
                      <svg width='100%' height='460' xmlns='http://www.w3.org/2000/svg' className='MFbckgrSVG'>
                        <rect width='100%' height='100%' fill='#fff'></rect>
                      </svg>
                      <Carousel.Caption>
                        <div className='test2'>
                          <img
                            src={illustration1}
                            className='MFillustrationIMG'
                            alt='Concept art 1'
                          />
                          <h5>FEATURE 1</h5>
                          <hr/>
                          <div className='MFpsSectionPC'>
                            <p className='p1'>Lorem ipsum is simply dummy text of the printing and typesetting let.
                            Lorem ipsum has been the industry. Lorem ipsum is simply dummy text of the printing and typesetting let.
                            Lorem ipsum has been the industry. Printing and typelorem Ipsum has been the setting let.</p>
                          </div>
                          <Button variant='danger'>
                            READ MORE
                          </Button>
                        </div>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <svg width='100%' height='460' xmlns='http://www.w3.org/2000/svg' className='MFbckgrSVG'>
                        <rect width='100%' height='100%' fill='#fff'></rect>
                      </svg>
                      <Carousel.Caption>
                        <div className='test2'>
                          <img
                            src={illustration1}
                            className='MFillustrationIMG'
                            alt='Concept art 1'
                          />
                          <h5>FEATURE 2</h5>
                          <hr/>
                          <div className='MFpsSectionPC'>
                            <p className='p1'>Lorem ipsum is simply dummy text of the printing and typesetting let.
                            Lorem ipsum has been the industry. Lorem ipsum is simply dummy text of the printing and typesetting let.
                            Lorem ipsum has been the industry. Printing and typelorem Ipsum has been the setting let.</p>
                          </div>
                          <Button variant='danger'>
                            READ MORE
                          </Button>
                        </div>
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
                </div>
                <img src={background} alt='Background Illustration' className='backgroundIMG1'/>
              </div>
              <div className='feature feature2'>
                <img src={background} alt='Background Illustration' className='backgroundIMG2'/>
                <div className='feature2desc'>
                  <Carousel>
                    <Carousel.Item>
                      <svg width='100%' height='460' xmlns='http://www.w3.org/2000/svg' className='MFbckgrSVG'>
                        <rect width='100%' height='100%' fill='#fff'></rect>
                      </svg>
                      <Carousel.Caption>
                        <div className='test2'>
                          <img
                            src={illustration1}
                            className='MFillustrationIMG'
                            alt='Concept art 1'
                          />
                          <h5>FEATURE 3</h5>
                          <hr/>
                          <div className='MFpsSectionPC'>
                            <p className='p1'>Lorem ipsum is simply dummy text of the printing and typesetting let.
                            Lorem ipsum has been the industry. Lorem ipsum is simply dummy text of the printing and typesetting let.
                            Lorem ipsum has been the industry. Printing and typelorem Ipsum has been the setting let.</p>
                          </div>
                          <Button variant='danger'>
                            READ MORE
                          </Button>
                        </div>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <svg width='100%' height='460' xmlns='http://www.w3.org/2000/svg' className='MFbckgrSVG'>
                        <rect width='100%' height='100%' fill='#fff'></rect>
                      </svg>
                      <Carousel.Caption>
                        <div className='test2'>
                          <img
                            src={illustration1}
                            className='MFillustrationIMG'
                            alt='Concept art 1'
                          />
                          <h5>FEATURE 4</h5>
                          <hr/>
                          <div className='MFpsSectionPC'>
                            <p className='p1'>Lorem ipsum is simply dummy text of the printing and typesetting let.
                            Lorem ipsum has been the industry. Lorem ipsum is simply dummy text of the printing and typesetting let.
                            Lorem ipsum has been the industry. Printing and typelorem Ipsum has been the setting let.</p>
                          </div>
                          <Button variant='danger'>
                            READ MORE
                          </Button>
                        </div>
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default FeaturesSection;
