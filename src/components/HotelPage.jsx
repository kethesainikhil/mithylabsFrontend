import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import { getHotelByIdAsync, getHotelsRecommendationsAsync, incrementBookings, incrementDrafts, incrementVisits } from '../features/AddUserSlice';

const HotelPage = () => {
    const hotelInfo = useSelector((state)=>state.user.hotelInfo)
    const hotelDetails = useSelector((state)=>state.user.hotelDetails)
    const dispatch = useDispatch();
    const id = parseInt(useParams().id);
    const [drafts,setDrafts] = useState(false);
    const [bookings,setBookings] = useState(false);
    const navigate = useNavigate();
    const handleDrafts = async  ()=>{
        try{
            const res = await  fetch(`${import.meta.env.VITE_BACKEND_URL}/updateHotelsInter`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    hotel_id : id,
                    Drafts:1,
                    visits:1,
                })
            })
            const data = await res.json()
            console.log(data)
        }
        catch(e){
            console.log(e)
        }
        

    }
    const handleBookings = async  ()=>{
        try{
            const res = await  fetch(`${import.meta.env.VITE_BACKEND_URL}/updateHotelsInter`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    hotel_id : id,
                    Bookings:1,
                })
            })
            const data = await res.json()
            console.log(data)
        }
        catch(e){
            console.log(e)
        }
        

    }
    
    useEffect(()=>{

        dispatch(getHotelByIdAsync(id))
    },[dispatch,id])
  return (
    <div>
        {
            hotelInfo ? 
            <div className="bg-gray-100 h-screen dark:bg-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row -mx-4">
                <div className="md:flex-1 px-4">
                    <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                        <img className="w-full h-full object-cover" src={hotelInfo.image_url} alt={hotelInfo?.hotel_name} />
                    </div>
                    <div className="flex -mx-2 mb-4">
                        <div className="w-1/2 px-2">
                            <button  onClick={()=>{
                                if(!drafts){
                                    dispatch(incrementDrafts())
                                    dispatch(incrementVisits())
                                    setDrafts(true);
                                    setBookings(true)
                                   handleDrafts()
                                }
                            }} className="w-full bg-yellow-500 dark:bg-yellow-500 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Draft Booking</button>
                        </div>
                        <div className="w-1/2 px-2">
                            <button onClick={()=>{
                                if(!bookings){
                                    dispatch(incrementBookings())
                                    setBookings(true)
                                    setDrafts(true)
                                    handleBookings()
                                }
                                
                            }} className="w-full bg-green-500 dark:bg-green-500 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Confirm Booking</button>
                        </div>
                    </div>
                    <div>
                    <div className="w-fullpx-2">
                            <button  onClick={()=>{
                                dispatch(getHotelsRecommendationsAsync())
                                navigate("/recommendations")
                            }} className="w-full bg-red-500 dark:bg-red-500 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Get Hotel Recommendations</button>
                        </div>
                    </div>
                </div>
                <div className="md:flex-1 px-4">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{hotelInfo?.hotel_name}</h2>
                    <div className="flex mb-4">
                        <div className="mr-4">
                            <span className="font-bold text-gray-700 dark:text-gray-300">Cost:</span>
                            <span className="text-gray-600 dark:text-gray-300">${hotelInfo?.rates_from}</span>
                        </div>
                        <div>
                            <span className="font-bold text-gray-700 dark:text-gray-300 mr-2">Availability:</span>
                        </div>
    
                            <div className='flex flex-col'>
                            <div className='flex justify-between items-center'>
                            <span className="text-gray-600 dark:text-gray-300">
                                {hotelInfo.checkin}
                            </span>
                            <span className='text-white'>----</span>
                            <span className="text-gray-600 dark:text-gray-300">
                                {hotelInfo.checkout}
                            </span>
                            </div>
                           
                            </div>
                    </div>
                    <div className='text-xl font-bold text-gray-800 dark:text-white my-2'>
                                Country:   {hotelInfo.hotel_country}
                            </div>
                    <div>
                        <span className="font-bold text-gray-700 dark:text-gray-300">About Hotel: </span>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                            {
                                hotelInfo?.overview
                            }
                        </p>
                    </div>
                    <div className='flex justify-between mx-auto text-center items-center mt-10'>
                        <h1 className='flex flex-col w-24 bg-white border-2 p-2'>Visits <span className='text-blue-500 font-bold'>{hotelDetails?.visits}</span></h1>
                        <h1 className='flex flex-col  w-24 bg-white border-2 p-2'>Drafts <span className='text-yellow-500 font-bold'>{hotelDetails?.Drafts}</span></h1>
                        <h1 className='flex flex-col  w-24 bg-white border-2 p-2'>Bookings <span className='text-green-500 font-bold'>{hotelDetails?.Bookings}</span></h1>
                    </div>
                </div>
            </div>
        </div>
    </div> : <div className='flex flex-col items-center mt-64 justify-center my-auto '>getting the hotel details.... <br /> please wait....
    <div role="status">
    <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span className="sr-only">Loading...</span>
</div> 
    </div>
        }
    </div>
  )
}

export default HotelPage