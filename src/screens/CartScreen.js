import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { addToCart, removeFromCart } from '../action/cartAction'
import { Button, Card, Col, Form, Image, ListGroup, Row } from 'react-bootstrap'
import Message from '../components/Message'

const CartScreen = () => {
  const params = useParams()
  const navigate = useNavigate()

  const productId = params.id
  const qty = window.location.search ? Number(window.location.search.split("=")[1]) : 1
  const dispatch = useDispatch
  const {cartItems} = useSelector(state => state.cart)

  useEffect(()=>{
    if(productId){
      dispatch(addToCart(productId,qty))
    }
  },[dispatch,productId,qty])

  const removeFromCartHandler = () =>{
    dispatch(removeFromCart(id))
  }

  const checkOutHamdler=()=>{
    navigate('/login?redirect=shipping')
  }

  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? <Message>Your Cart is Empty</Message>:(
          <ListGroup variant='flush'>
            {cartItems.map(item=>{
             return <ListGroup.Item key={item.product}>
                <Row>
                   <Col md={2}>
                      <Image src={item.image} alt={item.name} fliud rounded />
                  </Col>
                  <Col md={3}>
                      <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>${item.price}</Col>
                  <Col md={2}>
                  <Form.Control 
                                            as="select" 
                                            value={item.qty} 
                                            onChange={(e)=>dispatch(addToCart(item.product,Number(e.target.value)))}>
                                                {[...Array(item.countInStock).keys()].map( x => {
                                                    return <option key={x+1} value={x+1}>{x+1}</option>
                                                })}
                                        </Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button type="button" variant='light' onClick={()=>removeFromCartHandler(item.product)}>
                      <i className='fas fa-trash'></i>
                    </Button>
                  </Col>
                </Row>

              </ListGroup.Item>
            })}
          </ListGroup>
        )}

      </Col>
      <Col md={4}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h2>Subtotal({cartItems.reduce((acc,item)=>
                    acc+item.qty,0
                  )}) items</h2>
                  ${cartItems.reduce((acc,item)=> acc+item.qty * item.price,0).toFixed(2)}
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button type="button" className='btn-block' disabled={cartItems.length ===0}
                  onClick={checkOutHamdler}>
                    Proceed To CheckOut
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
      </Col>
    </Row>
  )
}

export default CartScreen
