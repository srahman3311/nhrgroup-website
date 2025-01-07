
import Image from "next/image"
import { countryData } from "../data/countryData"


const CountryChooseSection = () => {
    return (
        <div className="controllLargewidth w-[50%] h-fit lg:h-screen flex flex-col justify-between gap-12 !mt-4">
            <div className="w-full flex  items-start justify-between flex-col lg:flex-row gap-4 lg:gap-6">
                <div className="w-full text-center">


                    <h2 className="text-[6.2vw] md:text-[4.2vw] text-[#002147] uppercase lg:text-[4vw] xl:text-[3vw] mb-0 lg:mb-2 text-nowrap">Choose Your Country</h2>
                </div>
                <div className="w-full">

                    <p className="text-center lg:text-start text-sm lg:text-lg leading-5 font-light">
                        NHP processes Student Visa, Student Spouse Visa and Parents Visitors Visa for UK, USA, Canada, Australia and Malaysia.
                    </p>
                </div>
            </div>

            <div className="ww-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {countryData.map((singleCountryData) => {
                    return <div className="shadow-md border border-slate-100 p-6 flex items-center justify-center gap-2 flex-col hover:shadow-xl transition-all cursor-pointer" key={singleCountryData.title}>
                        <Image
                            className="w-12 h-12 rounded-full"
                            width={5000}
                            height={5000}
                            alt="Contry Image"
                            src={singleCountryData.image}
                        />

                        <h2 className="text-center text-xl my-2">{singleCountryData.title}</h2>
                        <p className="my-2 text-sm font-light text-center">{singleCountryData.description}</p>
                    </div>
                })}
            </div>
        </div >
    )
}

export default CountryChooseSection
