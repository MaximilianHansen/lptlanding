import React from 'react';
import { useState } from 'react';
// import { BeakerIcon, CalendarIcon, MapIcon, UserIcon } from '@heroicons/react/24/outline'
import {Helmet} from "react-helmet";
import Carousel from './Carousel';
import Plausible from 'plausible-tracker';
import CountdownTimer from './CountdownTimer';

//const stripePromise = loadStripe('pk_live_51LEzDhAyT9LpkkZpoVTGqyJrj0PvgfCzHvnbY2s95ssAYETSrtiB1ODubkg1bjlDihOC3SWLoxCOx82dWhsqV2PS00VpOxFpkC');


function SignUp() {    
    const targetDate = "April 30, 2024 23:59:59";
        const {trackEvent, trackPageview} = Plausible();
        trackPageview()

        const handleIframeLoad =() => {
            setLoading(false);
        }
    
        const handleSubmit = (event) => {
            setLoading(true);
            setCheckout(true);
            trackEvent('checkout')
            event.preventDefault(); 
        };

        const x = () => {
            setCheckout(false);
        }

        const [checkout, setCheckout] =  useState(false);
        const [loading, setLoading] = useState(false);

        

    return (
        <div >
            <Helmet>
            <title>April $40 Special!</title>
            <meta name="description" content="No more off-and-on workouts, stay motivated and consistent!" />
            <meta property="og:title" content="April Special" />
            <meta property="og:description" content="No more off-and-on workouts, stay motivated and consistent!" />
            <meta property="og:image" content="./logo.png" />
            <meta property="og:url" content="./logo.png" />
            </Helmet>


            
            <div className="w-full  flex flex-row justify-center pt-4 pb-4 bg-primary "><img className="h-[1.5rem]"src="./logo.png"></img></div>
            {loading && <div className="font-bold w-full text-center pt-8 ">Loading...</div>} 
            {checkout ? <><p className="absolute top-[4rem] font-bold text-l right-4 p-4 z-50 cursor-pointer" onClick={x}> X </p> <iframe className='w-full h-[100vh] pt-4'  onLoad={handleIframeLoad} src='https://www.clubready.com/JoinUs/696/583627'/></> : 
            <div className='md:flex md:justify-center md:mt-20 '>
            <div className="flex flex-col items-center md:w-4/5 md:pb-12 md:px-6 md:border-2 md:rounded-xl md:border-base md:bg-primary-content md:shadow-xl md:max-w-[70%]">
            
            
            <div className='md:flex md:flex-row  '>
            <div className='md:flex md:flex-col md:w-1/2 md:my-8 md:justify-center md:items-center'>
            <div className="flex w-full justify-center mt-8 md:mt-0">
                    <h1 className="text-3xl font-black text-center px-8 uppercase">Try four personal training sessions <h1 className='text-primary'>for only $40</h1></h1>
                </div>
                <div className="px-8 mt-4">
                    <p className="text-center">Act now, April availability is very limited! </p>
                </div>
                <ul class="hidden md:block list-disc mx-8 mt-6 mb-8">
                <li className="mb-3"><p className="inline text-primary font-bold">Bonus #1 ($200 Value) : </p><p className='inline'>Individualized Meal plan with Grocery List and Food Prep Guide</p></li>
                <li><p className="inline text-primary font-bold">Bonus #2 ($49 Value) : </p><p className='inline'>Our foolproof acountibility system that can make anyone stick to their weightloss regimen</p></li>
            </ul>
            <div className="hidden md:flex flex-row justify-center w-4/5">
                    <button onClick={handleSubmit} className="btn btn-primary uppercase font-black text-l w-full ">Sign Up Now!</button>
                </div>
            </div> 
                <div className="mx-8 md:mt-8 flex flex-col md:w-1/2 md:mx-0  md:justify-center">
                <div className='my-4 md:mx-0 mx-4 border-2 rounded-xl bg-primary-content  border-primary'>
                    <img src="./transformation.png"></img>
                </div>
                <div className="flex justify-center md:hidden mt-1">
                    <button onClick={handleSubmit} className="btn btn-primary uppercase font-black text-l w-[75%]">Sign Up Now!</button>
                </div>
            </div>
               
            </div>  

            <ul class="md:hidden list-disc mx-10 mt-6 mb-8">
            <li className="mb-3"><p className="inline text-primary font-bold">Bonus #1 ($200 Value) : </p><p className='inline'>Individualized Meal plan with Grocery List and Food Prep Guide</p></li>
                <li><p className="inline text-primary font-bold">Bonus #2 ($49 Value) : </p><p className='inline'>Our foolproof acountibility system that can make anyone stick to their weightloss regimen</p></li>
            </ul>

            </div>
           
            </div>   }    
        </div>
    );
}

export default SignUp;