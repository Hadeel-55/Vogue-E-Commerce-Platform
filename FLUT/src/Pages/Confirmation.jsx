import Hero from '../component/Hero';
import OrderSummary from '../component/OrderSummary';
import {Container, Row, Col, ListGroup} from 'react-bootstrap';
const Confirmation =()=>{
    return(

        <div>
            <Hero 
            height={'400px'}
            title={'Order Confirmation'}
            subtitle={
                       <div className="d-flex justify-content-center gap-2">
            <a href="/" className="text-decoration-none pageCart">
              Home →
            </a>
            <a href="/Contact" className="text-decoration-none pageCart">
             Confirmation
            </a>
          </div>
            }
            />

<Container>
    <h5 className='fw-semibold text-center mt-5' style={{color:'#62ca1d'}}>Thank you. Your order has been received.</h5 >
 
<Row className='mt-5 justify-content-center '>
    
   <Col lg={3} md={11}  xs={11}  style={{cursor:'pointer', fontSize:'14px' , minWidth:'400px'}} className='mt-3'> 
     <h5 className='border-bottom pb-3'>Order Info</h5>
        <ListGroup className='flush '>

<ListGroup.Item className='border-0 px-0 d-flex justify-content-start'>

<span className='text-muted'style={{minWidth:'140px'}}>Order number</span>
<span className=''>: 60235</span>

  </ListGroup.Item>

<ListGroup.Item className='border-0 px-0 d-flex justify-content-start'>

<span className='text-muted'style={{minWidth:'140px'}}>Date</span>
<span className=''> : Los Angeles</span>

  </ListGroup.Item>

<ListGroup.Item className='border-0 px-0 d-flex justify-content-start'>

<span className='text-muted'style={{minWidth:'140px'}}>Total</span>
<span className=''> : USD 2210</span>

  </ListGroup.Item>

<ListGroup.Item className='border-0 px-0 d-flex justify-content-start'>

<span className='text-muted'style={{minWidth:'140px'}}>Payment method</span>
<span className=''>: Check payments</span>

  </ListGroup.Item>

  </ListGroup>
</Col>

   <Col lg={3} md={11}  xs={11} style={{cursor:'pointer', fontSize:'14px' , minWidth:'400px'}} className='mt-3'> 
     <h5 className='border-bottom pb-3'>Billing Address</h5>
        <ListGroup className='flush '>

<ListGroup.Item className='border-0 px-0 d-flex justify-content-start'>

<span className='text-muted' style={{minWidth:'140px'}}>Order number</span>
<span className=''>: 60235</span>

  </ListGroup.Item>

<ListGroup.Item className='border-0 px-0 d-flex justify-content-start'>

<span className='text-muted' style={{minWidth:'140px'}}>Date</span>
<span className=''> : Los Angeles</span>

  </ListGroup.Item>

<ListGroup.Item className='border-0 px-0 d-flex justify-content-start'>

<span className='text-muted' style={{minWidth:'140px'}}>Total</span>
<span className=''> : USD 2210</span>

  </ListGroup.Item>

<ListGroup.Item className='border-0 px-0 d-flex justify-content-start'>

<span className='text-muted'style={{minWidth:'140px'}}>Payment method</span>
<span className=''>: Check payments</span>

  </ListGroup.Item>

  </ListGroup>
</Col>


   <Col lg={3} md={11}  xs={11} style={{cursor:'pointer', fontSize:'14px' , minWidth:'400px'}} className='mt-3'> 
     <h5 className='border-bottom pb-3'>Shipping Address
</h5>
        <ListGroup className='flush '>

<ListGroup.Item className='border-0 px-0 d-flex justify-content-start' > 

<span className='text-muted' style={{minWidth:'140px'}}>Street</span>
<span className='' >: 56/8</span>

  </ListGroup.Item>

<ListGroup.Item className='border-0 px-0 d-flex justify-content-start'>

<span className='text-muted' style={{minWidth:'140px'}}>City</span>
<span className='' > : Los Angeles</span>

  </ListGroup.Item>

<ListGroup.Item className='border-0 px-0 d-flex justify-content-strat'>

<span className='text-muted'style={{minWidth:'140px'}} >Country</span>
<span className='' > : United States</span>

  </ListGroup.Item>

<ListGroup.Item className='border-0 px-0 d-flex justify-content-strat'>

<span className='text-muted'style={{minWidth:'140px'}} >Pastcode</span>
<span className=''>: 36952</span>

  </ListGroup.Item>

  </ListGroup>
</Col>

</Row>



<Row className='justify-content-center mt-5'>
    <Col lg={11}>
    <OrderSummary />
    </Col>
</Row>
</Container>

        </div>
    )

}
export default Confirmation;