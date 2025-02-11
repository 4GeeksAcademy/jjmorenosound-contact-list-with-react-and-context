import React from "react";
import { useNavigate } from "react-router-dom"; 
import { DeleteContact } from "./deletecontact";

export const Card = ({ id, name, phone, email, address }) => {
    const navigate = useNavigate(); 

    const handleEditClick = () => {
        navigate(`/edit/${id}`); 
    };

    return (
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Man_with_dreadlocks.jpg/520px-Man_with_dreadlocks.jpg?20070103181946"
                        className="img-fluid rounded-start"
                        alt="Profile"
                    />
                </div>
                <div className="col-md-8">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Name: {name}</li>
                        <li className="list-group-item">Phone Number: {phone}</li>
                        <li className="list-group-item">Email: {email}</li>
                        <li className="list-group-item">Address: {address}</li>
                        <li className="list-group-item justify-content-end">
                            <i 
                                className="fa fa-pencil" 
                                style={{ marginRight: "10px", cursor: "pointer" }} 
                                onClick={handleEditClick}
                                title="Edit Contact" 
                            ></i>
                            <DeleteContact contactId={id} />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
