import React, {useState} from 'react';

const types = {
    email: {
        regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Preencha um email válido!',
    }
}

const UseForm = (type) => {
    const [value, setValue] = useState('');
    const [error, setError] = useState(null);

    function validate(value) {
        if (type === false) return true;
        if (value.length === 0) {
            setError('Preencha um valor');
            return false;
        } else if (types[type] && !types[type].regex.test(value)) {
            setError(types[type].message)
            return false;
        } else {
            setError(null);
            return true;
        }
    }

    function onChange({target}) {
        if (error) validate(target.value);
        setValue(target.value);
    }

    return (
        {
            value,
            setValue,
            onChange,
            error,
            validate: () => validate(value),
            onBlur: () => validate(value)
        }
    );
};

export default UseForm;