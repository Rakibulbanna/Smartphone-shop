import React, { useEffect, useState } from 'react';
import SingleReview from '../SingleReview/SingleReview';
import './ReviewSection.css'

const ReviewSection = () => {


    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://smartphone-shop-server-side.onrender.com/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })

    }, [])




    return (

        <div className="packages">
            <h2 className="section-heading">Clients Feedback</h2>


            <div className='review-grid container'>

                {reviews.map(review =>

                    <SingleReview key={review._id} review={review}></SingleReview>

                )}

            </div>



        </div>
    );
};

export default ReviewSection;