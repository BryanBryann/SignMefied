import React from 'react'

const interview1 = ({ onCreate }) => {
    return (
        <div className="container ">
            <div className="container  pt-5  col-12 col-md-7">
                <p className="text-dark bg-white p-3 text-center fw-semibold rounded">
                    Lastly, why do you want to learn sign language?
                </p>
            </div>
            <div className="container col-9 col-md-4 pt-5">

                <button className="btn bg-violet text-white w-100" onClick={onCreate}>
                    For my personal interest
                </button>

                <button className="btn bg-violet mt-3 text-white w-100" onClick={onCreate}>
                    For my deaf relative/friend
                </button>

                <button className="btn bg-violet mt-3 text-white w-100" onClick={onCreate}>
                    For work
                </button>

                <button className="btn bg-violet mt-3 text-white w-100" onClick={onCreate}>
                    Others
                </button>
            </div>

        </div>
    )
}

export default interview1
