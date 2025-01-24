import React, { useState } from 'react';
import Referral from "../components/register/referral";
import Create from "../components/register/create";
import Interview from "../components/register/interview";
import Interview1 from "../components/register/interview1";
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [showCreate, setShowCreate] = useState(1); 
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    setShowCreate(2); 
  };

  const handleReferral = () => {
    setShowCreate(3); 
  };

  const handleInterview = () => {
    setShowCreate(4); 
  };

  const handleInterview1 = () => {
    setShowCreate(5); 
    navigate('/tutourial')
  };

  // Calculate percentage complete
  const progressPercentage = Math.min( (showCreate -1) * 25, 100); // Cap at 100%


  return (
    <div>
      <section>
        <div className="container pt-5">
            <div className="row">
                <div className="col-3 col-md-2">
                    <div className="container-fluid pt-4">
                        <a href="/">
                            <img src="/img/arrowback.png" height="70" width="70" alt="" />
                        </a>
                    </div>
                </div>
                <div className="col pt-5">
                    <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={progressPercentage} aria-valuemin="0" aria-valuemax="100">
                        <div className="progress-bar bg-violet" style={{ width: `${progressPercentage}%` }}></div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <section>
        {showCreate === 1 && <Create onCreate={handleCreateAccount} />}
        {showCreate === 2 && <Referral onCreate={handleReferral}/>}
        {showCreate === 3 && <Interview onCreate={handleInterview}/>}
        {showCreate === 4 && <Interview1 onCreate={handleInterview1}/>}
      </section>
    </div>
  );
};

export default Register;