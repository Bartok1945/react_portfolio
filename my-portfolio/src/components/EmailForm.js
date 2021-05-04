import React from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const EmailForm = () => {
    return (
        <div className="contactPage">


            <h2 class="contact">Contact</h2>
            <div class="row">
                <div class="col-md-6">
                    <form>
                        <div class="form-group">
                            <label for="exampleInputName">Name</label>
                            <input type="name" class="form-control" id="exampleInputName" aria-describedby="nameHelp">
                            </input>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                </input>
                                <div class="form-group">
                                    <label for="exampleFormControlTextarea1">Message</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <button type="submit" class="btn">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};
export default EmailForm;