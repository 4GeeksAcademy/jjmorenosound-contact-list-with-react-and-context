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

           
            updateContact: (index, updatedContact) => {
                const store = getStore();


                if (index >= 0 && index < store.contacts.length) {
                    const updatedContacts = store.contacts.map((contact, i) =>
                        i === index ? { ...contact, ...updatedContact } : contact
                    );

                    setStore({ contacts: updatedContacts });
                } else {
                    console.error("Invalid contact index:", index);
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
                        // Refresh the contact list
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
