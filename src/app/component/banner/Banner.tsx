

const Banner = () => {
    return (
        <div className="relative h-screen text-white bannerBackground flex flex-col justify-between">
            <div className="afterbg -z-10">

            </div>
            <div className="z-20 controllLargewidth flex items-center justify-start h-[70vh]">
                <div className="">

                    <h4 className="text-[3vw] md:text-[1.6vw] lg:text-[1.4vw] xl:text-[1.2vw] text-red-500">Study in</h4>
                    <h2 className="text-[5.2vw] md:text-4.6vw] lg:text-[4vw] xl:text-[3vw] mb-2">UK. USA. CANADA. AUSTRALIA. MALAYSIA</h2>
                    <p className="w-full md:w-3/4 lg:w-2/4 text-sm md:text-md lg:text-lg my-2 ">Process your most Reputed and Successful Consultency firm in Dhaka, Bangladesh.</p>
                    <button className="px-6 rounded-lg py-4 border my-4 hover:border-red-500">Explore More</button>
                </div>
            </div>
            <div className="bg-black">

                <div className="controllLargewidth flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4 ">
                    <div>

                        <h2 className="font-bold text-3xl my-2 text-center lg:text-start">Get a Free consultation</h2>
                        <p className="text-slate-300 text-center lg:text-start">Book an appointment with our experieneced consultanats to discuss your study abroad options.</p>
                    </div>
                    <div>

                        <button className="px-6 py-4 bg-white hover:bg-green-600 hover:text-white transition-all hover:rounded-lg text-red-500">Book an appointment</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner

