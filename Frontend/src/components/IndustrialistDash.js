
import React from "react";
import { Link } from "react-router-dom";
import { Button, Card,  CardTitle, Col, Row } from "reactstrap";



function Trederdash() {

    return (
        <div>

            <br></br><br></br><br></br>

           <Row>
                <Col sm="3">

                </Col>
                
                <Col sm="3">
                    <Card body>
                      
                        <CardTitle tag="h1">
                           Buy New Products
                        </CardTitle>

                       
                        <Button href="buy" className="btn btn-danger" type="submit">
                        Buy 
                        </Button>
                    </Card>
                </Col>
                

          

            
                <Col sm="3">
                    <Card body>
                        <CardTitle tag="h1">
                          View Your Orders
                        </CardTitle>
                        <Button href="listoforder" className="btn btn-danger" type="submit">
                        View 
                        </Button>
                    </Card>
                </Col>

                
            
                
            
            </Row>
            <br></br><br></br><br></br><br></br><br></br>
            
         
        </div>
    );
}

export default Trederdash;