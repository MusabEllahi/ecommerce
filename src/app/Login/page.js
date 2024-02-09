'use client'
import React, { useState, useEffect } from 'react'
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit'
import getUsers from '@/hooks/getUsers'
// import { useRouter } from 'next/navigation';

function App() {
  // for Users

  const { loggedUser } = getUsers()
  const [formStates, setFormStates] = useState({
    email: '',
    password: '',
  })

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  })

  const [authUser, setAuthUser] = useState([])

  const doesUserExist = () => {
    var isFound = false
    const user = loggedUser.find((i) => i.email === formStates.email)
    console.log(user)
    if (user) isFound = true
    return isFound
  }

  const doesUserExist2 = () => {
    const user = loggedUser.find((i) => i.email === formStates.email)
    console.log(user)
    if (user) return user
  }
  
  const checkUserPassword = () => {
    var passwordFound = false
    const user = loggedUser.find((i) => i.email === formStates.email)
    if (user.password == formStates.password) passwordFound = true
    return passwordFound
  }

  const [basicModal, setBasicModal] = useState(false)
  // const router = useRouter()
  const toggleOpen = () => setBasicModal(!basicModal)

  const Login = () => {
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    // When Email is Empty
    if (!formStates.email) {
      setErrors({ ...errors, email: 'Empty Email' })
      return
    }
    if (!doesUserExist()) {
      setErrors({ ...errors, email: 'Email Address does not exist' })
      return
    }
    // When Password is short
    if (formStates.password.length < 7) {
      setErrors({ ...errors, password: 'Password length must be 8' })
      return
    }
    // When Password does not match
    if (!checkUserPassword()) {
      setErrors({ ...errors, password: 'Password is Wrong' })
      return
    } else {
      let checkUser = doesUserExist2()
      localStorage.setItem('AuthUser', JSON.stringify(checkUser))
      toggleOpen()
    }
  }

  useEffect(() => {
    if (localStorage.getItem('AuthUser') != null) {
      let fetchUser = localStorage.getItem('AuthUser')
    } else {
      localStorage.setItem('AuthUser', JSON.stringify([]))
    }
  }, [])

  return (
    <MDBContainer className="my-5">
      <MDBCard>
        <MDBRow className="g-0">
          <MDBCol md="6">
            <MDBCardImage
              src="https://seeklogo.com/images/S/shopee-logo-33D0F724BA-seeklogo.com.png"
              alt="login form"
              className="rounded-start w-100"
            />
          </MDBCol>

          <MDBCol md="6">
            <MDBCardBody className="d-flex flex-column">
              <div className="d-flex flex-row mt-2">
                <MDBIcon
                  fas
                  icon="dragon fa-3x me-3"
                  style={{ color: '#ff6219' }}
                />
                <span className="h1 fw-bold mb-0" style={{ color: 'black' }}>
                  Shopee
                </span>
              </div>

              <h5
                className="fw-normal my-4 pb-3"
                style={{ letterSpacing: '1px' }}
              >
                Sign into your account
              </h5>

              <MDBInput
                wrapperClass="mb-4"
                label="Email address"
                onChange={(e) => {
                  setErrors({ ...errors, email: '' })
                  setFormStates({ ...formStates, email: e.target.value })
                }}
                value={formStates.name}
                id="formControlLg"
                type="email"
                size="lg"
              />
              {errors.email && (
                <span className="relative bottom-3  text-red-500">
                  {errors.email}
                </span>
              )}
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                onChange={(e) => {
                  setErrors({ ...errors, password: '' })
                  setFormStates({ ...formStates, password: e.target.value })
                }}
                id="formControlLg"
                type="password"
                size="lg"
              />
              {errors.password && (
                <span className="relative bottom-3  text-red-500">
                  {errors.password}
                </span>
              )}

              <MDBBtn
                onClick={Login}
                className="mb-4 px-5"
                color="black"
                size="lg"
              >
                Login
              </MDBBtn>
              <a className="small text-muted" href="#!">
                Forgot password?
              </a>
              <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>
                Don't have an account?{' '}
                <a href="/SignUp" style={{ color: '#393f81' }}>
                  Register here
                </a>
              </p>

              <div className="d-flex flex-row justify-content-start">
                <a href="#!" className="small text-muted me-1">
                  Terms of use.
                </a>
                <a href="#!" className="small text-muted">
                  Privacy policy
                </a>
              </div>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
      <MDBModal open={basicModal} setOpen={setBasicModal} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Logged In</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleOpen}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>You have Logged In Successfully</MDBModalBody>

            <MDBModalFooter>
              <MDBBtn
                onClick={() => {
                  window.location.href = '/'
                }}
              >
                Home
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </MDBContainer>
  )
}

export default App
