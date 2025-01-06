import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "./card";

export const ContactList = () => {
    const { store } = useContext(Context);

    return (
        <div>
            <h1>Contacts:</h1>
            {store.contacts.map((contact) => (
                <Card
                    key={contact.id}
                    id={contact.id}
                    name={contact.name}
                    phone={contact.phone}
                    email={contact.email}
                    address={contact.address}
                />
            ))}
        </div>
    );
};
