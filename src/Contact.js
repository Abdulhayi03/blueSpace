import React, {useState} from 'react'

const Contact = () => {

    const [data, setdata] = useState({
        fullname:'',
        contact:'',
        email:'',
        msg:''
    });

    const InputEvent = (event) => {
        const {name, value} = event.target;

        setdata((preVal) => {
            return{
                ...preVal,
                [name]: value,
            };
        });
    };
    const formSubmit = (e) => {
        e.preventDefault();
        alert(`My name is ${data.fullname}, my email is ${data.email}, my phone ${data.phone} my message ${data.msg}`);
    };

    return (
        <>
         <div className="my-5">
             <h1 className="text-center">Contact Us</h1>
         </div>
         <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={formSubmit}>
                    
                        <div className="mb-3">
                            <label for="exampleFormControlInput1">Full Name</label>
                            <input type="text" className="form-control" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="enter your name"/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1">Phone</label>
                            <input type="number" className="form-control" name="phone" value={data.phone} onChange={InputEvent} placeholder="mobile number"/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com"/>
                        </div>
                        
                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1">Message</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" name="msg" value={data.msg} onChange={InputEvent} rows="3"></textarea>
                        </div>
                        <div className="col-12">
                        <button type="submit" class="btn btn-outline-primary">Submit form</button>
                        </div>
                    
                    </form>
                    <div className="empty-div">

                    </div>
                </div>
            </div>
         </div>
        </>
    )
}

export default Contact
