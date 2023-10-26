import React, { useRef } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


const AdminLogin = () => {
    const navigate =useNavigate();
    const adminName=useRef();
    const adminPassword=useRef();
    const handileAdmin=()=>{
        const newAdminName=adminName.current.value
        const newAdminPassword=adminPassword.current.value
        console.log(newAdminName)
        console.log(newAdminPassword);
        if(newAdminName==='admin'&&newAdminPassword==='admin123'){
            alert('admin login success')
            navigate('/adminpage')
        }
        else{
            alert('please enter valied username or password')
        }
    }
  return (
    <div>
        <div style={{ alignItems: "center" }} className="p-4  mt-4 ">
      <Container
        className="border p-4  mt-5 "
        style={{ width: "500px", alignItems: "center", borderRadius: "20px",background: 'rgb(230, 230, 219)' }}
      >
        <h1 style={{ textAlign: "center" }}>Admin Login </h1>
        <div >
          <Form
            className="border p-4 m-4 bg-white"
            style={{ borderRadius: "20px", textAlign:'center'}}
          >
            <input
              ref={adminName}
              type="text"
              placeholder="User Name.."
              style={{
                width: "300px",
                height: "40px",
                borderRadius: "10px",
                border: "1.2px solid",
              }}
            />
            <br />
            <br />
            <input
              ref={adminPassword}
              type="password"
              placeholder="Password"
              style={{
                width: "300px",
                height: "40px",
                borderRadius: "10px",
                border: "1.2px solid",
              }}
            />
            <br />
            <br />
            <div style={{textAlign:'center'}}>
              <div >
                <Button onClick={handileAdmin} variant="outline-dark" >
                  Login
                </Button>
              </div>
             
            </div>
          </Form>
        </div>
      </Container>
    </div>
    </div>
  )
}

export default AdminLogin
