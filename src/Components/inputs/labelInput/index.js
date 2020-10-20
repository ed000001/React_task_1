import React from 'react';

const LabelInput = ({
    label,
    onValueChange
}) => {


    return (
        <input
            type='text'
            value={label}
            onChange={(event) => { onValueChange(event.target.value, 'label') }}
        />
    )
}

export default LabelInput;