import { useState } from 'react';


export default (initialValue) => {
    const [value, setValue] = useState(initialValue);

    const onChangeValue = (event) => {
        if (event.target.type === 'checkbox') return setValue(event.target.checked);
        setValue(event.target.value);
    };

    return [value, onChangeValue];
}