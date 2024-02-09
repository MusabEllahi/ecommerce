'use client'
import React, { useEffect } from 'react'
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCarouselCaption,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBBtn,
  MDBNavbarNav,
  MDBRipple,
  MDBNavbarBrand,
  MDBNavbar,
  MDBCollapse,
  MDBNavbarToggler,
  MDBNavbarItem,
} from 'mdb-react-ui-kit'
import './ecommerce-category-product.css'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'

const App = () => {
  const [openBasic, setOpenBasic] = useState(false)
  const [authUser, setAuthUser] = useState({
    name: '',
    password: '',
  })

  // for Users
  useEffect(() => {
    if (localStorage.getItem('AuthUser') != null) {
      let fetchUser = localStorage.getItem('AuthUser')
      let jsonData = JSON.parse(fetchUser)
      setAuthUser(jsonData)
    } else {
      localStorage.setItem('AuthUser', JSON.stringify(null))
    }
  }, [])
  // for Product LIst
  useEffect(() => {
    if (localStorage.getItem('ProductsList') != null) {
      let fetchProduct = localStorage.getItem('ProductsList')
    } else {
      localStorage.setItem('ProductsList', JSON.stringify([]))
    }
  }, [])

  return (
    <div
      hidden={authUser && authUser.name == 'Admin'}
      className="container mt-4"
    >
      <div className="grid grid-cols-12 gap-x-3 gap-y-2">
        <div className="col-span-12 mx-auto w-full md:col-span-3 bg-white rounded-lg text-m shadow-sm ">
          <MDBNavbar className="h-full " expand="md">
            <MDBNavbarToggler
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setOpenBasic(!openBasic)}
            >
              <MDBIcon icon="bars" fas />
            </MDBNavbarToggler>

            <MDBCollapse navbar className='h-auto' open={openBasic}>
              <ul className="flex flex-col ">
                <li className=" pt-3 lg:pb-1 xl:pb-2">
                  <MDBNavbarItem>
                    <Link className="text-gray-500" href="#">
                      Electronic items
                    </Link>
                  </MDBNavbarItem>
                </li>
                <li className=" lg:pt-1 lg:pb-1 xl:pb-2">
                  <MDBNavbarItem>
                    <Link className="text-gray-500" href="#">
                      Fashion
                    </Link>
                  </MDBNavbarItem>
                </li>
                <li className=" lg:pt-1 lg:pb-1 xl:pb-2">
                  <MDBNavbarItem>
                    <Link className="text-gray-500" href="#">
                      Mobile Phones
                    </Link>
                  </MDBNavbarItem>
                </li>
                <li className=" lg:pt-1 lg:pb-1 xl:pb-2">
                  <MDBNavbarItem>
                    <Link className="text-gray-500" href="/Product">
                      Fashion
                    </Link>
                  </MDBNavbarItem>
                </li>
                <li className=" lg:pt-1 lg:pb-1 xl:pb-2">
                  <MDBNavbarItem>
                    <Link className="text-gray-500" href="/Product">
                      Home Appliances
                    </Link>
                  </MDBNavbarItem>
                </li>
                <li className=" lg:pt-1 lg:pb-1 xl:pb-2 hover:text-red-500">
                  <MDBNavbarItem>
                    <Link className="text-gray-500" href="/Product">
                      TV & Home Appliances
                    </Link>
                  </MDBNavbarItem>
                </li>
                <li className=" lg:pt-1 lg:pb-1 xl:pb-2">
                  <MDBNavbarItem>
                    <Link className="text-gray-500" href="/Product">
                      Watches
                    </Link>
                  </MDBNavbarItem>
                </li>
                <li className=" lg:pt-1 px-1 ">
                  <MDBNavbarItem>
                    <Link className="text-gray-500" href="/Product">
                      Health & Beauty
                    </Link>
                  </MDBNavbarItem>
                </li>
              </ul>
            </MDBCollapse>
          </MDBNavbar>
        </div>
        <div className="col-span-12 md:col-span-9 bg-whiterounded-lg">
          <MDBCarousel showIndicators showControls fade>
            <MDBCarouselItem itemId={1}>
              <img
                src="https://icms-image.slatic.net/images/ims-web/968f8e6e-4857-4a2b-8714-1642bfbbf074.png"
                className="rounded-lg d-block w-100"
                alt="..."
              />
              <MDBCarouselCaption>
                <h5>First slide label</h5>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </MDBCarouselCaption>
            </MDBCarouselItem>

            <MDBCarouselItem itemId={2}>
              <img
                src="https://icms-image.slatic.net/images/ims-web/a05cc66f-a3d5-42a6-8943-88a7bb3ed1fc.jpg"
                className="rounded-lg d-block w-100"
                alt="..."
              />
              <MDBCarouselCaption>
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </MDBCarouselCaption>
            </MDBCarouselItem>

            <MDBCarouselItem itemId={3}>
              <img
                src="https://icms-image.slatic.net/images/ims-web/7ffbbc69-1479-47d2-872c-eba6a45adb41.png"
                className="rounded-lg d-block w-100"
                alt="..."
              />
              <MDBCarouselCaption>
                <h5>Third slide label</h5>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </MDBCarouselCaption>
            </MDBCarouselItem>
          </MDBCarousel>
        </div>
      </div>
      <MDBContainer fluid className="my-5">
        <MDBRow>
          <MDBCol sm="6" md="4" lg="3" className="mb-4 mb-lg-0">
            <MDBCard className='max-w-[350px] mx-auto'>
              <div className="d-flex justify-content-center p-3">
                <p className="lead mb-0 text-black">Today{"'"}s Combo Offer</p>
              </div>
              <MDBCardImage
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp"
                position="top"
                alt="Laptop"
              />
              <MDBCardBody>
                <div className="d-flex justify-content-between">
                  <p className="small">
                    <a href="#!" className="text-muted">
                      Laptops
                    </a>
                  </p>
                  <p className="small text-danger">
                    <s>$1099</s>
                  </p>
                </div>

                <div className="d-flex justify-content-between mb-3">
                  <h5 className="mb-0">HP Notebook</h5>
                  <h5 className="text-dark mb-0">$999</h5>
                </div>

                <div class="d-flex justify-content-between mb-2">
                  <MDBBtn color="black" className="mb-4 w-100" size="lg">
                    Buy Now
                  </MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol sm="6" md="4" lg="3" className="mb-4 mb-lg-0">
            <MDBCard className='max-w-[350px] ml-auto mr-auto'>
              <div className="d-flex justify-content-center text-black p-3">
                <p className="lead mb-0">Today{"'"}s Combo Offer</p>
              </div>
              <MDBCardImage
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/7.webp"
                position="top"
                alt="Laptop"
              />
              <MDBCardBody>
                <div className="d-flex justify-content-between">
                  <p className="small">
                    <a href="#!" className="text-muted">
                      Categories : Laptops
                    </a>
                  </p>
                  <p className="small text-danger">
                    <s>$1199</s>
                  </p>
                </div>

                <div className="d-flex justify-content-between mb-3">
                  <h5 className="mb-0">HP Envy</h5>
                  <h5 className="text-dark mb-0">$1099</h5>
                </div>

                <div class="d-flex justify-content-between mb-2">
                  <MDBBtn color="black" className="mb-4 w-100" size="lg">
                    Buy Now
                  </MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol sm="6" md="4" lg="3" className="mb-4 mb-lg-0">
            <MDBCard className='max-w-[350px] ml-auto mr-auto'>
              <div className="d-flex text-black justify-content-center p-3">
                <p className="lead mb-0">Today{"'"}s Combo Offer</p>
              </div>
              <MDBCardImage
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/5.webp"
                position="top"
                alt="Gaming Laptop"
              />
              <MDBCardBody>
                <div className="d-flex justify-content-between">
                  <p className="small">
                    <a href="#!" className="text-muted">
                      Laptops
                    </a>
                  </p>
                  <p className="small text-danger">
                    <s>$1399</s>
                  </p>
                </div>

                <div className="d-flex justify-content-between mb-3">
                  <h5 className="mb-0">Toshiba B77</h5>
                  <h5 className="text-dark mb-0">$1299</h5>
                </div>

                <div class="d-flex justify-content-between mb-2">
                  <MDBBtn color="black" className="mb-4 w-100" size="lg">
                    Buy Now
                  </MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol sm="6" md="4" lg="3" className="mb-4 mb-lg-0">
            <MDBCard className='max-w-[350px] ml-auto mr-auto'>
              <div className="d-flex text-black justify-content-center p-3">
                <p className="lead mb-0">Today{"'"}s Combo Offer</p>
              </div>
              <MDBCardImage
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/2.webp"
                position="top"
                alt="Gaming Laptop"
              />
              <MDBCardBody>
                <div className="d-flex justify-content-between">
                  <p className="small">
                    <a href="#!" className="text-muted">
                      Laptops
                    </a>
                  </p>
                  <p className="small text-danger">
                    <s>$1399</s>
                  </p>
                </div>

                <div className="d-flex justify-content-between mb-3">
                  <h5 className="mb-0">Toshiba B77</h5>
                  <h5 className="text-dark mb-0">$1299</h5>
                </div>

                <div class="d-flex justify-content-between mb-2">
                  <MDBBtn color="black" className="mb-4 w-100" size="lg">
                    Buy Now
                  </MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  )
}

export default App
