import React from 'react';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src='/images/Banner.jpg' style={{ height: "400px" }} className="d-block w-100 img-fluid" alt="..." />
                    </div>

                </div>
            </div>
            <Services></Services>

        </div>
    );
};

export default Home;