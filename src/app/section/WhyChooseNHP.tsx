

import { whyChooseNhpDate } from "../data/countryData"


const WhyChooseNHP = () => {
    return (
        <div id="whyChoseNhp" className="bg-[#F4F4F4] h-fit lg:min-h-screen flex flex-col justify-between gap-12 ">
            <div className="w-full flex controllLargewidth items-start justify-between flex-col lg:flex-row gap-4 lg:gap-6">
                <div className="w-full text-center">

                    <h2 className="text-[6.2vw] md:text-[4.6vw] lg:text-[4vw] xl:text-[3vw] text-[#002147] text-nowrap uppercase">Why Choose NHP?</h2>
                </div>
                <div className=" w-full">

                    <p className="text-center lg:text-start text-sm lg:text-lg leading-5 font-light">
                        In confusion, many can &lsquo; t decide where to get proper knowing for his or her desired aim and sometimes it can be an unwise decision.
                    </p>
                </div>
            </div>

            <div className="controllLargewidth grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-full lg:max-w-[90%]">
                {whyChooseNhpDate.map((singleCountryData) => {
                    return <div className="shadow-md border bg-white border-slate-100  p-6 flex items-start justify-center gap-2 flex-col hover:shadow-lg transition-all cursor-pointer group hover:bg-[#193759]" key={singleCountryData.title}>
                        <div className="flex justify-between items-center gap-6">

                            <div className="text-5xl transition-all group-hover:text-white">
                                <singleCountryData.icon />
                            </div>

                            <h2 className="text-center text-xl transition-all group-hover:text-white">{singleCountryData.title}</h2>
                        </div>
                        <p className="text-sm font-light transition-all group-hover:text-white">{singleCountryData.description}</p>

                        <button className="w-full block mt-2 transition-all text-center font-extralight text-blue-600">➡</button>
                    </div>
                })}
            </div>
        </div >
    )
}

export default WhyChooseNHP
