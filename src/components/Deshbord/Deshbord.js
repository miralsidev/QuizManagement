import React from 'react';
import backgroundImage from '../../Image/background2.jpg';
import { Link } from 'react-router-dom';
import { FaEdit } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { FaGraduationCap } from "react-icons/fa";

const Deshbord = ({ handleShow }) => {
    return (
        <>
            <div>
                <nav className="navbar navbar-light bg-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand">NavBar</Link>
                    </div>
                </nav>
            </div>
            <div
                style={{
                    backgroundColor: 'black',
                }}
                className=' d-flex justify-content-center'
            >
                <div className="row w-100">
                    <div className="col-lg-4  d-flex justify-content-center" >
                        <div onClick={() => handleShow()} className="card mb-5 mt-5" style={{ width: '18rem' }}>
                            <div className="card-body">
                                <h5 className="card-title fs-2"><FaQuestion />
                                </h5>
                                <h6 className="card-subtitle m-4 text-muted">Add New Questions</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4  d-flex justify-content-center ">
                        <div className="card mb-5 mt-5" style={{ width: '18rem' }}>
                            <div className="card-body">
                                <h5 className="card-title fs-2"><GiNotebook />
                                </h5>
                                <h6 className="card-subtitle m-4 text-muted">All Questions</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4  d-flex justify-content-center ">
                        <div className="card mb-5 mt-5" style={{ width: '18rem' }}>
                            <div className="card-body">
                                <h5 className="card-title fs-2"><FaGraduationCap /></h5>
                                <h6 className="card-subtitle m-4 text-muted">All Student Result</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Deshbord;
