import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, ButtonGroup, Dropdown, Table } from 'react-bootstrap';

const ServiceList = () => {
    const [serviceList, setServiceList] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/orders`)
            .then(res => res.json())
            .then(data => {
                setServiceList(data);
            })
    }, [])

    return (
        <div style={{ borderRadius: 20 }} className="p-5 bg-white">
            <Table responsive size="sm">
                <thead style={{ backgroundColor: "#F4F7FC" }}>
                    <tr>
                        <th>Name</th>
                        <th>Email ID</th>
                        <th>Service</th>
                        <th>Project Details</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        serviceList.map(service =>
                            <tr key={service._id}>
                                <td>{service.name}</td>
                                <td>{service.email}</td>
                                <td>{service.project}</td>
                                <td>{service.details}</td>
                                <td>
                                    <Dropdown as={ButtonGroup}>
                                        <Button variant="" className="text-danger">Pending</Button>

                                        <Dropdown.Toggle split variant="" id="dropdown-split-basic" />

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1" className="text-danger">Pending</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2" className="text-warning">On going</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3" className="text-success">Done</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ServiceList;