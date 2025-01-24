import React from 'react'
import { FaCirclePlus } from "react-icons/fa6";
import { SlEnergy } from "react-icons/sl";
import { FaCoins } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

import { MdOutlineClear } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const story = () => {
    return (
        <div>
            {/* you */}
            <section>
                <div className="container fixed-top bg-whites">
                    <div className="row text-center">
                        <div className="col bg-violet border-play mt-2 mb-2 pt-1 pb-1 text-white rounded">
                            <div className="row">
                                <div className="col-4 col-md-4">
                                    <FaCirclePlus className="fs-1" />
                                </div>
                                <div className="col-4 col-md-4 d-flex justify-content-center align-items-center fw-semibold">
                                    5/5
                                </div>
                                <div className="col-4 col-md-4">
                                    <SlEnergy className="fs-1" />
                                </div>
                            </div>
                        </div>
                        <div className="col-3 col-md-1 d-flex justify-content-center align-items-center bg-none rounded">
                            <div className="profile-size-huge dp-koala-b1 border-play rounded-pill text-center bg-white text-white">

                            </div>
                        </div>
                        <div className="col bg-violet border-play mt-2 mb-2 pt-1 pb-1 text-white rounded">
                            <div className="row">
                                <div className="col-4">
                                    <FaCoins className="fs-1" />
                                </div>
                                <div className="col-4 d-flex justify-content-center align-items-center fw-semibold">
                                    100
                                </div>
                                <div className="col-4 ">
                                    <FaCirclePlus className="fs-1" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* modals */}
            <section>
                <div className="modal fade" id="act1" tabIndex="-1" aria-labelledby="schoolyardModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg modal-dialog-centered">
                        <div className="modal-content bg-none border-none">

                            <div className="modal-body">
                                <div className="container bg-violet rounded border-play col-8">
                                    <div className="container-fluid d-flex justify-content-end align-items-end">
                                        <button className="bg-danger close-btn border-play" data-bs-dismiss="modal">
                                            <MdOutlineClear className="text-white fs-5" />
                                        </button>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <p className="text-warning text-center fs-huge pt-2"><FaStar className="star1" /><FaStar className="star2" /><FaStar className="star3" /></p>
                                        </div>
                                        <div className="col-12">
                                            <p className="text-white text-center balance fw-semibold fs-5">
                                                Act I : Animals
                                            </p>
                                        </div>
                                        <div className="col-12 mt-3 mb-3">
                                            <p className="text-white text-center balance">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio deserunt non atque et vitae dolore saepe architecto est ducimus doloremque?
                                            </p>
                                        </div>
                                        <div className="col-12 mb-3">
                                            <button className="btn bg-success w-100 border-play text-white fw-semibold">
                                                PLAY NOW
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* chapter 1 */}
            <section className="mt-5">s
                <section>
                    <div className="container-fluid">
                        <div className="container col-12 col-md-8 mt-3">
                            <div className="row ">
                                <div className="col-2 bg-lightpurple text-white rounded border-play down-y1">
                                    
                                </div>
                                <div className="col-8 bg-lightpurple above rounded border-play">
                                    <h1 className="text-white balance text-center">Chapter I : Schoolyard</h1>
                                </div>
                                <div className="col-2 bg-lightpurple text-violet rounded border-play down-y">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

            <section>
                <div className="container bg-lightpurples col-10 col-md-5 pt-2 pb-3 rounded sborder-play mt-2">
                    <div className="row d-flex mt-3 justify-content-center">
                        <div className="col-5 bg-violet border-play move-left pt-3 w-level rounded text-center">
                            <button className="btn bg-white rounded-pill text-dark text-center" data-bs-toggle="modal" data-bs-target="#act1">
                                <FaPlay />
                            </button>
                            <p className="text-warning fs-4 pt-2"><FaStar /><FaStar /><FaStar /></p>
                        </div>
                    </div>
                    <div className="row mt-3 d-flex justify-content-center">
                        <div className="col-5 bg-violet border-play move-right pt-3 w-level rounded text-center">
                            <button className="btn bg-white rounded-pill text-dark text-center" data-bs-toggle="modal" data-bs-target="#act1">
                                <FaPlay />
                            </button>
                            <p className="text-warning fs-4 pt-2"><FaRegStar /><FaRegStar /><FaRegStar /></p>
                        </div>
                    </div>

                    <div className="row d-flex justify-content-center">
                        <div className="col-5 bg-violet border-play move-left pt-3 w-level rounded text-center">
                            <button className="btn bg-white rounded-pill text-dark text-center" data-bs-toggle="modal" data-bs-target="#act1">
                                <FaLock />
                            </button>
                            <p className="text-warning fs-4 pt-2"><FaRegStar /><FaRegStar /><FaRegStar /></p>
                        </div>
                    </div>
                    <div className="row mt-3 d-flex justify-content-center">
                        <div className="col-5 bg-violet border-play move-right pt-3 w-level rounded text-center">
                            <button className="btn bg-white rounded-pill text-dark text-center" data-bs-toggle="modal" data-bs-target="#act1">
                                <FaLock />
                            </button>
                            <p className="text-warning fs-4 pt-2"><FaRegStar /><FaRegStar /><FaRegStar /></p>
                        </div>
                    </div>

                    <div className="row d-flex justify-content-center">
                        <div className="col-5 bg-violet border-play move-left pt-3 w-level rounded text-center">
                            <button className="btn bg-white rounded-pill text-dark text-center" data-bs-toggle="modal" data-bs-target="#act1">
                                <FaLock />
                            </button>
                            <p className="text-warning fs-4 pt-2"><FaRegStar /><FaRegStar /><FaRegStar /></p>
                        </div>
                    </div>

                    

                    

                </div>
            </section>

            {/* chapter 2 */}
            <section className="mt-5">s
                <section>
                    <div className="container-fluid">
                        <div className="container col-12 col-md-8 mt-3">
                            <div className="row ">
                                <div className="col-2 bg-lightpurple text-white rounded border-play down-y1">
                                    
                                </div>
                                <div className="col-8 bg-lightpurple above rounded border-play">
                                    <h1 className="text-white balance text-center">Chapter II : Hallway</h1>
                                </div>
                                <div className="col-2 bg-lightpurple text-violet rounded border-play down-y">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

            <section>
                <div className="container bg-lightpurples col-10 col-md-5 pt-2 pb-3 rounded sborder-play mt-2">
                    <div className="row d-flex mt-3 justify-content-center">
                        <div className="col-5 bg-violet border-play move-left pt-3 w-level rounded text-center">
                            <button className="btn bg-white rounded-pill text-dark text-center" data-bs-toggle="modal" data-bs-target="#act1">
                                <FaLock />
                            </button>
                            <p className="text-warning fs-4 pt-2"><FaRegStar /><FaRegStar /><FaRegStar /></p>
                        </div>
                    </div>
                    <div className="row mt-3 d-flex justify-content-center">
                        <div className="col-5 bg-violet border-play move-right pt-3 w-level rounded text-center">
                            <button className="btn bg-white rounded-pill text-dark text-center" data-bs-toggle="modal" data-bs-target="#act1">
                                <FaLock />
                            </button>
                            <p className="text-warning fs-4 pt-2"><FaRegStar /><FaRegStar /><FaRegStar /></p>
                        </div>
                    </div>

                    <div className="row d-flex justify-content-center">
                        <div className="col-5 bg-violet border-play move-left pt-3 w-level rounded text-center">
                            <button className="btn bg-white rounded-pill text-dark text-center" data-bs-toggle="modal" data-bs-target="#act1">
                                <FaLock />
                            </button>
                            <p className="text-warning fs-4 pt-2"><FaRegStar /><FaRegStar /><FaRegStar /></p>
                        </div>
                    </div>
                    <div className="row mt-3 d-flex justify-content-center">
                        <div className="col-5 bg-violet border-play move-right pt-3 w-level rounded text-center">
                            <button className="btn bg-white rounded-pill text-dark text-center" data-bs-toggle="modal" data-bs-target="#act1">
                                <FaLock />
                            </button>
                            <p className="text-warning fs-4 pt-2"><FaRegStar /><FaRegStar /><FaRegStar /></p>
                        </div>
                    </div>

                    <div className="row d-flex justify-content-center">
                        <div className="col-5 bg-violet border-play move-left pt-3 w-level rounded text-center">
                            <button className="btn bg-white rounded-pill text-dark text-center" data-bs-toggle="modal" data-bs-target="#act1">
                                <FaLock />
                            </button>
                            <p className="text-warning fs-4 pt-2"><FaRegStar /><FaRegStar /><FaRegStar /></p>
                        </div>
                    </div>

                    

                    

                </div>
            </section>

            {/* chapter 3 */}
            <section className="mt-5">s
                <section>
                    <div className="container-fluid">
                        <div className="container col-12 col-md-8 mt-3">
                            <div className="row ">
                                <div className="col-2 bg-lightpurple text-white rounded border-play down-y1">
                                    
                                </div>
                                <div className="col-8 bg-lightpurple above rounded border-play">
                                    <h1 className="text-white balance text-center">Chapter III : Library</h1>
                                </div>
                                <div className="col-2 bg-lightpurple text-violet rounded border-play down-y">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

            <section>
                <div className="container bg-lightpurples col-10 col-md-5 pt-2 pb-3 rounded sborder-play mt-2">
                    <div className="row d-flex mt-3 justify-content-center">
                        <div className="col-5 bg-violet border-play move-left pt-3 w-level rounded text-center">
                            <button className="btn bg-white rounded-pill text-dark text-center" data-bs-toggle="modal" data-bs-target="#act1">
                                <FaLock />
                            </button>
                            <p className="text-warning fs-4 pt-2"><FaRegStar /><FaRegStar /><FaRegStar /></p>
                        </div>
                    </div>
                    <div className="row mt-3 d-flex justify-content-center">
                        <div className="col-5 bg-violet border-play move-right pt-3 w-level rounded text-center">
                            <button className="btn bg-white rounded-pill text-dark text-center" data-bs-toggle="modal" data-bs-target="#act1">
                                <FaLock />
                            </button>
                            <p className="text-warning fs-4 pt-2"><FaRegStar /><FaRegStar /><FaRegStar /></p>
                        </div>
                    </div>

                    <div className="row d-flex justify-content-center">
                        <div className="col-5 bg-violet border-play move-left pt-3 w-level rounded text-center">
                            <button className="btn bg-white rounded-pill text-dark text-center" data-bs-toggle="modal" data-bs-target="#act1">
                                <FaLock />
                            </button>
                            <p className="text-warning fs-4 pt-2"><FaRegStar /><FaRegStar /><FaRegStar /></p>
                        </div>
                    </div>
                    <div className="row mt-3 d-flex justify-content-center">
                        <div className="col-5 bg-violet border-play move-right pt-3 w-level rounded text-center">
                            <button className="btn bg-white rounded-pill text-dark text-center" data-bs-toggle="modal" data-bs-target="#act1">
                                <FaLock />
                            </button>
                            <p className="text-warning fs-4 pt-2"><FaRegStar /><FaRegStar /><FaRegStar /></p>
                        </div>
                    </div>

                    <div className="row d-flex justify-content-center">
                        <div className="col-5 bg-violet border-play move-left pt-3 w-level rounded text-center">
                            <button className="btn bg-white rounded-pill text-dark text-center" data-bs-toggle="modal" data-bs-target="#act1">
                                <FaLock />
                            </button>
                            <p className="text-warning fs-4 pt-2"><FaRegStar /><FaRegStar /><FaRegStar /></p>
                        </div>
                    </div>

                    

                    

                </div>
            </section>





            <section className="vh-30">

            </section>

        </div>
    )
}

export default story
