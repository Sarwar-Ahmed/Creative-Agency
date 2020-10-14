import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../../App';

const AddService = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, watch, errors } = useForm();

    const history = useHistory();

    const onSubmit = (data) => {
        fetch('http://localhost:5000/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        alert("Service Added Successfully");
        history.push(`/home`);
    }
    return (
        <div className="w-75"> 
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className="font-weight-bold">Service Title</label><br/>
                <input name="serviceTitle" className="form-control p-2" ref={register({ required: true })} placeholder="Enter title" />
                {errors.serviceTitle && <span className="error">Service Title is required</span>}
                <br/>

                <label className="font-weight-bold">Icon</label><br/>
                <input type="file" name="file" className="" placeholder="Upload Image" />
                <br />

                <label className="font-weight-bold mt-5">Description</label>
                <input name="details" type="text" rows="3" className="form-control p-5" ref={register({ required: true })} placeholder="Project Details" />
                {errors.details && <span className="error">Project Details is required</span>}

                <button className="btn btn-success pl-5 pr-5 mt-5" type="submit">Send</button>
            </form>
        </div>
    );
};

export default AddService;