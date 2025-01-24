import React, { useState } from 'react';
import { GiShop } from "react-icons/gi";
import { GiSpellBook } from "react-icons/gi";
import { TbCardsFilled } from "react-icons/tb";
import { MdLeaderboard } from "react-icons/md";
import { TbVocabulary } from "react-icons/tb";
import { IoGameController } from "react-icons/io5";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { BsSpellcheck } from "react-icons/bs";
import { BsChatTextFill } from "react-icons/bs";

import Story from "../components/gameplay/story";
import DailyMission from "../components/gameplay/dailymission";
import Shop from "../components/gameplay/shop";
import LeaderBoards from "../components/gameplay/leaderboard";
import Inbox from "../components/gameplay/inbox";
import Vocabulary from "../components/gameplay/vocabulary";
import Spelling from "../components/gameplay/spelling";
import Modal from "../components/gameplay/modal";


const gameplay = () => {
    const [showScreen, setShowScreen] = useState(1);
    const [showOptions, setShowOptions] = useState(false);

    const handleShowOption = () => {
        setShowOptions(!showOptions); // Toggle the visibility
    };

    const handleShowStory = () => {
        setShowScreen(1);
        setShowOptions(false);
    };

    const handleShowDailyMission = () => {
        setShowScreen(2);
    };

    const handleShowShop = () => {
        setShowScreen(3);
    };

    const handleShowLeaderBoards = () => {
        setShowScreen(4);
    };

    const handleShowInbox = () => {
        setShowScreen(5);
    };

    const handleShowVocabulary = () => {
        setShowScreen(6);
        setShowOptions(false);
    };

    const handleShowSpelling = () => {
        setShowScreen(7);
        setShowOptions(false);
    };

    let mainBtn;
    switch (showScreen) {
        case 1:
            mainBtn =
                <button className="border-none border-play mid-btn bg-violet w-100 pt-3 pb-3 pt-md-1 pb-md-1 fs-md-5 text-white rounded-pill" onClick={handleShowOption}>
                    <GiSpellBook className="fs-1" />
                    <p className="d-none d-md-block">STORY MODE</p>
                </button>
                ;
            break;
        case 6:
            mainBtn =
                <button className="border-none border-play mid-btn bg-violet w-100 pt-3 pb-3 pt-md-1 pb-md-1 fs-md-5 text-white rounded-pill" onClick={handleShowOption}>
                    <TbVocabulary className="fs-1" />
                    <p className="d-none d-md-block">VOCABULARY</p>
                </button>
                ;
            break;
        case 7:
            mainBtn =
                <button className="border-none border-play mid-btn bg-violet w-100 pt-3 pb-3 pt-md-1 pb-md-1 fs-md-5 text-white rounded-pill" onClick={handleShowOption}>
                    <BsSpellcheck className="fs-1" />
                    <p className="d-none d-md-block">FINGER SPELLING</p>
                </button>
                ;
            break;
        default:
            mainBtn =
                <button className="border-none border-play mid-btn bg-violet w-100 pt-3 pb-3 pt-md-1 pb-md-1 fs-md-5 text-white rounded-pill" onClick={handleShowOption}>
                    <IoGameController className="fs-1" />
                    <p className="d-none d-md-block">GAME MODE</p>
                </button>
                ;
    }

    return (
        <div>
            <section>
                {showScreen === 1 && <Story onCreate={handleShowStory} />}
                {showScreen === 2 && <DailyMission onCreate={handleShowDailyMission} />}
                {showScreen === 3 && <Shop onCreate={handleShowShop} />}
                {showScreen === 4 && <LeaderBoards onCreate={handleShowLeaderBoards} />}
                {showScreen === 5 && <Inbox onCreate={handleShowInbox} />}
                {showScreen === 6 && <Vocabulary onCreate={handleShowVocabulary} />}
                {showScreen === 7 && <Spelling onCreate={handleShowSpelling} />}
            </section>

            <Modal />

            <section>
                <div className="container-fluid bg-white hide fixed-top d-flex justify-content-end">
                    <div className="bg-violet showup shadow-fancy c-pointer mt-2 circle rounded-pill text-white border-play fw-semibold fs-md-5 ms-md-5 ms-2 mb-md-4 mb-2 d-flex justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target="#guidebook">
                        <GiSpellBook className="fs-huge" />
                    </div>
                    <div className="bg-violet showup-setting shadow-fancy c-pointer mt-2 circle rounded-pill text-white border-play fw-semibold fs-md-5 ms-md-5 ms-2 mb-md-4 mb-2 d-flex justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target="#chat">
                        <BsChatTextFill className="fs-huge" /> <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill text-bg-danger">+99 <span class="visually-hidden">unread messages</span></span>
                    </div>
                </div>
            </section>


            <section>
                <div className="rounded bg-whites fixed-bottom">
                    <div className={`container-fluid mb-5 bg-violets text-white sborder-play-top ${showOptions ? 'd-block' : 'd-none'}`}>
                        <div className="row d-flex justify-content-center">
                            <div className="col-4 col-md-2">
                                <button className="border-none bg-violet rounded-pill border-play w-100 pt-4 pb-4 pt-md-1 pb-md-1 fs-md-5 text-white" onClick={handleShowVocabulary}>
                                    <TbVocabulary className="fs-1" /><br />
                                    <p className="d-none d-md-block">Vocabulary</p>
                                </button>
                            </div>
                            <div className="col-4 col-md-2">
                                <button className="border-none bg-violet rounded-pill up-y border-play w-100 pt-4 pb-4 pt-md-1 pb-md-1 fs-md-5 text-white" onClick={handleShowStory}>
                                    <GiSpellBook className="fs-1 " /><br />
                                    <p className="d-none d-md-block">STORY</p>
                                </button>
                            </div>
                            <div className="col-4 col-md-2">
                                <button className="border-none bg-violet rounded-pill border-play w-100 pt-4 pb-4 pt-md-1 pb-md-1 fs-md-5 text-white" onClick={handleShowSpelling}>
                                    <BsSpellcheck className="fs-1" /><br />
                                    <p className="d-none d-md-block">Finger Spelling</p>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="row text-white bg-white border-play rounded">
                        <div className="col-2 col-md-2">
                            <div className={`container bg-violet border-play text-violet nav-bg-left ${showScreen === 3 ? 'd-block' : 'd-none'}`}>

                            </div>
                            <button className="border-none bg-white w-100 pt-4 pb-4 pt-md-1 pb-md-1 fs-md-5 text-violet" onClick={handleShowShop}>
                                <GiShop className={`fs-1 text-violet ${showScreen === 3 ? 'nav-active text-white' : ''}`} /><br />
                                <p className={`d-none d-md-block nav-active ${showScreen === 3 ? 'text-white' : 'text-violet'}`} >SHOP</p>
                            </button>
                        </div>
                        <div className="col-2 col-md-2">
                            <div className={`container bg-violet border-play text-violet nav-bg-left ${showScreen === 2 ? 'd-block' : 'd-none'}`}>

                            </div>
                            <button className="border-none bg-white w-100 pt-4 pb-4 pt-md-1 pb-md-1 fs-md-5 text-violet" onClick={handleShowDailyMission}>
                                <TbCardsFilled className={`fs-1 text-violet ${showScreen === 2 ? 'nav-active text-white' : ''}`} /><br />
                                <p className={`d-none d-md-block nav-active ${showScreen === 2 ? 'text-white' : 'text-violet'}`}>DAILY MISSION</p>
                            </button>
                        </div>
                        <div className="col-4 col-md-4">
                            {mainBtn}
                        </div>
                        <div className="col-2 col-md-2">
                            <div className={`container bg-violet border-play text-violet nav-bg-right ${showScreen === 4 ? 'd-block' : 'd-none'}`}>

                            </div>
                            <button className="border-none bg-white w-100 pt-4 pb-4 pt-md-1 pb-md-1 text-violet" onClick={handleShowLeaderBoards}>
                                <MdLeaderboard className={`fs-1 text-violet ${showScreen === 4 ? 'nav-active text-white' : ''}`} /><br />
                                <p className={`d-none d-md-block nav-active ${showScreen === 4 ? 'text-white' : 'text-violet'}`}>LEADER BOARD</p>
                            </button>
                        </div>
                        <div className="col-2 col-md-2 ">
                            <div className={`container bg-violet border-play text-violet nav-bg-right ${showScreen === 5 ? 'd-block' : 'd-none'}`}>

                            </div>
                            <button className="border-none bg-white w-100 pt-4 pb-4 pt-md-1 pb-md-1 fs-md-5 text-violet" onClick={handleShowInbox}>
                                <BsFillMenuButtonWideFill className={`fs-1 text-violet ${showScreen === 5 ? 'nav-active text-white' : ''}`} /><br />
                                <p className={`d-none d-md-block nav-active ${showScreen === 5 ? 'text-white' : 'text-violet'}`}>MORE</p>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default gameplay;