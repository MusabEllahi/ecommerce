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
import { Sidebar } from 'flowbite-react'
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiOutlineMinusSm,
  HiOutlinePlusSm,
  HiShoppingBag,
  HiTable,
  HiUser,
} from 'react-icons/hi'
import './ecommerce-category-product.css'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'

const App = () => {
  const [openBasic, setOpenBasic] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [authUser, setAuthUser] = useState({
    name: '',
    password: '',
  })
  const [product, setProduct] = useState([])

  // for Users
  useEffect(() => {
    if (localStorage.getItem('AuthUser') != null) {
      let fetchUser = localStorage.getItem('AuthUser')
      let jsonData = JSON.parse(fetchUser)
      setAuthUser(jsonData)
    } else {
      localStorage.setItem('AuthUser', JSON.stringify(null))
    }
    setIsLoading(false)
  }, [])
  // for Product LIst
  useEffect(() => {
    if (localStorage.getItem('ProductsList') != null) {
      let fetchProduct = localStorage.getItem('ProductsList')
      let jsonData = JSON.parse(fetchProduct)
      setProduct(jsonData)
    } else {
      localStorage.setItem('ProductsList', JSON.stringify([]))
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
    <div className="container mt-4">
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

            <MDBCollapse navbar className="h-auto" open={openBasic}>
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
      <MDBContainer fluid className=" my-5 text-center">
        <h4 className="mt-4 mb-5">
          <strong>Best Seller's</strong>
        </h4>
        <div className="flex flex-row ">
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
                                <span className="badge bg-primary ms-2">
                                  Best
                                </span>
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
                          <h5 className="card-title mb-3">
                            {item.ProductName}
                          </h5>
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
        </div>
      </MDBContainer>
    </div>
  )
}

export default App
