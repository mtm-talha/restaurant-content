// const recentPosts = [
//   {
//     media: "/assets/1.jpg",
//     title: "Meal Prep Breakfast For The Week",
//     commentCount: 0,
//     postLink: "https://especio.themerex.net/lemon-and-banana-buns/",
//     date: "February 01, 2023",
//   },
//   {
//     media: "/assets/DIFC.png",
//     title: "Meal Prep Lunch For The Week",
//     commentCount: 40,
//     postLink: "https://especio.themerex.net/lemon-and-banana-buns/",
//     date: "December 26, 2022",
//   },
//   {
//     media: "/assets/Dubai_Marina.png",
//     title: "Meal Prep Dinner For The Week",
//     commentCount: 15,
//     postLink: "https://especio.themerex.net/lemon-and-banana-buns/",
//     date: "January 14, 2023",
//   },
//   {
//     media: "/assets/Palm_Jumeirah.png",
//     title: "Meal Prep Hi-Tea For The Week",
//     commentCount: 10,
//     postLink: "https://especio.themerex.net/lemon-and-banana-buns/",
//     date: "November 26, 2018",
//   },
// ];
import { useEffect, useState } from "react";
import { getRecentPosts } from "../Apis";
import moment from "moment";
import { useNavigate } from "react-router-dom";

function RecentPost() {
  const navigateTo = useNavigate();
  const [posts, setPosts] = useState([1]);

  const fetchRecentPosts = async () => {
    // try {
    //   const res = await getRecentPosts();
    //   setPosts(res?.data);
    // } catch (error) {
    //   console.log(error);
    // }
  };
  useEffect(() => {
    fetchRecentPosts();
  }, []);

  const handleRedirect = (title) => {
    // Redirect to a specific dynamic route
    navigateTo(`/post/${title.replaceAll(" ", "-")}`);
  };
  return (
    <div className="col-lg-4">
      {posts?.map((item, index) => (
        // <div className="category-detail-right" key={index}>
        //   <div className="row">
        //     <div className="col-4">
        //       {item?.attributes?.picture?.data && (
        //         <div className="recent-post-left-info">
        //           <a
        //             className="a-pointer"
        //             target="_blank"
        //             rel="noreferrer"
        //             href={`https://admin.mybutler.co${item?.attributes?.picture?.data?.attributes?.url}`}
        //           >
        //             <img
        //               src={`https://admin.mybutler.co${item?.attributes?.picture?.data?.attributes?.url}`}
        //               alt="post thumbnail"
        //             />
        //           </a>
        //         </div>
        //       )}
        //     </div>
        //     <div className="col-8">
        //       <div className="recent-post-right-info">
        //         <a
        //           className="a-pointer"
        //           onClick={() => handleRedirect(item?.attributes?.title)}
        //         >
        //           <h3>{item?.attributes?.title}</h3>
        //         </a>
        //         <span className="post-date">
        //           {moment(item?.attributes?.dateTime).format("MMMM DD, YYYY")}
        //         </span>
        //       </div>
        //     </div>
        //   </div>
        // </div>
        <>
        <div className="widget">
          <div className="section-heading heading-dark">
            <h3 className="item-heading">LATEST POSTS</h3>
          </div>
          <div className="widget-latest">
            <ul className="block-list">
              <li className="single-item">
                <div className="item-img">
                  <a href="#"><img src="/assets/thumbnail.jpg" alt /></a>
                  <div className="count-number">1</div>
                </div>
                <div className="item-content">
                  <div className="item-ctg">La Petite Maison</div>
                  <h4 className="item-title"><a href="#">Inspired by the iconic Café de Paris in Geneva</a></h4>
                  <div className="item-post-by"><a href="single-blog.html"><i className="fas fa-user" /><span>by</span>
                      My Butler</a></div>
                </div>
              </li>
              <li className="single-item">
                <div className="item-img">
                  <a href="#"><img src="/assets/thumbnail.jpg" alt /></a>
                  <div className="count-number">2</div>
                </div>
                <div className="item-content">
                  <div className="item-ctg">La Petite Maison</div>
                  <h4 className="item-title"><a href="#">Inspired by the iconic Café de Paris in Geneva</a></h4>
                  <div className="item-post-by"><a href="single-blog.html"><i className="fas fa-user" /><span>by</span>
                      My Butler</a></div>
                </div>
              </li>
              <li className="single-item">
                <div className="item-img">
                  <a href="#"><img src="/assets/thumbnail.jpg" alt /></a>
                  <div className="count-number">3</div>
                </div>
                <div className="item-content">
                  <div className="item-ctg">La Petite Maison</div>
                  <h4 className="item-title"><a href="#">Inspired by the iconic Café de Paris in Geneva</a></h4>
                  <div className="item-post-by"><a href="single-blog.html"><i className="fas fa-user" /><span>by</span>
                      My Butler</a></div>
                </div>
              </li>
              <li className="single-item">
                <div className="item-img">
                  <a href="#"><img src="/assets/thumbnail.jpg" alt /></a>
                  <div className="count-number">4</div>
                </div>
                <div className="item-content">
                  <div className="item-ctg">La Petite Maison</div>
                  <h4 className="item-title"><a href="#">Inspired by the iconic Café de Paris in Geneva</a></h4>
                  <div className="item-post-by"><a href="single-blog.html"><i className="fas fa-user" /><span>by</span>
                      My Butler</a></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="widget">
          <div className="section-heading heading-dark">
            <h3 className="item-heading">CATEGORIES</h3>
          </div>
          <div className="widget-categories">
            <ul>
              <li>
                <a href="#">Chinese
                  <span>25</span>
                </a>
              </li>
              <li>
                <a href="#">Italian
                  <span>15</span>
                </a>
              </li>
              <li>
                <a href="#">Japanese
                  <span>22</span>
                </a>
              </li>
              <li>
                <a href="#">Russian
                  <span>18</span>
                </a>
              </li>
              <li>
                <a href="#">Sea Food
                  <span>36</span>
                </a>
              </li>
            </ul>
          </div>
        </div>


        </>
      ))}
    </div>
  );
}

export default RecentPost;
