import React from 'react';
import styles from "./feature.module.css";
const Feature = ({title}) => {
    return (
        <div className="container flex flex-col">
            <div className="box-border self-center border-solid border-b-2 border-opacity-100 border-pink-700">
                 <h1 className="text-purple-800 p-4 text-3xl">{title}</h1>
            </div>
            <div className="flex-grow grid sm:grid-cols-1 md:grid-cols-3 items-center">
                <div className={styles.card}>
                    <img alt={'Century Mall'} src="https://www.gerettaconsult.com/wp-content/uploads/2018/08/1J2A6714-1024x683-1024x683.jpg" style={{width: "100%"}}/>
                    <h1 className="text-gray-800 text-md px-4">Century Mall</h1>
                    <p className="text-gray-800 text-sm pb-2 px-4">Rate: </p>
                </div>
                <div className={styles.card}>
                    <img alt={'Century Mall'} src="https://i.pinimg.com/236x/a3/4b/c8/a34bc848b44676e60fcbb437e140d7b1.jpg" style={{width: "100%", maxHeight: "200px"}}/>
                    <h1 className="text-gray-800 text-md px-4">Century Mall</h1>
                    <p className="text-gray-800 text-sm pb-2 px-4">Rate: </p>
                </div>
                <div className={styles.card}>
                    <img alt={'Century Mall'} src="https://i.pinimg.com/236x/c5/d7/a7/c5d7a76d0da307a4f3647d33ba0eed36.jpg" style={{width: "100%", maxHeight: "200px"}}/>
                    <h1 className="text-gray-800 text-md px-4">Century Mall</h1>
                    <p className="text-gray-800 text-sm pb-2 px-4">Rate: </p>
                </div>
            </div>
        </div>
    )
}

export default Feature;