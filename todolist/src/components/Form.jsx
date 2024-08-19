import { useState } from 'react';

const Form = () => {
    const [text, setText] = useState("");

    const onInputChange = (e) => {
        setText(e.target.value);
    };

    const onFormSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        // You can add your form submission logic here
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input
                className="input"
                placeholder="Enter your reminder! :D"
                onChange={onInputChange}
                value={text} // Bind the input value to state
            />
        </form>
    );
};

export default Form;
