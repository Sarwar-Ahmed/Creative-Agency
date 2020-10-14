import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';

const Feedback = () => {
    const [feedback, setFeedback] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/feedback`)
            .then(res => res.json())
            .then(data => {
                setFeedback(data);
            })
    }, [])
    return (
        <Container fluid className="text-center p-5">
            <Container>
                <h2>Clients <span style={{ color: "#7AB259" }}>Feedback</span></h2>
                <div className="row p-5">
                    {
                        feedback.map(feedback =>
                            <div className="col-md-4 text-left" key={feedback._id}>
                                <div className="border rounded p-3 pt-3 pb-3 m-1"> 
                                    <div className="row">
                                        <div className="col-3">
                                            <img src={feedback.image} className="w-100 rounded-circle" alt="" />
                                        </div>
                                        <div className="col-9">
                                            <h5 className="font-weight-bold">{feedback.name}</h5>
                                            <h6>{feedback.title}</h6>
                                        </div>
                                    </div>
                                    <p><small>{feedback.feedback}</small></p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </Container>
        </Container>
    );
};

export default Feedback;