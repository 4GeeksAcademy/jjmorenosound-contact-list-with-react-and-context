const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            contacts: []
        },
        actions: {

            getContacts: () => {
                fetch('https://playground.4geeks.com/contact/agendas/jjmorenosound')
                    .then(resp => resp.json())
                    .then(respJson => {
                        console.log(respJson);
                        const serverValues = respJson.contacts || [];
                        setStore({ contacts: serverValues });
                    })
                    .catch(error => console.error("Error fetching contacts:", error));
            },


            addContact: async (newContact) => {
                try {
                    const response = await fetch(
                        'https://playground.4geeks.com/contact/agendas/jjmorenosound/contacts',
                        {
                            method: 'POST',
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(newContact)
                        }
                    );

                    if (!response.ok) throw new Error("Failed to add contact");

                    const result = await response.json();
                    console.log("Contact added successfully:", result);

                    const store = getStore();
                    setStore({ contacts: [...store.contacts, result] });
                } catch (error) {
                    console.error("Error adding contact:", error);
                }
            },

            updateContact: async (id, updatedContact) => {
                const store = getStore();
                try {
                    const response = await fetch(`https://playground.4geeks.com/contact/agendas/jjmorenosound/contacts/${id}`, {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(updatedContact)
                    });
            
                    if (!response.ok) {
                        throw new Error(`Failed to update contact: ${response.status}`);
                    }

                    const updatedContactFromAPI = await response.json();

                    const updatedContacts = store.contacts.map((contact) =>
                        contact.id === updatedContactFromAPI.id ? { ...contact, ...updatedContactFromAPI } : contact
                    );
            
                    console.log("Updated contacts:", updatedContacts);
                    setStore({ contacts: updatedContacts });
            
                } catch (error) {
                    console.error("Error during PUT request:", error);
                }
            },
            
            
            deleteContact: async (id) => {
                try {
                    const response = await fetch(
                        `https://playground.4geeks.com/contact/agendas/jjmorenosound/contacts/${id}`,
                        {
                            method: "DELETE",
                        }
                    );

                    if (response.ok) {
                        console.log("Contact successfully deleted.");
                        const actions = getActions();
                        actions.getContacts();
                    } else {
                        console.error("Failed to delete contact:", response.statusText);
                    }
                } catch (error) {
                    console.error("Failed to delete contact:", error);
                }
            }

        }
    }
};


export default getState;
