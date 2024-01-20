import BrowseTopics from "@/Components/home/BrowseTopics";
import Events from "@/Components/home/Events";
import Feed from "@/Components/home/Feed";
import Leaderboard from "@/Components/home/Leaderboard";

const Home = () => {
    return (
        <section className="flex flex-wrap md:flex-nowrap gap-3 my-6">
            <BrowseTopics />
            <Feed />
            <div className="flex flex-col justify-between gap-3 h-[calc(100vh-150px)]">
                <Events />
                <Leaderboard />
            </div>
        </section>
    );
}

export default Home;