import React from 'react';
const Filters = ({puissances, updateValues}) =>(
    <select onChange={event => {updateValues(event.target.value)}}>
        <option value={null}>Select</option>
        {
            puissances.map(puissance => <option value={puissance}>{puissance}</option>)
        }
    </select>
)
export default Filters