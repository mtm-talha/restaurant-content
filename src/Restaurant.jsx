/* eslint-disable react/prop-types */

const RestaurantContent = ({ item }) => (
  <>
    <h5>{item.attributes?.title}</h5>
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
    )}
  </>
);

const RestaurantMedia = ({ item }) => (
  <>
    {item.attributes?.media?.data.map((img, index) => (
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
    ))}
  </>
);
function Restaurant(props) {
  const { item, index } = props;
  return (
    <>
      <div className={index % 2 ? "col-lg-7" : "col-lg-5"}>
        {index % 2 ? (
          <RestaurantContent item={item} />
        ) : (
          <RestaurantMedia item={item} />
        )}
      </div>
      <div className={index % 2 ? "col-lg-5" : "col-lg-7"}>
        {index % 2 ? (
          <RestaurantMedia item={item} />
        ) : (
          <RestaurantContent item={item} />
        )}
      </div>
    </>
  );
}

export default Restaurant;
