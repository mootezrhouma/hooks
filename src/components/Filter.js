
import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import { Rating } from 'react-simple-star-rating';
const Filter = (props) => {
    const [rating, setRating] = useState(0)
    
    const handleRating = (rate) => {
        setRating(rate)
       
    }
    props.handleRate(rating)
console.log("raiting:",rating)
return (

<div className='search'>
    <h1> TFAREJ</h1>
    <Navbar  expand="lg">
        <Form className="d-flex">
        <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={(e)=>props.handleFilter(e.target.value)}
        />
        <Button variant="outline-light" >Add </Button>
       
        <Rating onClick={handleRating} initialValue={rating}/>
        <div className='buttonsecond'> 
        <Button variant="outline-light" >Home </Button>
        </div>
        </Form>
</Navbar>
</div>

)
}

export default Filter





