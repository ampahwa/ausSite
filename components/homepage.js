import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';
import { Component } from 'react';

class Homepage extends Component {
    render() {
        return (
        <section id="home" className={utilStyles.home}>
            <Image
            src="/../public/AusProfile.jpg" // Route of the image file
            height={200} // Desired size with correct aspect ratio
            width={200} // Desired size with correct aspect 
            className={utilStyles.borderCircle}
            alt="Austin Barron"
            />
            <h1> Austin Barron </h1>
            <h5> In memoriam </h5>
        </section>
        )
    }
}

export default Homepage
