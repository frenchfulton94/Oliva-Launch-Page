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
                    <span>DIVERSIFY</span> YOUR <br/> INVESTMENTS
                  </h1>
                  <hr className={'line-header'}/>
                  <h2>Invest your money to finance businesses owned by under-represented groups</h2>
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
          Small Businesses employ nearly half of all Americans, are interwoven in our communities, produce happier workers and contribute to generational wealth. Unfortunately, those who would benefit most from entrepreneurship (low income Americans and underrepresented minorities) face unique barriers  that are difficult to overcome.
        </p>
        <hr className={'paragraph'} />
      </Col>
    </Row>
      <Row className={'justify-content-center mt-5'} >
        <Col   md={{span: 5, offset: 0.5}}>
          <Row className={'align-items-center height-adjust my-lg-5' }>
            <Col>
          <p >
            Underrepresented Americans have a harder time getting access to affordable capital in part due to shorter credit history’s and a lack of collateral.
          </p>
              <hr className={'paragraph'} />

            </Col>
          </Row>

        </Col>
        <Col md={{span: 5, offset: -1}}>
          <Image className={'my-5'} src={facts} fluid/>
        </Col>
      </Row>
      <Row className={'my-5'}>
        <Col>
          <div className={'box-callout'} >
            <p className={'content'}>
              We are building a coalition of stakeholders who believe low-income and underrepresented minorities should have a greater share in American business life.
            </p>
          </div>
        </Col>
      </Row>
      <Row className={'my-5'}>
        <Col>
          <p className={'text-center '}>Oliva invests your money as competitive financing to businesses owned by underrepresented groups.</p>
          <hr className={'paragraph-center'}/>
        </Col>
      </Row>
      <Row className={'justify-content-center'} >
        <Col md={5} >
          <Image src={sale} fluid/>
        </Col>
        <Col md={5}>
          <Row className={'align-items-center height-adjust' }>
            <Col>
          <p className={'paragraph-center'}>
            Those businesses then not only provide an ROI but special/discounted products and services to you for your stake in their success.
          </p>
            <hr className={'paragraph'} />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className={'my-5'}>
        <Col xs={12} md={4} >
          <ShortBlock title={'SPEND.'} image={spend} />
        </Col>
        <Col xs={12} md={4}>
          <ShortBlock title={'EARN.'} image={earn} />
        </Col>
        <Col xs={12} md={4}>
          <ShortBlock title={'IMPACT.'} image={impact} />
        </Col>
      </Row>
      <Row>
        <Col>


          <p className={'text-center'}>
            Sign up to our newsletter and <br/>
            get a 6 month free trial when we launch!
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
          <p className={'call-to-action'}>Join us in building an economic community, <br/>
            not just a portfolio</p>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
