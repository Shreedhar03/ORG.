import Navbar from "@/Components/Navbar";
import BrowseTopics from "@/Components/home/BrowseTopics";
interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <main className="px-3 flex flex-col md:px-8 lg:px-16 bg-slate-100">
                <Navbar />
                <BrowseTopics />
                <div className="pl-[22rem] mt-1">
                    {children}
                </div>
            </main>
        </>
    );
};

export default Layout;
