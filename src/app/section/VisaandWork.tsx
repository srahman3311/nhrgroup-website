import Image from "next/image"

const VisaandWork = () => {
    return (
        <div className='w-full h-fit lg:h-screen lg:overflow-hidden bg-[#F6F6F6] gap-12 lg:gap-0 grid grid-cols-1 lg:grid-cols-2'>
            <div className="">
                <div className="relative w-full  h-full  flex flex-col items-start justify-between">

                    <Image
                        className="absolute z-10 top-0 left-0 w-full h-full object-cover"
                        width={5000}
                        height={5000}

                        alt="OverLay Image"
                        src={"/hvsr.webp"}
                    />

                    <div className="z-20 p-4 md:p-12 lg:p-24 w-full gap-12 h-full flex flex-col items-start justify-between">

                        <div className="">
                            <h2 className=" text-3xl font-bold">Visa Success <strong className="text-blue-400">Ratio</strong></h2>
                            <span style={{ width: "60px", height: "2px", background: "#000" }} className="inline-block"></span>
                            <br />
                            <p className="mt-8 text-slate-600">We have a very good visa success rates due to our very professional commitment towards our students.</p>
                        </div>
                        <div className="flex items-end justify-start gap-4">
                            <div className="w-12 h-[400px] bg-black  text-white ">
                                <div className="h-full w-full flex items-end justify-center">

                                    <h2 className="rotate-[270deg] origin-bottom ml-6 mb-24 text-end text-nowrap">
                                        United Kingdom
                                    </h2>
                                </div>

                                <h2 className="text-black text-center  font-semibold my-4">100%</h2>
                            </div>
                            <div className="w-12 h-[360px] bg-red-500 text-white ">
                                <div className="h-full w-full flex items-end justify-center">

                                    <h2 className="rotate-[270deg] origin-bottom ml-6 mb-16 text-end text-nowrap">
                                        Canada
                                    </h2>
                                </div>
                                <h2 className="text-black text-center  font-semibold my-4">90%</h2>
                            </div>
                            <div className="w-12 h-[320px] bg-blue-500 text-white ">
                                <div className="h-full w-full flex items-end justify-center">

                                    <h2 className="rotate-[270deg] origin-bottom ml-6 mb-[125px] text-end text-nowrap">
                                        United State of America
                                    </h2>
                                </div>

                                <h2 className="text-black text-center  font-semibold my-4">80%</h2>
                            </div>
                            <div className="w-12 h-[300px] bg-slate-700 text-white ">
                                <div className="h-full w-full flex items-end justify-center">

                                    <h2 className="rotate-[270deg] origin-bottom ml-6 mb-[4.2rem] text-end text-nowrap">
                                        Australia
                                    </h2>
                                </div>
                                <h2 className="text-black text-center font-semibold my-4">75%</h2>
                            </div>
                            <div className="w-12 h-[400px] bg-red-500 text-white ">
                                <div className="h-full w-full flex items-end justify-center">
                                    <h2 className="rotate-[270deg] origin-bottom ml-6 mb-[66px] text-end text-nowrap">
                                        Malaysia
                                    </h2>
                                </div>
                                <h2 className="text-black text-center  font-semibold my-4">100%</h2>
                            </div>
                        </div>
                    </div>
                </div>

                {/* =========================== sdfkfods ================================= */}
            </div>

            <div className="">
                <div className="pt-12 lg:pt-24 px-6 md:px-24 lg:px-16">
                    <h2 className=" text-3xl font-bold">How We <strong className="text-blue-400">Work?</strong></h2>
                    <span style={{ width: "60px", height: "2px", background: "#000" }} className="inline-block"></span>
                    <br />
                    <p className="mt-8 text-slate-600">It is very easy to apply through NHP Education Consultants. It starts from career counselling and ends in pre-departure orientation.</p>
                </div>

                <div className="w-full flex py-0 md:py-12 px-0 md:px-24 lg:px-16 origin-left scale-75 md:scale-100">
                    <div className=" flex items-center max-w-fit border-r-2 border-black mr-8 flex-col flex-grow">
                        <div className="h-full flex items-center justify-center px-6">
                            <div className="px-6 relative py-4 bg-black text-white text-nowrap">
                                <h2>Step 1</h2>
                                <div className="w-4 h-4 bg-white border-2 border-black rounded-full absolute top-[50%] right-[-34px] translate-y-[-50%]"></div>
                            </div>
                        </div>
                        <div className="h-full flex items-center justify-center px-6">
                            <div className="px-6 relative py-4 bg-black text-white text-nowrap">
                                <h2>Step 2</h2>
                                <div className="w-4 h-4 bg-white border-2 border-black rounded-full absolute top-[50%] right-[-33px] translate-y-[-50%]"></div>
                            </div>
                        </div>
                        <div className="h-full flex items-center justify-center px-6">
                            <div className="px-6 relative py-4 bg-black text-white text-nowrap">
                                <h2>Step 3</h2>
                                <div className="w-4 h-4 bg-white border-2 border-black rounded-full absolute top-[50%] right-[-33px] translate-y-[-50%]"></div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="flex w-[300px] bg-white shadow-sm border py-6 leading-6 px-2 items-center font-light text-sm my-4">
                            <Image
                                className="w-10 -translate-x-6 h-10 object-cover ring-4 ring-slate-300"
                                width={5000}
                                height={5000}
                                alt="Image"
                                src={"/how_we_work_image/hww-counselling.jpg"}
                            />
                            <p>Career Counselling - Course and Institution Selection - University Application</p>
                        </div>

                        <div className="flex w-[300px] bg-white shadow-sm border py-6 leading-6 px-2 items-center font-light text-sm my-4">
                            <Image
                                className="w-10 -translate-x-6 h-10 object-cover ring-4 ring-slate-300"
                                width={5000}
                                height={5000}
                                alt="Image"
                                src={"/how_we_work_image/hww-departure.jpg"}
                            />
                            <p>Visa Documents Preparation - Interview Preparation - Visa Application</p>
                        </div>

                        <div className="flex w-[300px] bg-white shadow-sm border py-6 leading-6 px-2 items-center font-light text-sm my-4">
                            <Image
                                className="w-10 -translate-x-6 h-10 object-cover ring-4 ring-slate-300"
                                width={5000}
                                height={5000}
                                alt="Image"
                                src={"/how_we_work_image/hww-visaapplication.jpg"}
                            />
                            <p>Accommodation Arrangement - Airport Pick Up - Pre-departure Orientation</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default VisaandWork
