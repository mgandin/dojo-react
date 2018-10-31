import React from 'react';
const Version = ({vehicules}) =>(
    <table>
        <thead>
            <th>Marque</th>
            <th>Modele</th>
            <th>Version</th>
            <th>Puissance</th>
            <th>Carrosserie</th>
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
                    <td>{vehicule.carrosserie}</td>
                </tr>
            )
        )}
        </tbody>
    </table>
)

export default Version