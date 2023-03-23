import React from 'react'

import Card  from 'react-bootstrap/Card';
import Button  from 'react-bootstrap/Card';
import { Rating } from 'react-simple-star-rating';

const Cardmovie = ({elm},) => {
  return (
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={elm.posterURL} />
      <Card.Body>
        <Card.Title className='title'>{elm.title}</Card.Title>
        <Card.Text className='text'>
         {elm.description}
        </Card.Text>
        <Rating initialValue={elm.rating} readonly={true}/>
        <Button variant="primary">Watch Now !</Button>
      </Card.Body>
    </Card>
  )
}

export default Cardmovie