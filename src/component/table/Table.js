import React from 'react';
import './styles.css'
import Cell from "../cell";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faBookReader } from '@fortawesome/free-solid-svg-icons'
import MyDropdownMenu from "../dropdown";
import words from "../../texts/words";

export default function Table(props) {
    let items;
    const readonly =  Boolean(props.readonly);
    if (props.create){
        items = [{}, {}, {}]
    }else{
        items = props.items;
    }
    let rows = [];
    for (let i=0; i < items.length; i++){
        rows.push(
            <tr className='row' key={i + ''}>
                <td className='cell'
                    style={{width:'30%'}}
                >
                    <MyDropdownMenu
                        readonly={readonly}
                        col={0}
                        row={i}
                        setValues={props.setValues}

                        init_value={items[i]['course']}
                    />

                </td>
                <td className='cell '
                    style={{width:'40%'}}
                >
                    <Cell
                        readonly={readonly}
                        type={'text'}
                        col={1}
                        row={i}
                        setValues={props.setValues}
                        init_value={items[i]['tests_desc']}
                    />

                    </td>
                <td className='cell '
                    style={{width:'40%'}}
                >
                    <Cell
                        readonly={readonly}
                        type={'text'}
                        col={2}
                        row={i}
                        setValues={props.setValues}
                        init_value={items[i]['study_desc']}
                    />

                </td>
                <td className='cell '
                    style={{width:'10%'}}
                >
                    <Cell
                        readonly={readonly}
                        type={'number'}
                        col={3}
                        row={i}
                        setValues={props.setValues}
                        init_value={items[i]['duration']}
                    />

                </td>

            </tr>
        )
    }

    return (
        <table className='table'>
            <thead>
                <tr className='row' >
                    <th className='cell header-cell'
                        style={{width:'30%'}}
                    >
                    <FontAwesomeIcon icon={faBookReader} />

                    </th>
                    <th className='cell header-cell'
                        style={{width:'40%'}}
                    >
                        {words['test']}
                    </th>
                    <th className='cell  header-cell'
                        style={{width:'40%'}}
                    >
                        {words['study']}
                    </th>
                    <th className='cell header-cell'
                        style={{width:'10%'}}
                    >
                    <FontAwesomeIcon icon={faClock} />
                    </th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>

    )
}