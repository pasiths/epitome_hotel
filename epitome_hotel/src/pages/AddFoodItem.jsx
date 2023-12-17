import React from 'react'
import '../styles/login.css'
import { MDBFile } from 'mdb-react-ui-kit'

const AddFoodItem = () => {
    return (
        <section className="login">
            <div className="wrapper2">
                <form action="">
                    <h1>Item</h1>
                    <div className="input-box">
                        <input type="text" name="" id="" placeholder='ID' required />
                    </div>
                    <div className="input-box">
                        <input type="text" name="" id="" placeholder='Category' required />
                    </div>
                    <div className="input-box">
                        <input type="text" name="" id="" placeholder='Location' required />
                    </div>
                    <div className="input-box">
                        <input type="text" name="" id="" placeholder='Food Name' required />
                    </div>
                    <div className="input-box">
                        <input type="password" name="" id="" placeholder='Description' required />
                    </div>
                    <div className="input-box"  ><p style={{}}><center>Food Image</center>
                        <MDBFile label='' size='sm' id='formFile' style={{ textDecorationColor: 'white' }} /></p>
                    </div>
                    <br />
                    <div style={{ marginBottom: 8 }}><button type='submit' style={{ background: '#f5a623', color: 'white' }}>Save</button></div>
                    <div style={{ marginBottom: 8 }}><button type='submit' style={{ background: '#8f1b1b', color: 'white' }}>delete</button> </div>
                    <div className="register-link">
                        <p>Is There Any Problem? <a href="#">Cancel</a></p>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default AddFoodItem