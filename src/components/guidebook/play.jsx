import React from 'react'

const play = ({onCreate}) => {
    return (
        <div>
            <div className="container-fluid">
                <div className="container mt-3">
                    <div className="row ">
                        <div className="col-2 bg-violet text-violet rounded border-play down-y1">
                            s
                        </div>
                        <div className="col-8 bg-violet above rounded border-play">
                            <h1 className="text-white text-center">Practice Mode</h1>
                        </div>
                        <div className="col-2 bg-violet text-violet rounded border-play down-y">
                            s
                        </div>
                    </div>
                </div>

            </div>

            <div className="container mt-5 mt-md-4 col-10 col-md-4 bg-violet border-play rounded border-play">
                <p className="text-white balance fs-5 fw-semibold">
                    <span className="text-danger">Reminder</span>: You will be playing a game that allows you to utilize your knowledge with the sign language alphabet. <br />
                    <span className="text-info">RULES</span><br />
                    1. You will be penalize <br />
                    2. You will be punish
                </p>
            </div>

            <section>
                <div className="container mt-md-5 mt-4 mb-5 col-12 col-md-8">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-2 col-5">
                            <button className="btn bg-success border-play rounded-pill fw-semibold text-white w-100" onClick={onCreate}>
                                Play Now
                            </button>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default play
