import React from 'react';

const ClearableInput = ({
    value,
    onValueChange
}) => {

    return (
        <div style={{marginBottom: 10}}>
            <input
                type='text'
                value={value}
                onChange={(event) => { onValueChange(event.target.value, 'value') }}
            />
            {value && <i onClick={() => { onValueChange('', 'value') }}>&times;</i>} 
        </div>
    )
}
export default ClearableInput;