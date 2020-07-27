import React from 'react';

export default function Footer() {
    return (
        <div className="container-fluid mt-5 pt-5 bg-light">
            <div className="row">
                <div className="col ml-5 pl-5">
                    <h4>Help</h4>
                    <div><small>Help Center</small></div>
                    <div><small>FAQs</small></div>
                    <div><small>Privacy Policy</small></div>
                    <div><small>Cookie Policy</small></div>
                    <div><small>Terms of use</small></div>
                </div>

                <div className="col">
                    <h4>About us</h4>
                    <div><small>Points MAX</small></div>
                    <div><small>Careers</small></div>
                    <div><small>Press</small></div>
                    <div><small>Blog</small></div>
                </div>

                <div className="col">
                    <h4>Destinations</h4>
                    <div><small>Countries/Territories</small></div>
                    <div><small>Cities</small></div>
                </div>

                <div className="col">
                    <h4>Partner with us</h4>
                    <div><small>YCS partner portal</small></div>
                    <div><small>Partner solutionsA</small></div>
                    <div><small>Affiliates</small></div>
                    <div><small>Connectivity Partners</small></div>
                </div>

                <div className="col">
                    <h4>Get the app</h4>
                    <div><small>iOS app</small></div>
                    <div><small>Android app</small></div>
                </div>
            </div>
        </div>
    )
}
