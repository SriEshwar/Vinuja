
import React,{useState} from 'react';
export default function Employee() {
    const [emp_id, setEmp_id] = useState('');
    const [location, setLocation] = useState('');
  return (
    <div>
    <h1>Employee Detail</h1>
    <form>
      <label htmlFor='emp_id'>Employee Id:</label>
      <input type='text' id='emp_id' value={emp_id}
      onChange={(e)=>setEmp_id(e.target.value)}/>
      <br/>
       <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
    </form>

    <div>
        <h2>Employee Information</h2>
        <p><strong>Employee Id:</strong> {emp_id}</p>
        <p><strong>Location:</strong> {location}</p>
      </div>
  </div>
  )
}


