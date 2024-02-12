'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBTextArea,
  MDBFile,
  MDBBtnGroup,
  MDBRadio,
} from 'mdb-react-ui-kit'

function App() {
  const [formStates, setFormStates] = useState({
    ProductName: '',
    imgUrl: '',
    Description: '',
    price: '',
    categorie: '',
  })

  const [errors, setErrors] = useState({
    ProductName: '',
    imgUrl: '',
    Description: '',
    price: '',
    categorie:''
  })
  const [product,setProduct] = useState([])
  function clearStates(){
    setFormStates({
      ProductName: '',
      imgUrl: '',
      Description: '',
      price: '',
    })

  }

  const addProuduct = () => {
    // When Product Name is Empty
    if (!formStates.ProductName) {
      setErrors({ ...errors, ProductName: 'Empty Product Name' })
      return
    }
    // When Product Name is Empty
    if (!formStates.imgUrl) {
      setErrors({ ...errors, imgUrl: 'Empty Url' })
      return
    }
    // When Product Name is Empty
    if (!formStates.Description) {
      setErrors({ ...errors, Description: 'Empty Description' })
      return
    }
    // When Product Name is Empty
    if (!formStates.price) {
      setErrors({ ...errors, price: 'Wrong Price' })
      return
    }
    // When Product Name is Empty
    if (!formStates.categorie) {
      setErrors({ ...errors, categorie: 'select categorie' })
      return
    }
    let fetchUser = [...product]
    fetchUser.push(formStates)
    setProduct(fetchUser)
    localStorage.setItem('ProductsList', JSON.stringify(fetchUser))
    location.reload()
  }
  useEffect(() => {
    if (localStorage.getItem("ProductsList") != null) {
        let fetchProduct = localStorage.getItem("ProductsList");
        let jsonData = JSON.parse(fetchProduct);
        setProduct(jsonData)
    }

}, [])

  return (
    <MDBContainer
      style={{
        backgroundImage:
          'url(https://www.publicdomainpictures.net/pictures/270000/velka/bright-orange-background.jpg)',
      }}
      fluid
    >
      <MDBRow className="d-flex justify-content-center align-items-center">
        <MDBCol lg="9" className=" my-5">
          <h1 class="text-black mb-4">Add Product Details</h1>

          <MDBCard>
            <MDBCardBody className="px-4">
              <MDBRow className=" align-items-center pt-4 pb-3">
                <MDBCol md="3" className="ps-5">
                  <h6 className="text-black mb-0">Product name</h6>
                </MDBCol>

                <MDBCol md="9" className="pe-5">
                  <MDBInput
                    label="Name"
                    size="lg"
                    id="form1"
                    type="text"
                    onChange={(e) => {
                      setErrors({ ...errors, ProductName: '' })
                      setFormStates({
                        ...formStates,
                        ProductName: e.target.value,
                      })
                    }}
                  />
                  {errors.ProductName && (
                    <span className="relative bottom-3  text-red-500">
                      {errors.ProductName}
                    </span>
                  )}
                </MDBCol>
              </MDBRow>

              <hr className="mx-n3" />

              <MDBRow className="align-items-center pt-4 pb-3">
                <MDBCol md="3" className="ps-5">
                  <h6 className="mb-0">Image URL</h6>
                </MDBCol>

                <MDBCol md="9" className="pe-5">
                  <MDBInput
                    label="URL"
                    size="lg"
                    id="form2"
                    type="email"
                    onChange={(e) => {
                      setErrors({ ...errors, imgUrl: '' })
                      setFormStates({
                        ...formStates,
                        imgUrl: e.target.value,
                      })
                    }}
                  />
                  {errors.imgUrl && (
                    <span className="relative bottom-3  text-red-500">
                      {errors.imgUrl}
                    </span>
                  )}
                </MDBCol>
              </MDBRow>

              <hr className="mx-n3" />

              <MDBRow className="align-items-center pt-4 pb-3">
                <MDBCol md="3" className="ps-5">
                  <h6 className="mb-0">Product Description</h6>
                </MDBCol>

                <MDBCol md="9" className="pe-5">
                  <MDBTextArea
                    onChange={(e) => {
                      setErrors({ ...errors, Description: '' })
                      setFormStates({
                        ...formStates,
                        Description: e.target.value,
                      })
                    }}
                    label="Description"
                    id="textAreaExample"
                    rows={3}
                  />
                  {errors.Description && (
                    <span className="relative bottom-3  text-red-500">
                      {errors.Description}
                    </span>
                  )}
                </MDBCol>
              </MDBRow>

              <hr className="mx-n3" />

              <MDBRow className=" align-items-center pt-4 pb-3">
                <MDBCol md="3" className="ps-5">
                  <h6 className="text-black mb-0">Product Price</h6>
                </MDBCol>

                <MDBCol md="9" className="pe-5">
                  <MDBInput
                    onChange={(e) => {
                      setErrors({ ...errors, price: '' })
                      setFormStates({
                        ...formStates,
                        price: e.target.value,
                      })
                    }}
                    label="Price"
                    size="lg"
                    id="form1"
                    type="text"
                  />
                  {errors.price && (
                    <span className="relative bottom-3  text-red-500">
                      {errors.price}
                    </span>
                  )}
                </MDBCol>
              </MDBRow>
              <MDBRow className=" align-items-center pt-4 pb-3">
                <MDBCol md="3" className="ps-5">
                  <h6 className="text-black mb-0">Categories</h6>
                </MDBCol>

                <MDBCol md="9" className="pe-5">
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="Mobile Phones"
                      onChange={(e) => {
                        setFormStates({
                          ...formStates,
                          categorie: e.target.value,
                        })
                      }}
                    />
                    <label class="form-check-label" for="inlineRadio1">
                      Mobile Phones
                    </label>
                  </div>

                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      value="Laptops"
                      onChange={(e) => {
                        setFormStates({
                          ...formStates,
                          categorie: e.target.value,
                        })
                      }}
                    />
                    <label class="form-check-label" for="inlineRadio2">
                      Laptops
                    </label>
                  </div>

                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio3"
                      value="Fashions"
                      onChange={(e) => {
                        setFormStates({
                          ...formStates,
                          categorie: e.target.value,
                        })
                      }}
                    />
                    <label class="form-check-label" for="inlineRadio3">
                      Fashions
                    </label>
                  </div>
                </MDBCol>
                  {errors.categorie && (
                    <span className="relative bottom-3 left-3  text-red-500">
                      {errors.categorie}
                    </span>
                  )}
              </MDBRow>

              <hr className="mx-n3" />

              <MDBBtn
                onClick={addProuduct}
                color="black"
                className="my-4"
                size="lg"
              >
                Add Product
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default App
