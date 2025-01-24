import React from 'react'
import { MdAccountCircle } from "react-icons/md";
import { GrMail } from "react-icons/gr";
import { IoSettingsSharp } from "react-icons/io5";

const inbox = () => {
  return (
    <div>
        <div className="container-fluid bg-violet pt-2 pb-2 border-play">
          <p className="text-white fs-2 text-center fw-bold balance">
            SignMefy.com
          </p>
        </div>

        <section>
          <div className="container bg-violet pb-3 border-play rounded col-10 col-md-6 mt-3">
            <p className="text-white fw-semibold pt-2 fs-5">
              More
            </p>
            <div className="container bg-white border-play rounded">
              <div className="row p-2">
                <div className="col-2 balance">
                <MdAccountCircle  className="fs-1 text-t"/>
                </div>
                <div className="col-6 balance">
                  <p className="text-dark fs-5 fw-semibold balance mt-md-1">
                    Profile
                  </p>
                </div>
              </div>
            </div>
            <div className="container bg-white mt-2 border-play rounded">
              <div className="row p-2">
                <div className="col-2 balance">
                <GrMail  className="fs-1 text-danger"/>
                </div>
                <div className="col-6 balance">
                  <p className="text-dark fs-5 fw-semibold balance mt-md-1">
                    Inbox
                  </p>
                </div>
              </div>
            </div>
            
            <div className="container bg-white mt-2 border-play rounded">
              <div className="row p-2">
                <div className="col-2 balance">
                <IoSettingsSharp  className="fs-1 text-sa"/>
                </div>
                <div className="col-6 balance">
                  <p className="text-dark fs-5 fw-semibold balance mt-md-1">
                    setting
                  </p>
                </div>
              </div>
            </div>

            <p className="text-white d-none fw-semibold pt-2 fs-5">
              Connect
            </p>
            <div className="container d-none bg-white border-play rounded">
              <div className="row p-2">
                <div className="col-2 balance">
                <MdAccountCircle  className="fs-1 text-t"/>
                </div>
                <div className="col-6 balance">
                  <p className="text-dark fs-5 fw-semibold balance mt-md-1">
                    Profile
                  </p>
                </div>
              </div>
            </div>
            <div className="container d-none bg-white mt-2 border-play rounded">
              <div className="row p-2">
                <div className="col-2 balance">
                <GrMail  className="fs-1 text-danger"/>
                </div>
                <div className="col-6 balance">
                  <p className="text-dark fs-5 fw-semibold balance mt-md-1">
                    Inbox
                  </p>
                </div>
              </div>
            </div>
            <div className="container d-none bg-white mt-2 border-play rounded">
              <div className="row p-2">
                <div className="col-2 balance">
                <IoSettingsSharp  className="fs-1 text-sa"/>
                </div>
                <div className="col-6 balance">
                  <p className="text-dark fs-5 fw-semibold balance mt-md-1">
                    Setting
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="vh-30">

        </div>
      
    </div>
  )
}

export default inbox
