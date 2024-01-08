import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
    return (
        <>
        <nav className="flex flex-end  ">
            <div>
                This is the navbar
            </div>
            <div>
                <UserButton afterSignOutUrl="/" />
            </div>
        </nav>
        </>
    );
}

export default Navbar;