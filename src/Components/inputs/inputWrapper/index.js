import React, { useCallback } from 'react';
import ClearableInput from '../clearableInput';
import LabelInput from '../labelInput';


const InputWrapper = ({
    inputsData,
    inputInfo: { label, value },
    setInputsData,
    inputsDataIndex
}) => {

    const onValueChange = useCallback((changedValue, key) => {
        const clonePrevData = JSON.parse(JSON.stringify(inputsData));
        clonePrevData[inputsDataIndex][key] = changedValue;
        setInputsData(clonePrevData)
    }, [inputsDataIndex, label, value, inputsData]);

return (
    <>
        <LabelInput
            label={label}
            onValueChange={onValueChange}
        />
        <ClearableInput
            value={value}
            onValueChange={onValueChange}
        />
    </>
)
}

export default InputWrapper;