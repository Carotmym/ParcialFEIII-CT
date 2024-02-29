// Form.js
import React from 'react';

function Form({ formData, handleInputChange, handleSubmit }) {
    return (
        <form onSubmit={handleSubmit}>
            Username:
            <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
            />
           
            Password:
            <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
            />

            <button type="submit">Submit</button>
        </form>
    );
}

export default Form;