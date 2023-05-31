import Footer from "./Footer";
import Header from "./Header";
import Slider from "./Slider";
import CategoryPost from "./CategoryPost";
import Post from "./Post";
import RecentPost from "./RecentPost";

function Home() {
  return (
    <>
      <Header />
      <Slider />
      <div className="container">
        <CategoryPost />
        <section className="category-detail-container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
            <Post />
            <RecentPost />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Home;
