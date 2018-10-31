import React from 'react';
const Filters = ({values, updateValues}) =>(
    <select onChange={event => {updateValues(event.target.value)}}>
        <option value={null}>Select</option>
        {
            values.map(value => <option value={value}>{value}</option>)
        }
    </select>
)
export default Filters