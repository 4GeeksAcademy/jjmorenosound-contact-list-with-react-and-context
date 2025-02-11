import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate, useParams } from "react-router-dom";

export const AddContact = () => {
    const { actions, store } = useContext(Context);
    const navigate = useNavigate();
    const { id } = useParams();

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');

    useEffect(() => {
        console.log('Contact ID:', id); // Check if id is coming in correctly
        if (id) {
            const contact = store.contacts.find((contact) => contact.id === parseInt(id)); // Ensure id is a number
            if (contact) {
                setName(contact.name);
                setPhone(contact.phone);
                setEmail(contact.email);
                setAddress(contact.address);
            } else {
                console.log(`Contact with id ${id} not found in the store.`);
                fetchContactById(id);
            }
        }
    }, [id, store.contacts]);
    

    const fetchContactById = async (id) => {
        try {
            const response = await fetch(`https://playground.4geeks.com/contact/agendas/jjmorenosound/contacts/${id}`);
            if (response.ok) {
                const contact = await response.json();
                setName(contact.name);
                setPhone(contact.phone);
                setEmail(contact.email);
                setAddress(contact.address);
            }
        } catch (error) {
            console.error('Error fetching contact:', error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const contact = {
            name,
            phone,
            email,
            address,
        };

        if (id) {
            actions.updateContact(id, contact);
        } else {
            actions.addContact(contact); 
        }

        navigate('/');
    };

    return (
        <main className="container">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="fullname" className="form-label">Full Name</label>
                    <input
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        type="text"
                        className="form-control"
                        id="fullname"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="phonenumber" className="form-label">Phone Number</label>
                    <input
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone}
                        type="tel"
                        className="form-control"
                        id="phonenumber"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type="email"
                        className="form-control"
                        id="email"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input
                        onChange={(e) => setAddress(e.target.value)}
                        value={address}
                        type="text"
                        className="form-control"
                        id="address"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    {id ? 'Update Contact' : 'Add Contact'}
                </button>
            </form>
        </main>
    );
};
