import React from 'react'
import { DiCodeigniter } from "react-icons/di";
import { FaCheckCircle } from "react-icons/fa";
import { FaCoins } from "react-icons/fa6";
import { GiChest } from "react-icons/gi";

const dailymission = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="container mt-3">
          <div className="row ">
            <div className="col-2 bg-violet text-violet rounded border-play down-y1">

            </div>
            <div className="col-8 bg-violet above rounded border-play">
              <h1 className="text-white text-center balance">Daily Mission</h1>
            </div>
            <div className="col-2 bg-violet text-violet rounded border-play down-y">

            </div>
          </div>
        </div>

      </div>

      <section>
        <div className="container bg-white d-none p-2 rounded">
          <div className="row d-flex justify-content-center gap-4">
            <div className="col-1">
              <div className="row">
                <DiCodeigniter className="text-m fs-1" />
                <h2 className="text-white text-center bg-violet border-play rounded-pill mt-2">
                  M
                </h2>
              </div>
            </div>
            <div className="col-1">
              <div className="row">
                <DiCodeigniter className="text-t fs-1" />
                <h2 className="text-white text-center bg-violet border-play rounded-pill mt-2">
                  T
                </h2>
              </div>
            </div>
            <div className="col-1">
              <div className="row">
                <DiCodeigniter className="text-w fs-1" />
                <h2 className="text-white text-center bg-violet border-play rounded-pill mt-2">
                  W
                </h2>
              </div>
            </div>
            <div className="col-1">
              <div className="row">
                <DiCodeigniter className="text-th fs-1" />
                <h2 className="text-white text-center bg-violet border-play rounded-pill mt-2">
                  TH
                </h2>
              </div>
            </div>
            <div className="col-1">
              <div className="row">
                <DiCodeigniter className="text-f fs-1" />
                <h2 className="text-white text-center bg-violet border-play rounded-pill mt-2">
                  F
                </h2>
              </div>
            </div>
            <div className="col-1">
              <div className="row">
                <DiCodeigniter className="text-sa fs-1" />
                <h2 className="text-white text-center bg-violet border-play rounded-pill mt-2">
                  SA
                </h2>
              </div>
            </div>
            <div className="col-1">
              <div className="row">
                <DiCodeigniter className="text-su fs-1" />
                <h2 className="text-white text-center bg-violet border-play rounded-pill mt-2">
                  SU
                </h2>
              </div>
            </div>
          </div>




        </div>
      </section>

      <section>
        <div className="container bg-violet mt-4 mt-mb-5 col-11 col-md-8 border-play p-3 rounded">
          <div className="container d-none bg-white border-play rounded">
            <div className="row">
              <div className="col-5 col-md-8 pt-md-3 pt-3 bg-warnings">
                <p className="text-dark text-center">
                  Watch atleast 3 Gesture Tutorial from guidebook
                </p>
              </div>
              <div className="col-3 col-md-2 d-flex align-items-center justify-content-center">
                <div className="bg-violet border-play p-1 mt-2 p-md-2 text-white rounded">
                  <FaCoins className="fs-5 text-center text-warning" />
                  x100
                </div>
              </div>
              <div className="col-4 col-md-2 sbg-info d-flex justify-content-center align-items-center">
                <button className="btn bg-success border-play p-3 text-white fw-semibold">
                  Claimed
                </button>
              </div>
            </div>
          </div>

          <div className="container bg-white border-play rounded">
            <div className="row d-flex justify-content-center p-3">
              <div className="col-12">
                <p className="text-dark text-center balance">Watch atleast 3 Gesture Tutorial from guidebook</p>
              </div>
            </div>
          </div>

          <div className="container mt-3 bg-white border-play rounded">
            <div className="row d-flex justify-content-center p-3">
              <div className="col-12">
                <p className="text-dark text-center balance">Play story game once.</p>
              </div>
            </div>
          </div>

          <div className="container mt-3 bg-white border-play rounded">
            <div className="row d-flex justify-content-center p-3">
              <div className="col-12">
                <p className="text-dark text-center balance">Purchase 1 item from the store.</p>
              </div>
            </div>
          </div>



          <div className="container d-none mt-3 bg-white border-play rounded">
            <div className="row">
              <div className="col-5 col-md-8 pt-md-3 pt-3 bg-warnings">
                <p className="text-dark fs-5 text-center">
                  Spell "Hello"
                </p>
              </div>
              <div className="col-3 col-md-2 d-flex align-items-center justify-content-center">
                <div className="bg-violet border-play p-1 mt-2 mt-1 p-md-2 text-white rounded">
                  <FaCoins className="fs-5 text-center text-warning" />
                  x100
                </div>
              </div>
              <div className="col-4 col-md-2 d-flex justify-content-center align-items-center">
                <button className="btn bg-success border-play p-3 text-white fw-semibold">
                  Play
                </button>
              </div>
            </div>
          </div>
          <div className="container d-none mt-3 bg-white border-play rounded">
            <div className="row">
              <div className="col-5 col-md-8 pt-md-3 pt-3 bg-warnings">
                <p className="text-dark fs-5 text-center">
                  Spell "Username"
                </p>
              </div>
              <div className="col-3 col-md-2 d-flex align-items-center justify-content-center">
                <div className="bg-violet border-play p-1 mt-2 p-md-2 text-white rounded">
                  <FaCoins className="fs-5 text-center text-warning" />
                  x100
                </div>
              </div>
              <div className="col-4 col-md-2 sbg-info d-flex justify-content-center align-items-center">
                <button className="btn bg-success border-play p-3 text-white fw-semibold">
                  Play
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container col-11 col-md-10 border-play rounded-smooth bg-violet mt-3">
          <div className="container pt-3">
            <p className="text-white fs-4 text-center fw-semibold">
              Daily Rewards
            </p>
          </div>
          <div className="container">
            <div className="row gap-2 d-flex justify-content-center">
              <div className="col-5 col-md-3 bg-white border-play rounded m-1 p-2">
                <div className="container-fluid">
                  <div className="col-12">
                    <p className="text-dark balance fw-bold fs-5 text-center">DAY 1</p>
                  </div>
                  <div className="col-12 text-center balance">
                    <img src="dist/img/koala.png" width="100" height="100" alt="Item" />
                  </div>
                  <div className="col-12 mt-3">
                    <p className="text-dark balance text-center">
                      100
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-5 col-md-3 bg-white border-play rounded m-1 p-2">
                <div className="container-fluid">
                  <div className="col-12">
                    <p className="text-dark balance fw-bold fs-5 text-center">DAY 2</p>
                  </div>
                  <div className="col-12 text-center balance">
                    <img src="dist/img/koala.png" width="100" height="100" alt="Item" />
                  </div>
                  <div className="col-12 mt-3">
                    <p className="text-dark balance text-center">
                      100
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-5 col-md-3 bg-white border-play rounded m-1 p-2">
                <div className="container-fluid">
                  <div className="col-12">
                    <p className="text-dark balance fw-bold fs-5 text-center">DAY 3</p>
                  </div>
                  <div className="col-12 text-center balance">
                    <img src="dist/img/koala.png" width="100" height="100" alt="Item" />
                  </div>
                  <div className="col-12 mt-3">
                    <p className="text-dark balance text-center">
                      100
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-5 col-md-3 bg-white border-play rounded m-1 p-2">
                <div className="container-fluid">
                  <div className="col-12">
                    <p className="text-dark balance fw-bold fs-5 text-center">DAY 4</p>
                  </div>
                  <div className="col-12 text-center balance">
                    <img src="dist/img/koala.png" width="100" height="100" alt="Item" />
                  </div>
                  <div className="col-12 mt-3">
                    <p className="text-dark balance text-center">
                      100
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-5 col-md-3 bg-white border-play rounded m-1 p-2">
                <div className="container-fluid">
                  <div className="col-12">
                    <p className="text-dark balance fw-bold fs-5 text-center">DAY 5</p>
                  </div>
                  <div className="col-12 text-center balance">
                    <img src="dist/img/koala.png" width="100" height="100" alt="Item" />
                  </div>
                  <div className="col-12 mt-3">
                    <p className="text-dark balance text-center">
                      100
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-5 col-md-3 bg-white border-play rounded m-1 p-2">
                <div className="container-fluid">
                  <div className="col-12">
                    <p className="text-dark balance fw-bold fs-5 text-center">DAY 6</p>
                  </div>
                  <div className="col-12 text-center balance">
                    <img src="dist/img/koala.png" width="100" height="100" alt="Item" />
                  </div>
                  <div className="col-12 mt-3">
                    <p className="text-dark balance text-center">
                      100
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-10 bg-white border-play rounded m-1 p-2">
                <div className="container-fluid">
                  <div className="col-12">
                    <p className="text-dark balance fw-bold fs-5 text-center">DAY 7</p>
                  </div>
                  <div className="col-12 text-center balance">
                    <img src="dist/img/koala.png" width="100" height="100" alt="Item" />
                  </div>
                  <div className="col-12 mt-3">
                    <p className="text-dark balance text-center">
                      100
                    </p>
                  </div>
                </div>
              </div>

              
            </div>
          </div>
          <div className="container pt-3">
            <p className="text-white balance fs-5 text-center">
              Come back tommorow for your next reward!
            </p>
          </div>
          <div className="container pt-3 mb-3 d-flex justify-content-center">
            <button className="btn bg-lightpurple fs-5 text-white w-50">
              Claim
            </button>
          </div>

        </div>
      </section>

      <div className="vh-30">

      </div>


    </div>
  )
}

export default dailymission
