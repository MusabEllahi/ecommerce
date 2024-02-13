"use client"
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
  } from "mdb-react-ui-kit";
  import React, { useEffect,useState } from "react";
  
  export default function QuantityEdit() {
    const [isLoading, setIsLoading] = useState(true)
    const [order,setOrder] = useState([])
    const [totalVal,setTotalVal] = useState(0)
    const [inputVal,setInputVal] = useState(1)



    const total = () => {
      let fetchOrder = [...order]
      let calculateValue = 0;
      for (let i = 0;i < fetchOrder.length; i++){
       let string = fetchOrder[i].price.slice(0,-1);
        calculateValue = calculateValue +Number(string)
        
      }       
   
      setTotalVal(calculateValue)
      console.log(totalVal)
      }
    




    const deleteItem = (productIndex) => {
      let fetchCurrentOrderData = [...order]
      fetchCurrentOrderData.splice(productIndex,1)
      setOrder(fetchCurrentOrderData)
      localStorage.setItem('YourOrder', JSON.stringify(fetchCurrentOrderData))
    }
    const addValue = ()=>{
      var newValue = inputVal;

        setInputVal(++newValue)
        console.log(inputVal)
    }




    useEffect(() => {
      total()
      if (localStorage.getItem('YourOrder') != null) {
        let fetchOrder = localStorage.getItem('YourOrder')
        let jsonData = JSON.parse(fetchOrder)
        setOrder(jsonData)
      }
    else {
        localStorage.setItem('YourOrder',JSON.stringify([]))

      }
      setIsLoading(false)

    },[])
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
  <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
    <MDBContainer className="py-5 h-100">
      <MDBRow className="justify-content-center align-items-center h-100">
        <MDBCol size="12">
          <MDBCard className="card-registration card-registration-2" style={{ borderRadius: "15px" }}>
            <MDBCardBody className="p-0">
              <MDBRow className="g-0">
                <MDBCol lg="8">
                  <div className="p-5">
                    <div className="d-flex justify-content-between align-items-center mb-5">
                      <MDBTypography tag="h1" className="fw-bold mb-0 text-black">
                        Shopping Cart
                      </MDBTypography>
                      <MDBTypography className="mb-0 text-muted">
                        {order.length} items
                      </MDBTypography>
                    </div>
  
                    <hr className="my-4" />
  
                    {order && order.length > 0 ? (
            order.map((item, index) => {
              return (
                    <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
                      <MDBCol md="2" lg="2" xl="2">
                        <MDBCardImage
                          src={item.imgUrl}
                          fluid className="rounded-3" alt="Cotton T-shirt" />
                      </MDBCol>
                      <MDBCol md="3" lg="3" xl="3">
                        <MDBTypography tag="h6" className="text-muted">
                          {item.categorie}
                        </MDBTypography>
                        <MDBTypography tag="h6" className="text-black mb-0">
                          {item.ProductName}
                        </MDBTypography>
                      </MDBCol>
                      <MDBCol  md="3" lg="3" xl="3" className="d-flex align-items-center">
                        <MDBBtn color="link" className="px-2">
                          <MDBIcon fas icon="minus" />
                        </MDBBtn>
  
                        <MDBInput type="number" min="0" defaultValue={inputVal} size="sm" />
  
                        <MDBBtn color="link" className="px-2">
                          <MDBIcon onClick={addValue} fas icon="plus" />
                        </MDBBtn>
                      </MDBCol>
                      <MDBCol md="3" lg="2" xl="2" className="text-end">
                        <MDBTypography tag="h6" className="mb-0">
                          {item.price}
                        </MDBTypography>
                      </MDBCol>
                      <MDBCol md="1" lg="1" xl="1" className="text-end">
                        <button onClick={()=> deleteItem(index)} href="#!" className="text-muted">
                          <MDBIcon fas icon="times" />
                        </button>
                      </MDBCol>

                    </MDBRow>
               )   })
                                ) : (
                                  <h1>No Product Found</h1>
                                )}
  
                    <hr className="my-4" />
  
  
                  </div>
                </MDBCol>
                <MDBCol lg="4" className="bg-grey">
                  <div className="p-5">
                    <MDBTypography tag="h3" className="fw-bold text-black mb-5 mt-2 pt-1">
                      Summary
                    </MDBTypography>
  
                    <hr className="my-4" />
  
                    <div className="d-flex justify-content-between mb-4">
                      <MDBTypography tag="h5" className="text-uppercase">
                        Total
                      </MDBTypography>
                      <MDBTypography tag="h5">€ 132.00</MDBTypography>
                    </div>
  
                    <MDBTypography tag="h5" className="text-uppercase mb-3">
                      Shipping
                    </MDBTypography>
  
                    <div className="mb-4 pb-2">
                      <select className="select p-2 rounded bg-grey" style={{ width: "100%" }}>
                        <option value="1">Standard-Delivery- $5.00</option>
                        <option value="2">Premium-Delivery- $7.00</option>
                        <option value="3">Premium-Delivery-Extra-care $8.00</option>
                        <option value="4">VIP-Delivery $10.00</option>
                      </select>
                    </div>
  
                    <MDBTypography tag="h5" className="text-uppercase mb-3">
                      Give code
                    </MDBTypography>
  
                    <div className="mb-5">
                      <MDBInput size="lg" label="Enter your code" />
                    </div>
  
                    <hr className="my-4" />
  
                    <div className="d-flex justify-content-between mb-5">
                      <MDBTypography tag="h5" className="text-uppercase">
                        Total price
                      </MDBTypography>
                      <MDBTypography tag="h5">€ {totalVal}</MDBTypography>
                    </div>
  
                    <MDBBtn color="black" block size="lg">
                      CheckOut
                    </MDBBtn>
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  </section>
  );
  }