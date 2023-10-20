import React, { useContext } from 'react'
import { UserLogin } from '../App'
import { Button, Card, CardBody, CardImg, CardTitle, Container } from 'react-bootstrap';
import Navigationbar from './Navigationbar';

const Cart = () => {
  const {cart,setCart}=useContext(UserLogin);
  const incre = (Id) => {
    const newQty = cart.map((item) =>
      item.Id === Id ? { ...item, Qty: item.Qty + 1 } : item
    );
    setCart(newQty);
  };
  const decre=(id)=>{
    const newQty=cart.map((item)=>
     item.Id===id&&item.Qty>1?{ ...item, Qty: item.Qty - 1 } : item
    );
    setCart(newQty)
  };

  const remove=(id)=>{
   const Filterdata=cart.filter((item)=>item.Id !==id)
   setCart(Filterdata)
  }
  return (
    <>
    <Navigationbar />
      <Container>
        <h2 style={{textAlign:'center',padding:'10px'}}> My Cart</h2><hr />
    <div className="d-flex align-items-center justify-content-center flex-wrap">


       {
         cart.map((item)=>(
           <div key={item.Id} className="d-flex align-items-center justify-content-center flex-wrap">

          <Card className="shadow p-1 m-2 bg-body-tertiary rounded" style={{ width: '18rem', height: '30rem', alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <CardBody>
              <CardImg style={{ height: '15rem' }} className='p-2' variant="top" src={item.Image} /><br />
              <CardTitle style={{textAlign:'center'}}>{item.ProductName}</CardTitle>
              <h6 style={{textAlign:'center'}}>Price:{item.Price}</h6>
              <p style={{textAlign:'center'}}>Qty : {item.Qty}</p>
              <div style={{textAlign:'center'}} >
              <Button onClick={()=>incre(item.Id)} >+</Button>
              <Button onClick={()=>decre(item.Id)} className='m-1'>-</Button>
              </div>
            </CardBody>
            <div  >
              <Button  variant="outline-dark">Buy Product</Button>
              <Button  className='m-2'  variant="outline-dark" onClick={()=>remove(item.Id)}>Remove</Button>
            </div>
          </Card>
          </div>
        ))
      }
      </div>
      </Container>
    </>
  )
}

export default Cart

