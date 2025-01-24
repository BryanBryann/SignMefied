import React, { useState } from 'react';
import { GiSpellBook } from "react-icons/gi";
import { TiSortAlphabeticallyOutline } from "react-icons/ti";
import { LuHandMetal } from "react-icons/lu";
import { IoSettingsSharp } from "react-icons/io5";
import { GoGoal } from "react-icons/go";
import Gesture from "../routes/gesture";
import Alphabet from "../routes/alphabet";
import Play from "../components/guidebook/play";
import PracticeMode from "../routes/practice";
import Video from "../routes/gesturevideo";

const guidebook = () => {
    const [showPage, setShowPage] = useState(3);

    const handleShowAlphabet = () => { setShowPage(1); };
    const handleShowGesture = () => { setShowPage(2); };
    const handleShowPractice = () => { setShowPage(3); };
    const handleShowPracticeMode = () => { setShowPage(4); };
    const handleShowVideo = () => { setShowPage(5); };

    return (
        <div>
            <section>
                {showPage === 1 && <Alphabet onCreate={handleShowAlphabet} />}
                {showPage === 2 && <Gesture onShowVideo={handleShowVideo} />}
                {showPage === 3 && <Play onCreate={handleShowPracticeMode } />}
                {showPage === 4 && <PracticeMode onCreate={handleShowPracticeMode} />}
                {showPage === 5 && <Video onCreate={handleShowPractice} />}
            </section>

            <section>
                <div className="modal fade" id="act1" tabIndex="-1" aria-labelledby="schoolyardModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg modal-dialog-centered">
                        <div className="modal-content bg-none border-none">
                            <div className="modal-body">
                                <div className="container bg-violet rounded border-play col-12 col-md-11">
                                    <div className="row mb-3">
                                        <div className="col-12">
                                            <p className="text-white text-center balance mt-2 fw-semibold fs-5">GUIDEBOOK GOALS</p>
                                        </div>
                                        <div className="container  d-flex justify-content-center">
                                            <div className="col-1 bg-success border-play balance rounded-pill">
                                                <p className="text-white text-center fw-bold fs-5">✔</p>
                                            </div>
                                            <div className="col-10 bg-white border-play rounded balance m-2">
                                                <p className="text-dark text-decoration-line-through fw-semibolds ps-2 fs-5">Familiarize Alphabet for 5 minutes.</p>
                                            </div>
                                        </div>
                                        <div className="container  d-flex justify-content-center">
                                            <div className="col-1 bg-violet balance rounded">
                                                <p className="text-violet text-center fw-bold fs-5">✔</p>
                                            </div>
                                            <div className="col-10 bg-white border-play rounded balance m-2">
                                                <p className="text-dark fw-semibolds ps-2 fs-5">Watch 3 Gesture Tutiorial.</p>
                                            </div>
                                        </div>
                                        <div className="container  d-flex justify-content-center">
                                            <div className="col-1 bg-violet balance rounded">
                                                <p className="text-violet text-center fw-bold fs-5">✔</p>
                                            </div>
                                            <div className="col-10 bg-white border-play rounded balance m-2">
                                                <p className="text-dark fw-semibolds ps-2 fs-5">Try and win practice mode.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container-fluid bg-white hide fixed-top d-flex justify-content-end">
                    <div className="bg-violet showup shadow-fancy c-pointer mt-2 circle rounded-pill text-white border-play fw-semibold fs-md-5 ms-md-5 ms-2 mb-md-4 mb-2 d-flex justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target="#act1">
                        <GoGoal className="fs-huge" />
                    </div>
                    <div className="bg-violet showup-setting shadow-fancy c-pointer mt-2 circle rounded-pill text-white border-play fw-semibold fs-md-5 ms-md-5 ms-2 mb-md-4 mb-2 d-flex justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target="#act1">
                        <IoSettingsSharp className="fs-huge" />
                    </div>
                </div>
            </section>

            <div className="rounded bg-whites fixed-bottom">
                <div className="row text-white bg-white d-flex justify-content-center border-play rounded">
                    <div className="col-2 col-md-2">
                        <button className="border-none bg-white w-100 pt-4 pb-4 pt-md-1 pb-md-1 fs-md-5 text-violet" onClick={handleShowAlphabet}>
                            <TiSortAlphabeticallyOutline className="fs-1" /><br />
                            <p className="d-none d-md-block">Learn the Alphabet</p>
                        </button>
                    </div>
                    <div className="col-4 col-md-4">
                        <button className="border-none border-play mid-btn bg-violet w-100 pt-3 pb-3 pt-md-1 pb-md-1 fs-md-5 text-white rounded-pill" onClick={handleShowPractice}>
                            <GiSpellBook className="fs-1 " /><br />
                            <p className="d-none d-md-block">Practice Mode</p>
                        </button>
                    </div>
                    <div className="col-2 col-md-2 ">
                        <button className="border-none bg-white w-100 pt-4 pb-4 pt-md-1 pb-md-1 fs-md-5 text-violet" onClick={handleShowGesture}>
                            <LuHandMetal className="fs-1" /><br />
                            <p className="d-none d-md-block">Learn Gesture</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default guidebook;