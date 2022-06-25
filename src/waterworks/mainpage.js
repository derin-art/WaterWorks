import React,{useState, useEffect} from "react";
import WaterBottle from "./Media/WaterBottle3.jpg"
import ManDrinking from "./Media/ManDrinking.jpg"
import ManDrinking2 from "./Media/ManDrinking2.jpg"
import Nafdac from "./Media/Nafdac.png"



export default function MainPage(){
const twitterIcon = <svg xmlns="http://www.w3.org/2000/svg" className="fill-white" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M15.3 5.55a2.9 2.9 0 0 0-2.9 2.847l-.028 1.575a.6.6 0 0 1-.68.583l-1.561-.212c-2.054-.28-4.022-1.226-5.91-2.799-.598 3.31.57 5.603 3.383 7.372l1.747 1.098a.6.6 0 0 1 .034.993L7.793 18.17c.947.059 1.846.017 2.592-.131 4.718-.942 7.855-4.492 7.855-10.348 0-.478-1.012-2.141-2.94-2.141zm-4.9 2.81a4.9 4.9 0 0 1 8.385-3.355c.711-.005 1.316.175 2.669-.645-.335 1.64-.5 2.352-1.214 3.331 0 7.642-4.697 11.358-9.463 12.309-3.268.652-8.02-.419-9.382-1.841.694-.054 3.514-.357 5.144-1.55C5.16 15.7-.329 12.47 3.278 3.786c1.693 1.977 3.41 3.323 5.15 4.037 1.158.475 1.442.465 1.973.538z"/></svg>
const faceBookIcon = <svg xmlns="http://www.w3.org/2000/svg" className="fill-white" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"/></svg>
const instagramIcon = <svg xmlns="http://www.w3.org/2000/svg" className="fill-white" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6.5-.25a1.25 1.25 0 0 1-2.5 0 1.25 1.25 0 0 1 2.5 0zM12 4c-2.474 0-2.878.007-4.029.058-.784.037-1.31.142-1.798.332-.434.168-.747.369-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.006 9.075 4 9.461 4 12c0 2.474.007 2.878.058 4.029.037.783.142 1.31.331 1.797.17.435.37.748.702 1.08.337.336.65.537 1.08.703.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.474 0 2.878-.007 4.029-.058.782-.037 1.309-.142 1.797-.331.433-.169.748-.37 1.08-.702.337-.337.538-.65.704-1.08.19-.493.296-1.02.332-1.8.052-1.104.058-1.49.058-4.029 0-2.474-.007-2.878-.058-4.029-.037-.782-.142-1.31-.332-1.798a2.911 2.911 0 0 0-.703-1.08 2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.925 4.006 14.539 4 12 4zm0-2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2z"/></svg>
const leafIcon = <svg xmlns="http://www.w3.org/2000/svg" className="fill-green-500" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0H24V24H0z"/><path d="M21 3v2c0 9.627-5.373 14-12 14H7.098c.212-3.012 1.15-4.835 3.598-7.001 1.204-1.065 1.102-1.68.509-1.327-4.084 2.43-6.112 5.714-6.202 10.958L5 22H3c0-1.363.116-2.6.346-3.732C3.116 16.974 3 15.218 3 13 3 7.477 7.477 3 13 3c2 0 4 1 8 0z"/></svg>
const peopleIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 11a5 5 0 0 1 5 5v6H7v-6a5 5 0 0 1 5-5zm-6.712 3.006a6.983 6.983 0 0 0-.28 1.65L5 16v6H2v-4.5a3.5 3.5 0 0 1 3.119-3.48l.17-.014zm13.424 0A3.501 3.501 0 0 1 22 17.5V22h-3v-6c0-.693-.1-1.362-.288-1.994zM5.5 8a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm13 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM12 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8z"/></svg>
const transportIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M16,1 C16.5522847,1 17,1.44771525 17,2 L17,3 L22,3 L22,9 L19.980979,9 L22.7270773,16.5448432 C22.9032836,16.9958219 23,17.4866163 23,18 C23,20.209139 21.209139,22 19,22 C17.1361606,22 15.5700603,20.7252272 15.1260175,19 L10.8739825,19 C10.4299397,20.7252272 8.86383943,22 7,22 C5.05550552,22 3.43507622,20.612512 3.0747418,18.7735658 C2.43596423,18.4396361 2,17.7707305 2,17 L2,7 C2,6.44771525 2.44771525,6 3,6 L10,6 C10.5522847,6 11,6.44771525 11,7 L11,12 C11,12.5522847 11.4477153,13 12,13 L14,13 C14.5522847,13 15,12.5522847 15,12 L15,3 L12,3 L12,1 L16,1 Z M19,16 C17.8954305,16 17,16.8954305 17,18 C17,19.1045695 17.8954305,20 19,20 C20.1045695,20 21,19.1045695 21,18 C21,17.7596672 20.9576092,17.5292353 20.8798967,17.3157736 L20.8635387,17.2724216 C20.5725256,16.5276089 19.8478776,16 19,16 Z M7,16 C5.8954305,16 5,16.8954305 5,18 C5,19.1045695 5.8954305,20 7,20 C8.1045695,20 9,19.1045695 9,18 C9,16.8954305 8.1045695,16 7,16 Z M9,8 L4,8 L4,10 L9,10 L9,8 Z M20,5 L17,5 L17,7 L20,7 L20,5 Z"/></svg>
const vapourIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M1.584 13.007a8 8 0 0 1 14.873-5.908 5.5 5.5 0 0 1 6.52 5.908H1.584zM4 19h17v2H4v-2zm-2-4h21v2H2v-2z"/></svg>

    return <div className="overflow-x-hidden font-Anek overflow-x-hidden">
        <div className="flex flex-col sm:flex-row max-w-screen">
            <img src= {WaterBottle} className="rounded-lg sm:w-96 lg:w-[400px]">
            </img>
            <div className="font-bold text-3xl mt-10 sm:mt-0 sm:text-5xl lg:text-7xl flex border-l-8 border-blue-300 items-center bg-gray-100 ml-8 rounded-l-lg justify-center p-4 leading-10 tracking-lg">
                <div className="">
                Crystal <span className="text-blue-400">Clear,</span>
                 Yet full of healthy minerals, Just for <span className="text-blue-400">You.</span>
                </div>
            </div>
        </div>

        <div className="flex max-w-screen overflow-x-hidden sm:mt-16 mt-10 flex-col sm:flex-row">
            <div className="font-bold text-2xl sm:text-5xl lg:text-7xl flex items-center mb-4 sm:mb-0 bg-gray-100 border-r-8 border-black mr-6 sm:mr-8 rounded-r-lg justify-center text-gray-700 sm:p-6 p-6 leading-12 tracking-lg">
                <div>
                    Sourced From the <span className="text-green-400">Springs</span> of Abuja, and Engineered to keep you on the <span className="text-green-400">Go!</span>
        
                </div>
            </div>
         
            <img src={ManDrinking} className="sm:h-full h-32 w-screen -mr-6 object-cover self-end sm:w-fit object-left rounded-l-lg sm:mr-4 sm:max-h-[600px]"></img>
   
        </div>
<div className="flex items-center justify-center mt-20">
    
<div className="flex flex-col md:flex-row justify-between md:items-stretch md:w-4/5 items-center justify-center">
            <div className="md:p-15 lg:p-20 p-10 md:ml-2 bg-green-400 md:w-96 w-72 rounded-lg mb-4 md:mb-0">
                {vapourIcon}
                <div className="">
                    Vapour Distilled
                </div>
                <div className="text-sm">
                    Every batch of water passes through a series of machines and through a Vapour distillation proccess which guarantees maximum purity. 
                </div>

            </div>
            <div className="md:p-15 p-10 lg:p-20  md:ml-2 bg-green-400 md:w-96 w-72 rounded-lg mb-4 md:mb-0">
                {transportIcon}
                <div className="">
                    Free deliverly for orders over #100,000.
                </div>

            </div>
            <div className="md:p-15 p-10 lg:p-20  md:ml-2 bg-green-400 md:w-96 w-72 rounded-lg">
                {peopleIcon}
                <div className="">
                    Join our community, stay abreast with our new technologies and vote for new products.
                </div>

            </div>
        </div>

</div>
        <div className="w-full mt-20">
            <div className="p-20 bg-white flex flex-col items-center justify-center">
                {leafIcon}
                <div className="text-blue-300 text-lg">
                    Clean Water Initiative
                </div>
                <p>
                    Every 10 bottle guarantees a child has clean water for a day
                </p>
            </div>
        </div>
        <div className="p-10 flex flex-col items-center justify-center">
            <img src={Nafdac} className="h-24"></img>
            <div className="font-Anek text-green-400 text-lg font-bold">
                Nafdac Approved
            </div>
        </div>
 
        <div className="mt-20 bg-blue-800 p-20 text-white flex flex-col items-center justify-center">
            <div>
               SignUp and stay updated
            </div>
            <form className="flex flex-col mt-2">
            <input type="email" placeholder="email" className="p-2 text-black"></input>
                <button className="bg-white p-2 text-black mt-4 hover:bg-green-400 hover:text-white">SignUp</button>
               
            </form>
            <div className="mt-10">
                Find us @
            </div>
            <div className="flex">
                <button className="p-2">
                {twitterIcon}
                </button>
                <button className="p-2">
                        
                {faceBookIcon}
                </button>
                <button className="p-2">
                
                {instagramIcon}
                </button>
   
            </div>
        </div>
   
    </div>
}