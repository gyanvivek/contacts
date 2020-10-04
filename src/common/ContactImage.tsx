import React from "react";
import { ReactComponent as ContactSvg } from '../assets/contactimage.svg';

const ContactImage = ()=>{
    return (<span className="contact-image">
        <ContactSvg/>
    </span>);
}

export default ContactImage;