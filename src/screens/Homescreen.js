import React, { useEffect, useState } from 'react'

import { Col,  Row } from 'react-bootstrap'
import Product from '../components/Product'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../action/productAction'


const Homescreen = () => {
  const dispatch = useDispatch()
  const {loading,products,error} = useSelector(state=>state.productList)
 
  useEffect(()=>{
    dispatch(listProducts())
  },[dispatch])
  
  return (
  <>
  <h1>Latest Product</h1>
  {loading ? (<h3>Loading....</h3>) : error ? (<h3>{error}</h3>):(
    <Row>      
      {products.map((product)=>{
        return <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
                  <Product product={product}/>
                </Col>
      })}
      
    </Row>
  )}
  </>
  )
}

export default Homescreen
