import React from "react";
import { DeleteContact } from "./deletecontact";

export const Card = ({ id, name, phone, email, address }) => {
    return (
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Man_with_dreadlocks.jpg/520px-Man_with_dreadlocks.jpg?20070103181946"
                        className="img-fluid rounded-start"
                    />
                </div>
                <div className="col-md-8">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Name: {name}</li>
                        <li className="list-group-item">Phone Number: {phone}</li>
                        <li className="list-group-item">Email: {email}</li>
                        <li className="list-group-item">Address: {address}</li>
                        <li className="list-group-item justify-content-end">
                            <i className="fa fa-pencil" style={{ marginRight: "10px" }}></i>
                            <DeleteContact contactId={id} />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
