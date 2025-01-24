import React from 'react'
import { MdDriveFileRenameOutline } from "react-icons/md";

const guessmode = () => {
    return (
        <div className="vh-100 d-flex justify-content-center align-items-center">
            <div className="container-fluid">
                <div className="row">
                    <div className="container col-12 col-md-7">
                        <p className="text-dark bg-white p-3 text-center fw-semibold rounded">
                            <span className="text-danger">WARNING</span> : Guess Mode will result in the non-persistence of your account data. All associated information, including progress, settings, and preferences, will not be saved and will be lost upon exiting the application. Full account functionality and data retention require registration via the standard procedure.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="container col-9 col-md-4 pt-5">
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1"><MdDriveFileRenameOutline /></span>
                            <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
                        </div>
                        {/* palitan to button */}
                        <a href="tutourial" className="btn bg-violet text-white w-100">
                            Enter as Guess
                        </a>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default guessmode
