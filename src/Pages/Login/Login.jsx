import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaDatabase, FaAsterisk, FaAccusoft, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';


const Login = () => {
    const LoginInfo = {
        email: "tourist@afritour.com",
        password : "admin123"
    }
    const [user, setUser] = useState({name:"", email:""});
    const [error, setError] = useState("")
    const [details, setDetails] = useState({name:"", email:"", password:""})
    const [isLogin, setIsLogin] = useState(false)
    const navigate = useNavigate()

    const submitForm = e => {
        e.preventDefault();

        Login(details)
    }

    const Login = details =>{
        if (details.email == LoginInfo.email && details.password == LoginInfo.password){
        
        setUser({
            name:details.name,
            email:details.email
        })
        setIsLogin(true)
    }else{
        console.log("Details do not match");
        
        setError("Details do not match, try again!")
    }
        
    }

    const Logout = () =>{
        setUser({name:"", email:""});
    }
    // redirect user to homepage on authentication
 useEffect(()=>{
     if(isLogin){
        navigate('/')
     }
 }, [isLogin])


  return (
    <div className='reg-wrapper'>
       <div className="reg-container">
        <div className="reg-content">
        <div className="col-1">
                    <h1>Welcome Back</h1>
                    <h1><span>AfriTours Await You!!!</span></h1>
                    <p>Hurry up to book our new vacation deals. Enjoy discounts as valid member when you choose a premium deal.</p>
                   
                    <b>Login Details </b>(Email : tourist@afritour.com, Password : admin123)
                    
                    <div className="used-by">
                       <p>USED BY</p>
                        <div className="brand-icons">
                        <span><FaDatabase /> Staxx</span>
                        <span><FaAsterisk/> Star AI</span>
                        <span><FaAccusoft/> Accusoft</span>
                     </div>
                     </div> <br />
                
                </div>
        <div className="col-2">
                    <div className="form-layout">
                        <>     
                        {(user.email != "") ? (
                        <div className="welcome">
                          <h2>Welcome {user.name}</h2>
                        </div>
                       ) : (  
                         <>
                        <div className="form-container">
                            <div></div>
                            <p className="sign-in-text text">Login with</p>
                            <div className="social-login">
                                <span><FaFacebook size={20} /></span>
                                <span><FaTwitter size={20} /></span>
                                <span><FaInstagram size={20} /></span>
                            </div>
                            <div className="divider">
                                <p><span>Or</span></p> 
                                {(error != "") ? (<span style={{color:'red', fontSize:'1.3rem'}}>{error}</span>): ""}
                            </div>
                            <form onSubmit={submitForm} className='reg-form'>
                                <input type="text" name="name"  onChange={e => setDetails({ ...details, name:e.target.value})} value={details.name} placeholder="Name" />
                                <input type="email" name="email" onChange={e => setDetails({...details, email:e.target.value})}  value={details.email} placeholder="Email" />
                                <input type="password" name="password" onChange={e=> setDetails({...details, password:e.target.value})} value={details.password}  placeholder="Password" />
                                <button className="reg-btn">Login</button>                           
                            </form>
                        </div>
                        
                        <div className="form-footer">
                            {/* <p>By signing up, you agree to our
                                <span className="foot-color"> Terms, Data Policy </span>
                                and <span className='foot-color'>Cookies policy</span>
                            </p> */}
                            <p>New member ? <Link to={'/register'}> <span className="foot-color">Register here</span> </Link></p>
                        </div>
                        </>
                       )}
                        </>
                    </div>
                </div>
        </div>
    
       </div>
    </div>
  )
}

export default Login;