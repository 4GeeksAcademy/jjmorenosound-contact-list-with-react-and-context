import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";

export const DeleteContact = ({ contactId }) => {
    const { actions } = useContext(Context);
    const navigate = useNavigate();

    const [showModal, setShowModal] = useState(false);

    const handleDeleteContact = () => {
        actions.deleteContact(contactId);
        navigate("/");
    };

    const handleCloseModal = () => setShowModal(false);

    const handleConfirmDelete = () => {
        handleDeleteContact();
        setShowModal(false); 
    };

    return (
        <div>
            <i
                className="fa fa-trash"
                onClick={() => setShowModal(true)}
                style={{ cursor: "pointer" }}
            ></i>

            {showModal && (
                <div
                    className="modal fade show"
                    style={{ display: "block", opacity: 1 }}
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalCenterTitle"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">
                                    Confirm Deletion
                                </h5>
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                    onClick={handleCloseModal}
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                Are you sure you want to delete this contact? This action cannot be undone.
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>
                                    No
                                </button>
                                <button type="button" className="btn btn-danger" onClick={handleConfirmDelete}>
                                    Yes, Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
