

// // Signup.js
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './Signup.css';

// const Signup = () => {
//   const navigate = useNavigate();
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errors, setErrors] = useState({});

//   const handleSignup = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('http://localhost:5000/api/auth/signup', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ username, email, password })
//       });

//       if (response.ok) {
//         navigate('/signin');
//       } else {
//         const data = await response.json();
//         setErrors(data);
//       }
//     } catch (error) {
//       setErrors({ general: 'An error occurred. Please try again.' });
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div className="signup-container">
//       <h1>Sign Up</h1>
//       <form onSubmit={handleSignup}>
//         <input 
//           type="text" 
//           placeholder="Username" 
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required 
//         />
//         {errors.username && <p className="error">{errors.username}</p>}

//         <input 
//           type="email" 
//           placeholder="Email" 
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required 
//         />
//         {errors.email && <p className="error">{errors.email}</p>}

//         <input 
//           type="password" 
//           placeholder="Password" 
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required 
//         />
//         {errors.password && <p className="error">{errors.password}</p>}

//         <button type="submit" className="signup-button">Sign Up</button>
//         {errors.general && <p className="error">{errors.general}</p>}
//       </form>
//       <p>
//         Already have an account? <Link to="/signin">Sign In</Link>
//       </p>
//     </div>
//   );
// };

// export default Signup;





// Signup.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password })
      });

      const data = await response.json();
      if (response.ok) {
        navigate('/signin');
      } else {
        setErrors({ general: data.message || 'An error occurred. Please try again.' });
      }
    } catch (error) {
      setErrors({ general: 'An error occurred. Please try again.' });
      console.error('Error:', error);
    }
  };

  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSignup}>
        <input 
          type="text" 
          placeholder="Username" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required 
        />
        {errors.username && <p className="error">{errors.username}</p>}

        <input 
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required 
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <input 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required 
        />
        {errors.password && <p className="error">{errors.password}</p>}

        <button type="submit" className="signup-button">Sign Up</button>
        {errors.general && <p className="error">{errors.general}</p>}
      </form>
      <p>
        Already have an account? <Link to="/signin">Sign In</Link>
      </p>
    </div>
  );
};

export default Signup;
