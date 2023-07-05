import { useEffect, useState } from "react";
import { getAllPosts } from "../Apis";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import Helmet from "react-helmet";
const Post = () => {
  const navigateTo = useNavigate();
  const [posts, setPosts] = useState([1]);

  const fetchAllPosts = async () => {
    // try {
    //   const res = await getAllPosts();
    //   setPosts(res?.data);
    // } catch (error) {
    //   console.log(error);
    // }
  };
  useEffect(() => {
    fetchAllPosts();
  }, []);

  const handleRedirect = (title) => {
    // Redirect to a specific dynamic route
    navigateTo(`/post/${title.replaceAll(" ", "-")}`);
  };
  return (
    <>
      <Helmet>
        <title>My Butler</title>
        <meta name="description" content="Post for restaurants" />
        <meta
          name="keywords"
          content="post,hotels,places,dubai,food,category"
        />
      </Helmet>
      <div className="col-lg-8">
        {posts.map((item, index) => (
          // <div className="category-detail-left" key={index}>
          //   <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-2">
          //     <div className="col-lg-5">
          //       {item?.attributes?.picture?.data && (
          //         <div className="category-left-info">
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
          //     <div className="col-lg-7">
          //       <div className="category-right-info">
          //         <a
          //           className="a-pointer"
          //           onClick={() => handleRedirect(item?.attributes?.title)}
          //         >
          //           {item?.attributes?.foodType}
          //         </a>
          //         <h3>{item?.attributes?.title}</h3>
          //         <div className="post-detail">
          //           <span className="post-date">
          //             {moment(item?.attributes?.dateTime).format(
          //               "MMMM DD, YYYY"
          //             )}
          //           </span>
          //         </div>
          //         <p>
          //           {item?.attributes?.description.substring(0, 140) + "..."}
          //         </p>
          //         <a
          //           onClick={() => handleRedirect(item?.attributes?.title)}
          //           className="a-pointer"
          //         >
          //           Read more
          //         </a>
          //       </div>
          //     </div>
          //   </div>
          // </div>
          <>
          <div>
            <div className="section-heading heading-dark">
              <h2 className="item-heading">Entrecôte Café de Paris</h2>
            </div>
            <div className="col-12">
              <div className="product-box-layout1">
                <figure className="item-figure"><a href="single-recipe1.html">
                  <img src="/assets/product1.jpg" height={50} alt />
                  </a></figure>
                <div className="item-content paddingleft">
                  <span className="sub-title">Entrecôte Café de Paris</span>
                  <p>Entrecôte Café de Paris is a charming French restaurant located in Dubai. Inspired by the iconic Café de Paris in Geneva, Switzerland, this restaurant specializes in serving the renowned "Entrecôte" steak. The signature dish features tender grilled steak smothered in a secret sauce, accompanied by crispy French fries and a fresh green salad. With its cozy ambiance and focus on quality ingredients, Entrecôte Café de Paris offers a delightful French dining experience. Transport yourself to the heart of Paris at Entrecôte Café de Paris, where the tantalizing aroma of sizzling steaks and the rich flavors of classic French cuisine fill the air. This charming bistro captivates with its signature dish, the renowned entrecôte steak, served with a secret sauce that has been delighting diners for generations. With its cozy ambiance and a menu that celebrates the best of French culinary traditions, Entrecôte Café de Paris offers an authentic taste of Parisian dining in the heart of Dubai.</p>
                  <ul className="entry-meta">
                    <li><a href="#"><i className="fas fa-clock" />May 19, 2023</a></li>
                  </ul>
                  <a href="single-blog.html" class="item-btn">Continue Reading<i class="fa-solid fa-arrow-right"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="section-heading heading-dark">
              <h2 className="item-heading">La Petite Maison</h2>
            </div>
            <div className="col-12">
              <div className="product-box-layout1">
                <figure className="item-figure"><a href="single-recipe1.html">
                  <img src="/assets/product2.jpg" height={50} alt />
                  </a></figure>
                <div className="item-content paddingleft">
                  <span className="sub-title">La Petite Maison</span>
                  <p>La Petite Maison is a renowned French-Mediterranean restaurant located in the heart of Dubai. The restaurant's stylish and vibrant atmosphere creates a lively dining experience.It is one of the Dubai Best Restaurants. La Petite Maison specializes in exquisite Mediterranean cuisine, focusing on fresh, high-quality ingredients. From their famous truffle pasta to their delectable desserts, every dish is crafted to perfection. Step into a world of Mediterranean flavors at La Petite Maison, where the essence of the French Riviera meets the vibrancy of Dubai. Indulge in their signature dishes, meticulously crafted with the freshest ingredients, as you bask in the chic yet inviting ambiance that effortlessly captures the spirit of a bustling Provençal bistro.</p> 
                  <ul className="entry-meta">
                    <li><a href="#"><i className="fas fa-clock" />May 19, 2023</a></li>
                  </ul>
                  <a href="single-blog.html" class="item-btn">Continue Reading<i class="fa-solid fa-arrow-right"></i></a>
                </div>
              </div>
            </div>
          </div>

          </>
        ))}
      </div>
    </>
  );
};

export default Post;
