import React from 'react'
import GoogleLogin from 'react-google-login'
import { useDispatch , useSelector } from "react-redux";
import { selectSignedIn , setSignedIn, setUserData, } from '../features/userSlice';
import "../styling/home.css";

const Homepage = () => {
   
    const dispatch = useDispatch();
    const login = (response) =>{
        console.log(response);
        dispatch(setSignedIn(true));
        dispatch(setUserData(response.profileObj));
    };

    const isSignedIn = useSelector(selectSignedIn)

    return (
        <div className="home_page" style={{ display: isSignedIn ? "none" : "" }} >
             {!isSignedIn && ( 
             <div className="login__message">
               <h2>📖</h2>
              <h3><bold>“The everyday kindness of the back roads more than makes up for the acts of greed in the headlines”</bold></h3>
            <p>
            For websites with a primary focus on delivering droves of content to visitors (think of any major news site or blog)
           </p>
           <GoogleLogin 
             clientId="786395167785-3c8vdob2p6bu16tndqor0mlrj1msv699.apps.googleusercontent.com"
             render={(renderProps)=>(
                 <button
                 onClick={renderProps.onClick}
                 disabled={renderProps.disabled}
                 className="login__button"
                 
                 >
                     Login With Google
                 </button>
             )}
            onSuccess={login}
            onFailure={login}
            isSignedIn={true}
            cookiePolicy={"single_host_origin"}
           />
          </div>
          )}
        </div>
    );
};

export default Homepage
