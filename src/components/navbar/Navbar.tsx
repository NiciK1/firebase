import { Link } from 'react-router-dom'
import { auth } from '../../app/config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import './navbarStyle.css'
import { signOut } from 'firebase/auth'

const Navbar = () => {
  const [ user ] = useAuthState(auth)
  //can also return loading & error states -> [ user, loading, error ]

  const signOutUser = async () => {
    try {
      await signOut(auth)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className = 'navbarContainer'>
      <div className='linkContainer'>
        <Link to='/' className='link'>Home</Link>
        {!user ? <Link to='login' className='link'>Login</Link> :
        <Link to='createpost' className='link'>Create Post</Link>}
      </div>
        {user && <div className='profileContainer' onClick={signOutUser}>
            <img src={user?.photoURL || ''} alt='Profile' className='profileImg'/>
            <p className='profileName'>{user?.displayName}</p>
        </div>}
    </div>
  )
}

export default Navbar
