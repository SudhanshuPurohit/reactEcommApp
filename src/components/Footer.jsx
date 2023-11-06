import React from 'react'

const Footer = () => {
    return (
        <div className='footer-css w-100'>

            <div className="container " >
                <footer className="text-center text-dark" >
                    <section className="">
                        <div className="row text-center d-flex justify-content-around py-4">
                            <div className="col-md-2">
                                <h6 className="text-uppercase font-weight-bold">
                                    <a href="#!" className=" text-decoration-none text-dark">About us</a>
                                </h6>
                            </div>

                            <div className="col-md-2">
                                <h6 className="text-uppercase font-weight-bold">
                                    <a href="#!" className="text-decoration-none text-dark">Products</a>
                                </h6>
                            </div>


                            <div className="col-md-2">
                                <h6 className="text-uppercase font-weight-bold">
                                    <a href="#!" className="text-decoration-none text-dark">Help</a>
                                </h6>
                            </div>

                            <div className="col-md-2">
                                <h6 className="text-uppercase font-weight-bold">
                                    <a href="#!" className="text-decoration-none text-dark">Contact</a>
                                </h6>
                            </div>
                        </div>
                    </section>



                    <div
                        className="text-center p-3"
                        style={{
                            backgroundColor: "rgba(0, 0, 0, 0.8)",
                            color: "white"
                        }}
                    >
                        © 2023 Copyright:  &nbsp;
                        <a className="text-decoration-none " style={{color: "white"}} href="https://mdbootstrap.com/"
                        > SUPER.</a
                        >
                    </div>
                </footer >
            </div >
        </div>

    )
}

export default Footer