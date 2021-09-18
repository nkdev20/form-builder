import React, {useState} from 'react';


const FormFieldSelectInput = ({
    label,
    fieldName,
    values,
    handleFieldChange
}) => {

    const [val, setVal] = useState();

    const handleChange = (e) => {
        setVal(e.target.value);
        handleFieldChange(e.target.name, e.target.value);
    }

    return (
        <div className="field">
            <label className="label">{label}</label>
            <div class="select is-success">
                <select name={fieldName} value={val} onChange = {handleChange}>
                    {
                        values.map(option => 
                            <option value={option.val} key={option.val}>{option.text}</option>
                        )
                    }
                </select>
            </div>
        </div>
    )
}


export default FormFieldSelectInput;