import React from 'react';

const ButtonsContainer = ({
    onSubmit,
    onClear
}) => {

    return (
        <div>
            <button onClick={onSubmit}>
                Submit
            </button>
            <button onClick={onClear}>
                Clear
            </button>

        </div>
    )
};

export default ButtonsContainer;