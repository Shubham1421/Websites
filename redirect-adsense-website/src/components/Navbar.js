import React from 'react'

import '../Styles/Navbar.css'

export default function Navbar() {
  return (
    <div>
       {/* <!-- banner bg main start --> */}
      <div class="banner_bg_main">
         {/* <!-- header top section start --> */}
         <div class="container">
            <div class="header_section_top">
               <div class="row">
                  <div class="col-sm-12">
                     <div class="custom_menu">
                        <ul class="row">
                            <li class="col-md-1"></li>
                           <li class="col-md-2"><a href="/">Best Sellers</a></li>
                           <li class="col-md-2"><a href="/">Gift Ideas</a></li>
                           <li class="col-md-2"><a href="/">New Releases</a></li>
                           <li class="col-md-2"><a href="/">Today's Deals</a></li>
                           <li class="col-md-2"><a href="/">Customer Service</a></li>
                           <li class="col-md-1"></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
    </div>
    </div>
  )
}
