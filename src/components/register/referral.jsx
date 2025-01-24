import React from 'react'
import { CiBarcode } from "react-icons/ci";


const referral = ({ onCreate }) => {
    return (
        <div>
            <div className="container  pt-3  col-12 col-md-7">
                <p className="text-dark bg-white p-3 text-center fw-semibold rounded">
                    Before anything else, do you have referral code from a friend? It gives incentives tho.
                </p>
            </div>
            <div className="container col-9 col-md-4 pt-1">
                <div class="input-group mb-3 pt-5">
                    <span class="input-group-text" id="basic-addon1"><CiBarcode /></span>
                    <input type="text" className="form-control" placeholder="Referral Code" aria-label="Username" aria-describedby="basic-addon1"></input>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <button className="btn bg-violet text-white w-100" onClick={onCreate}>
                                Save
                            </button>
                        </div>
                        <div className="col-6">
                            <button className="btn bg-violet text-white w-100" onClick={onCreate}>
                                Skip
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default referral
