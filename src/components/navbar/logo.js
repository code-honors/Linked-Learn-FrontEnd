import React from 'react';
import './navbar.scss';


function Logo() {

    return (
        <>
            <div className='logo' style={{zIndex:'5'}}>

                <img
                    src="assets/logo-color.png"
                    width="220"
                    className="d-inline-block align-top"
                    alt="Linked Learn logo"
                />
            </div>
        </>

    )
}

export default Logo;