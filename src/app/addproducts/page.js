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
  const [isLoading, setIsLoading] = useState(true)
  const Swal = require('sweetalert2')
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
    categorie: '',
  })
  const [product, setProduct] = useState([])
  function clearStates() {
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
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer
          toast.onmouseleave = Swal.resumeTimer
        },
      })
      Toast.fire({
        icon: 'warning',
        title: 'Empty Name Field',
        iconColor: 'red'
      })
      return
    }
    // When Product Name is Empty
    if (!formStates.imgUrl) {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer
          toast.onmouseleave = Swal.resumeTimer
        },
      })
      Toast.fire({
        icon: 'warning',
        title: 'Empty URL',
        iconColor: 'red'
      })
      return
    }
    // When Product Description is Empty
    if (!formStates.Description) {
            const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer
          toast.onmouseleave = Swal.resumeTimer
        },
      })
      Toast.fire({
        icon: 'warning',
        title: 'Product Description is Empty',
        iconColor: 'red'
      })
      return
    }
    // When Product Price is Empty
    if (!formStates.price) {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer
          toast.onmouseleave = Swal.resumeTimer
        },
      })
      Toast.fire({
        icon: 'warning',
        title: 'Product Price is not defined',
        iconColor: 'red'
      })
      return
    }
    // When Category is not selected
    if (!formStates.categorie) {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer
          toast.onmouseleave = Swal.resumeTimer
        },
      })
      Toast.fire({
        icon: 'warning',
        title: 'Category is not selected',
        iconColor: 'red'
      })
      return
    }
    let fetchUser = [...product]
    fetchUser.push(formStates)
    setProduct(fetchUser)
    localStorage.setItem('ProductsList', JSON.stringify(fetchUser))
    location.reload()
  }
  useEffect(() => {
    if (localStorage.getItem('ProductsList') != null) {
      let fetchProduct = localStorage.getItem('ProductsList')
      let jsonData = JSON.parse(fetchProduct)
      setProduct(jsonData)
      setIsLoading(false)
    }
  }, [])
  if (isLoading) {
    return (
      <div className="bg-white h-screen w-screen flex justify-center items-center top-0 absolute z-[100]">
        <svg
          className="animate-spin  h-5 w-5 text-blue-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      </div>
    )
  }

  return (
    <MDBContainer
      fluid
      className="d-flex align-items-center justify-content-center bg-image "
      style={{
        backgroundImage:
          'url(https://www.clker.com/cliparts/4/6/a/b/14303682411286369994orange%20peach%20pink%20dark%20light%20combination%20plus%20radiant%20mixed%20gradient%20wallpaper%20blur%20background%20android.jpg)',
      }}
    >
      <MDBRow className="d-flex w-100 justify-content-center align-items-center gradient-custom-3">
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
