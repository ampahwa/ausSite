import { Component } from "react"
import { Link } from "react-scroll";

import styles from '../styles/navstyles.module.css'

class NavBar extends Component {
    render() {
        return (
          <div className={styles.App}>
            <header className={styles.nav}>
            <nav className={styles.nav__container__actions}>
            <ul>
                <li>
                <Link activeClass={styles.active} smooth spy to="home">
                    Home
                </Link>    
                </li>
                <li>
                <Link activeClass={styles.active} smooth spy to="writings">
                    Writings
                </Link>
                </li>
                <li>
                <Link activeClass={styles.active} smooth spy to="films">
                    Films
                </Link>
                </li>
                <li>
                <Link activeClass={styles.active} smooth spy to="misc">
                    Misc
                </Link>
                </li>
                <li>
                <Link activeClass={styles.active} smooth spy to="contact">
                    Contact
                </Link>
                </li>
            </ul>
            </nav>
            </header>
            <style jsx>{`
              ul {
                display:block
                gap: 1rem;
                list-style: none;
                font-size: 24px;
                padding: 8px
              }

              li {
                margin-left: 15px;
                font-size: 40px;
                cursor: pointer;
              }

              li:hover {
                text-decoration: underline;
              }
            `}</style>
        </div>
        )
    }
}

export default NavBar;
