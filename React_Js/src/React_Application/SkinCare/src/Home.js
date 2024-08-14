

// import React from 'react';
// import Slideshowimg from './Slideshowimg';
// import Product from './Product';
// import About from './About';
// import Contact from './Contact';
// import { useAuth } from './AuthContext'; // Import the useAuth hook

// export default function Home() {
//   const { isAuthenticated } = useAuth(); // Get the authentication status

//   return (
//     <div>
//       <Slideshowimg />
//       {isAuthenticated && (
//         <>
//           <Product />
//           <About />
//           <Contact />
//         </>
//       )}
//     </div>
//   );
// }



// Home.js
import React from 'react';
import Slideshowimg from './Slideshowimg';
import Product from './Product';
import About from './About';
import Contact from './Contact';
import { useAuth } from './AuthContext';

export default function Home() {
  const { isAuthenticated } = useAuth();

  return (
    <div>
      <Slideshowimg />
      {isAuthenticated && (
        <>
          <Product />
          <About />
          <Contact />
        </>
      )}
    </div>
  );
}
