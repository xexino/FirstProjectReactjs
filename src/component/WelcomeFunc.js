import React from 'react'
import { useState } from 'react'

const WelcomeFunc = () => {

    const [compteur, setcompteur] = useState(0)
    return (
        <div className="d-flex justify-content-center align-items-center flex-column position-absolute top-50 start-50 translate-middle">
            <h1>Hola {compteur}</h1>
            <div className="d-flex flex-row m-10 p-2 ">
                <button
                    className="btn btn-secondary m-3 p-2 "
                    onClick={() => setcompteur(compteur + 1)}
                >Increase</button>
                <button
                    className="btn btn-danger m-3 p-2 "
                    disabled={compteur==0}
                    onClick={() => setcompteur(compteur - 1)}
                >Dcrease</button>
            </div>
        </div>
    )

    // function incNumber(Number) {
    //     return Number = Number + 1;
    // }

    // function decNumber(Number) {
    //     if (Number > 0) {
    //         return Number = Number - 1;
    //     } else {
    //         alert("Sorry bro you can't \u{1F628}")
    //         return Number = 0
    //     }
    // }

}



export default WelcomeFunc
