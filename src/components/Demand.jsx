import React from 'react'

const Demand = () => {
  const booksIMG = ["https://m.media-amazon.com/images/I/61U9jnPOXML.jpg","https://m.media-amazon.com/images/I/91RpwagB7uL._AC_UF1000,1000_QL80_FMwebp_.jpg","https://kitabay.com/cdn/shop/products/db28f2558c458f85f56b2886e1908ffd_3a5a354f-b335-44c3-9ddb-f65a1d75eab2.jpg?crop=center&height=400&v=1710917345&width=250","https://m.media-amazon.com/images/I/91pSWFA5WQL._AC_UF1000,1000_QL80_FMwebp_.jpg","https://m.media-amazon.com/images/I/91n1R2TdyUL._AC_UF1000,1000_QL80_FMwebp_.jpg","https://m.media-amazon.com/images/I/61ijmpuQlRL._AC_UF1000,1000_QL80_FMwebp_.jpg","https://m.media-amazon.com/images/I/61Ktyy7KymL._AC_UF1000,1000_QL80_FMwebp_.jpg","https://m.media-amazon.com/images/I/81BE7eeKzAL._AC_UF1000,1000_QL80_FMwebp_.jpg"]

  return (
    <div className='mt-5' style={{fontFamily:'serif'}}>
        <h1 className='d-flex justify-content-center'>
            Books Available
        </h1>
        <div className='d-flex overflow-x-scroll' style={{scrollbarWidth:'none'}}>
        {booksIMG.map(books=>
            <div className='p-3  col-lg-2 col-sm-4 col-md-4 col-6'>
            <div className='d-flex flex-column  position-relative gap-1' style={{fontSize: '80%'}}>
                {/* <span className='' style={{zIndex:'-1'}}> <img style={{zIndex:'-1'}} className='' src="https://cdn.shopify.com/s/files/1/0302/6927/6291/files/03-_1.png?v=1702465051" alt="" /> fhd <span className='' style={{position:'relative', zIndex:'1'}}>Gently Used</span></span> */}
                <span className='' > <div className='text-white' style={{ backgroundImage:'url(https://cdn.shopify.com/s/files/1/0302/6927/6291/files/03-_1.png?v=1702465051)',width:'78px'}}> <span className='p-2 fw-semibold'>hello</span> </div> </span> 
                <span className='' > <div className='text-white' style={{ backgroundImage:'url(https://cdn.shopify.com/s/files/1/0302/6927/6291/files/03-_1.png?v=1702465051)',width:'78px'}}> <span className='p-2 fw-semibold'>52%</span> </div> </span> 
            </div>
            <div className='d-flex justify-content-center'>
            <img className='col-11 p-2' src={books}/>

            </div>
            <div className='d-flex p-2 flex-column'>
                <span>14th Deadly Sin (Women...</span>
                <span>by James Patterson</span>
                <div><span className='text-decoration-line-through'>Rs. 499</span><span> Rs. 250</span></div>
            </div>
        </div>
        )}
        </div>
    </div>
  )
}

export default Demand
