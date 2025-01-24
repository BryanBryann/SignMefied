import React from 'react'

const interview = ({ onCreate }) => {
    return (
        <div className="container ">
            <div className="container  pt-5  col-12 col-md-7">
                <p className="text-dark bg-white p-3 text-center fw-semibold rounded">
                    Next, which player are you?
                </p>
            </div>
            <div className="container col-11 col-md-4 pt-5">

                <button className="btn bg-violet text-white w-100" onClick={onCreate}>
                    I am a deaf (Non-hearing) player
                </button>

                <button className="btn bg-violet mt-3 text-white w-100" onClick={onCreate}>
                    I am a non-deaf (hearing) player
                </button>
            </div>

        </div>
    )
}

export default interview
