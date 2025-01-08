import Image from "next/image"
import { BsStarFill } from "react-icons/bs"


const StudentSay = () => {
    return (
        <div className='w-full h-fit lg:h-screen lg:overflow-hidden bg-[#F6F6F6] gap-12 lg:gap-0 grid grid-cols-1 lg:grid-cols-2'>
            <div className="">
                <div className="w-full  h-full  flex flex-col items-center lg:items-start justify-between">

                    <div className="z-20 p-4 md:p-12 lg:p-24 w-full md:w-[75%] lg:w-full gap-12 h-full flex flex-col items-start justify-between">

                        <div className="">
                            <h2 className=" text-3xl font-bold">General <strong className="text-blue-500"> Enquiry</strong></h2>
                            <span style={{ width: "60px", height: "2px", background: "#000" }} className="inline-block"></span>
                            <br />
                            <p className="mt-8 text-slate-600">If you wish to make a query, please complete the form below and submit.</p>
                        </div>
                        <div className="flex items-start justify-end w-[90%] ">
                            <div>

                                <button className="w-full bg-blue-500 text-white p-4 my-2">Free Consultation</button>
                                <input className="w-full p-4 my-2 border border-slate-300 transition-all focus:border-blue-500 outline-none focus:outline-none" placeholder="Full Name" type="text" name="" id="" />
                                <input className="w-full p-4 my-2 border border-slate-300 transition-all focus:border-blue-500 outline-none focus:outline-none" placeholder="Your Email" type="text" name="" id="" />

                                <textarea rows={5} className="w-full p-4 my-2 border border-slate-300 transition-all focus:border-blue-500 outline-none focus:outline-none" name="" id=""></textarea>

                                <button className="px-6 py-3 hover:bg-blue-500 hover:text-white hover:rounded-lg transition-all hover:shadow-xl bg-black text-white">Send Us</button>
                            </div>

                        </div>
                    </div>
                </div>

                {/* =========================== sdfkfods ================================= */}
            </div>

            <div className="">
                <div className="relative  w-full lg:w-full  h-full  flex flex-col items-center md:items-center md:justify-center lg:items-start justify-between">

                    <Image
                        className="absolute z-10 top-0 left-0 w-full min-h-full object-fill"
                        width={5000}
                        height={5000}

                        alt="OverLay Image"
                        src={"/htestimonial-bg.webp"}
                    />

                    <div className="z-20 p-4 md:p-12 lg:px-[2vw] lg:py-24  w-full md:w-[75%] lg:w-full gap-12 h-full flex flex-col items-start justify-between">

                        <div className="">
                            <h2 className=" text-3xl font-bold">What our Students <strong className="text-blue-500">Say?</strong></h2>
                            <span style={{ width: "60px", height: "2px", background: "#000" }} className="inline-block"></span>
                            <br />
                            <p className="mt-8 text-slate-600">We’ve chosen a selection of student testimonials to give you a better insight about us, our honesty, transparency and our devotion towards our students.</p>
                        </div>
                        <div className="flex items-start justify-start ">
                            <div className="flex items-start flex-col lg:flex-row gap-8">
                                <div>

                                    <Image
                                        className="w-[160px] object-fill"
                                        width={5000}
                                        height={5000}

                                        alt="OverLay Image"
                                        src={"/marzana-mehdi-h.webp"}
                                    />
                                    <div className="my-4">
                                        <h3 className="uppercase tracking-tight text-nowrap text-lg font-semibold">Marzana Mehedi</h3>
                                        <p className="text-red-400 text-nowrap">Coventry University</p>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xl my-2 ">
                                        BBA in Accounting
                                    </h3>
                                    <div className="flex gap-1 mb-6">

                                        <BsStarFill />
                                        <BsStarFill />
                                        <BsStarFill />
                                        <BsStarFill />
                                        <BsStarFill />
                                    </div>
                                    <p className="text-slate-600"> <Image className="w-6 rotate-[180deg] inline-block" width={5000} height={5000} alt="InvertImage" src={"/InvertImage.webp"} /> NHP is the most genuine consultancy firm you can come across in the town. They made all of my procedure and paper work go so smoothly. I can’t thank... <Image className="w-6 inline-block" width={5000} height={5000} alt="InvertImage" src={"/InvertImage.webp"} /></p>


                                    <button className="px-4 py-2 my-4 border hover:bg-black hover:text-white transition-all">View More</button>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

                {/* =========================== sdfkfods ================================= */}
            </div>
        </div >
    )
}

export default StudentSay
