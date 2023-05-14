import React, { useEffect, useState } from 'react'
import {productDetails} from "../action/productAction.js"
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Button, Card, Col, Form, Image, ListGroup, Row } from 'react-bootstrap';
import Rating from '../components/Rating';
import { useDispatch, useSelector } from 'react-redux';

const ProductScreen = ({history}) => {
    const [qty,setQty] = useState(1)
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const params = useParams()
    const {product}=useSelector(state=>state.productDetails)

    useEffect(()=>{
        dispatch(productDetails(params.id))
    },[dispatch,params])


    const addToCartHandler = () => {
        navigate(`/cart/${params.id}?qty=${qty}`)
    }
  return (
    <>
        <Link className='btn btn-dark my-3' to="/">Go Back</Link>
        <img src="./images/airpods.jpg" alt="airpods"/>
        <Row>
            <Col md={6}>
                <Image src={product.image} alt={product.name} fluid/>
            </Col> 
            <Col md={3}>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h2>{product.name}</h2>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Price: ${product.price}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Price: ${product.description}
                    </ListGroup.Item>
                </ListGroup>
            </Col>
            <Col md={3}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    Price:
                                </Col>
                                <Col>
                                    <strong>${product.price}</strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    Status:
                                </Col>
                                <Col>
                                    <strong>${product.countInStock > 0 ? "In Stock":"Out of Stock"}</strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        {product.countInStock > 0 && (
                            <ListGroup.Item>
                                <Row>
                                    {console.log(product.countInStock)}
                                    <Col>Qty:</Col>
                                    <Col><Form.Control 
                                            as="select" 
                                            value={qty} 
                                            onChange={(e)=>setQty(e.target.value)}>
                                                {[...Array(product.countInStock).keys()].map( x => {
                                                    return <option key={x+1} value={x+1}>{x+1}</option>
                                                })}
                                        </Form.Control></Col>
                                </Row>
                            </ListGroup.Item>
                        )}
                        <ListGroup.Item>
                            <Button 
                                onClick={addToCartHandler}
                                className='btn-block' 
                                type="button" 
                                disabled={product.countInStock===0}
                            >
                                    Add To Cart
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    </>
  )
}

export default ProductScreen
