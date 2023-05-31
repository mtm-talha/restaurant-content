import { useEffect, useState } from "react";
import { getRestaurantsData, getPostDataById } from "../Apis";
import Restaurant from "./Restaurant";
import moment from "moment/moment";
import { useParams } from 'react-router-dom';

function PostDetails() {
  const { postId } = useParams();
  const [restaurants, setRestaurants] = useState([]);
  const [post, setPost] = useState([]);

  const fetchPostDataById = async (postId) => {
    try {
      const res = await getPostDataById(postId);
      setPost(res?.data?.attributes);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchRestaurants = async () => {
    try {
      const res = await getRestaurantsData();
      setRestaurants(res?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPostDataById(postId);
    fetchRestaurants();
  }, []);
  return (
    <section className="detail-info">
      <h4>{post.title}</h4>
      <small>{moment(post.dateTime).format("MMM DD, YYYY")}</small>
      <p className="mb100">{post.description}</p>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-2">
        {restaurants?.map((restaurant, index) => (
          <Restaurant item={restaurant} key={index} index={index} />
        ))}
      </div>
      <p className="mb100">
        <h3>Conclusion</h3>
        {post.conclusion}
      </p>
    </section>
  );
}
export default PostDetails;
