import { useEffect, useState } from "react";
import { getPostDataByTitle } from "../Apis";
import Restaurant from "./Restaurant";
import moment from "moment/moment";
import { useParams } from "react-router-dom";
import Helmet from "react-helmet";
import { useNavigate } from "react-router-dom";

function PostDetails() {
  const { title } = useParams();
  const [restaurants, setRestaurants] = useState([]);
  const [post, setPost] = useState([]);
  const navigateTo = useNavigate();

  const fetchPostDataByTitle = async (title) => {
    try {
      const res = await getPostDataByTitle(title.replaceAll('-',' '), true);
      if (res?.data?.length > 0) {
        setPost(res?.data[0]?.attributes);
        setRestaurants(res?.data[0]?.attributes?.restaurants?.data);
      } else {
        navigateTo(`/`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPostDataByTitle(title);
  }, []);
  return (
    <>
      <Helmet>
        <title>My Butler Post</title>
        <meta name="description" content={post?.description} data-rh="true"/>
        <meta name="keywords" content={post.keywords} data-rh="true"/>
      </Helmet>
      <section className="detail-info">
        <h4>{post?.title}</h4>
        <small>{moment(post?.dateTime).format("MMM DD, YYYY")}</small>
        <p className="mb100">{post.description}</p>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-2">
          {restaurants?.map((restaurant, index) => (
            <Restaurant item={restaurant} key={index} index={index} />
          ))}
        </div>
        <span className="mb100">
          <h3>Conclusion</h3>
          {post?.conclusion}
        </span>
      </section>
    </>
  );
}
export default PostDetails;
