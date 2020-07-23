import React from 'react';
import './styles.css'

export default function Row(props) {
    let row = props.row;



    return (
        <>
            <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                    return (
                        <td
                            className='cell'
                            {...cell.getCellProps()}>
                            {cell.render('Cell')}
                        </td>
                    )
                })}
            </tr>
        </>
    )
}
