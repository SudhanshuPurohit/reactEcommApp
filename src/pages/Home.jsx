import React, { useEffect, useState } from 'react'
import Navigation from '../components/Navigation'
import Announcement from '../components/Announcement';
import Slides from '../components/Slides';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import ReactLoading from 'react-loading';


const Home = () => {

  const [webLoading, setwebLoading] = useState(true);

  const stopForASecond = async () => {
    setTimeout(() => setwebLoading(false), 2000);
  }

  useEffect(() => {
    stopForASecond();
  });
  return (
            
   <div>
    {(webLoading==false? <div className=''>
        {/* Announcement Component */}
        <Announcement></Announcement>
        {/* Navigation Component */}
        <Navigation></Navigation>
        <Slides></Slides>
        <Categories></Categories>
        <Footer></Footer>
      </div>: <div className='d-flex h-100 justify-content-center align-items-center'> <ReactLoading type={'bars'} color={'#0000000'} height={'20%'} width={'20%'} /></div>)}
   </div>
  );
}

export default Home;