import React from 'react';
import '../../App.css';
import img from '../images/havana.png'
import '../PagesCss/Home.css'

export default function Home() {
  return (
    <>
    <div className='cardp'>
          <header className="polaroid"><video className='havana' id="video" controls preload="none" poster={img}>
  <source id="mp4" src='https://res.cloudinary.com/dsp4p9uyy/video/upload/v1664878460/EnglishSongs/Camila_Cabello_-__Havana___live_at_Capital_s_Summertime_Ball_2018_720P_HD_1_sd2xfn.mp4' type="video/mp4" />

</video>
      

      </header>
    </div>
   



    
    </>
  );
}
