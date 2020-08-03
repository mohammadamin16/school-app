import React from 'react';
import './styles.css'
import Cell from "../cell";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

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
                <td className='cell '>
                    <Cell
                        readonly={readonly}
                        type={'text'}
                        col={0}
                        row={i}
                        setValues={props.setValues}
                        init_value={items[i]['course']}
                        width={'10ch'}
                    />

                </td>
                <td className='cell '>
                    <Cell
                        readonly={readonly}
                        type={'text'}
                        col={1}
                        row={i}
                        setValues={props.setValues}
                        init_value={items[i]['tests_desc']}
                        width={'40ch'}
                    />

                    </td>
                <td className='cell '>
                    <Cell
                        readonly={readonly}
                        type={'text'}
                        col={2}
                        row={i}
                        setValues={props.setValues}
                        init_value={items[i]['study_desc']}
                        width={'40ch'}
                    />

                </td>
                <td className='cell '>
                    <Cell
                        readonly={readonly}
                        type={'number'}
                        col={3}
                        row={i}
                        setValues={props.setValues}
                        init_value={items[i]['duration']}
                        width={'4ch'}
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
                        style={{width:'10ch'}}
                    >
                        Subject
                    </th>
                    <th className='cell header-cell'
                        style={{width:'40ch'}}
                    >
                        Tests Description
                    </th>
                    <th className='cell  header-cell'
                        style={{width:'40ch'}}
                    >
                        Study Description
                    </th>
                    <th className='cell header-cell'
                        style={{width:'4ch'}}
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