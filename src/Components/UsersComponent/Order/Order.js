import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../../App';

const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, watch, errors } = useForm();

    const { project } = useParams();
    const history = useHistory();

    const onSubmit = (data) => {
        fetch('http://localhost:5000/addUserOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        alert("Order Successfully Done");
        history.push(`/home`);
    }
    return (
        <div className="w-75"> 
            <form onSubmit={handleSubmit(onSubmit)}>

                <input name="name" className="form-control p-4" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Your Name" />
                {errors.name && <span className="error">Name is required</span>}
                <br />

                <input name="email" className="form-control p-4" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Your Email" />
                {errors.email && <span className="error">Email is required</span>}
                <br />

                <input type="text" name="project" className="form-control p-4" defaultValue={project} ref={register({ required: true })} placeholder="Project" />
                {errors.project && <span className="error">Project is required</span>}
                <br />

                <input name="details" type="text" rows="3" className="form-control p-5" ref={register({ required: true })} placeholder="Project Details" />
                {errors.details && <span className="error">Project Details is required</span>}
                <br />

                <input name="price" className="p-2" ref={register({ required: true })} placeholder="Price" />
                {errors.price && <span className="error">Price is required</span>}
                <input type="file" name="file" className="p-2" placeholder="Upload project file" />
                <br />

                <button className="btn pl-5 pr-5 mt-5" type="submit" style={{ backgroundColor: "#111430", color: "white" }}>Send</button>
            </form>
        </div>
    );
};

export default Order;