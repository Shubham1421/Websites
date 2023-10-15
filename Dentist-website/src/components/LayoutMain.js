

import React from 'react'
import Cards from './Cards'

export default function LayoutMain() {
  return (
    <>
    <div className="container bg-image shadow p-3 mb-5 bg-body-tertiary rounded my-2 text-end" style={{color:'#040d31',backgroundImage:"url('images/stethoscope.jpg')", backgroundRepeat:'no-repeat' , backgroundSize:'100% 165px', height:'auto'}}>
        <h3 style={{color:'#040d31'}}>Dr Prajakta Sawant </h3>(B.D.S.)
    </div>

    <div className="container mb-3">
    <div className="row px-3" style={{width:'100%'}}>
        <div className="col-md-6 " >
            <div className="container mx-2" style={{color:'#040d31'}}>
            <h3>Get your desired smile now</h3>
            <p>
                need makeover?<br />
                need alignment?<br />
                <br />
                <button type="button" className="btn btn-outline-dark"><strong> Grab your Appointment now</strong></button><br />
                <br />
            </p>
            </div>
            <div>
                <Cards/>
            </div>
        </div>

        <div className="col-md-6" >
            <img className="img-thumbnail rounded float-end" src="images/image_doc.jpg" alt="" style={{width:'60%'}}/>
        </div>
    </div>
    </div>

    </>

  )
}
