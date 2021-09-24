import React from 'react';
import "./DropDownLink.css"
import { useRef, useEffect } from 'react'


const DropDownLink = (props) => {








    return ( <div className="drop-down-button-wrapper" >
         <button className="drop-down-button">{props.data.header}</button>
            <div className="drop-down-menu-container" >
                {props.data.links.map((link) =>   
                <div className="drop-down-link-container">
                    <div className="link-circle"></div>
                    <div className="link-text">{link}</div>
                </div>)}        
            </div>
    </div> );
}
 
export default DropDownLink;