import React, { useState, useCallback } from 'react';
import InputWrapper from '../Components/inputs/inputWrapper';
import ButtonsContainer from '../Components/buttonsContainer';

const createInitialData = () => {
    const initalData = [];
    for (let i = 1; i <= 30; i++) {
        const labelValue = { label: `Input ${i}`, value: '' };
        initalData.push(labelValue);
    }
    return initalData
}


const App = () => {
    const [inputsData, setInputsData] = useState(createInitialData());


    const onSubmit = useCallback(() => {
        const values = inputsData.reduce((keyValueObj, { label, value }) => {
            keyValueObj[label] = value;
            return keyValueObj;
        }, {})

        fetch(("http://localhost:3000/rest", {
            method: "POST",
            body: JSON.stringify(values),
            headers: {
                "Content-Type": "application/json",
            },
        }))
    }, [inputsData])

    const onClear = useCallback(() => {
        setInputsData(createInitialData())
    }, [inputsData])


    return (
        <div>
            { inputsData && inputsData.map((inputInfo, index) => {
                return (
                    <InputWrapper
                        key={index} //inputs order always the same
                        inputsData={inputsData}
                        inputsDataIndex={index}
                        inputInfo={inputInfo}
                        setInputsData={setInputsData}
                    />
                )
            })
            }
            <ButtonsContainer
                onSubmit={onSubmit}
                onClear={onClear}
            />
        </div>
    )
}

export default App;