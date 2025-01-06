import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";



export const ContactForm = (contactId) => {

    const { actions } = useContext(Context);

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');



    const navigate = useNavigate();

    const handleResetContact = (e) => {
        const form = document.getElementById("contactForm")
        form.reset()
    };




    return (
        <main className="container">
            <form id="contactForm" onSubmit={handleAddContact}>
                <div className="mb-3">
                    <label for="fullname" className="form-label">Full Name</label>
                    <input onChange={(e) => setName(e.target.value)} value={name} type="text" className="form-control" id="fullname" required />

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
                    <input onChange={(e) => setAddress(e.target.value)} value={address} type="text" className="form-control" id="address" required />

                </div>

           <input className="form-control" id="id" value={contactId} type="text"></input>
                <button type="submit" className="btn btn-primary">Submit</button>
                <button onClick={handleResetContact} type="button" className="btn btn-secondary">Reset</button>
            </form>
        </main>
    )
}