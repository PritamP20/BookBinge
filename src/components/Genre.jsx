import React from 'react';
import { useParams,Link } from 'react-router-dom';

const Genre = () => {
 
  const { genre } = useParams();

  
  const booksByGenre = {
    horror: [
      { id: 1, title: 'Horror Book 1', imageUrl: '	https://kitabay.com/cdn/shop/products/1d91d0abf8b3751d3f84ee7fed72be18.jpg?v=1710930734&width=100' ,price:'rs 300',author:'ram'},
      {
        id: 2, title: 'Horror Book 2', imageUrl: '		https://kitabay.com/cdn/shop/products/1d91d0abf8b3751d3f84ee7fed72be18.jpg?v=1710930734&width=100',price:'rs 300',author:'ram'
      },
      // Add more horror books as needed
    ],
    fantasy: [
      {
        id: 1, title: 'Fantasy Book 1', imageUrl: '	https://kitabay.com/cdn/shop/files/81BnDPcBVoL._SY…jpg?crop=center&height=424&v=1710914870&width=276',price:'rs 300',author:'ram'
       },
      { id: 2, title: 'Fantasy Book 2', imageUrl: '	https://kitabay.com/cdn/shop/files/81BnDPcBVoL._SY…jpg?crop=center&height=424&v=1710914870&width=276',price:'rs 300',author:'ram'
       },
 
    ],

    youngadults : [
      { id: 1, title: 'Wonder', imageUrl: 'https://kitabay.com/cdn/shop/products/ff1d6ea86dd7…jpg?crop=center&height=475&v=1710930937&width=295',price:'rs 300',author:'ram' },
      { id: 2, title: 'Life After You', imageUrl: '	https://kitabay.com/cdn/shop/products/ed39e052e495…jpg?crop=center&height=498&v=1710917039&width=333',price:'rs 300',author:'ram' },

    ],
    romance: [
      { id: 1, title: 'ro', imageUrl: 'https://kitabay.com/cdn/shop/products/ff1d6ea86dd7…jpg?crop=center&height=475&v=1710930937&width=295',price:'rs 300',author:'ram' },
      { id: 2, title: 'Life After You', imageUrl: '	https://kitabay.com/cdn/shop/products/ed39e052e495…jpg?crop=center&height=498&v=1710917039&width=333',price:'rs 300',author:'ram' },

    ],
    adventure: [
      { id: 1, title: 'Wonder', imageUrl: 'https://kitabay.com/cdn/shop/products/ff1d6ea86dd7…jpg?crop=center&height=475&v=1710930937&width=295',price:'rs 300',author:'ram' },
      { id: 2, title: 'Life After You', imageUrl: '	https://kitabay.com/cdn/shop/products/ed39e052e495…jpg?crop=center&height=498&v=1710917039&width=333',price:'rs 300',author:'ram' },

    ],
    philosophy: [
      { id: 1, title: 'Wonder', imageUrl: 'https://kitabay.com/cdn/shop/products/ff1d6ea86dd7…jpg?crop=center&height=475&v=1710930937&width=295',price:'rs 300',author:'ram' },
      { id: 2, title: 'Life After You', imageUrl: '	https://kitabay.com/cdn/shop/products/ed39e052e495…jpg?crop=center&height=498&v=1710917039&width=333',price:'rs 300',author:'ram' },

    ],
    mystery: [
      { id: 1, title: 'Wonder', imageUrl: 'https://kitabay.com/cdn/shop/products/a1e1c0efaf2ddc730ccc3b9552cb649c.jpg?v=1710923430&width=310',price:'rs 300',author:'ram' },
      { id: 2, title: 'Life After You', imageUrl: '	https://kitabay.com/cdn/shop/products/c5fc421bbfd5e68fe3811cfbb79ba3f6.jpg?v=1710926266&width=256',price:'rs 300',author:'ram' },

    ],
    sciencefiction: [
      { id: 1, title: 'Wonder', imageUrl: 'https://kitabay.com/cdn/shop/products/c5fc421bbfd5e68fe3811cfbb79ba3f6.jpg?v=1710926266&width=256',price:'rs 300',author:'ram' },
      { id: 2, title: 'Life After You', imageUrl: '	https://kitabay.com/cdn/shop/products/c5fc421bbfd5e68fe3811cfbb79ba3f6.jpg?v=1710926266&width=256' ,price:'rs 300',author:'ram'},

    ],
    classicnovel: [
      { id: 1, title: 'Wonder', imageUrl: '	https://kitabay.com/cdn/shop/products/ff1d6ea86dd70ca25b8915e38b8cc558.jpg?v=1710930937&width=295' ,price:'rs 300',author:'ram'},
      { id: 2, title: 'Life After You', imageUrl: '		https://kitabay.com/cdn/shop/products/ff1d6ea86dd70ca25b8915e38b8cc558.jpg?v=1710930937&width=295',price:'rs 300',author:'ram' },

    ]
    
  };

  
  const selectedBooks = booksByGenre[genre] || [];

//   return (
//     <div className='container' style={{ fontFamily: 'serif' }}>
//         <h1 className="text-center" style={{ fontSize: '120px', fontWeight: 'bold' }}>Books in {genre} Genre</h1>
//         <div className="row">
//             {selectedBooks.map(book => (
//                 <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={book.id}>
//                     <div className="card">
//                         <img src={book.imageUrl} className="card-img-top" alt={book.title} />
//                         <div className="card-body">
                            
//                             <p className="card-text">Author: {book.by}</p>
//                             <p className="card-text">Price: Rs. {book.disPrice}</p>
//                             <Link to={`/view/${book.id}`} className="btn btn-primary">View Details</Link>
//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     </div>
// );
// };

// export default Genre;
return (
  <div className='row min-vw-100 container' style={{ fontFamily: '' }}>
    <h1 className="text-center fs-10  text-decoration-underline" style={{ fontSize: '220px', fontWeight: 'bold', color:'green'}}>Books in {genre} Genre</h1>

    {selectedBooks.map(book => (
      <div className=' d-flex justify-content-center align-content-center align-items-center gap-0' style={{ backgroundColor: 'white',padding:'100px' }} key={book.id}>
        <div className='col-lg-8 col-md-10 col-12 d-flex justify-content-center align-content-center align-items-center p-0'>  
          <img className='col-lg-2 col-md-12 col-sm-5 col-7 p-0' src={book.imageUrl} alt={book.title} />
         
        </div>
        <div className=' col d-flex flex-column  align-items-left
        gap-lg-1 gap-md-3 gap-sm-1 gap-0  justify-content-center p-0' style={{padding:'0px', marginLeft: '0px'}}>
          <div>
            <span className='fs-1 fw-medium- text-decoration-underline'>{book.title}</span>
          </div>
          <div className='d-flex flex-column'>
            <span className='fs-1 fw-semibold'>Author:</span>
            <span className='fs-2'>{book.author}</span>
          </div>
          <div>
            <span className='fw-semibold fs-1'>Price:</span>
            <span className='fs-2'>Rs. {book.price}</span>
          </div>
          <div className='fs-5'>
            <span className='fw-semibold fs-1'>Price:  </span>
            <span className='fs-2'>Rs. {book.price}</span>
          </div>
          <Link to={`/view/${book.id}`} className='btn btn-info fs-5'>Info</Link>
        </div>
      </div>
    ))}
  </div>
);
};

export default Genre;