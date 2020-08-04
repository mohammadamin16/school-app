import React, {useEffect, useState} from 'react';
import './styles.css'

import Dropdown from 'react-dropdown';

export default function DropdownMenu(props) {
    const [value, setValue] = useState(props.init_value);
    var handleChange;
    let disable;
    if (props.readonly){
        handleChange = () => {};
        disable=true
    }else {
        handleChange = (event) => {
            let text = event.value;
            setValue(text);
            props.setValues((prevValues) => {
            prevValues[props.row][props.col] = text;
            return prevValues;
            });
        };
        disable=false
    }

    useEffect(() => {
        props.setValues((prevValues) => {
            prevValues[props.row][props.col] = props.init_value;
            return prevValues;
        });
    }, []);
    const options = [
      'Physics', 'Arabi', 'Dini'
    ];
    const defaultOption = options[0];

    return(
        <Dropdown disabled={disable} options={options} onChange={handleChange} value={props.init_value} placeholder="Select a subject" />
    )
}