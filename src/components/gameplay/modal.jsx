import React, { useState } from 'react'
import { GoDotFill } from "react-icons/go";
import { LuSendHorizontal } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import { MdOutlineClear } from "react-icons/md";

const Alphabet = () => {
    const alphabetData = [
        { letter: 'Aa', image: 'dist/img/a.png' },
        { letter: 'Bb', image: 'dist/img/b.png' },
        { letter: 'Cc', image: 'dist/img/c.png' },
        { letter: 'Dd', image: 'dist/img/d.png' },
        { letter: 'Ee', image: 'dist/img/e.png' },
        { letter: 'Ff', image: 'dist/img/f.png' },
        { letter: 'Gg', image: 'dist/img/g.png' },
        { letter: 'Hh', image: 'dist/img/h.png' },
        { letter: 'Ii', image: 'dist/img/i.png' },
        { letter: 'Jj', image: 'dist/img/j.png' },
        { letter: 'Kk', image: 'dist/img/k.png' },
        { letter: 'Ll', image: 'dist/img/l.png' },
        { letter: 'Mm', image: 'dist/img/m.png' },
        { letter: 'Nn', image: 'dist/img/n.png' },
        { letter: 'Oo', image: 'dist/img/o.png' },
        { letter: 'Pp', image: 'dist/img/p.png' },
        { letter: 'Qq', image: 'dist/img/q.png' },
        { letter: 'Rr', image: 'dist/img/r.png' },
        { letter: 'Ss', image: 'dist/img/s.png' },
        { letter: 'Tt', image: 'dist/img/t.png' },
        { letter: 'Uu', image: 'dist/img/u.png' },
        { letter: 'Vv', image: 'dist/img/v.png' },
        { letter: 'Ww', image: 'dist/img/w.png' },
        { letter: 'Xx', image: 'dist/img/x.png' },
        { letter: 'Yy', image: 'dist/img/y.png' },
        { letter: 'Zz', image: 'dist/img/z.png' },
    ];

    return (
        <div className="row mb-3 d-flex justify-content-center">
            <div className="col-12 mb-3 mt-3">
                <p className="text-white balance text-center fw-semibold fs-5">
                    American Sign Language Alphabet
                </p>
            </div>
            <div className="col-12 col-md-11 bg-violet rounded border-plays overflow-auto vh-40">
                <div className="container pt-2">
                    <div className="row d-flex justify-content-center">
                        {alphabetData.map((item) => (
                            <div key={item.letter} className="col-8 col-sm-5 col-md-5 bg-white border-play pt-3 m-2 rounded">
                                <p className="text-dark fw-bold fs-3">{item.letter}</p>
                                <div className="container d-flex justify-content-center">
                                    <img src={item.image} height="100" width="100" alt={item.letter} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

const Summary = ({ setShowGuidebook, setSelectedSummaryPage }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [tableData, setTableData] = useState([
        { Content: "1 Adjectives", Page: "1-7" },
        { Content: "1.1 Big", Page: "1" },
        { Content: "1.2 Small", Page: "2" },
        { Content: "1.3 Fast", Page: "3" },
        { Content: "1.4 Slow", Page: "4" },
        { Content: "1.5 Tall", Page: "5" },
        { Content: "1.6 Short", Page: "6" },
        { Content: "1.7 Pretty", Page: "7" },
        { Content: "2 Verbs", Page: "8-14" },
        { Content: "2.1 Eat", Page: "8" },
        { Content: "2.2 Drink", Page: "9" },
        { Content: "2.3 Run", Page: "10" },
        { Content: "2.4 Jump", Page: "11" },
        { Content: "2.5 Sing", Page: "12" },
        { Content: "2.6 Dance", Page: "13" },
        { Content: "2.7 Laugh", Page: "14" },
    ]);

    const [selectedPage, setSelectedPage] = useState(1);


    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleClearSearch = () => {
        setSearchTerm('');
    };

    const filteredData = searchTerm.trim() === ""
        ? tableData
        : tableData.filter(item =>
            item.Content.toLowerCase().includes(searchTerm.toLowerCase())
        );

    const handleRowClick = (page) => {
        const pageNumber = parseInt(page, 10);
        setShowGuidebook(3);
        setSelectedSummaryPage(pageNumber); // Update selectedSummaryPage IMMEDIATELY
    };

    return (
        <div className="row mb-3 d-flex justify-content-center">
            <div className="col-12  mt-3 mb-3">
                <div className="row">
                    <p className="text-white text-center balance fw-semibold fs-5">
                        Content of Gestures
                    </p>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-10 mt-3">
                        <div className="input-group col-12 border-play rounded ">
                            <input
                                type="text"
                                className="form-control focus-ring focus-ring-secondary"
                                placeholder="Search content..."
                                aria-label="Email"
                                value={searchTerm}
                                onChange={handleSearchChange}
                            />
                            <span className="input-group-text c-pointer" onClick={handleClearSearch}>
                                {searchTerm.trim() === '' ? (
                                    <IoSearch className="fs-5" />
                                ) : (
                                    <MdOutlineClear className="fs-5" />
                                )}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-11 col-md-11 bg-white overflow-auto shadow rounded border-play vh-40">
                <div className="container pt-2">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Content</th>
                                <th>Page</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.map((item, index) => (
                                <tr key={index} onClick={() => handleRowClick(item.Page)} className="c-pointer">
                                    <td className={/^\d+\./.test(item.Content) ? "ps-5" : ""}>{item.Content}</td>
                                    <td className="text-center">{item.Page}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

const Videos = ({ selectedPage }) => {
    const [showPage, setShowPage] = useState(selectedPage);
    const totalPages = 126;

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setShowPage(page);
        }
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        const startPage = Math.max(1, showPage - 2);
        const endPage = Math.min(totalPages, showPage + 2);

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(
                <li key={i} className="page-item">
                    <a
                        className={`page-link ${i === showPage ? 'active bg-white text-dark' : 'text-white bg-violet'}`}
                        href="#"
                        onClick={() => handlePageChange(i)}
                    >
                        {i}
                    </a>
                </li>
            );
        }

        if (startPage > 1) {
            pageNumbers.unshift(
                <li key="..." className="page-item">
                    <a className="page-link bg-violet text-white" href="#">...</a>
                </li>
            );
        }
        if (endPage < totalPages) {
            pageNumbers.push(
                <li key="..." className="page-item">
                    <a className="page-link bg-violet text-white" href="#">...</a>
                </li>
            );
        }
        return pageNumbers;
    };

    const videoData = [
        {
            title: "Big",
            youtubeId: "0FcwzMq4iWg",
            instructions: ["Put your hands Up.", "Put your hands down."],
        },
        {
            title: "Small",
            youtubeId: "0FcwzMdsadq4iWg",
            instructions: ["Small like urs.", "Put your hands there slawly.", "Wow"],
        },
        {
            title: "Fast",
            youtubeId: "0FcwzMdsadq4iWg",
            instructions: ["Dont go too fast.", "That'll hurt."],
        },
        {
            title: "Slow",
            youtubeId: "0FcwzMdsadq4iWg",
            instructions: ["Slow down first.", "Then breath bitch.", "Amazing"],
        },
        {
            title: "Tall",
            youtubeId: "0FcwzMdsadq4iWg",
            instructions: ["Do not fall out inhate.", "Chill first."],
        },
        {
            title: "Short",
            youtubeId: "0FcwzMdsadq4iWg",
            instructions: ["Short tf.", "Acceptance is the key.", "Shutup"],
        },
        {
            title: "Pretty",
            youtubeId: "0FcwzMdsadq4iWg",
            instructions: ["Pretty is privilage.", "Duhhh."],
        },
    ];


    const renderVideoContent = () => {
        const pageData = videoData[showPage - 1];

        //Handle pages beyond available data
        if (!pageData) {
            return (
                <div className="col-12 mb-3 mt-3">
                    <p className="text-white balance text-center fw-semibold fs-5">
                        GUIDEBOOK
                    </p>
                </div>
            );
        }

        return (
            <>
                <div className="col-12 mb-3 mt-3">
                    <p className="text-white balance text-center fw-semibold fs-5">
                        GUIDEBOOK
                    </p>
                </div>
                <div className="col-10 col-md-8 bg-white rounded border-play vh-40">
                    <div className="container pt-2">
                        <p className="text-dark mb-2 text-center balance">This is how you sign "{pageData.title}"</p>
                        {pageData.youtubeId && (
                            <div className="d-flex justify-content-center">
                                <iframe
                                    width="230"
                                    height="150"
                                    className="ratio-4x3 rounded border-play"
                                    src={`https://www.youtube.com/embed/${pageData.youtubeId}?si=n-xtzE_sN29zmfob`}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        )}
                        <p className="text-dark text-start balance mt-4">
                            <span className="fw-semibold">INSTRUCTION:</span>
                            <br />
                            {pageData.instructions.map((instruction, index) => (
                                <span key={index}>STEP {index + 1}: {instruction}<br /></span>
                            ))}
                        </p>
                    </div>
                </div>
            </>
        );
    };

    return (
        <div className="row mb-3 d-flex justify-content-center">
            {renderVideoContent()}
            <div className="col-12 mt-3 d-flex justify-content-center">
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item">
                            <a
                                className="page-link bg-violet text-white"
                                href="#"
                                onClick={() => handlePageChange(Math.max(1, showPage - 1))}
                                disabled={showPage === 1}
                            >
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        {renderPageNumbers()}
                        <li className="page-item">
                            <a
                                className="page-link bg-violet text-white"
                                href="#"
                                onClick={() => handlePageChange(Math.min(totalPages, showPage + 1))}
                                disabled={showPage === totalPages}
                            >
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

const modal = () => {
    const [showGuidebook, setShowGuidebook] = useState(2);  // Start with Videos
    const [selectedSummaryPage, setSelectedSummaryPage] = useState(1);

    const handleShowAlphabet = () => {
        setShowGuidebook(1);
    };

    const handleShowContent = () => {
        setShowGuidebook(2);
    };

    const handleShowGesture = () => {
        setShowGuidebook(3);
    };

    return (
        <div>
            {/* guidebook */}

            <section>
                <div className="modal fade" id="guidebook" tabIndex="-1" aria-labelledby="schoolyardModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg modal-dialog-centered">
                        <div className="modal-content bg-none border-none">
                            <div className="modal-body">

                                <div className="container bg-violet rounded border-play col-12 col-md-8">
                                    <div className="container-fluid d-flex justify-content-end align-items-end">
                                        <button className="bg-danger close-btn border-play" data-bs-dismiss="modal">
                                            <MdOutlineClear className="text-white fs-5" />
                                        </button>
                                    </div>
                                    <div className="col-12 mt-3">
                                        <ul className="nav nav-tabs">
                                            <li className="nav-item">
                                                <button className={`nav-link ${showGuidebook === 1 ? 'active link-dark' : 'link-light'}`} onClick={handleShowAlphabet}>Alphabet</button>
                                            </li>
                                            <li className="nav-item">
                                                <button className={`nav-link ${showGuidebook === 2 ? 'active link-dark' : 'link-light'}`} onClick={handleShowContent}>Summary</button>
                                            </li>
                                            <li className="nav-item">
                                                <button className={`nav-link ${showGuidebook === 3 ? 'active link-dark' : 'link-light'}`} onClick={handleShowGesture}>Book</button>
                                            </li>
                                        </ul>
                                    </div>
                                    {showGuidebook === 1 && <Alphabet />}
                                    <section>
                                        {/* ... (modal content remains the same) */}
                                        {showGuidebook === 2 && (
                                            <Summary
                                                setShowGuidebook={setShowGuidebook}
                                                setSelectedSummaryPage={setSelectedSummaryPage}
                                            />
                                        )}
                                        {showGuidebook === 3 && <Videos selectedPage={selectedSummaryPage} />}
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* chat */}
            <section>
                <div className="modal fade" id="chat" tabIndex="-1" aria-labelledby="schoolyardModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg parent-btn modal-dialog-centered">
                        <div className="modal-content bg-none border-none">

                            <div className="modal-body">
                                <div className="container bg-violet rounded border-play col-12 col-md-11">
                                    <div className="container-fluid d-flex justify-content-end align-items-end">
                                        <button className="bg-danger close-btn border-play" data-bs-dismiss="modal">
                                            <MdOutlineClear className="text-white fs-5" />
                                        </button>
                                    </div>
                                    <div className="row mb-3 d-flex justify-content-center">
                                        <div className="col-12">
                                            <p className="text-white text-center fw-semibold fs-5 balance">GLOBAL CHAT</p>
                                        </div>
                                        <div className="col-12">
                                            <p className="text-white text-start fw-semibold fs-5 balance"><span className="text-success"><GoDotFill /> ONLINE</span> 4,232</p>
                                        </div>
                                        <div className="col-10 vh-40 d-flex align-items-end bg-white rounded border-play">
                                            <div className="container">
                                                <div className="row rounded mb-2 pt-2 pb-2 bg-smoke">
                                                    <div className="col-4 col-md-2 bg-dangers">
                                                        <div className="profile-size dp-koala border-play rounded-pill text-center text-white">
                                                            
                                                        </div>

                                                    </div>
                                                    <div className="col-6 col-md-10 balance">
                                                        <p className="text-dark text-truncate"><span className="fw-semibold">MONSTER</span><br />Hello there..</p>
                                                        <div className="timestamp text-end">
                                                            2:51 PM
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row rounded mb-2 pt-2 pb-2 bg-smoke">
                                                    <div className="col-4 col-md-2 bg-dangers">
                                                        <div className="profile-size dp-koala-b1 border-play rounded-pill text-center text-white">
                                                            
                                                        </div>

                                                    </div>
                                                    <div className="col-6 col-md-10 balance">
                                                        <p className="text-dark text-truncate"><span className="fw-semibold">CHICKEN</span><br />Wassup...</p>
                                                        <div className="timestamp text-end">
                                                            2:52 PM
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row rounded mb-2 pt-2 pb-2 bg-smoke">
                                                    <div className="col-4 col-md-2 bg-dangers">
                                                        <div className="profile-size dp-tarsier border-play rounded-pill text-center text-white">
                                                            
                                                        </div>

                                                    </div>
                                                    <div className="col-6 col-md-10 balance">
                                                        <p className="text-dark text-truncate"><span className="fw-semibold">MONKEY</span><br />You guys alive???</p>
                                                        <div className="timestamp text-end">
                                                            2:53 PM
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row rounded mb-2 pt-2 pb-2 bg-smoke">
                                                    <div className="col-4 col-md-2 bg-dangers">
                                                        <div className="profile-size dp-tarsier-b2 border-play rounded-pill text-center text-white">
                                                            
                                                        </div>

                                                    </div>
                                                    <div className="col-6 col-md-10 balance">
                                                        <p className="text-dark text-truncate"><span className="fw-semibold">KOALA</span><br />Yowwww</p>
                                                        <div className="timestamp text-end">
                                                            2:54 PM
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row rounded mb-2 pt-2 pb-2 bg-smoke">
                                                    <div className="col-4 col-md-2 bg-dangers">
                                                        <div className="profile-size dp-koala border-play rounded-pill text-center text-white">
                                                            
                                                        </div>

                                                    </div>
                                                    <div className="col-6 col-md-10 balance">
                                                        <p className="text-dark text-truncate"><span className="fw-semibold">TARSIER</span><br />D chilll HAHAAAAAAAAAAAA</p>
                                                        <div className="timestamp text-end">
                                                            2:55 PM
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                        <div className="col-10 mt-3">
                                            <div className="input-group col-12 border-play rounded mb-3">
                                                <input type="text" className="form-control" placeholder="Send a message..." aria-label="Email" />
                                                <span className="input-group-text c-pointer"><LuSendHorizontal className="fs-5" data-bs-dismiss="modal" /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default modal


