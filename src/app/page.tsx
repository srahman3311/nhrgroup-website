import NavBar from "./component/navbar/NavBar";
import Banner from "./component/banner/Banner"
export default function Home() {
  return (
    <>
      <div className="bg-black text-white ">
        <div className="w-[min(100%_-_3rem,_170ch)] mx-auto py-[10px]">
          <marquee>
            This site is now on developing mode so please forgive me any mistake.
          </marquee>
        </div>
      </div>
      <header>
        <NavBar />
        <Banner />
      </header>
    </>
  );
}
