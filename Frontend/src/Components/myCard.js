import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import ModalExample from './Test';
//test change


const Example = (props) => {
  return (
    
      <Row>
        <Col sm="4">
          <div className="app-name">
            <h3><strong>Mizizi</strong></h3>
            <p><i>Your Medical Partner</i></p>
        </div>
        </Col>
        
        <Col sm="4">
        <div className="cards-feel">
          <Card body>
            <CardTitle><strong>DID YOU KNOW?</strong></CardTitle>
            <CardText>
            Your skin works hard. Not only is it the largest organ in the body, but it defends against disease and infection, 
            regulates your temperature and aids in vitamin production.
            </CardText>
            <Button>Learn More>></Button>
          </Card>
          </div>
        </Col>

        <Col sm="4">
        <div className="cards-feel">
          <Card body>
            <CardTitle><strong>TEST YOUR KNOWLEDGE?</strong></CardTitle>
            <CardText>
            <CardText>
            Do you want to test how much general knowledge you have on how to maintain good health? Test your knowledge now!!.
            </CardText>
            <ModalExample /></CardText>
            
          </Card>
          </div>
        </Col>
      </Row>
   
  );
};

export default Example;