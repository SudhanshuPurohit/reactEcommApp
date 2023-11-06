import React from 'react'
import { useSelector } from 'react-redux';
import Navigation from '../components/Navigation';
import Announcement from '../components/Announcement';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';

const Allproducts = () => {

    const { data, cart } = useSelector((state) => state.dataReducer);
    return (
        <div>
            {/* Announcement Component */}
            <Announcement></Announcement>
            {/* Navigation Component */}
            <Navigation></Navigation>

            <div className='pb-5 d-flex justify-content-start flex-column align-items-center'>
                <div className='p-3 d-flex flex-column align-items-center justify-content-center'>
                    <h3 className='headings m-4'>Products </h3></div>


                <div className='d-flex flex-wrap justify-content-center ' style={{ gap: "15px", width: "85%" }}>

                    {
                        data.map((elem, index) =>
                            <div key={index} className="card p-2" style={{ width: "15rem" }}>
                                <div className=" h-100  d-flex flex-column align-items-between justify-content-center">
                                    <div className='h-100 d-flex justify-content-center align-items-center'>

                                        <img src={`${elem.img}`} className=" card-img-top" alt="..." />
                                    </div>

                                    <div className=" card-body d-flex flex-row align-items-center p-2 border justify-content-between">
                                        <h6 className="card-text">{elem.categories}</h6>
                                        <Link to={"/details/" + `${elem.id}`} className="border btn btn-color">
                                            <ArrowForwardIosIcon />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                </div>


            </div>


        </div>
    )
}

export default Allproducts