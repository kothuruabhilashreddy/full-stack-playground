import { useEffect, useState } from "react";

const Hero = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isTextCopied, setIsTextCopied] = useState(false);
    const [errorFunction, setIsErrorFunction] = useState("");

    const handleDialogBox = (e) => {
        setIsDialogOpen(e.status)
        if(e.status)
            setIsErrorFunction(e.type)
    }

    const copyEmailToClipboard = async (e) => {
        try {
            await navigator.clipboard.writeText("kothuruabhilashreddy@gmail.com");
            setIsTextCopied(true);
            setTimeout(() => {
                setIsTextCopied(false)
                setIsDialogOpen(false)
            }, 500);
          
        } catch (err) {
          console.error('Failed to copy text: ', err);
        }
      };

    return (
        <header className="bg-white dark:bg-gray-900 mt-0 p-0 h-auto lg:min-h-screen">
            <nav className="border-t-4 border-blue-500">
                <div className="container flex items-center justify-between px-6 py-3 mx-auto">
                    <a href="/" className="text-3xl  font-semibold text-gray-900 dark:text-white lg:text-4xl">
                        {/* <img className="w-auto h-6 sm:h-7" src="https://merakiui.com/images/full-logo.svg" alt="" /> */}
                        Abhilash Reddy Kothuru
                    </a>

                    <a className="my-1 text-sm font-medium text-gray-500 rtl:-scale-x-100 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 lg:mx-4 lg:my-0" href="/">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                        </svg>
                    </a>
                </div>
            </nav>

            <div className="container px-16 py-10 mx-auto">
                <div className="flex flex-col lg:flex-row items-center">
                    <div className="w-full lg:w-1/2">
                        <div className="lg:max-w-lg">
                            <a href="/" className="text-2xl  text-gray-800 dark:text-white lg:text-3xl">
                                {/* <img className="w-auto h-6 sm:h-7" src="https://merakiui.com/images/full-logo.svg" alt="" /> */}
                                Build large scale applications?
                            </a>
                            <h1 className="mt-2 text-gray-500 dark:text-white lg:text-lg">I code to build <span className="text-blue-500">efficient, scalable</span> applications and resolve the <span className="text-blue-500">performance bottle necks</span> in the product.</h1>

                            {/* <p className="mt-3 text-gray-600 dark:text-gray-400">Full Stack Developer | Distributed Systems</p> */}

                            <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                                {/* <input id="email" type="text" className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Email Address"/> */}
                                <button onClick={()=>handleDialogBox({"type": "Call", "status": true})} className="w-full px-5 py-2 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto lg:mx-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                Schedule a Call 📆
                                </button>
                                <button onClick={()=>handleDialogBox({"type": "Chat", "status": true})}  className="w-full px-5 py-2 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto lg:mx-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                Coffee Chat? ☕
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                        <img className="w-full h-full max-w-md" src="https://merakiui.com/images/components/Email-campaign-bro.svg" alt="email illustration vector art"/>
                    </div> */}

                    <div className="w-full mt-16 lg:w-1/2 lg:mt-0  self-start">
                        <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">What I can do.</h1>
                        {/* <p className="mt-1 text-gray-500 dark:text-gray-400">Experiested React Develo</p> */}

                        {/* <div className="flex items-center mt-6 gap-x-3">
                            <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                                </svg>


                                <span>Go back</span>
                            </button>

                            <button className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
                                Take me home
                            </button>
                        </div> */}

                        <div className="mt-5 space-y-6">
                            <div>
                                <a href="/" className="inline-flex items-center text-sm text-blue-500 gap-x-2 dark:text-blue-400 hover:underline">
                                    <span>Full Stack Engineer</span>

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                    </svg>
                                </a>

                                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Industrial experience on building event-driven web programming, database management, data modeling, software design/development principles, microservices, software testing, CI/CD and cloud services. </p>
                            </div>

                            <div>
                                <a href="/" className="inline-flex items-center text-sm text-blue-500 gap-x-2 dark:text-blue-400 hover:underline">
                                    <span>Distributed Systems</span>

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                    </svg>
                                </a>
                                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Designed highly scalable parllely computation services. Built fault-tolerant distributed systems, replication, consistency models, fault tolerant distributed transactions, agreement and commitment, consensues, data sharding and several use cases of distributed systems. </p>
                            </div>

                            <div>
                                <a href="/" className="inline-flex items-center text-sm text-blue-500 gap-x-2 dark:text-blue-400 hover:underline">
                                    <span>Front-End Specialization</span>

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                    </svg>
                                </a>

                                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Built multiple dynamic data-driven applications and resuable front-end components. In Depth understanding of react, state management, redux, dynamic routes, authentication and unit testing with their design patterns.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {isDialogOpen &&
                <div
                    className="fixed inset-0 z-10 overflow-y-auto" 
                    aria-labelledby="modal-title" role="dialog" aria-modal="true"
                >
                    <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                        <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl dark:bg-gray-900 sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                            <div>
                                <div className="flex items-center justify-center ">
                                    {/* <img className="object-cover w-12 h-12 rounded-full ring ring-white" src="https://images.unsplash.com/photo-1490195117352-aa267f47f2d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
                                    <img className="object-cover w-12 h-12 -mx-4 rounded-full ring ring-white" src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
                                    <img className="object-cover w-12 h-12 rounded-full ring ring-white" src="https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" /> */}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                    </svg>
                                </div>

                                <div className="mt-4 text-center">
                                    <h3 className="font-medium leading-6 text-gray-800 capitalize dark:text-white" id="modal-title">
                                        Oh no! {errorFunction} Isn't Available Right Now
                                    </h3>

                                    <p className="mt-2 text-sm text-left text-gray-500 dark:text-gray-400">
                                    Sorry for the inconvenience! In the meantime, you can reach out to me via email. Looking forward to hearing from you! 😊
                                    </p>
                                </div>
                            </div>

                            <div className="mt-4">
                                <label className="text-sm text-gray-700 dark:text-gray-200" htmlFor="share link">Email</label>

                                <div className="flex items-center mt-2 -mx-1">
                                    <input type="text" value="kothuruabhilashreddy@gmail.com" className="flex-1 block h-10 px-4 mx-1 text-sm text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />

                                    <button onClick={() => copyEmailToClipboard()} className="hidden mx-1 text-gray-600 transition-colors duration-300 sm:block dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div className="mt-4 sm:mt-6 sm:flex sm:items-center sm:-mx-2">
                                <button onClick={()=>handleDialogBox({"type": "Close", "status": false})}  className="w-full px-4 py-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:w-1/2 sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40">
                                    Cancel
                                </button>

                                <button onClick={() => copyEmailToClipboard()} className="w-full px-4 py-2 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
                                    {isTextCopied ? "Email Copied" : "Copy Email"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </header>
    )
}

export default Hero;