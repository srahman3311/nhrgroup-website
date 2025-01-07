import NavBar from "./component/navbar/NavBar";
import Banner from "./component/banner/Banner"
import CountryChooseSection from "./section/CountryChooseSection";
import WhyChooseNHP from "./section/WhyChooseNHP";
import CounterShow from "./section/counterSection/CounterShow";
import WhyAreDiffrent from "./section/WhyAreDiffrent";

export default function Home() {
  return (
    <>
      <div className="bg-black text-white ">
        <div className="w-[min(100%_-_3rem,_170ch)] mx-auto py-[10px]">
          <div className="text-center">
            This site is now on developing mode so please forgive me any mistake.
          </div>
        </div>
      </div>
      <header>
        <NavBar />
        <Banner />
        <CountryChooseSection />
        <WhyChooseNHP />
        <CounterShow />
        <WhyAreDiffrent />
      </header>
    </>
  );
}
