import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';


import './App.css'
import axious from 'axios'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState([])
  useEffect(() => {
     axious.get('https://valorant-api.com/v1/agents')
     .then(response => {return response.data})
     .then(response => setData(response.data))
  }, [count])

  
  return(
    
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      //pagination={{ clickable: true }}
      //scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <div className='Container'>
       
      {data.map((data) => (
        <SwiperSlide key={data.uuid} className='Cards'>
                <div className='Title-cards'>
                  Valorant Cards
                </div>
                <p className='Name-card'>{data.displayName}</p>
                <img src={data.displayIcon} alt="" />
                <p className='Description'>{data.description}</p> 
        </SwiperSlide>
        ))}
      </div>
    
    </Swiper>
  )
 
}

export default App
