import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";
im


export const UpdateContact = () => {

    const { actions } = useContext(Context);

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');



    const navigate = useNavigate();

    const handleResetContact = (e) => {
        e.preventDefault();
        let contact = {name: name,
           phone: phone,
           email: email,
           address: address,
        };
        actions.addContact(contact);
        navigate('/')
    }


    return (
        <main className="container">
        <form onSubmit={handleAddContact}>
            <div className="mb-3">
                <label for="fullname" className="form-label">Full Name</label>
                <input onChange={(e) => setName(e.target.value)} value={name} type="text" className="form-control" id="fullname"  required />
              
            </div>
            <div className="mb-3">
                <label for="phonenumber" className="form-label">Phone Number</label>
                <input onChange={(e) => setPhone(e.target.value)} value={phone} type="tel" className="form-control" id="phonenumber" required />
               
            </div>
            <div className="mb-3">
                <label for="email" className="form-label">Email</label>
                <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className="form-control" id="email" required />
               
            </div>
            <div className="mb-3">
                <label for="address" className="form-label">Address</label>
                <input onChange={(e) => setAddress(e.target.value)} value={address} type="text" className="form-control" id="address" required  />
               
            </div>
           
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </main>
    )
}