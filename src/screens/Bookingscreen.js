import React from 'react';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';



function Bookingscreen() {


    let params = useParams();





    return (
        <div>
            <div>
                <div className='row'>

                    <div className='names'>

                        <Card style={{ width: '60rem' }} className='hi'>
                            <Card.Img variant="top" src="http://www.shikharclasses.in/wp-content/uploads/2020/04/PAYMENT-SUCCESS.png" />
                            <Card.Body>
                                <Card.Title><b>BOOKING DONE:</b></Card.Title>
                                <Card.Text>
                                    <h1 >{params.movieid}</h1>
                                </Card.Text>

                            </Card.Body>
                        </Card>



                    </div>
                </div>
            </div>
        </div>
    )
}



export default Bookingscreen








