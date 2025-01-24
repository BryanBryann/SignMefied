import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Words from '../components/guidebook/practice_words';

const practice = ({onCreate}) => {
    const [progress, setProgress] = useState(0);
    const navigate = useNavigate(); // <--- Add this line

    const handleProgressUpdate = (newProgress) => {
        setProgress(newProgress);
    };

    useEffect(() => {
        if (progress === 100) {
            navigate('/gameplay'); // Redirect to /finish when progress is 100%
        }
    }, [progress, navigate]); // Add progress and navigate to dependencies

    return (
        <div>
           <section>
            <div className="container-fluid pt-3 pb-3 bg-violet fixed-top border-play">
                <p className="fs-3 text-white balance text-center fw-semibold">
                    Tutourial Mode
                </p>
            </div>
            <div className="container-fluid pt-3 pb-3 bg-violet border-play">
                <p className="fs-3 text-white balance text-center fw-semibold">
                    Tutourial Mode
                </p>
            </div>
        </section>

            <section>
                <div className="container ">
                    <div className="row">
                        <div className="col-3 col-md-2">
                            <div className="container-fluid pt-4">
                                <a href="/tutourial">
                                    <img src="dist/img/koala.png" height="70" width="70" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="col pt-5">
                            <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar bg-violet" style={{ width: `${progress}%` }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container ">
                    <div className="row">
                        <div className="col-12 col-md-7  d-flex justify-content-center align-items-center">
                            <div className="row container d-flex justify-content-center scroll-container">
                                <Words onProgressUpdate={handleProgressUpdate} />
                            </div>
                        </div>
                        <div className="col-12 col-md-5 ">
                            <div className="container bg-danger rounded vh-10">
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="vh-30">
                
            </div>
        </div>
    );
};

export default practice;