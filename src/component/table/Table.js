import React, {useState} from 'react';
import './styles.css'
import Row from './Row'

export default function Table(props) {
    const data =
        [
            {
                date: 'Sunday',
                col1: 'Hello',
                col2: 'World',
                del_col:null,
            },
            {
                date: 'Friday',
                col1: 'Hi',
                col2: 'Jahan',
                del_col:null,
            },
            {
                date: 'FRIDAY2',
                col1: 'SALAM',
                col2: 'TESTING',
                del_col:null,
            },
            {
                date:'Monday',
                col1: 'react-table',
                col2: 'rocks',
                del_col:null,
            },
            {
                date:'Tuesday',
                col1: 'whatever',
                col2: 'you want',
                del_col:null,
            }
        ];

    const [ source, setSource] = useState(data);

    let rows = [];
    for (let i=0; i < source.length; i++){
        rows.push(
            <tr className='row'>
                <td className='cell light-hover'>{source[i]['date']}</td>
                <td className='cell light-hover'>{source[i]['col1']}</td>
                <td className='cell light-hover'>{source[i]['col2']}</td>
                <td className='cell light-hover'
                    onClick={() => {

                        console.log(i);
                    }}

                >Del</td>
            </tr>
        )
    }

    return (
        <table className='table'>
            <thead>
                <tr className='row' >
                    <th className='cell header'>Date</th>
                    <th className='cell header'>Desc. 1</th>
                    <th className='cell header'>Desc. 2</th>
                    <th className='cell header'>Del</th>
                </tr>
            </thead>
            {rows}
        </table>
        )




}