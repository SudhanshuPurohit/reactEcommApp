import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Navigation from '../components/Navigation';
import Announcement from '../components/Announcement';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { IncreaseCartItemCount, decreaseCartItemCount } from '../../store/reducers/dataReducer';

const Allproducts = () => {
    
    const { data, cart } = useSelector((state) => state.dataReducer);
    const dispatch = useDispatch();

    const decreaseCountHandler = (id) => {
        dispatch(decreaseCartItemCount(id));
    }
    const increaseCountHandler = (id) => {
        dispatch(IncreaseCartItemCount(id));
    }
    return (
        <div>
            {/* Announcement Component */}
            <Announcement></Announcement>
            {/* Navigation Component */}
            <Navigation></Navigation>

            <div className='pb-5 mt-5 d-flex justify-content-start flex-column align-items-center'>



                <div className='d-flex flex-wrap justify-content-center ' style={{ gap: "15px", width: "85%" }}>

                    {
                      cart?  cart.map((elem, index) =>

                            <div key={index} className="d-flex p-5 justify-content-between align-items-start border w-75 ">
                                <div className="col-md-2">
                                    <img src={`${elem.currentProduct.img}`} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-5">
                                    <div className="card-body">
                                        <h1 className="card-title">{elem.currentProduct.categories}</h1>
                                        <div className='border w-50 mt-5  d-flex justify-content-between '
                                        >
                                            <button onClick={() => decreaseCountHandler(elem.currentProduct.id)}>

                                                <RemoveIcon />
                                            </button>
                                            {elem.count}
                                            <button onClick={() => increaseCountHandler(elem.currentProduct.id)}>
                                                <AddIcon />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ): ""
                    }

                </div>


            </div>


        </div>
    )
}

export default Allproducts