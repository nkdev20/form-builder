import React , {useState} from 'react';

import FormFieldInput from './FormFieldInput';
import FormFieldSelectInput from './FormFieldSelectInput';

const Form = ({
    handleFormSubmit,
    formFields,
  })  => {
    const [formValues, setFormValues] = useState({});

    const handleFormValuesChange = (name, value) => {
      setFormValues({
        ...formValues,
        [name]: value
      });
      console.log(formValues);
    };
  
    const onFormSubmit = e => {
      e.preventDefault();
      if(handleFormSubmit) {
        handleFormSubmit(formValues);
      }
    }

    return (
        <form onSubmit = {onFormSubmit}>
            {
                formFields.map(fieldDetails =>
                    fieldDetails.type !== 'select' ? 
                        <FormFieldInput
                        key={fieldDetails.fieldName}
                        handleFieldChange={handleFormValuesChange}
                        {...fieldDetails}
                        />
                    :   <FormFieldSelectInput
                            key={fieldDetails.fieldName}
                            handleFieldChange={handleFormValuesChange}
                            {...fieldDetails}
                        />
                )
           }
           <div className="control">
                <button className="button is-primary">Sign up</button>
            </div>
        </form>
    )
}

export default Form;