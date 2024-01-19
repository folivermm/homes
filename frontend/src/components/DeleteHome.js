import React from 'react';

function DeleteHome({ id, onDelete, errorMessage, className }) {
    const handleDelete = () => {
        const confirmDelete = window.confirm('Are you sure you want to delete this home?');
        if (confirmDelete) {
            if (errorMessage) {
                // Display the error message here, for example, using a modal or a toast notification
                alert(errorMessage);
                return;
            }

            onDelete(id);
        }
    };

    return (
        <div>
            <button onClick={handleDelete} className={`btn btn-danger ${className}`}>
                Delete Home
            </button>
        </div>
    );
}

export default DeleteHome;
