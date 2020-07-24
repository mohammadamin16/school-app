import React from 'react';
import './styles.css'


export default function Table(props) {
    const items = props.items;
    let rows = [];
    for (let i=0; i < items.length; i++){
        rows.push(
            <tr className='row'>
                <td className='cell light-hover col'>
                    <input
                        className='cell-input'
                        value={items[i]['course']}
                    />
                </td>
                <td className='cell light-hover col2'>
                    <input
                            value={items[i]['tests_desc']}
                            className='cell-input'
                            placeholder={'Desc. about tests'}
                    />
                    </td>
                <td className='cell light-hover col2'>
                    <input
                            value={items[i]['study_desc']}
                            className='cell-input'
                            placeholder={'Desc. about study'}
                    />
                </td>
                <td className='cell light-hover col'>
                    <input
                        className='cell-input'
                        placeholder={'Desc. about study'}
                        value={items[i]['duration']}
                    />

                </td>

            </tr>
        )
    }

    return (
        <table className='table'>
            <thead>
                <tr className='row' >
                    <th className='cell header'>Subject</th>
                    <th className='cell header'>Tests Description</th>
                    <th className='cell header'>Study Description</th>
                    <th className='cell header'>Duration</th>
                </tr>
            </thead>
            <tbody>
            {rows}
            </tbody>
        </table>
    )
}