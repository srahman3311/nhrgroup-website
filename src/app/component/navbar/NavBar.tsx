import Image from "next/image"
import Link from "next/link"
import { BsJustifyLeft } from "react-icons/bs"


const NavBar = () => {
    return (
        <nav className="flex w-full items-center justify-between gap-6 controllLargewidth h-[6vh]">
            <div className="w-[300px] md:w-full lg:w-[50vw] xl:w-[25vw]">
                <Image
                    width={5000}
                    height={5000}
                    alt="Logo"
                    src={"/nhp-logo.png"}
                />
            </div>
            <menu className="">
                <div className="md:flex hidden items-center justify-center md:gap-3 lg:gap-6">

                    <Link className="midLevelText text-red-600 uppercase text-nowrap" href={"/"}>Home</Link>
                    <Link className="midLevelText uppercase text-nowrap" href={"/#study aboard"}>Study Aboard</Link>
                    <Link className="midLevelText uppercase text-nowrap" href={"/#Scholarship"}>Scholarship</Link>
                    <Link className="midLevelText uppercase text-nowrap" href={"/#Scholarship"}>University</Link>
                    <Link className="midLevelText uppercase text-nowrap" href={"/#Scholarship"}>Contact</Link>
                </div>

                <div className="block md:hidden text-xl font-semibold">
                    <BsJustifyLeft />
                </div>
            </menu>
        </nav>
    )
}

export default NavBar
