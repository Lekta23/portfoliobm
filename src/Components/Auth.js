import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';

export function ThisIsStatusAuth(){
    const [isSignedIn, setIsSignedIn] = useState(false);

    useEffect(() => {
        const myStatusAuth = firebase.auth().onAuthStateChanged(user => {
            setIsSignedIn(!!user);
            console.log("user"+user);
            console.log("is signes in"+isSignedIn);
        })
        return () => myStatusAuth();
    }, []);

    if(!isSignedIn){
        return(
            <Link style={{color: "white"}} to="/login">Login</Link>
        )
    }
    return(
        <div>
            <p className="text-white">Bonjour {firebase.auth().currentUser.displayName}</p>
            <button className="text-white" onClick={() => {firebase.auth().signOut()}}>Se déconnecter</button>
        </div>
    )
}