//LINK DOESN'T WORK INSIDE MENUITEM

import { Component } from "react"
import { Link } from "react-scroll";

import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';

import styles from '../styles/navstyles.module.css'

class NavBar extends Component {
    render() {
        return (
          <Sidebar>
            <Menu>
              <MenuItem>
                <Link activeClass={styles.active} smooth spy to="home">
                    Home
                </Link>
              </MenuItem>
              <MenuItem>
                <Link activeClass={styles.active} smooth spy to="writings">
                    Writings
                </Link>
              </MenuItem>
              <MenuItem>
                <Link activeClass={styles.active} smooth spy to="films">
                    Films
                </Link>
              </MenuItem>
              <MenuItem>
                <Link activeClass={styles.active} smooth spy to="misc">
                    Misc
                </Link>
              </MenuItem>
              <MenuItem>
                <Link activeClass={styles.active} smooth spy to="contact">
                    Contact
                </Link>
              </MenuItem>
            </Menu>
          </Sidebar>
        )
    }
}

export default NavBar;
