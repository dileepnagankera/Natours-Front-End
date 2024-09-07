import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";
import { IoIosTrendingUp } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./Tour.css";

const Details = () => {
  const { id } = useParams();

  const [tourDetails, setTourDetails] = useState([]);

  const getTours = async () => {
    try {
      const result = await fetch(`http://localhost:5000/api/v1/tours/${id}`);
      if (!result.ok) {
        throw new Error(`HTTP error! status: ${result.status}`);
      }
      const data = await result.json();
      setTourDetails(data?.data?.data || []);
    } catch (error) {
      console.log("Error:", error.message);
    }
  };
  console.log("tourDetailstourDetails", tourDetails);
  useEffect(() => {
    // Replace with actual ID or pass dynamically
    getTours();
  }, []);
  return (
    <>
      <section className="section-header">
        <div className="header__hero">
          <div className="header__hero-overlay &nbsp">
            <img
              className="header__hero-img"
              src={`/img/tours/${tourDetails.imageCover}`} // Make sure this points to a valid image URL
              alt={tourDetails.name} // Use the tour name as the alt text
              // Style the image using this className
            />
          </div>
        </div>
        <div className="heading-box">
          <h1 className="heading-primary">
            <span>{tourDetails.name}</span>
          </h1>
          <div className="heading-box__group text-black">
            <div className="heading-box__detail">
              <svg class="heading-box__icon">
                <CiClock2 />
              </svg>
              <span className="heading-box__text">
                {tourDetails?.duration} days
              </span>
            </div>
            <div className="heading-box__detail">
              <svg class="heading-box__icon">
                <FaMapMarkerAlt />
              </svg>
              <span className="heading-box__text">
                {tourDetails?.startLocation?.description}
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="section-description">
        <div className="overview-box">
          <div>
            <div className="overview-box__group">
              <h2 className="heading-secondary ma-bt-lg">Quick facts</h2>
              <div className="overview-box__detail">
                <svg class="overview-box__icon">
                  <FaCalendarAlt />
                </svg>
                <span className="overview-box__label">Next date</span>
                <span className="overview-box__text">
                  {" "}
                  {tourDetails.startDates && tourDetails.startDates[0]
                    ? new Date(tourDetails.startDates[0]).toLocaleDateString(
                        "en-US",
                        {
                          month: "long",
                          year: "numeric",
                        }
                      )
                    : "No start date available"}
                </span>
              </div>
              <div className="overview-box__detail">
                <svg class="overview-box__icon">
                  <IoIosTrendingUp />
                </svg>
                <span className="overview-box__label">Difficulty</span>
                <span className="overview-box__text">
                  {tourDetails.difficulty}
                </span>
              </div>
              <div className="overview-box__detail">
                <svg class="overview-box__icon">
                  <FaRegUser />
                </svg>
                <span className="overview-box__label">Participants</span>
                <span className="overview-box__text">
                  {tourDetails.maxGroupSize} people
                </span>
              </div>
              <div className="overview-box__detail">
                <svg class="overview-box__icon">
                  <CiStar />
                </svg>
                <span className="overview-box__label">Rating</span>
                <span className="overview-box__text">
                  {tourDetails.ratingsAverage}
                </span>
              </div>
            </div>

            <div className="overview-box__group">
              <h2 className="heading-secondary ma-bt-lg">Your tour guides</h2>

              <div className="overview-box__detail">
                <img
                  src={`/img/users/user-19.jpg`} // Make sure this points to a valid image URL
                  alt="Tour guide"
                  className="overview-box__img" // Use the tour name as the alt text
                  // Style the image using this className
                />
                <span className="overview-box__label">Lead guide</span>
                <span className="overview-box__text">Steven Miller</span>
              </div>
              <div className="overview-box__detail">
                <img
                  src={`/img/users/user-18.jpg`}
                  alt="Tour guide"
                  className="overview-box__img"
                />
                <span className="overview-box__label">Tour guide</span>
                <span className="overview-box__text">Lisa Brown</span>
              </div>
              <div className="overview-box__detail">
                <img
                  src={`/img/users/user-17.jpg`}
                  alt="Tour guide"
                  className="overview-box__img"
                />
                <span className="overview-box__label">Intern</span>
                <span className="overview-box__text">Max Smith</span>
              </div>
            </div>
          </div>
        </div>

        <div className="description-box">
          <h2 className="heading-secondary ma-bt-lg">{tourDetails.name}</h2>
          <p className="description__text">{tourDetails.description}</p>
          <p className="description__text">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum!
          </p>
        </div>
      </section>

      <section className="section-pictures">
        <div className="picture-box">
          <img
            src={`/img/tours/${tourDetails?.data?.images}`} // Make sure this points to a valid image URL
            alt={tourDetails.name} // Use the tour name as the alt text
            className="card__picture-img" // Style the image using this class
          />
        </div>
        <div className="picture-box">
          <img
            src={`/img/tours/tour-5-1.jpg`}
            alt="Tour guide"
            className="overview-box__img"
          />
        </div>
        <div className="picture-box">
          <img
            src={`/img/tours/tour-5-1.jpg`}
            alt="Tour guide"
            className="overview-box__img"
          />
        </div>
      </section>

      <section className="section-reviews mt-40">
        <div className="reviews">
          <div className="reviews__card">
            <div className="reviews__avatar">
              <img
                src={`/img/users/user-7.jpg`}
                alt="Jim Brown"
                className="reviews__avatar-img"
              />
              <h6 className="reviews__user">Jim Brown</h6>
            </div>
            <p className="reviews__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              dignissimos sint quo commodi corrupti accusantium veniam saepe
              numquam.
            </p>
            <div className="reviews__rating">
              <svg className="reviews__star reviews__star--active">
                <use href="img/icons.svg#icon-star"></use>
              </svg>
              <svg className="reviews__star reviews__star--active">
                <use href="img/icons.svg#icon-star"></use>
              </svg>
              <svg className="reviews__star reviews__star--active">
                <use href="img/icons.svg#icon-star"></use>
              </svg>
              <svg className="reviews__star reviews__star--active">
                <use href="img/icons.svg#icon-star"></use>
              </svg>
              <svg className="reviews__star reviews__star--active">
                <use href="img/icons.svg#icon-star"></use>
              </svg>
            </div>
          </div>

          <div className="reviews__card">
            <div className="reviews__avatar">
              <img
                src={`/img/users/user-14.jpg`}
                alt="Jim Brown"
                className="reviews__avatar-img"
              />
              <h6 className="reviews__user">Laura Wilson</h6>
            </div>
            <p className="reviews__text">
              Veniam adipisci blanditiis, corporis sit magnam aperiam ad, fuga
              reiciendis provident deleniti cumque similique itaque animi,
              sapiente obcaecati beatae accusantium.
            </p>
            <div className="reviews__rating">
              <svg className="reviews__star reviews__star--active">
                <use href="img/icons.svg#icon-star"></use>
              </svg>
              <svg className="reviews__star reviews__star--active">
                <use href="img/icons.svg#icon-star"></use>
              </svg>
              <svg className="reviews__star reviews__star--active">
                <use href="img/icons.svg#icon-star"></use>
              </svg>
              <svg className="reviews__star reviews__star--active">
                <use href="img/icons.svg#icon-star"></use>
              </svg>
              <svg className="reviews__star reviews__star--inactive">
                <use href="img/icons.svg#icon-star"></use>
              </svg>
            </div>
          </div>

          <div className="reviews__card">
            <div className="reviews__avatar">
              <img
                src={`/img/users/user-15.jpg`}
                alt="Jim Brown"
                className="reviews__avatar-img"
              />
              <h6 className="reviews__user">Ben Hadley</h6>
            </div>
            <p className="reviews__text">
              Debitis, nesciunt itaque! At quis officia natus. Suscipit,
              reprehenderit blanditiis mollitia distinctio ducimus porro tempore
              perspiciatis sunt vel.
            </p>
            <div className="reviews__rating">
              <svg className="reviews__star reviews__star--active">
                <use href="img/icons.svg#icon-star"></use>
              </svg>
              <svg className="reviews__star reviews__star--active">
                <use href="img/icons.svg#icon-star"></use>
              </svg>
              <svg className="reviews__star reviews__star--active">
                <use href="img/icons.svg#icon-star"></use>
              </svg>
              <svg className="reviews__star reviews__star--active">
                <use href="img/icons.svg#icon-star"></use>
              </svg>
              <svg className="reviews__star reviews__star--active">
                <use href="img/icons.svg#icon-star"></use>
              </svg>
            </div>
          </div>

          <div className="reviews__card">
            <div className="reviews__avatar">
              <img
                src={`/img/users/user-6.jpg`}
                alt="Jim Brown"
                className="reviews__avatar-img"
              />
              <h6 className="reviews__user">Alexander Jones</h6>
            </div>
            <p className="reviews__text">
              Quaerat laborum eveniet ut aut maiores doloribus mollitia aperiam
              quis praesentium sed inventore harum aliquam veritatis at adipisci
              ea assumenda!
            </p>
            <div className="reviews__rating">
              <svg className="reviews__star reviews__star--active">
                <use href="img/icons.svg#icon-star"></use>
              </svg>
              <svg className="reviews__star reviews__star--active">
                <use href="img/icons.svg#icon-star"></use>
              </svg>
              <svg className="reviews__star reviews__star--active">
                <use href="img/icons.svg#icon-star"></use>
              </svg>
              <svg className="reviews__star reviews__star--active">
                <use href="img/icons.svg#icon-star"></use>
              </svg>
              <svg className="reviews__star reviews__star--active">
                <use href="img/icons.svg#icon-star"></use>
              </svg>
            </div>
          </div>

          <div className="reviews__card">
            <div className="reviews__avatar">
              <img
                src={`/img/users/user-3.jpg`}
                alt="Jim Brown"
                className="reviews__avatar-img"
              />
              <h6 className="reviews__user">Ayla Cornell</h6>
            </div>
            <p className="reviews__text">
              Perferendis quo aliquid iste quas laboriosam molestias illo est
              voluptatem odit ea. Vero placeat culpa provident dicta maiores!
            </p>
            <div className="reviews__rating">
              <svg className="reviews__star reviews__star--active">
                <use href="img/icons.svg#icon-star"></use>
              </svg>
              <svg className="reviews__star reviews__star--active">
                <use href="img/icons.svg#icon-star"></use>
              </svg>
              <svg className="reviews__star reviews__star--active">
                <use href="img/icons.svg#icon-star"></use>
              </svg>
              <svg className="reviews__star reviews__star--active">
                <use href="img/icons.svg#icon-star"></use>
              </svg>
              <svg className="reviews__star reviews__star--active">
                <use href="img/icons.svg#icon-star"></use>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Details;
