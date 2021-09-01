import React, { useState } from 'react';
import './index.css';

const App = () => {
  // Declase username with empty default value
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [newEntry, setNewEntry] = useState([]); // create an empty array to store the form values

  const submitData = (e) => {
    e.preventDefault(); // Prevent the form from submitting/refreshing
    const newData = { submitted_name: username, submitted_email: email }
    // Use ... (Spread Operator)
    setNewEntry([...newEntry, newData]); // Store the submitted data into setNewEntry array and created new elements or push the data into the array
    setUsername(""); // Empty the username field
    setEmail(""); // Empty the email field
  }

  return (
    <>
      <div className="container my-5 text-center" >
        <h2>Simple React Form Values</h2>
        <form onSubmit={submitData}>
          <div>
            <input type="text" placeholder="Enter your name" className="w-50 my-3 py-1" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div>
            <input type="text" placeholder="Enter your email number" className="w-50 my-3 py-1" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <button className="btn btn-primary" type="submit">Submit</button>
          </div>
        </form>
        {/* Display the submitted data array values */}
        <div className="my-3">
          {newEntry.map((values, i) => {
            return (
              <div key={i}>
                {/* irritate  array values */}
                <hr />
                <p >{values.submitted_name}</p>
                <p>{values.submitted_email}</p>

              </div>
            )
          })}
        </div>
      </div>

    </>
  )
}

export default App
