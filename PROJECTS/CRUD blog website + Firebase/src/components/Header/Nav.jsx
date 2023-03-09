import { signOut, onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../firebase/base'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import '../../App.css'


const Nav = ({ search, setSearch }) => {
    const NavLink = [{ name: 'Home', link: '/' }, { name: 'Post', link: '/newpost' }, { name: 'Doc', link: '/doc' }]
    const [logged, setLogged] = useState(false);
    const [username, setUsername] = useState('');
    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUsername(localStorage.getItem('username'));
                setLogged(true);
            } else {
                setLogged(false);
            }
        });
        return () => listen();
    }, []);


    const handleSignout = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                setLogged(false);
                console.log('Sign-out successful.');
            }).catch((error) => {
                // An error happened.
                console.log(error);
            });
    }

    return (
        <nav className='Nav z-50'>
            <form className='searchForm' onSubmit={e => e.preventDefault()}>
                <label htmlFor='search'>Search Posts</label>
                <input
                    type="text"
                    id='search'
                    placeholder='Search Posts'
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
            </form>
            <p className='logo'>{username}</p>
            <ul>
                {
                    NavLink.map((e, idx) => (
                        <li key={idx}><Link to={e.link}>{e.name}</Link></li>
                    ))
                }
                {
                    logged ? (
                        <button onClick={handleSignout}>Signout</button>
                    ) : (
                        <button><Link to='/login'>Login</Link></button>
                    )

                }
            </ul>
        </nav>
    )
}

export default Nav