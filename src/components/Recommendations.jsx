import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sortHotelRecommendations } from '../features/AddUserSlice'
import { useNavigate } from 'react-router-dom';
import image from "../assets/image.png"
const Recommendations = () => {
    function renderStarRating(rating) {
        const maxRating = 5; // Assuming a maximum rating of 5 stars
        const fullStars = Math.floor(rating);
        const halfStars = Math.ceil(rating - fullStars);
        const emptyStars = maxRating - fullStars - halfStars;
    
        const starIcon = '★'; // You can use any star icon you prefer
    
        const fullStarString = starIcon.repeat(fullStars);
        const halfStarString = '☆'.repeat(halfStars); // Half star icon
        const emptyStarString = '☆'.repeat(emptyStars);
    
        return fullStarString + halfStarString + emptyStarString;
    }
    let hotelRecommendations = useSelector((state)=>state.user.hotelRecommendations)
    console.log(hotelRecommendations)
    hotelRecommendations = hotelRecommendations?.slice(0,10)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(sortHotelRecommendations());
    console.log(hotelRecommendations)

    })
    
  return (
    <section id="Projects" className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">

    {
        hotelRecommendations.length > 0 ? hotelRecommendations?.map((hotel)=>{
          return(
            <div  key={hotel.id}  className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <img src={hotel.image_url}
                        alt={hotel.hotel_name} className="h-80 w-72 object-cover rounded-t-xl" />
                <div className="px-4 py-3 w-72 flex flex-col">
                    <p className="text-lg font-bold text-center text-black truncate block capitalize">{hotel.hotel_name}</p>
                    
                    <div className="flex items-center justify-between">
                        <p className="text-lg font-semibold text-black cursor-auto my-3">${hotel.rates_from}</p>
                        <p className="text-lg font-semibold text-black cursor-auto my-3">{hotel.hotel_country}</p>
                        <div>
                            <p className="text-lg font-semibold text-yellow-300 cursor-auto my-3">
                                {renderStarRating(hotel.star_rating)}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        
                    </div>
                </div>
                <div className='flex mx-auto pb-4 gap-4 items-center justify-center'>
                    <img  src={image} alt="views" className="w-5 flex items-end justify-end h-5" />
                    <p className="text-lg font-semibold text-black cursor-auto">{hotel.details.visits + hotel.details.Bookings + hotel.details.Drafts }</p>
                </div>

        </div>
          )
        }) :  <div className='mt-64'> <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span className="sr-only">Loading...</span></div>
}
    </section>
  )
}

export default Recommendations