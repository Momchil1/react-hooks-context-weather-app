import React, { useContext } from 'react';
import Slider from "react-slick";
import HourlyForecast from './HourlyForecast.jsx';
import StoreContext from '../contexts/storeContext';
import DispatchContext from '../contexts/dispatchContext';
import { toggleModal } from '../actions';
import './styles/Modal.css';

const settings = {
    className: "center",
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true
};
const Modal = () => {
    const store = useContext(StoreContext);
    const dispatch = useContext(DispatchContext);
    const hourlyForecast = store.selectedHourlyData.map((data, inx) => {
        const hour = new Date(data.dt * 1000).toLocaleTimeString('en-US',{hour: '2-digit', minute:'2-digit', hour12: false});
        const date = new Date(data.dt * 1000).toLocaleDateString('en-US', {month: '2-digit', day: '2-digit'});
        return(
            <div key={inx}>
                <HourlyForecast 
                    forecast={data}
                    hour={hour}
                    date={date}
                    temp={Math.round(data.main.temp)}
                />
            </div>)
        }
    );
    return (
      <>
        {store.openModal ? (
        <div>
            <div className="modal-background"></div>
            <div className="modal-wrapper">
                <div className="modal-content">
                  <div className="modal-header">   
                    <span className="modal-close" onClick={() => toggleModal(false, dispatch)}>&times;</span>  
                  </div>
                  <div className="modal-body">
                    <div className="d-flex flex-column justify-content-center slick-container">
                        <Slider {...settings}>{hourlyForecast}</Slider>
                    </div>
                  </div>
                </div>
            </div>
        </div>) : null}
      </>
    );
}

export default Modal;