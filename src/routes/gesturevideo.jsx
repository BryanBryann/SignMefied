// gesturevideo.jsx
import React, { useState } from 'react';
import Video from '../components/guidebook/video_gesture';

const gesturevideo = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const totalVideos = 7;
  const progress = Math.round((currentVideoIndex / totalVideos) * 100);

  return (
    <div>
      <section>
        <div className="container-fluid bg-lightpurple rounded-30">
          <div className="row ps-md-5">
            <div className="col-2 col-md-1 mt-2 mb-2">
              <img src="/img/icon-clean.png" width="95" height="80" alt="" />
            </div>
            <div className="col-9 col-md-11  ps-4 d-flex justify-content-start align-items-center">
              <div className="row ps-4">
                <div className="col-12">
                  <p className="text-white balance fw-bold fs-4">
                    KOALA
                  </p>
                </div>
                <div className="col-12">
                  <p className="text-white balance">
                    You can only exit when you finish the guidebook goal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid bg-lightpurple rounded-30 fixed-top">
          <div className="row ps-md-5">
            <div className="col-2 col-md-1 mt-2 mb-2">
              <img src="/img/icon-clean.png" width="95" height="80" alt="" />
            </div>
            <div className="col-9 col-md-11  ps-4 d-flex justify-content-start align-items-center">
              <div className="row ps-4">
                <div className="col-12">
                  <p className="text-white balance fw-bold fs-4">
                    KOALA
                  </p>
                </div>
                <div className="col-12">
                  <p className="text-white balance">
                    You can only exit when you finish the guidebook goal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container ">
          <div className="row">
            <div className="col-3 col-md-2">
              <div className="container-fluid pt-4">
                <a href="/gesture">
                  <img src="/img/arrowback.png" height="70" width="70" alt="" />
                </a>
              </div>
            </div>
            <div className="col pt-5">
              <div
                className="progress"
                role="progressbar"
                aria-label="Basic example"
                aria-valuenow={progress}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div className="progress-bar bg-violet" style={{ width: `${progress}%` }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container d-flex justify-content-center">
          <Video currentVideoIndex={currentVideoIndex} onIndexChange={setCurrentVideoIndex} />
        </div>
      </section>
    </div>
  );
};

export default gesturevideo;