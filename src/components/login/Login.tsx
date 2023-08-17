import React from 'react'
import './loginStyle.css'
import { FcGoogle } from 'react-icons/fc'
import { provider, auth } from '../../app/config/firebase'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()

  const signInWithGoogle = async () => {
    try{
        const response = await signInWithPopup(auth, provider);
        console.log(response)
        navigate('/');
    } catch (e) {
        console.log(e)
    }
    
  }

  return (
    <div>
        <button onClick={signInWithGoogle} className='loginWithGoogleBtn' title="googleLogin"><FcGoogle className='loginWithGoogleBtn-googleIcon' size='3rem'/></button>
    </div>
  )
}

export default Login