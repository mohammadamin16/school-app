import React, {useEffect, useState} from 'react';
import './styles.css'

export default function Cell(props) {
    const [value, setValue] = useState(props.init_value);
    var handleChange;
    let disable;
    if (props.readonly){
        handleChange = () => {};
        disable=true
    }else {
        handleChange = (event) => {
            let text = event.target.value;
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

    return(
        <input
            disabled={disable}
            className='cell-input'
            onChange={handleChange}
            defaultValue={props.init_value}
            // style={{width:props.width}}
            type={props.type}
            step={5}
        />
    )
}