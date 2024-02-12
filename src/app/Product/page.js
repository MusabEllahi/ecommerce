'use client'

import React from 'react'
import { useState, useEffect } from 'react'
import { Card } from 'flowbite-react'
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBBtn,
  MDBRipple,
} from 'mdb-react-ui-kit'

const About = () => {
  const [product, setProduct] = useState([])
  useEffect(() => {
    if (localStorage.getItem('ProductsList') != null) {
      let fetchProduct = localStorage.getItem('ProductsList')
      let jsonData = JSON.parse(fetchProduct)
      setProduct(jsonData)
    }
  }, [product])

  return (
    <div>
      <MDBContainer fluid className=" my-5 text-center">
        <h4 className="mt-4 mb-5">
          <strong>Fashions</strong>
        </h4>
        <MDBRow>
          {product && product.length > 0 ? (
            product.map((item, index) => {
              return (
                <MDBCol
                  hidden={item.categorie != 'Fashions'}
                  sm="6"
                  md="4"
                  lg="3"
                  className="mb-4 justify-center"
                >
                  <MDBCard key={index}>
                    <MDBRipple
                      rippleColor="light"
                      rippleTag="div"
                      className="bg-image d-flex justify-center rounded hover-zoom"
                    >
                      <MDBCardImage
                        src={item.imgUrl}
                        fluid
                        className=" max-h-[120px]"
                      />
                      <a href="#!">
                        <div className="mask">
                          <div className="d-flex justify-content-start align-items-end h-100">
                            <h5>
                              <span className="badge bg-primary ms-2">New</span>
                            </h5>
                          </div>
                        </div>
                        <div className="hover-overlay">
                          <div
                            className="mask"
                            style={{
                              backgroundColor: 'rgba(251, 251, 251, 0.15)',
                            }}
                          ></div>
                        </div>
                      </a>
                    </MDBRipple>
                    <MDBCardBody>
                      <a href="#!" className="text-reset">
                        <h5 className="card-title mb-3">{item.ProductName}</h5>
                      </a>
                      <a href="#!" className="text-reset">
                        <p>{item.categorie}</p>
                      </a>
                      <h6>{item.price}</h6>
                      <MDBBtn color="black" className="my-4" size="lg">
                        Add to Cart
                      </MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              )
            })
          ) : (
            <h1>No Product Found</h1>
          )}
        </MDBRow>
      </MDBContainer>

      <MDBContainer fluid className=" my-5 text-center">
        <h4 className="mt-4 mb-5">
          <strong>Laptops</strong>
        </h4>
        <MDBRow>
          {product && product.length > 0 ? (
            product.map((item, index) => {
              return (
                <MDBCol
                  hidden={item.categorie != 'Laptops'}
                  sm="6"
                  md="4"
                  lg="3"
                  className="mb-4 justify-center "
                >
                  <MDBCard key={index}>
                    <MDBRipple
                      rippleColor="light"
                      rippleTag="div"
                      className="bg-image d-flex justify-center rounded hover-zoom"
                    >
                      <MDBCardImage src={item.imgUrl} fluid className="" />
                      <a href="#!">
                        <div className="mask">
                          <div className="d-flex justify-content-start align-items-end h-100">
                            <h5>
                              <span className="badge bg-primary ms-2">New</span>
                            </h5>
                          </div>
                        </div>
                        <div className="hover-overlay">
                          <div
                            className="mask"
                            style={{
                              backgroundColor: 'rgba(251, 251, 251, 0.15)',
                            }}
                          ></div>
                        </div>
                      </a>
                    </MDBRipple>
                    <MDBCardBody>
                      <a href="#!" className="text-reset">
                        <h5 className="card-title mb-3">{item.ProductName}</h5>
                      </a>
                      <a href="#!" className="text-reset">
                        <p>{item.categorie}</p>
                      </a>
                      <h6>{item.price}</h6>
                      <MDBBtn color="black" className="my-4" size="lg">
                        Add to Cart
                      </MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              )
            })
          ) : (
            <h1>No Product Found</h1>
          )}
        </MDBRow>
      </MDBContainer>

      <MDBContainer fluid className=" my-5 text-center">
        <h4 className="mt-4 mb-5">
          <strong>Mobile Phones</strong>
        </h4>
        <MDBRow>
          {product && product.length > 0 ? (
            product.map((item, index) => {
              return (
                <MDBCol
                  hidden={item.categorie != 'Mobile Phones'}
                  sm="6"
                  md="4"
                  lg="3"
                  className="mb-4 justify-center w-[350px] "
                >
                  <MDBCard key={index}>
                    <MDBRipple
                      rippleColor="light"
                      rippleTag="div"
                      className="bg-image d-flex justify-center rounded hover-zoom"
                    >
                      <MDBCardImage
                        src={item.imgUrl}
                        fluid
                        className="max-h-[180px]"
                      />
                      <a href="#!">
                        <div className="mask">
                          <div className="d-flex justify-content-start align-items-end h-100">
                            <h5>
                              <span className="badge bg-primary ms-2">New</span>
                            </h5>
                          </div>
                        </div>
                        <div className="hover-overlay">
                          <div
                            className="mask"
                            style={{
                              backgroundColor: 'rgba(251, 251, 251, 0.15)',
                            }}
                          ></div>
                        </div>
                      </a>
                    </MDBRipple>
                    <MDBCardBody>
                      <a href="#!" className="text-reset">
                        <h5 className="card-title mb-3">{item.ProductName}</h5>
                      </a>
                      <a href="#!" className="text-reset">
                        <p>{item.categorie}</p>
                      </a>
                      <h6>{item.price}</h6>
                      <MDBBtn color="black" className="my-4" size="lg">
                        Add to Cart
                      </MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              )
            })
          ) : (
            <h1>No Product Found</h1>
          )}
        </MDBRow>
      </MDBContainer>
    </div>
  )
}

export default About
