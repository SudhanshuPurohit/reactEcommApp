import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Announcement from './Announcement';
import Suggestion from './Suggestion';
import Navigation from './Navigation';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { addItemToCart } from '../../store/reducers/dataReducer';

const Productdetail = () => {
    const { id } = useParams();
    const [currentProduct, setCurrentProduct] = useState();
    const { data, cart } = useSelector((state) => state.dataReducer);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        
        for (let index = 0; index < data.length; index++) {
            if( data[index].id == id){
                setCurrentProduct(data[index]);
            }
            
        }

    },[]);

    const cartHandler = ()=>{
           dispatch(addItemToCart({currentProduct, count: 1}));
    }

    return (
        <>
        <Announcement></Announcement>
        <Navigation></Navigation>
        <div className='mt-5 d-flex flex-column justify-content-center '>
{
    currentProduct?


            <div className="card m-3 px-5 py-4  d-flex justify-content-center align-items-center details-card " >
                <div className=" d-flex  gap-4 w-75" style={{ width: "95%" }}>
                    <div className="col-md-2  d-flex justify-content-center  align-items-center">
                        <img src={`${currentProduct.img}`}  className="img-fluid rounded-start" alt="..." style={{ borderRadius: "1rem" }} />
                    
                    </div>
                    
                    <div className="col-md-10 d-flex justify-content-center align-items-center ">
                        <div className="card-body d-flex flex-column gap-3 flex-wrap">
                           
                            <h3 className="card-title bg-dark text-light text-center border-outline"  >{currentProduct.categories}</h3>
                            <p className="card-text">{currentProduct.desc}</p>
                            <button onClick={cartHandler} type="button" style={{width:" 200px"}} className="btn btn-outline-primary"><AddShoppingCartIcon/></button>
                        </div>
                    </div>
                </div>
            </div>: <div> </div>


}


        </div >
        <Suggestion/>
        </>

    )
}

export default Productdetail;