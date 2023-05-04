import React from "react";
import { useState } from "react";

const Contact = ()=>{
    const [data, setData] = useState({
        email:'',
        name:'',
        phnum:'',
        message:''
    })
    const updateValue = (event)=>{
        const {name, value} = event.target;
        setData((preValue)=>{
        return {
            ...preValue,
            [name] : value,
        }
        });
    }
    const submitData = ()=>{
        console.log(data)
    }
    return(<>
        <div className="my-5">
            <h1 className="text-center">CONSTACT US</h1>
        </div>
        <div className="container container_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                <form onSubmit={(e)=>{
                    e.preventDefault();
                    submitData()
                }}>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" name="email" onChange={updateValue} value={data.email} class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                        <input type="text" name="name" value={data.name} onChange={updateValue} class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
                        <input type="number" name="phnum" value={data.number} onChange={updateValue} class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                        <textarea class="form-control" name="message" onChange={updateValue} value={data.message} id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div class="col-auto">
                        <button type="submit" class="btn btn-primary mb-3">Submit</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    </>)
}

export default Contact;