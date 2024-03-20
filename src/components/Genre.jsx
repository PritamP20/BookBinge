import React from 'react';
import { useParams,Link } from 'react-router-dom';

const Genre = () => {
 
  const { genre } = useParams();

  
  const booksByGenre = {
    horror: [
      { id: 1, title: 'Horror Book 1', imageUrl: '	https://kitabay.com/cdn/shop/products/1d91d0abf8b3751d3f84ee7fed72be18.jpg?v=1710930734&width=100' },
      {
        id: 2, title: 'Horror Book 2', imageUrl: '		https://kitabay.com/cdn/shop/products/1d91d0abf8b3751d3f84ee7fed72be18.jpg?v=1710930734&width=100'
      },
      // Add more horror books as needed
    ],
    fantasy: [
      {
        id: 1, title: 'Fantasy Book 1', imageUrl: '	https://kitabay.com/cdn/shop/files/81BnDPcBVoL._SY…jpg?crop=center&height=424&v=1710914870&width=276'
       },
      { id: 2, title: 'Fantasy Book 2', imageUrl: '	https://kitabay.com/cdn/shop/files/81BnDPcBVoL._SY…jpg?crop=center&height=424&v=1710914870&width=276'
       },
 
    ],

    youngadults : [
      { id: 1, title: 'Wonder', imageUrl: 'https://kitabay.com/cdn/shop/products/ff1d6ea86dd7…jpg?crop=center&height=475&v=1710930937&width=295' },
      { id: 2, title: 'Life After You', imageUrl: '	https://kitabay.com/cdn/shop/products/ed39e052e495…jpg?crop=center&height=498&v=1710917039&width=333' },

    ],
    romance: [
      { id: 1, title: 'ro', imageUrl: 'https://kitabay.com/cdn/shop/products/ff1d6ea86dd7…jpg?crop=center&height=475&v=1710930937&width=295' },
      { id: 2, title: 'Life After You', imageUrl: '	https://kitabay.com/cdn/shop/products/ed39e052e495…jpg?crop=center&height=498&v=1710917039&width=333' },

    ],
    adventure: [
      { id: 1, title: 'Wonder', imageUrl: 'https://kitabay.com/cdn/shop/products/ff1d6ea86dd7…jpg?crop=center&height=475&v=1710930937&width=295' },
      { id: 2, title: 'Life After You', imageUrl: '	https://kitabay.com/cdn/shop/products/ed39e052e495…jpg?crop=center&height=498&v=1710917039&width=333' },

    ],
    philosophy: [
      { id: 1, title: 'Wonder', imageUrl: 'https://kitabay.com/cdn/shop/products/ff1d6ea86dd7…jpg?crop=center&height=475&v=1710930937&width=295' },
      { id: 2, title: 'Life After You', imageUrl: '	https://kitabay.com/cdn/shop/products/ed39e052e495…jpg?crop=center&height=498&v=1710917039&width=333' },

    ],
    mystery: [
      { id: 1, title: 'Wonder', imageUrl: 'https://kitabay.com/cdn/shop/products/a1e1c0efaf2ddc730ccc3b9552cb649c.jpg?v=1710923430&width=310' },
      { id: 2, title: 'Life After You', imageUrl: '	https://kitabay.com/cdn/shop/products/c5fc421bbfd5e68fe3811cfbb79ba3f6.jpg?v=1710926266&width=256' },

    ],
    sciencefiction: [
      { id: 1, title: 'Wonder', imageUrl: 'https://kitabay.com/cdn/shop/products/c5fc421bbfd5e68fe3811cfbb79ba3f6.jpg?v=1710926266&width=256' },
      { id: 2, title: 'Life After You', imageUrl: '	https://kitabay.com/cdn/shop/products/c5fc421bbfd5e68fe3811cfbb79ba3f6.jpg?v=1710926266&width=256' },

    ],
    classicnovel: [
      { id: 1, title: 'Wonder', imageUrl: '	https://kitabay.com/cdn/shop/products/ff1d6ea86dd70ca25b8915e38b8cc558.jpg?v=1710930937&width=295' },
      { id: 2, title: 'Life After You', imageUrl: '		https://kitabay.com/cdn/shop/products/ff1d6ea86dd70ca25b8915e38b8cc558.jpg?v=1710930937&width=295' },

    ]
    
  };

  
  const selectedBooks = booksByGenre[genre] || [];

  return (
    <center>
    <div style={{backgroundColor:'#f4f1ee'}}>
      <h1 style={{backgroundColor:'#ff763d',color:'#ffffff',width:'100%',height:'80px', lineHeight: '80px'}}>Books in the {genre} genre</h1>
      <div>
        {selectedBooks.map(book => (
          <div key={book.id}>
           <Link  to={`/genre/${genre}/${book.id}`}>
            <img src={book.imageUrl} alt={book.title} />
            <p>{book.title}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
    </center>
  );
};

export default Genre;
