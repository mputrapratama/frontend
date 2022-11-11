import React, { useEffect, useState} from 'react';
import axios from 'axios';

const CustomersList = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        getCustomers();
    }, []);

    const getCustomers = async () => {
        const customers = await axios.get("http://localhost:5000/customers");
        setCustomers(customers.data);
    }

    const deleteCustomers = async (userId) => {
        await axios.delete(`http://localhost:5000/customers/${userId}`);
        getCustomers();
    };

    return (
        <div>
            <h1 className="title">Customers</h1>
            <h2 className="subtitle">List customers</h2>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Operating System</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((customers, index) => (
                        <tr key={customers.uuid}>
                            <td>{index + 1}</td>
                            <td>{customers.name}</td>
                            <td>{customers.email}</td>
                            <td>{customers.os}</td>
                            <td>{customers.desc}</td>
                            <td>
                                <button 
                                    onClick={() => deleteCustomers(customers.uuid)}
                                    className="button is-small is-success"
                                >
                                    Done
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default CustomersList