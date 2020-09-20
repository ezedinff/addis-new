import Link from 'next/link';
import React from 'react';
import styles from './slider.module.css';


const Slider = () => {
    return (
        <div className={styles.sliderContainer + " flex flex-col  bg-right bg-no-repeat"}
        style={{backgroundImage: "url(images/preview.png)"}}
        >
            <div className={styles.sliderCard + " rounded-lg sm:ml-32 max-w-md sm:mx-auto mt-16 p-8 m-4 shadow bg-purple-800"}
            >
                <h1 className="text-white text-3xl font-bold">
                    Addis New
                </h1>
                <p className="text-white mb-8">
                a state-of-the-art digital market place. It is helping to transform shopping malls and merchandise / retailers market to the new age.
                </p>
                <Link href="/about">
                    <a className={styles.showMore}>About Us</a>
                </Link>
            </div>
        </div>
    )
}

export default Slider;