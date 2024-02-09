'use client'
import React, { useState, useEffect } from 'react'
import {
  MDBIcon,
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBBtn,
} from 'mdb-react-ui-kit'
import getUsers from '@/hooks/getUsers'
import { useRouter } from 'next/navigation'

export default function App() {
  const { loggedUser } = getUsers()
  const [openNavSecond, setOpenNavSecond] = useState(false)
  const [authenticatedUser, setAuthenticatedUser] = useState(null)
  const router = useRouter()
  useEffect(() => {
    if (localStorage.getItem('AuthUser') != null) {
      let fetchUser = localStorage.getItem('AuthUser')
      let actualUser = JSON.parse(fetchUser)
      if (fetchUser) setAuthenticatedUser(actualUser)
    }
  }, [])

  return (
    <MDBNavbar expand="lg" light bgColor="black" className=" text-white">
      <MDBContainer className="text-white" fluid>
        <MDBNavbarBrand className="text-white">
          <MDBIcon fas icon="dragon fa-2x me-3" style={{ color: '#ff6219' }} />{' '}
          Shopee
        </MDBNavbarBrand>
        <MDBNavbarToggler
          className="bg-white"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setOpenNavSecond(!openNavSecond)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar open={openNavSecond}>
          <MDBNavbarNav>
            <MDBNavbarLink
              className="text-white"
              active
              aria-current="page"
              href="/"
            >
              Home
            </MDBNavbarLink>
            <MDBNavbarLink className="text-white" href="/Product">
              Product
            </MDBNavbarLink>
            {authenticatedUser ? (
              <MDBBtn
                onClick={() => {
                  localStorage.setItem('AuthUser', JSON.stringify(null))
                  location.reload()
                }}
                style={{ backgroundColor: '#ff6219' }}
              >
                Log Out
              </MDBBtn>
            ) : (
              <MDBNavbarLink className="text-white" href="/Login">
                Log In
              </MDBNavbarLink>
            )}
          </MDBNavbarNav>
          <div className="flex">
            <MDBNavbarBrand className="text-white">
              {authenticatedUser ? authenticatedUser.name : 'No user'}
            </MDBNavbarBrand>
            <MDBNavbarLink
              className="rounded-lg w-[90px]"
              hidden={authenticatedUser ? true : false}
              style={{ color: 'white', backgroundColor: '#ff6219' }}
              href="/SignUp"
            >
              <span className="flex p-2 gap-2">
                SignUp <MDBIcon fas className="pt-1" icon="user" />
              </span>
            </MDBNavbarLink>
          </div>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  )
}
