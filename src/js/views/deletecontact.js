import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";

export const DeleteContact = ({ contactId }) => {
    const { actions } = useContext(Context);
    const navigate = useNavigate();

    console.log("contactId in DeleteContact:", contactId); 
    
    const handleDeleteContact = () => {

        actions.deleteContact(contactId); 
        navigate("/");
    };

    return (
        <i className="fa fa-trash" onClick={handleDeleteContact}></i>
    ); 
};