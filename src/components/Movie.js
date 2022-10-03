import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import {Link} from 'react-router-dom';
function Movie({ movie }) {

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false); 
  const handleShow = () => setShow(true);
    return (
        <div className='row bs'>
            <div className='col-md-4'>
                <img src={movie.imageurls[0]} className='smallimg'></img>
            </div>
            <div className='col-md-7'>
                <h1>{movie.name}</h1>
                <b> <p>Hall Capacity :{movie.maxcount}</p></b>
                <b> <p>Likes :{movie.likenumber}</p></b>
                <b> <p>Type :{movie.type}</p></b>

                <div style={{ float: 'right' }}>
                    <Link to={`/book/${movie._id}`}>
                       <button className='btn btn-danger m-2'>Book Now</button>                    
                    </Link>
                    <button className='btn btn-danger'onClick={handleShow}>View Details</button>
                </div>
            </div>
        
           

      <Modal show={show} onHide={handleClose} size='md'>
        <Modal.Header closeButton>
          <Modal.Title>{movie.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Carousel>
      
        <Carousel.Item>
        <img
          className="d-block w-100 bigimg"
          src={movie.imageurls[0]}
          alt=""
        />

        
      </Carousel.Item>
    </Carousel>
  <b>  <p>{movie.description}</p></b>
  <b> <p>Hall Capacity :{movie.maxcount}</p></b>
                <b> <p>Likes :{movie.likenumber}</p></b>
                <b> <p>Type :{movie.type}</p></b>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default Movie