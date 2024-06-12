//map,key

import React from 'react'

export default function() {
   const product=[
    { name: 'Samsung Galaxy S23', price: '75,000' },
    { name: 'Google Pixel 7', price: '70,000' },
    { name: 'OnePlus 11', price: '68,000' },
    { name: 'Xiaomi Mi 13', price: '65,000' },
    { name: 'Oppo Find X6 Pro', price: '72,000' },
    { name: 'Vivo X90 Pro', price: '66,000' },
    { name: 'Sony Xperia 1 IV', price: '80,000' },
    { name: 'Asus ROG Phone 6', price: '85,000' },
    { name: 'Nokia 9 PureView', price: '55,000' },
    { name: 'Realme GT 2 Pro', price: '62,000' }
   ]

//    const productrow=[];
//    for(let i=0;i<product.length;i++){
//     productrow.push(
//         <tr key={i}>
//         <td>{product[i].name}</td>
//         <td>{product[i].price}</td>
//         </tr>
// )
//    }
  return (
    <div>
        <h3 style={{color:'green'}}>Product Details</h3>
       <table border={3}>
        <tr>
            <th>ProductName</th>
            <th>ProductPrice</th>
        </tr>
         {/* <tbody>
            {productrow}
         </tbody> */}

         <tbody>
            {product.map((products,index)=>(
                <tr key={index}>
               <td>{products.name}</td>
               <td>{products.price}</td>
                </tr>
            ))}
         </tbody>
    </table>
    </div>
  )
}
