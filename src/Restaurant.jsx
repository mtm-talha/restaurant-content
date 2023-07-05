/* eslint-disable react/prop-types */

const RestaurantContent = ({ item }) => (
  <>
    {/* <h5>{item.attributes?.title}</h5>
    <p>{item.attributes?.description}</p>
    <span className="links">
      <i className="fas fa-globe"></i> Website:{" "}
      <a href={item.attributes?.website} target="_blank" rel="noreferrer">
        {item.attributes?.website}
      </a>
    </span>
    <span className="links">
      <i className="fas fa-phone-square-alt"></i> Contact Number:{" "}
      <a href={"tel:" + item.attributes?.contactNumber}>
        {item.attributes?.contactNumber}
      </a>
    </span>
    <span className="links">
      <i className="fas fa-map-marker-alt"></i> Google Map Address:{" "}
      <a
        href={
          item.attributes?.google_map_link ||
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
    </span>
    <span className="links">
      <i className="fas fa-thumbs-up"></i> Zomato Reviews:{" "}
      <a
        href={
          item.attributes?.zomatoReviews || item.attributes?.tripAdvisor_reviews
        }
        target="_blank"
        rel="noreferrer"
      >
        {item.attributes?.title} Reviews{" "}
      </a>
    </span>
    <span className="links">
      <i className="fas fa-calendar-alt"></i> Book Now:{" "}
      <a href={item.attributes?.bookingLink} target="_blank" rel="noreferrer">
        {item.attributes?.booking_title || item.attributes?.title}
      </a>
    </span>
    {item.attributes?.zomatoRating && (
      <span className="links">
        <i className="fas fa-star"></i> Zomato Rating:{" "}
        <span>{item.attributes?.zomatoRating}</span>
      </span>
    )} */}

<p class="item-description">
      More off this less hello salamander lied porpoise much over tightly circa horse taped so innocuously side crudey mightily rigorous plot life. New homes in particular are subject.All recipes created with FoodiePress have suport for Micoformats and Google Recipe View. Schema.org is a collaboration byo improve the web by creatinegaera structured data markup.More off this less hello salamander lied porpoise much over tightly circa horse tapedey innocuously side crudey mightily rigorous plot life.</p>
      <div className="single-recipe-layout">
        <ul className="entry-meta">
          <li className="single-meta"><a href="#"><i className="far fa-calendar-alt" />Nov 14,
              2018</a></li>
          <li className="single-meta"><a href="#"><i className="fas fa-user" />by <span>My
                Butler</span></a></li>
        </ul>
        <ul className="entry-meta">
          <li className="single-meta"><a href="#"><i className="fa-solid fa-star" />Zomato Rating: 4.1/5</a></li>
          <li className="single-meta"><a href="#"><i className="fa-solid fa-thumbs-up" />Zomato Reviews: <span>Entrecôte Café de Paris Reviews</span></a></li>
        </ul>
        <a href="single-blog.html" class="item-btn">Book Now<i class="fa-solid fa-arrow-right"></i></a>
      </div>




  </>
);

const RestaurantMedia = ({ item }) => (
  <>
    {/* {item.attributes?.media?.data ? (
      item.attributes?.media?.data.map((img, index) => (
        <a
          key={index}
          className="a-pointer"
          target="_blank"
          rel="noreferrer"
          href={`https://admin.mybutler.co${item?.attributes?.url}`}
        >
          <img
            height={"450px"}
            width={"550px"}
            key={index}
            src={`https://admin.mybutler.co${img.attributes?.url}`}
            alt="post-thumb"
          />
        </a>
      ))
    ) : (
      <img
        height={"450px"}
        width={"550px"}
        alt="post-picture"
      />
    )} */}


<div className="single-recipe-layout">
  <div className="ctg-name">PASTA</div>
  <h2 className="item-title">Chanterelle and Porcini Mushroom Recipes</h2>  
  <div className="row mb-4">
    <div className="col-xl-9 col-12">
      <ul className="entry-meta">
        <li className="single-meta"><a href="#"><i className="far fa-calendar-alt" />Nov 14,
            2018</a></li>
        <li className="single-meta"><a href="#"><i className="fas fa-user" />by <span>My
              Butler</span></a></li>
      </ul>
    </div>
    <div className="col-xl-3 col-12">
      <ul className="action-item">
        <li className="action-share-hover"><button><i className="fas fa-share-alt" /></button>
          <div className="action-share-wrap">
            <a href="#" title="facebook"><i className="fab fa-facebook-f" /></a>
            <a href="#" title="twitter"><i className="fab fa-twitter" /></a>
            <a href="#" title="linkedin"><i className="fab fa-linkedin-in" /></a>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div className="item-figure">
  <img src="/assets/product.jpg" alt />
  </div>
  <div className="item-feature">
    <ul>
      <li>
        <div className="feature-wrap">
          <div className="media">
            <div className="feature-icon">
              <i className="fas fa-phone" />
            </div>
            <div className="media-body space-sm">
              <div className="feature-title">CALL</div>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div className="feature-wrap">
          <div className="media">
            <div className="feature-icon">
              <i className="fas fa-globe" />
            </div>
            <div className="media-body space-sm">
              <div className="feature-title">WEBSITE</div>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div className="feature-wrap">
          <div className="media">
            <div className="feature-icon">
              <i className="fas fa-map-marker-alt" />
            </div>
            <div className="media-body space-sm">
              <div className="feature-title">GOOGLE MAP</div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>
    
  </>
);
function Restaurant(props) {
  const { item, index } = props;
  return (
    <>
      <div className={index % 2===0 ? "col-lg-7" : "col-lg-5"}>
        {index? (
          <RestaurantContent item={item} />
        ) : (
          <RestaurantMedia item={item} />
        )}
      </div>
      <div className={index % 2!==0  ? "col-lg-7" : "col-lg-5"}>
        {index ? (
          <RestaurantMedia item={item} />
        ) : (
          <RestaurantContent item={item} />
        )}
      </div>
    </>
  );
}

export default Restaurant;
