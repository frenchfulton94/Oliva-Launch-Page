import * as React from 'react';
import { useState } from 'react';
import {Container, Col, Row, Image } from 'react-bootstrap';
// @ts-ignore
import { OlivaButton } from './OlivaButton';
import { ShortBlock } from './ShortBlock';
import diversity from './diverse-olive.svg';
import sale from './sale-olive.svg';
import facts from './facts-olive.svg';
import spend from './shopping-olive.png';
import earn from './earn-olive.png';
import impact from './impact-olive.png';
import logo from './logo.svg'
import fullLogo from './logo-full.svg';
import './App.scss';

const App = () => {

  const initialImg = () => { return (window.innerWidth >= 768) ? logo : fullLogo };

  const [logoImg, setLogoImg] = useState(initialImg());
  window.addEventListener('resize', () => {
    setLogoImg(initialImg())
  });
  const [email, setEmail] = useState('');

  // @ts-ignore
  return (
    <Container fluid>
      <Row className={'top-row'}>
        <Col >
          <Row >
            <Col xs={5} md={3}  className={'logo-col'}>

                <Image  className={'logo my-3 my-md-0'} src={logoImg}  fluid />

            </Col>
          </Row>
          <Row >
            <Col md={{span: 7, offset: 5}}>
              <Image className={'mb-0'} src={diversity} fluid/>
            </Col>
          </Row>
          <Row>
            <Col md={{span: 6, offset: 6}}>
              <Row className={'justify-content-center'}>
                <Col className={'my-3'} xs={12}>
                  <h1>
                    <span>BUILD</span> YOUR <br/> WEALTH
                  </h1>
                  <hr className={'line-header'}/>
                  <h2>Alongside your local nyc community <br/> <span>(not at the expense of it)</span></h2>
                </Col>
                <Col className={'my-5 mt-md-3 '} xs={12}>
                  <div className={'button-row'}>
                    <div className={'button-column'}>
                    {/*<OlivaButton title={'Learn More'}/>*/}
                    <OlivaButton title={'Sign Up'}/>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
      <Col md={{span: 6, offset: 6}}>
        <p>
          Oliva invests your money in businesses owned by underrepresented groups in NYC.
        </p>
        <hr className={'paragraph'} />
      </Col>
    </Row>
      <Row className={'justify-content-center mt-5'} >
        <Col   md={{span: 6, offset: 0.5}}>
          <Row className={'align-items-center height-adjust ' }>
            <Col>
              <div className={'works-content'}>
              <h3>How It Works</h3>
              <ol>
                <li>You select one of the investment levels we provide.</li>
                <li>Your money is added to our investment pool.</li>
                <li>That pool is invested in promising businesses owned by underrepresented New Yorkers.</li>
                <li>The businesses grow and you earn a share of the profits.</li>
              </ol>
              <hr className={'paragraph'} />
              </div>

            </Col>
          </Row>

        </Col>
        <Col md={{span: 5, offset: -1}}>
          <Image className={'my-5'} src={facts} fluid/>
        </Col>
      </Row>
      <Row className={'mb-5'}>
        <Col>
          <div className={'box-callout'} >
            <p className={'content'}>
              We are building an economic community to support underrepresented business owners and ordinary people who want a greater stake in local community wealth creation.
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className={'text-center'}>
            Sign up for our newsletter<br/>
            to learn more as we prepare to launch!
          </p>
              <form  action="https://olivaapp.us19.list-manage.com/subscribe/post?u=3f333cb353601a96af9e2b0ec&amp;id=ada31955c9" method="post" id={'sign-up'} name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                <Row className={'justify-content-center'}>
                  {/*<label htmlFor="mce-EMAIL">Subscribe</label>*/}
                  <Col xs={12} md={5}>
                  <input  onChange={
                    (e) => {
                    setEmail(e.target.value)
                  }} type="email"
                         value={email}
                         name="EMAIL"
                         className="form-control"
                         placeholder="email address"
                         required />
                  </Col>
                    <div style={{position: "absolute", left: -5000}} aria-hidden="true">
                      <input type="text" name="b_3f333cb353601a96af9e2b0ec_ada31955c9" tabIndex={-1} value="" readOnly/>
                    </div>
                    <Col className={'mt-3 mt-md-0'} xs={12} md={3}>
                      <div className={'signup-row'}>
                      <input type="submit" value="Subscribe" name="subscribe"  className="oliva-button"/>
                      </div>
                      </Col>
                </Row>
              </form>
        </Col>
      </Row>
      <Row className={'py-5'} >
        <Col >
          <p className={'call-to-action'}>Join us in building an economic community!</p>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
