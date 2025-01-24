import React from 'react'
import { FaCirclePlus } from "react-icons/fa6";
import { SlEnergy } from "react-icons/sl";
import { FaCoins } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

import { MdOutlineClear } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const vocabulary = () => {
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


      {/* Game type*/}
      <section className="mt-5">s
        <section>
          <div className="container-fluid">
            <div className="container col-12 col-md-8 mt-3">
              <div className="row ">
                <div className="col-2 bg-lightpurple text-white rounded border-play down-y1">

                </div>
                <div className="col-8 bg-lightpurple above rounded border-play">
                  <h1 className="text-white balance text-center">Vocabulary Building</h1>
                </div>
                <div className="col-2 bg-lightpurple text-violet rounded border-play down-y">

                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <div className="container d-flex justify-content-center mt-4">
        <div className="row mt-5">
          <div className="col-12 text-center">
            <p className="text-white fw-semibold fs-3">
              PLAY NOW
            </p>
          </div>
          <div className="col-12 text-center">
            <button className="btn bg-white big-play rounded-pill text-dark text-center" data-bs-toggle="modal" data-bs-target="#act1">
              <FaPlay className="big-plays" />
            </button>
          </div>
        </div>


      </div>
    </div>
  )
}

export default vocabulary
