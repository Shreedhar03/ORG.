import BrowseTopics from "@/Components/home/BrowseTopics";
import Events from "@/Components/home/Events";
import Feed from "@/Components/home/Feed";
import Leaderboard from "@/Components/home/Leaderboard";

const Home = () => {
    return (
        <section className="flex flex-wrap justify-stretch md:flex-nowrap gap-3 my-6">
            <BrowseTopics />
            <Feed />
            <div className="w-full sm:w-auto flex flex-col justify-self-stretch justify-between gap-3 h-[calc(100vh-150px)]">
                <Events />
                <Leaderboard />
            </div>
        </section>
    );
}

export default Home;