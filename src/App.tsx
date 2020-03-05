import * as React from 'react';
import {useEffect} from 'react';
import {Container, Col, Row, Image, Form} from 'react-bootstrap';
// @ts-ignore
import { OlivaButton } from './OlivaButton';
import { ShortBlock } from './ShortBlock';
import diversity from './diverse-olive.svg';
import sale from './sale-olive.svg';
import facts from './facts-olive.svg';
import spend from './shopping-olive.png';
import earn from './earn-olive.png';
import impact from './impact-olive.png';

import './App.scss';

const App = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.id ="mcjs";
    script.type = 'text/javascript';
    script.innerHTML = '!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/3f333cb353601a96af9e2b0ec/58e48b6f5347029a00f1b063a.js");';
    script.async = true;

    document.body.appendChild(script);
  });
  return (
    <Container className={'pb-5'} fluid>
      <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossOrigin="anonymous"
      />
      <link href="https://fonts.googleapis.com/css?family=Barlow|Barlow+Condensed|Knewave&display=swap" rel="stylesheet"/>
      <Row className={'top-row'}>
        <Col>
          <Row >
            <Col md={{span: 7, offset: 5}}>
              <Image src={diversity} fluid/>
            </Col>
          </Row>
          <Row className={'pt-3'}>
            <Col md={{span: 7, offset: 5}}>
              <Row className={'justify-content-center'}>
                <Col md={8}>
                  <h1>
                    <span>DIVERSIFY</span> YOUR INVESTMENTS
                  </h1>
                  <hr className={'line-header'}/>
                  <h3>Invest your money to finance businesses owned by under-represented groups</h3>
                </Col>
                <Col md={4}>
                  <div className={'button-row'}>
                    <div className={'button-column'}>
                    {/*<OlivaButton title={'Learn More'}/>*/}
                    <OlivaButton className={'mt-4'} title={'Sign Up'}/>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className={'pt-5'}>
      <Col md={{span: 5, offset: 7}}>
        <p>
          Small Businesses employ nearly half of all Americans, are interwoven in our communities, produce happier workers and contribute to generational wealth. Unfortunately, those who would benefit most from entrepreneurship (low income Americans and underrepresented minorities) face unique barriers  that are difficult to overcome.
          <hr className={'paragraph'} />
        </p>
      </Col>
    </Row>
      <Row className={'mt-5 justify-content-center my-5'} >
        <Col md={4}>
          <div className={'paragraph-column'}>
          <p className={'paragraph-center'} >
            Underrepresented Americans have a harder time getting access to affordable capital in part due to shorter credit history’s and a lack of collateral.
            <hr className={'paragraph'} />
          </p>
          </div>
        </Col>
        <Col className={'mt-3'} md={{span: 5, offset: 1}}>
          <Image src={facts} fluid/>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className={'box-callout'} >
            <p className={'content'}>
              We are building a coalition of stakeholders who believe low-income and underrepresented minorities should have a greater share in American business life.
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className={'text-center mt-5'}>Oliva invests your money as competitive financing to businesses owned by underrepresented groups.</p>
        </Col>
      </Row>
      <Row className={'my-5 justify-content-center'} >
        <Col md={5} className={'mb-5'}>
          <Image src={sale} fluid/>
        </Col>
        <Col md={{span: 4, offset: 1}}>
          <div className={'paragraph-column'} >
          <p className={'paragraph-center'}>
            Those businesses then not only provide an ROI but special/discounted products and services to you for your stake in their success.
            <hr className={'paragraph'} />
          </p>
          </div>
        </Col>
      </Row>
      <Row className={'my-5'}>
        <Col>
          <ShortBlock title={'SPEND.'} image={spend} />
        </Col>
        <Col>
          <ShortBlock title={'EARN.'} image={earn} />
        </Col>
        <Col>
          <ShortBlock title={'IMPACT.'} image={impact} />
        </Col>
      </Row>
      <Row>
        <Col>
          <p className={'text-center'}>
            Sign up to our newsletter and <br/>
            get a 6 month free trial when we launch!
          </p>
          <Form>
            <Row className={'justify-content-center'}>
            <Col xs={12} md={5}>
            <Form.Group>
              <Form.Control className={'form-input'} type={'email'} placeholder={'Enter Email'} />
            </Form.Group>
            </Col>
            <Col  xs={12} md={3}>
              <div className={'signup-row'}>
              <OlivaButton title={'SIGN UP'}/>
              </div>
            </Col>
            </Row>
          </Form>

        </Col>
      </Row>
      <Row className={'mt-5'} >
        <Col>
          <p className={'call-to-action'}>Join us in building an economic community, <br/>
            not just a portfolio</p>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
