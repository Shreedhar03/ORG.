import Navbar from "@/Components/Navbar";
interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <main className="px-3 md:px-8 lg:px-28 bg-slate-100">
            <Navbar />
            {children}
        </main>
    );
};

export default Layout;
