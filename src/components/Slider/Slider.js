import React from 'react';

const Slider = (props) => {
    const { id, title, image, description } = props.slider;
    return (
        <div className={parseInt(props.index) === 0 ? "carousel-item active" : "carousel-item"}>
            <img className="img-fluid" src={image} alt={title} title={title} />
            <div className="carousel-caption d-none d-md-block position-absolute">
                <div className="d-flex flex-column justify-content-center align-items-center h-100">
                    <h5>{title}</h5>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Slider;