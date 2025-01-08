import Image from "next/image"


const WhyAreDiffrent = () => {
    return (
        <div id="whyWeDiffrent" className="w-full relative h-fit lg:h-screen  !bg-[#F4F4F4] ">
            <Image
                className="hidden lg:block absolute z-10 top-0 right-0 w-[50%] h-full object-cover"
                width={5000}
                height={5000}
                alt="Layout Image"
                src={"/hwwrd.webp"}
            />
            <div className="controllLargewidth w-full flex h-full">

                <div className="!z-20">
                    <h2 className="text-3xl md:text-[4.6vw] lg:text-[4vw] xl:text-[3vw] text-[#002147] text-nowrap ">Why we are different?</h2>
                    <h3 className="my-4 text-xl">What makes us different makes us better.</h3>
                    <p className="font-light leading-relaxed w-[60%]">We are distinctive in the quality of our services and stand out of the crowd. Unlike other consultancy firms in Bangladesh, we really care for our students. We always strive to give the best possible guidelines and solutions that a student may require. Our experienced consultants and in house lawyer are always at hand to prepare your visa application documents in a perfect way.</p>


                    <div className="my-20 grid grid-cols-1 md:grid-cols-3 w-full gap-8 md:w-fit lg:w-[40%]  place-content-start">

                        <div className="flex flex-col items-center gap-4">
                            <div className="w-36 h-36 rounded-full border-[12px] border-black leading-[8.4rem] text-center">100%</div>
                            <p>Satisfied Clients</p>
                        </div>
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-36 h-36 rounded-full border-[12px] border-black leading-[8.4rem] text-center">100%</div>
                            <p>Free Advice</p>
                        </div>
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-36 h-36 rounded-full border-[12px] border-black leading-[8.4rem] text-center">90%</div>
                            <p>Visa Success</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default WhyAreDiffrent
