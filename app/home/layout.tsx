import Navbar from "@/Components/Navbar";
import BrowseTopics from "@/Components/home/BrowseTopics";
interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <main className="px-3 md:px-8 lg:px-16 bg-slate-100">
                <Navbar />
                <div className="mt-1">
                    {children}
                </div>
            </main>
        </>
    );
};

export default Layout;
