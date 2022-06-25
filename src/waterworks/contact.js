import React from "react";

export default function Contact(){
    const copyNumber = ()=>{
        navigator.clipboard.writeText("08038221114")
        alert("Copied Number: 08038221114")
    }
    const phoneIconsm = <svg xmlns="http://www.w3.org/2000/svg" className="fill-white" viewBox="0 0 24 24" width="55" height="55"><path fill="none" d="M0 0h24v24H0z"/><path d="M9.366 10.682a10.556 10.556 0 0 0 3.952 3.952l.884-1.238a1 1 0 0 1 1.294-.296 11.422 11.422 0 0 0 4.583 1.364 1 1 0 0 1 .921.997v4.462a1 1 0 0 1-.898.995c-.53.055-1.064.082-1.602.082C9.94 21 3 14.06 3 5.5c0-.538.027-1.072.082-1.602A1 1 0 0 1 4.077 3h4.462a1 1 0 0 1 .997.921A11.422 11.422 0 0 0 10.9 8.504a1 1 0 0 1-.296 1.294l-1.238.884zm-2.522-.657l1.9-1.357A13.41 13.41 0 0 1 7.647 5H5.01c-.006.166-.009.333-.009.5C5 12.956 11.044 19 18.5 19c.167 0 .334-.003.5-.01v-2.637a13.41 13.41 0 0 1-3.668-1.097l-1.357 1.9a12.442 12.442 0 0 1-1.588-.75l-.058-.033a12.556 12.556 0 0 1-4.702-4.702l-.033-.058a12.442 12.442 0 0 1-.75-1.588z"/></svg>
    const mailIconsm = <svg xmlns="http://www.w3.org/2000/svg" className="fill-white" viewBox="0 0 24 24" width="55" height="55"><path fill="none" d="M0 0h24v24H0z"/><path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 4.238l-7.928 7.1L4 7.216V19h16V7.238zM4.511 5l7.55 6.662L19.502 5H4.511z"/></svg>
    const mailIcon = <svg xmlns="http://www.w3.org/2000/svg" className="fill-white" viewBox="0 0 24 24" width="200" height="200"><path fill="none" d="M0 0h24v24H0z"/><path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 4.238l-7.928 7.1L4 7.216V19h16V7.238zM4.511 5l7.55 6.662L19.502 5H4.511z"/></svg>
    const phoneIcon2 = <svg xmlns="http://www.w3.org/2000/svg" className="fill-white" viewBox="0 0 24 24" width="200" height="200"><path fill="none" d="M0 0h24v24H0z"/><path d="M7 2h11a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V0h2v2zm0 7h10V4H7v5zm0 2v9h10v-9H7z"/></svg>
    const phoneIcon = <svg xmlns="http://www.w3.org/2000/svg" className="fill-white" viewBox="0 0 24 24" width="200" height="200"><path fill="none" d="M0 0h24v24H0z"/><path d="M9.366 10.682a10.556 10.556 0 0 0 3.952 3.952l.884-1.238a1 1 0 0 1 1.294-.296 11.422 11.422 0 0 0 4.583 1.364 1 1 0 0 1 .921.997v4.462a1 1 0 0 1-.898.995c-.53.055-1.064.082-1.602.082C9.94 21 3 14.06 3 5.5c0-.538.027-1.072.082-1.602A1 1 0 0 1 4.077 3h4.462a1 1 0 0 1 .997.921A11.422 11.422 0 0 0 10.9 8.504a1 1 0 0 1-.296 1.294l-1.238.884zm-2.522-.657l1.9-1.357A13.41 13.41 0 0 1 7.647 5H5.01c-.006.166-.009.333-.009.5C5 12.956 11.044 19 18.5 19c.167 0 .334-.003.5-.01v-2.637a13.41 13.41 0 0 1-3.668-1.097l-1.357 1.9a12.442 12.442 0 0 1-1.588-.75l-.058-.033a12.556 12.556 0 0 1-4.702-4.702l-.033-.058a12.442 12.442 0 0 1-.75-1.588z"/></svg>
    return <div>
        <div className="flex items-center justify-center mb-10 md:mb-0">
            <div className="md:p-20 mr-5 md:mr-0 flex flex-col items-center justify-center">
                <button className="p-10 bg-green-400 hidden md:block rounded-lg hover:scale-125 transition duration-300 hover:bg-green-500" onClick={()=>{copyNumber()}}>
                   
                    {phoneIcon}
                
                </button>
                <button className="p-10 bg-green-400 md:hidden rounded-lg hover:scale-125 transition duration-300 hover:bg-green-500" onClick={()=>{copyNumber()}}>
                   
                    {phoneIconsm}
                
                </button>

            </div>
            <div className="md:p-20 flex flex-col items-center justify-center">
                <form action="mailto:yinkaowoade@gmail.com">
                <button className="p-10 hidden md:block bg-green-400 rounded-lg hover:scale-125 transition duration-300 hover:bg-green-500">
                   
                   {mailIcon}
               
               </button>
                <button className="p-10 md:hidden bg-green-400 rounded-lg hover:scale-125 transition duration-300 hover:bg-green-500">
                   
                   {mailIconsm}
               
               </button>
                </form>
               
            </div>
        </div>

        <div className="p-20 font-Anek flex flex-col bg-blue-200 items-center justify-center w-full">
            <p className="text-blue-600 text-xl">Address</p>
            <div className="text-white">
                F.C.T, Abuja, Airport Road, Beside Dunamis Church, Plot 233a
            </div>
        </div>
    </div>
}