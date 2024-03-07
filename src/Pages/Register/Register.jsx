import React from 'react';
import './Register.css'
import { Link } from 'react-router-dom';
import { FaDatabase, FaAsterisk, FaAccusoft, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Register = () => {
  return (
    <div className='reg-wrapper'>
        <div className="reg-container">
            <div className="reg-content">
                <div className="col-1">
                    <h1>Welcome to Afri Tours</h1>
                    <h1><span>More Than Just Tourism</span></h1>
                    <p>Everything you need to know about the best travel destinations in Africa. Explore the hidden natures in the cradle of humaity. Register and subscribe to receive our best vacation deals.</p>
                    <div className="used-by">
                    <p>PROUDLY SUPPORTED BY</p>
                    <div className="brand-icons">
                        <span><FaDatabase /> Staxx</span>
                        <span><FaAsterisk/> Star AI</span>
                        <span><FaAccusoft/> Accusoft</span>
                    </div>
                </div>
                </div>
                
                <div className="col-2">
                    <div className="form-layout">
                        <div className="form-container">
                            <p className="sign-in-text">Sign in with</p>
                            <div className="social-login">
                                <span><FaFacebook size={20} /></span>
                                <span><FaTwitter size={20} /></span>
                                <span><FaInstagram size={20} /></span>
                            </div>
                            <div className="divider">
                                <p><span>Or</span></p>
                            </div>
                            <form action="" className='reg-form'>
                                <input type="text" name="" placeholder="Name" />
                                <input type="email" name="" placeholder="Email" />
                                <input type="password" name="" placeholder="Password" />
                                <button className="reg-btn">Create Your Account</button>                           
                            </form>
                        </div>
                        <div className="form-footer">
                            <p>By signing up, you agree to our
                                <span className="foot-color"> Terms, Data Policy </span>
                                and <span className='foot-color'>Cookies policy</span> 
                            <hr />
                            <span>Already a member ? <Link to={'/login'}> <span className="foot-color">Login instead</span> </Link></span>
                            </p>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register