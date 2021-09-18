import React , {useState} from 'react';

const FormFieldInput = ({
    label,
    type,
    fieldName,
    placeholder,
    helpText,
    required,
    handleFieldChange
}) => {
    const [val, setVal] = useState('');

    const handleChange = (e) => {
        setVal(e.target.value);

        if(handleFieldChange){
            handleFieldChange(e.target.name, e.target.value);
        }
        
    };
    

    return (
        <div className="field">
            <label className="label">{label}</label>
            <div className="control">
                <input
                    className="input"
                    type={type}
                    name = {fieldName}
                    placeholder = {placeholder}
                    value= {val}
                    onChange= {handleChange}
                    required = {required || false}
                ></input>
            </div>
            {
                helpText &&
                <p className="help">{helpText}</p>
              }
        </div>
    );
}

export default FormFieldInput;