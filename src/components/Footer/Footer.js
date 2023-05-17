import React from 'react';
import { BsFillTelephoneInboundFill, BsPeopleFill, BsGearFill, BsChatFill } from 'react-icons/bs';
import { IoIosKeypad } from 'react-icons/io';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="icon-row">
                <BsFillTelephoneInboundFill />
                <BsPeopleFill />
                <div className="icon-wrapper"><IoIosKeypad style={{ fontSize: '50px', color: "#566d6d" }} /></div>
                <BsGearFill />
                <BsChatFill />
            </div>
        </div>
    );
};

export default Footer;
