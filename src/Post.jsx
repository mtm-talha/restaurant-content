import { useEffect, useState } from "react";
import { getAllPosts } from "../Apis";
import moment from "moment";
import { useNavigate } from "react-router-dom";
const Post = () => {
  const navigateTo = useNavigate();
  const [posts, setPosts] = useState([]);

  const fetchAllPosts = async () => {
    try {
      const res = await getAllPosts();
      setPosts(res?.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchAllPosts();
  }, []);

  const handleRedirect = (id) => {
    // Redirect to a specific dynamic route
    navigateTo(`/post/${id}`);
  };
  return (
    <div className="col-lg-8">
      {posts.map((item, index) => (
        <div className="category-detail-left" key={index}>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-2">
            <div className="col-lg-5">
              {item?.attributes?.picture?.data && (
                <div className="category-left-info">
                  <img
                    src={`https://admin.mybutler.co${item?.attributes?.picture?.data?.attributes?.url}`}
                    alt="post thumbnail"
                  />
                </div>
              )}
            </div>
            <div className="col-lg-7">
              <div className="category-right-info">
                <a
                  className="a-pointer"
                  onClick={() => handleRedirect(item?.id)}
                >
                  {item?.attributes?.foodType}
                </a>
                <h3>{item?.attributes?.title}</h3>
                <div className="post-detail">
                  <span className="post-date">
                    {moment(item?.attributes?.createdAt).format(
                      "MMMM DD, YYYY"
                    )}
                  </span>
                </div>
                <p>{item?.attributes?.description.substring(0, 140) + "..."}</p>
                <a
                  onClick={() => handleRedirect(item?.id)}
                  className="a-pointer"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Post;
