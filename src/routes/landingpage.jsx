import React from 'react'
import { FaPlay } from "react-icons/fa";
import { IoPlaySkipForward } from "react-icons/io5";
import { FiPlay } from "react-icons/fi";
import { DiCodeigniter } from "react-icons/di";

const landingpage = () => {
    return (
        <div>
            <nav className="navbar d-none navbar-expand-sm navbar-dark bg-lightpurple">
                <a class="navbar-brand" href="#">.</a>
            </nav>

            <section className="container">
                <div className="row gap-4 d-flex justify-content-center align-items-center vh-100">
                    <div className="col-sm-12 col-md-5">
                        <div className="container d-flex justify-content-center align-items-center">
                            <img className="welcome landingpage-icon" src="dist/img/welcome.png" width="500" height="350" alt="Welcome" />
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6">
                        <p className="text-white ps-4">
                            Signmefy: A Journey to Learning Sign Language
                        </p>
                        <p className="text-white ps-4">
                            Play and Learn ASL Sign through an exciting  and fun game
                        </p>
                        <div className="container">
                            <a href="register" className="btn  text-white bg-violet w-100 mb-3">
                                <FaPlay /> Get Started
                            </a>
                            <a href="guessmode" className="btn text-white bg-violet w-100 mb-3">
                            <DiCodeigniter /> Guest Mode <DiCodeigniter />
                            </a>
                            <a href="tutourial" className="btn bg-violet text-white w-100 mb-3">
                                <FiPlay /> I already have an account
                            </a>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default landingpage
