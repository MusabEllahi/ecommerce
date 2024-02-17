'use client'
import React from 'react'
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit'
import { useState, useEffect } from 'react'
import useGetUsers from '../../hooks/useGetUsers'
import { useRouter } from 'next/navigation'

function App() {
  const [basicModal, setBasicModal] = useState(false)
  const { loggedUser, setLoggedUser } = useGetUsers()
  const [isChecked, setIsChecked] = useState(false)
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const [formStates, setFormStates] = useState({
    name: '',
    email: '',
    password: '',
    Rpassword: '',
  })

  const toggleOpen = () => setBasicModal(!basicModal)

  // For Radio Button:

  const checkValue = () => {
    setIsChecked(!isChecked)
  }

  // for Duplicate Users:

  const CheckDuplicateUser = () => {
    let isDuplicate = false

    for (let item of loggedUser) {
      if (item.email === formStates.email) {
        isDuplicate = true
        break
      }
    }

    return isDuplicate
  }

  // Registration Button:

  const registerForm = () => {
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    // When Name Is Empty
    if (!formStates.name) {
      setErrors({ ...errors, name: 'Please enter your name' })
      return
    }
    // When Email is Empty
    if (!formStates.email) {
      setErrors({ ...errors, email: 'Empty Email' })
      return
    }
    // When Emails is Invalid
    if (!formStates.email.match(validRegex)) {
      setErrors({ ...errors, email: 'Invalid Email Address' })
      return
    }
    // When Password is short
    if (formStates.password.length < 7) {
      setErrors({ ...errors, password: 'Password is short' })
      return
    }
    // When Password Does not Match
    if (formStates.password != formStates.Rpassword) {
      setErrors({ ...errors, confirmPassword: 'Password is short' })
      return
    }
    // When ChekcBox is not Ticked
    if (!isChecked) {
      return
    }
    if (CheckDuplicateUser()) {
      setErrors({ ...errors, email: 'Email is Already Used' })
      return
    }

    let fetchUser = [...loggedUser]
    fetchUser.push(formStates)
    setLoggedUser(fetchUser)
    localStorage.setItem('UsersList', JSON.stringify(fetchUser))
    toggleOpen()
  }
  useEffect(
    ()=>{
      setIsLoading(false)
    }
    ,[]
  )
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
      className="d-flex align-items-center justify-content-center bg-image"
      style={{
        backgroundImage:
          'url(https://www.clker.com/cliparts/4/6/a/b/14303682411286369994orange%20peach%20pink%20dark%20light%20combination%20plus%20radiant%20mixed%20gradient%20wallpaper%20blur%20background%20android.jpg)',
      }}
    >
      <div className="mask gradient-custom-3"></div>
      <MDBCard className="m-5" style={{ maxWidth: '600px' }}>
        <MDBCardBody className="px-5">
          <h2 className="text-uppercase text-black text-center mb-5">
            Create an account
          </h2>
          <MDBInput
            pattern=".+@beststartupever\.com"
            wrapperClass="mb-4"
            onChange={(e) => {
              setErrors({ ...errors, name: '' })
              setFormStates({ ...formStates, name: e.target.value })
            }}
            value={formStates.name}
            label="Your Name"
            size="lg"
            id="form1"
            type="text"
          />
          {errors.name && (
            <span className="relative bottom-3  text-red-500">
              Please enter your name
            </span>
          )}
          <MDBInput
            wrapperClass="mb-4"
            onChange={(e) => {
              setErrors({ ...errors, email: '' })
              setFormStates({ ...formStates, email: e.target.value })
            }}
            value={formStates.email}
            label="Your Email"
            size="lg"
            id="form2"
            type="email"
          />
          {errors.email && (
            <span className="relative bottom-3 text-red-500">
              {errors.email}
            </span>
          )}
          <MDBInput
            wrapperClass="mb-4"
            onChange={(e) => {
              setErrors({ ...errors, password: '' })
              setFormStates({ ...formStates, password: e.target.value })
            }}
            value={formStates.password}
            label="Password"
            size="lg"
            id="form3"
            type="password"
          />
          {errors.password && (
            <span className="relative bottom-3 text-red-500">
              Password length is too short
            </span>
          )}
          <MDBInput
            wrapperClass="mb-4"
            onChange={(e) => {
              setErrors({ ...errors, confirmPassword: '' })
              setFormStates({ ...formStates, Rpassword: e.target.value })
            }}
            value={formStates.Rpassword}
            label="Repeat your password"
            size="lg"
            id="form4"
            type="password"
          />
          {errors.confirmPassword && (
            <span className="relative bottom-3 text-red-500">
              Password Does not Match
            </span>
          )}
          <div className="d-flex flex-row justify-content-center mb-4">
            <MDBCheckbox
              name="flexCheck"
              onChange={checkValue}
              id="flexCheckDefault"
              label="I agree all statements in Terms of service"
            />
          </div>
          <MDBBtn
            onClick={registerForm}
            color="black"
            className="mb-4 w-100"
            size="lg"
          >
            Register
          </MDBBtn>
          <MDBModal open={basicModal} setOpen={setBasicModal} tabIndex="-1">
            <MDBModalDialog>
              <MDBModalContent>
                <MDBModalHeader>
                  <MDBModalTitle>Signed Up</MDBModalTitle>
                  <MDBBtn
                    className="btn-close"
                    color="none"
                    onClick={toggleOpen}
                  ></MDBBtn>
                </MDBModalHeader>
                <MDBModalBody>You have Registered Successfully</MDBModalBody>

                <MDBModalFooter>
                  <MDBBtn onClick={() => router.push('/Login')}>Log In</MDBBtn>
                </MDBModalFooter>
              </MDBModalContent>
            </MDBModalDialog>
          </MDBModal>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  )
}

export default App
