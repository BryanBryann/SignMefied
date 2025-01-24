import React, { useState, useEffect } from 'react';
import { FaPlay } from "react-icons/fa";

const gesture = () => {
    const handleClick = () => {
        // const nextIndex = (currentVideoIndex - 1 + videoData.length) % videoData.length;
        // setCurrentVideoIndex(nextIndex);
        // onIndexChange(nextIndex);
      };

    return (
        <div>


            <section>
                <div className="container mt-3">
                    <div className="p-4 border-thick rounded bg-white text-black text-start fw-semibold w-100">
                        Watch atleast 3 category tutiorial to complete one goal for the guidebook.
                    </div>
                </div>
            </section>

            <section>
                <div className="container mt-3">
                    <a href="/video" className="btn p-3 bg-violet text-white text-start fw-bold w-100" onClick={handleClick}>
                        0 1 <span className="ps-4 fw-normal">Adjectives</span>
                    </a>
                </div>

                <div className="container mt-3">
                    <a href="/video" className="btn p-3 bg-violet text-white text-start fw-bold w-100" onClick={handleClick}>
                        0 2 <span className="ps-4 fw-normal">Verb</span>
                    </a>
                </div>

                <div className="container mt-3">
                    <a href="/video" className="btn p-3 bg-violet text-white text-start fw-bold w-100" onClick={handleClick}>
                        0 3 <span className="ps-4 fw-normal">Adverb</span>
                    </a>
                </div>

                <div className="container mt-3">
                    <a href="/video" className="btn p-3 bg-violet text-white text-start fw-bold w-100" onClick={handleClick}>
                        0 4 <span className="ps-4 fw-normal">Animals</span>
                    </a>
                </div>

                <div className="container mt-3">
                    <a href="/video" className="btn p-3 bg-violet text-white text-start fw-bold w-100" onClick={handleClick}>
                        0 5 <span className="ps-4 fw-normal">Food</span>
                    </a>
                </div>

                <div className="container mt-3">
                    <a href="/video" className="btn p-3 bg-violet text-white text-start fw-bold w-100" onClick={handleClick}>
                        0 6 <span className="ps-4 fw-normal">Subjects</span>
                    </a>
                </div>

                <div className="container mt-3">
                    <a href="/video" className="btn p-3 bg-violet text-white text-start fw-bold w-100" onClick={handleClick}>
                        0 7 <span className="ps-4 fw-normal">Sports</span>
                    </a>
                </div>

                <div className="container mt-3">
                    <a href="/video" className="btn p-3 bg-violet text-white text-start fw-bold w-100" onClick={handleClick}>
                        0 8 <span className="ps-4 fw-normal">Vehicles</span>
                    </a>
                </div>

                <div className="container mt-3">
                    <a href="/video" className="btn p-3 bg-violet text-white text-start fw-bold w-100" onClick={handleClick}>
                        0 9 <span className="ps-4 fw-normal">Simple Greetings</span>
                    </a>
                </div>

                <div className="container mt-3">
                    <a href="/video" className="btn p-3 bg-violet text-white text-start fw-bold w-100" onClick={handleClick}>
                        1 0 <span className="ps-4 fw-normal">Profession</span>
                    </a>
                </div>

                <div className="container mt-3">
                    <a href="/video" className="btn p-3 bg-violet text-white text-start fw-bold w-100" onClick={handleClick}>
                        1 1 <span className="ps-4 fw-normal">Shapes</span>
                    </a>
                </div>

                <div className="container mt-3">
                    <a href="/video" className="btn p-3 bg-violet text-white text-start fw-bold w-100" onClick={handleClick}>
                        1 2 <span className="ps-4 fw-normal">Colors</span>
                    </a>
                </div>

                <div className="container mt-3">
                    <a href="/video" className="btn p-3 bg-violet text-white text-start fw-bold w-100" onClick={handleClick}>
                        1 3 <span className="ps-4 fw-normal">Emotions</span>
                    </a>
                </div>

                <div className="container mt-3">
                    <a href="/video" className="btn p-3 bg-violet text-white text-start fw-bold w-100" onClick={handleClick}>
                        1 4 <span className="ps-4 fw-normal">Items</span>
                    </a>
                </div>

                <div className="container mt-3">
                    <a href="/video" className="btn p-3 bg-violet text-white text-start fw-bold w-100" onClick={handleClick}>
                        1 5 <span className="ps-4 fw-normal">Numbers</span>
                    </a>
                </div>

                <div className="container mt-3">
                    <a href="/video" className="btn p-3 bg-violet text-white text-start fw-bold w-100" onClick={handleClick}>
                        1 6 <span className="ps-4 fw-normal">Days of the week</span>
                    </a>
                </div>

                <div className="container mt-3">
                    <a href="/video" className="btn p-3 bg-violet text-white text-start fw-bold w-100" onClick={handleClick}>
                        1 7 <span className="ps-4 fw-normal">Planets</span>
                    </a>
                </div>

                <div className="container mt-3">
                    <a href="/video" className="btn p-3 bg-violet text-white text-start fw-bold w-100" onClick={handleClick}>
                        1 8 <span className="ps-4 fw-normal">Body Parts</span>
                    </a>
                </div>


            </section>

            <div className="vh-30">

            </div>

        </div>
    )
}

export default gesture
