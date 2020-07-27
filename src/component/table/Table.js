import React, {useEffect} from 'react';
import './styles.css'
import Cell from "../cell";


export default function Table(props) {
    let items;
    if (props.create){
        items = [{}, {}, {}]
    }else{
        items = props.items;
        console.log(items);
    }
    let rows = [];
    for (let i=0; i < items.length; i++){
        rows.push(
            <tr className='row' key={i + ''}>
                <td className='cell cell-1'>
                    <Cell
                        type={'text'}
                        col={0}
                        row={i}
                        setValues={props.setValues}
                        init_value={items[i]['course']}
                    />

                </td>
                <td className='cell cell-2'>
                    <Cell
                        type={'text'}
                        col={1}
                        row={i}
                        setValues={props.setValues}
                        init_value={items[i]['tests_desc']}
                    />

                    </td>
                <td className='cell cell-2'>
                    <Cell
                        type={'text'}
                        col={2}
                        row={i}
                        setValues={props.setValues}
                        init_value={items[i]['study_desc']}
                    />

                </td>
                <td className='cell cell-1'>
                    <Cell
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
                    <th className='cell cell-1 header-cell'>
                        Subject
                    </th>
                    <th className='cell cell-2 header-cell'>
                        Tests Description
                    </th>
                    <th className='cell cell-2 header-cell'>
                        Study Description
                    </th>
                    <th className='cell cell-1 header-cell'>
                        Duration
                    </th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}