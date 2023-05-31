import { useEffect, useState } from "react";
import "./App.css";
import { getRestaurantsData } from "../Apis";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getRestaurantsData();
        setData(res?.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>10 Best Restaurants in Palm Jumeirah Dubai</h1>
      <div className="container">
        <div className="row">
          {data?.map((item, index) => (
            <div className="col-12 mb-100" key={index}>
              <article
                data-file="articles/b.html"
                data-target="article"
                className={
                  index % 2
                    ? "article-full-width"
                    : "article-full-width article-right"
                }
              >
                {item.attributes?.media?.data.map((img, index) => (
                  <div className="post-image" key={index}>
                    <img
                      src={`https://admin.mybutler.co${img.attributes?.url}`}
                      alt="post-thumb"
                    />
                  </div>
                ))}
                <div className="post-content">
                  <h4 className="mb-4">
                    <a
                      href={data.website}
                      target="_blank"
                      className="text-dark"
                      rel="noreferrer"
                    >
                      {item.attributes?.title}
                    </a>
                  </h4>

                  <p className="mb-0 post-summary">
                    {item.attributes?.description}
                  </p>
                  <p className="mb-0 ">
                    Website:{" "}
                    <a
                      href={item.attributes?.website}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.attributes?.website}
                    </a>
                  </p>
                  <p className="mb-0 ">
                    Contact Number:{" "}
                    <a href={"tel:" + item.attributes?.contactNumber}>
                      {item.attributes?.contactNumber}
                    </a>
                  </p>
                  <p className="mb-0 ">
                    Google Map Address:{" "}
                    <a
                      href={
                        item.attributes.google_map_link ||
                        "https://www.google.com/maps/search/?api=1&query=" +
                          item.attributes?.title +
                          "&" +
                          item.attributes?.googleMapAddress
                      }
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.attributes?.googleMapAddress}
                    </a>
                  </p>
                  <p className="mb-0">
                    Zomato Reviews:{" "}
                    <a
                      href={
                        item.attributes?.zomatoReviews ||
                        item.attributes?.tripAdvisor_reviews
                      }
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.attributes?.title} Reviews
                    </a>
                  </p>
                  <p className="mb-0">
                    Book now:{" "}
                    <a
                      href={item.attributes?.bookingLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.attributes?.booking_title || item.attributes?.title}
                    </a>
                  </p>
                  {item.attributes?.zomatoRating && (
                    <p className="mb-0">
                      Zomato Rating:{" "}
                      <span>{item.attributes?.zomatoRating}</span>
                    </p>
                  )}
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
