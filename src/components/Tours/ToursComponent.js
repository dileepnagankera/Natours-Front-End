import React, { useEffect, useState } from "react";
import "./Tour.css";

const ToursComponent = () => {
  const [Tours, setTours] = useState([]);

  const getTours = async () => {
    try {
      const result = await fetch("http://localhost:5000/api/v1/tours");

      // Check if the response is OK (status code 200-299)
      if (!result.ok) {
        throw new Error(`HTTP error! status: ${result.status}`);
      }

      const data = await result.json();

      setTours(data?.data?.data || []);
    } catch (error) {
      console.log("Error:", error.message);
    }
  };

  useEffect(() => {
    getTours();
  }, []);


  return (
    <section className="overview p-16">
      <div className="card-container">
        {Tours.map((tour, index) => (
          <div key={index} className="card">
            <div className="card__header">
              <div className="card__picture">
                <div className="card__picture-overlay">&nbsp;</div>

                <img
                  src={`/img/tours/${tour.imageCover}`} // Make sure this points to a valid image URL
                  alt={tour.name} // Use the tour name as the alt text
                  className="card__picture-img" // Style the image using this class
                />
              </div>
              <h3 className="heading-tertiary ">
                <span className="font-2xl">{tour.name}</span>
              </h3>
            </div>
            <div className="card__details">
              <h4 className="card__sub-heading">
                `${tour.difficulty} ${tour.duration}-day tour`
              </h4>
              <p className="card__text">{tour.summary}</p>
              <div className="card__data">
                <svg class="card__icon">
                  <use href="img/icons.svg#icon-map-pin"></use>
                </svg>
                <span>{tour.startLocation.description}</span>
              </div>
              <div className="card__data">
                <svg class="card__icon">
                  <use href="img/icons.svg#icon-calendar"></use>
                </svg>
                <span>
                  {tour.startDates && tour.startDates[0]
                    ? new Date(tour.startDates[0]).toLocaleDateString("en-US", {
                        month: "long",
                        year: "numeric",
                      })
                    : "No start date available"}
                </span>
              </div>
              <div className="card__data">
                <svg class="card__icon">
                  <use href="img/icons.svg#icon-flag"></use>
                </svg>
                <span>{tour.locations.length} stops</span>
              </div>
              <div className="card__data">
                <svg class="card__icon">
                  <use href="img/icons.svg#icon-user"></use>
                </svg>
                <span>{tour.maxGroupSize} people</span>
              </div>
            </div>
            <div className="card__footer">
              <p>
                <span className="card__footer-value">{tour.price}</span>

                <span className="card__footer-text">per person</span>
              </p>
              <p className="card__ratings">
                <span className="card__footer-value">
                  {tour.ratingsAverage}
                </span>

                <span className="card__footer-text">
                  rating ({tour.ratingsQuantity})
                </span>
              </p>
              <a
                href={`/tour/${tour._id}`}
                className="btn btn--green btn--small"
              >
                Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ToursComponent;
 // <span>
                  // {tour.startDates[0].toLocaleString("en-us", {
                   //  month: "long",
                   //  year: "numeric",
                  // })}
                 //</span>