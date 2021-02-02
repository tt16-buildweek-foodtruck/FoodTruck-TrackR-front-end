import React from 'react';
import {useHistory} from 'react-router-dom';

const OperatorDashboard = () => {

    const {push} = useHistory();

    const handleViewTruck = () => {

    }

    const handleAddTruck = () => {
        push('/add-food-truck')
    }

    return (
        <div>
            <h2>Food Trucks</h2>
            

            <button onClick={handleAddTruck}>Add New Truck</button>
        </div>
    )
}

export default OperatorDashboard
