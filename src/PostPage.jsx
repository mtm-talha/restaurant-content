

import Footer from "./Footer";
import Header from "./Header";
import Slider from "./Slider";
import CategoryPost from "./CategoryPost";
import PostDetails from "./PostDetail";

function PostPage() {
  return (
    <>
      <Header />
      <Slider />
      <div className="container">
      <CategoryPost/>
      <PostDetails/>
    </div>
      <Footer />
    </>
  );
}

export default PostPage;
