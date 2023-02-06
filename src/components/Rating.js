import React from 'react'
import { useState } from 'react'

function Rating() {
    const [selectedRating, setSelectedRating] = useState();
    const [isSubmitted, setIsSubmitted] = useState(false)

    function handleRatingClicked(rating) {
        setSelectedRating(rating)
    }

    function handleFormSubmitted(e) {
        e.preventDefault();
        setIsSubmitted(true);
    }

    return isSubmitted ? (<section className='thank-you-panel'>
        <img src='../public/assets/images/illustration-thank-you.svg' alt='' />
        <p className='rating-results'>You selected {selectedRating} out of 5.</p>
        <h1>Thank you!</h1>

        <p>We appreciate you taking the time to give a rating. If you ever need more support,
            don’t hesitate to get in touch!</p>
    </section>) : (
        <form onSubmit={handleFormSubmitted} className='rating-panel'>
            <img className='star-bg' src='../public/assets/images/icon-star.svg' alt='' />
            <h1>How did we do?</h1>
            <p>Please let us know how we did with your support request. All feedback is appreciated
                to help us improve our offering!</p>
            <div className='btn-group'>
                {[1, 2, 3, 4, 5].map((rating) => (
                    <button type='button' key={rating.toString()} onClick={() => handleRatingClicked(rating)}
                    > {rating} </button>))}

            </div>
            <button className='btn-submit' disabled={selectedRating === undefined} type='submit'>SUBMIT</button>
        </form>
    )
}

export default Rating