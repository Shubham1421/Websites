import React from 'react'

export default function Cards() {
  return (
    <div className="d-none d-lg-block">
    <div className="container my-5 text-center">
        <div className="row">
            {/* Your Content Here */}

            <div className="col-md-4 ">
            <div className="card" style={{width: "10rem"}}>
            <img src="" className="card-img-top" alt="..."/>
            <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            </div>
            </div>

            <div className="col-md-4">
            <div className="card" style={{width: "10rem"}}>
            <img src="" className="card-img-top" alt="..."/>
            <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            </div>
            </div>

            <div className="col-md-4">
            <div className="card" style={{width: "10rem"}}>
            <img src="" className="card-img-top" alt="..."/>
            <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            </div>
            </div>

            {/* Content Block End */}
        </div>
    </div>
    </div>
  )
}
