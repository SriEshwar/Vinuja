//props

import React from 'react'

export default function(props) {
  return (
    <div>
<table className='studenttable'>
    <tr>
    <th>Name</th>
    <td>{props.Name}</td>
    </tr>
    <tr>
    <th>Age</th>
    <td>{props.Age}</td>
    </tr>
    <tr>
    <th>Qualification</th>
    <td>{props.Qualification}</td>
    </tr>
</table>

    </div>
  )
}
