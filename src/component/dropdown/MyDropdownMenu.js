import React, {useEffect, useState} from 'react';
import './styles.css'
import Dropdown from '@trendmicro/react-dropdown';
import {
    DropdownToggle,
    DropdownMenu,
    DropdownMenuWrapper,
    MenuItem,
    DropdownButton
} from '@trendmicro/react-dropdown';
import '@trendmicro/react-buttons/dist/react-buttons.css';
import '@trendmicro/react-dropdown/dist/react-dropdown.css';


export default function MyDropdownMenu(props) {
    const [value, setValue] = useState(props.init_value);
    const options = ['Farsi', 'Arabi', 'Maaref', 'Zaban' , '|' ,'Hesaban', 'Hendese', 'Gosasteh', 'Fizik', 'Shimi'];
    var handleChange;
    let disable;
    if (props.readonly){
        handleChange = () => {};
        disable=true
    }else {
        handleChange = (subject) => {
            let text = subject;
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

        <Dropdown
            onSelect={(eventKey) => {
                handleChange(eventKey)
            }}
        >
            <Dropdown.Toggle
                btnStyle="flat"
            >
                {value}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {options.map((subject) => {
                    if (subject == '|'){
                        return (
                            <MenuItem key={subject} divider />
                        )}

                    return(
                        <MenuItem eventKey={subject} key={subject}>{subject}</MenuItem>
                    )
                })}
                {/*<MenuItem eventKey={1}>Farsi</MenuItem>*/}
                {/*<MenuItem divider />*/}
                {/*<MenuItem>Hesaban</MenuItem>*/}
                {/*<MenuItem>Fizik</MenuItem>*/}
                {/*<MenuItArabi</MenuItem>
                <MenuItem eventKey={1}>Farsi</MenuItem>
                <MenuItem divider />
                <MenuItem>Hesaban</MenuItem>
                <MenuItem>Fizik</MenuItem>
                <MenuItem>Shimi</MenuItem>
                <MenuItem
                    eventKey={4}
                    title="this is the title"
                >
                    link with title
                </MenuItem>
                <MenuItem
                    eventKey={5}
                    active
                    onSelect={(eventKey) => {
                        alert();
                    }}
                >
                    link that alerts
                </MenuItemem>Shimi</MenuItem>*/}
                {/*<MenuItem*/}
                {/*    eventKey={4}*/}
                {/*    title="this is the title"*/}
                {/*>*/}
                {/*    link with title*/}
                {/*</MenuItem>*/}
                {/*<MenuItem*/}
                {/*    eventKey={5}*/}
                {/*    active*/}
                {/*    onSelect={(eventKey) => {*/}
                {/*        alert();*/}
                {/*    }}*/}
                {/*>*/}
                {/*    link that alerts*/}
                {/*</MenuItem>*/}
            </Dropdown.Menu>
        </Dropdown>

    )
}