import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import auth from './../../Firebase/firebase.config';
export const AuthContext = createContext(null)
const Authprovider = ({children}) => {
const [user,setUser] = useState(null)
const [loader,setLoader]=useState(true)
// sign up
const createUser =(email, password)=>{
    setLoader(true)
   return createUserWithEmailAndPassword(auth,email,password)
}
// sign in 
const signInUser =(email,password)=>{
    setLoader(true)
    return signInWithEmailAndPassword(auth,email,password)
}

const logOut = ()=>{
    return signOut(auth);
}
// observe auth state change
// useEffect(()=>{
//    const unSubscriber = onAuthStateChanged(auth,currentUser=>{
//         setUser(currentUser)
//         console.log('oversave current user authprovider',currentUser);
//     })
//     return ()=>{
//         unSubscriber();
//     }
// },[])


// advance observe auth state change
useEffect(()=>{
   const unSubscribe = onAuthStateChanged(auth,currentUser=>{
        console.log('curent user use auth provider', currentUser);
       setUser(currentUser)
       setLoader(false)
    })
    return ()=>{
        unSubscribe();
    }
},[])



    const authInfo = {user, createUser,signInUser,logOut,loader}
    return (
        <AuthContext.Provider value={authInfo}>
         {children}   
        </AuthContext.Provider>
    );
};

export default Authprovider;

Authprovider.propTypes = {
    children: PropTypes.node
}
