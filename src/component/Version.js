import React from 'react';
const Version = ({vehicules, puissance}) =>(
    <table>
        <thead>
            <th>Marque</th>
            <th>Modele</th>
            <th>Version</th>
            <th>Puissance</th>
        </thead>
        <tbody>
        {
            vehicules
                .map(
            vehicule => (
                <tr>
                    <td>{vehicule.marqueLibelle}</td>
                    <td>{vehicule.modeleLibelle}</td>
                    <td>{vehicule.version}</td>
                    <td>{vehicule.puissance}</td>
                </tr>
            )
        )}
        </tbody>
    </table>
)

export default Version