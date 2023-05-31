// import { getRestaurantsData } from "../Apis";
// import { useEffect, useState } from "react";

import CategoryPost from "./CategoryPost";
import Post from "./Post";
import RecentPost from "./RecentPost";

function Body() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await getRestaurantsData();
  //       setData(res?.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  return (
    <div className="container">
      <CategoryPost/>
      <section className="category-detail-container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
         <Post/>
        <RecentPost/>
        </div>
      </section>
    </div>
  );
}

export default Body;
