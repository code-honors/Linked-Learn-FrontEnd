import React from 'react';
import './navbar.scss';


function Logo() {

    return (
        <>
            <div className='logo' style={{zIndex:'5'}}>

                <img
                    src="assets/logo.png"
                    width="220"
                    height="77"
                    className="d-inline-block align-top"
                    alt="Linked Learn logo"
                />
            </div>
        </>

    )
}

export default Logo;