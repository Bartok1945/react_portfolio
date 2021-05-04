import React from "react";
import "../App.css";
import emailForm from "../components/EmailForm"
import Wrapper from "../components/Wrapper"
import 'bootstrap/dist/css/bootstrap.min.css';

const contactForm = () => {
    return (
        <div className="contactPage">
<Wrapper>
    <EmailForm />
</Wrapper>

        </div>
    )
};
export default contactForm;