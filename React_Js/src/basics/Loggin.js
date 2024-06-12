//Conditional Rendering

import React from 'react'

export default function() {
    const isLogin=false;
    const Name='Vinuja';
    const greeting=isLogin?<span>Welcome back</span> : <span>Please Login</span>
  return (
    <div>
        <h2 style={{color:'green'}}>Login</h2>
        <p>{greeting} {Name}!</p>
    </div>
  )
}
