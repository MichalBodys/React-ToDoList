import styles from './NavBar.module.scss'
import Container from '../components/Container/Container'
import { NavLink } from 'react-router-dom';

const NavBar = () => {

    return(
    <nav >
      <Container>
        <div  className={styles.navbar}>
            <a className={styles.icon} href='/'><i className='fa fa-tasks'></i></a>
            <ul className={styles.links}>
                <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                 to="/">Home</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? styles.linkActive : undefined } to="/favorite">Favorite</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? styles.linkActive : undefined} to="/about">About</NavLink></li>
            </ul>
        </div>
      </Container>
    </nav>

    )

}

export default NavBar