import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import logo from '../public/logo.svg'
import { Input } from "./ui/input";

const Navbar = () => {
    return (
        <>
            <nav className="sticky top-3 flex justify-between items-center bg-white z-50 px-6 rounded-3xl mt-4 py-2">
                <Image alt="logo" src={logo} width={100} height={100} />
                <div className="flex items-center gap-3">
                    <div className="border-2 border-primary rounded-2xl flex">
                        <input type="text" placeholder="Search for topics, projects, events, etc." className="py-[6px] px-3 w-80 placeholder:text-xs bg-inherit rounded-2xl focus:outline-none" />
                        <button className="bg-primary px-6 border-2 border-primary text-sm rounded-r-xl text-background">
                            Search
                        </button>
                    </div>
                    {/* <UserButton afterSignOutUrl="/" /> */}
                    <Image src={'https://randomuser.me/api/portraits/men/23.jpg'} alt='user' width={45} height={45} className='rounded-full' />
                </div>
            </nav>
        </>
    );
}

export default Navbar;