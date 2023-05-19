import { useEffect, useState } from "react";
import "./App.css";
import { getRestaurantsData } from "../Apis";

function App() {
  const [data, setData] = useState([]);

  const restaurantData = [
    {
      title: "Nobu Dubai",
      description:
        "Nobu Dubai is a renowned restaurant located in Atlantis The Palm on Palm Jumeirah. It offers a unique fusion of Japanese cuisine with South American influences, featuring a diverse menu of sushi, sashimi, and signature dishes like Black Cod Miso.Nobu Dubai offers a fusion of Japanese cuisine with South American influences, known for its sushi and signature dishes.",
      website: "https://www.noburestaurants.com/dubai/home/",
      contact_number: "+971 4 426 2626",
      google_map_address: "Nobu Dubai, Atlantis The Palm, Palm Jumeirah, Dubai",
      zomato_reviews: "https://www.zomato.com/dubai/nobu-palm-jumeirah",
      booking_link: "https://www.noburestaurants.com/dubai/reservations/",
      zomato_rating: "4.6/5",
      image_url: "/assets/nobu_dubai.png",
    },
    {
      title: "Seafire Steakhouse & Bar",
      description:
        "Situated in Atlantis The Palm, Seafire Steakhouse & Bar is a premier steakhouse known for its exceptional cuts of meat, including prime beef and succulent seafood. With a contemporary ambiance, it offers a memorable dining experience.Seafire Steakhouse & Bar is a renowned steakhouse offering prime cuts of beef, fresh seafood, and an extensive selection of fine wines.",
      website: "https://www.atlantisthepalm.com/restaurants/seafire-steakhouse",
      contact_number: "+971 4 426 2626",
      google_map_address: "Atlantis The Palm, Palm Jumeirah, Dubai",
      zomato_reviews:
        "https://www.zomato.com/dubai/seafire-steakhouse-bar-atlantis-the-palm-palm-jumeirah/reviews",
      booking_link: "https://www.sevenrooms.com/reservations/seafiredubai",
      zomato_rating: "4.4/5",
      image_url: "/assets/seafire_steakhouse.png",
    },
    {
      title: "101 Dining Lounge and Bar",
      description:
        "101 Dining Lounge and Bar is a luxurious restaurant and lounge located in One&Only The Palm, Dubai. It offers a breathtaking view of the Dubai skyline and the Arabian Gulf, creating a serene and romantic atmosphere. The menu features an extensive selection of Mediterranean-inspired dishes, including fresh seafood, grilled meats, and creative salads. The bar offers a wide range of signature cocktails, premium spirits, and an impressive wine list. Guests can relax on the comfortable outdoor seating while enjoying the stunning views or sit inside the elegant restaurant with its chic and modern decor. 101 Dining Lounge and Bar is the perfect destination for a romantic dinner, special occasion, or a memorable night out.",
      website:
        "https://www.oneandonlyresorts.com/one-and-only-the-palm-dubai/cuisine/101-dining-lounge-bar",
      contact_number: "+971 4 440 1010",
      google_map_address: "One&Only The Palm, Palm Jumeirah, Dubai",
      zomato_reviews:
        "https://www.zomato.com/dubai/101-dining-lounge-and-bar-one-only-the-palm-palm-jumeirah/reviews",
      booking_link:
        "https://www.opentable.ae/r/101-dining-lounge-and-marina-one-and-only-the-palm-dubai?ref=18584",
      zomato_rating: "4.6/5",
      image_url: "/assets/101DiningLounge.png",
    },
    {
      title: "Social by Heinz Beck",
      description:
        "Social by Heinz Beck is a gourmet restaurant by acclaimed chef Heinz Beck, offering innovative Mediterranean cuisine in an elegant setting.",
      website:
        "https://www.waldorfastoria.com/dubai-palm-jumeirah/dining/social-by-heinz-beck",
      contact_number: "+971 4 818 2222",
      google_map_address:
        "Waldorf Astoria Dubai Palm Jumeirah, Crescent Road, Palm Jumeirah, Dubai",
      // zomato_reviews:
      //   "https://www.zomato.com/dubai/social-by-heinz-beck-palm-jumeirah",
      tripAdvisor_reviews:
        "https://www.tripadvisor.com/Restaurant_Review-g295424-d6154951-Reviews-Social-Dubai_Emirate_of_Dubai.html",
      booking_title: "Social by Heinz Beck",
      booking_link: "https://www.sevenrooms.com/reservations/socialdubai",
      zomato_rating: "4.6/5",
      image_url: "/assets/heizBeck.png",
    },

    {
      title: "Bread Street Kitchen & Bar",
      description:
        "Bread Street Kitchen & Bar is a modern British restaurant by celebrity chef Gordon Ramsay, serving British classics with a twist.",
      website: "https://www.gordonramsayrestaurants.com/bread-street-kitchen/",
      contact_number: "+971 4 426 2626",
      google_map_link:
        "https://www.google.com/maps/place/Gordon+Ramsay's+Bread+Street+Kitchen+%26+Bar/@38.5945625,4.7002327,4z/data=!4m10!1m2!2m1!1sBread+Street+Kitchen+%26+Bar!3m6!1s0x3e5f153efd71e29b:0xfaaf87ac6779077e!8m2!3d25.1315844!4d55.1185175!15sChpCcmVhZCBTdHJlZXQgS2l0Y2hlbiAmIEJhclocIhpicmVhZCBzdHJlZXQga2l0Y2hlbiAmIGJhcpIBGW1vZGVybl9icml0aXNoX3Jlc3RhdXJhbnTgAQA!16s%2Fg%2F1ptwdjb5f",
      google_map_address: "Atlantis The Palm, Palm Jumeirah, Dubai",
      zomato_reviews:
        "https://www.zomato.com/dubai/bread-street-kitchen-bar-palm-jumeirah",
      booking_title: "Bread Street Kitchen & Bar",
      booking_link: "https://www.sevenrooms.com/reservations/bskdubai",
      // booking_link:
      //   "https://www.sevenrooms.com/reservations/breadstreetkitchenandbar",
      zomato_rating: "4.4/5",
      image_url: "/assets/breadstreet.jpeg",
    },

    {
      title: "Ossiano",
      description:
        "Ossiano is an award-winning underwater restaurant offering a fine dining experience with breathtaking views of marine life.",
      website: "https://www.atlantisthepalm.com/restaurants/ossiano",
      contact_number: "+971 4 426 2626",
      google_map_address: "Ossiano, Atlantis The Palm, Palm Jumeirah, Dubai",
      zomato_reviews: "https://www.zomato.com/dubai/ossiano-palm-jumeirah",
      // booking_link: "https://www.sevenrooms.com/reservations/ossiano",
      booking_link:
        "https://www.sevenrooms.com/reservations/ossianodubai?gclid=CjwKCAjw6vyiBhB_EiwAQJRoppoTjshjimR8Nsq4hM1UDjYMwUVbjo8kP_RrELg9wgp0Z_60Fcx1DRoC_eMQAvD_BwE",
      zomato_rating: "4.6/5",
      image_url: "/assets/ossiano.png",
    },
    {
      title: "Il Faro Trattoria & Lounge",
      description:
        "Nestled in the Azure Residences, Il Faro Trattoria & Lounge is an enchanting Italian restaurant offering authentic flavors of Italy. Its waterfront location creates a charming ambiance, and guests can savor traditional Italian dishes while enjoying panoramic views of the sea.Il Faro Trattoria & Lounge is a charming Italian restaurant offering authentic flavors of Italy with stunning waterfront views",
      website: "https://www.ilfarodubai.com/",
      contact_number: "+971 4 568 3137",
      google_map_address: "Azure Residences, Palm Jumeirah, Dubai",
      // zomato_reviews:
      //   "https://www.zomato.com/dubai/il-faro-trattoria-lounge-palm-jumeirah",
      tripAdvisor_reviews:
        "https://www.tripadvisor.com/Restaurant_Review-g295424-d22899410-Reviews-Il_Faro_Trattoria-Dubai_Emirate_of_Dubai.html",
      booking_title: "Il Faro Trattoria & Lounge - Seven Rooms",
      // booking_link: "https://www.sevenrooms.com/reservations/ilfaro",
      booking_link: `https://resy.com/cities/dbntd/il-faro?date=${Date.now()}&seats=2`,
      zomato_rating: "4.5/5",
      image_url: "/assets/faroTrattoria.png",
    },
    {
      title: "Khyber",
      description:
        "Located in Dukes The Palm, Khyber brings the flavors of India to Palm Jumeirah. This elegant restaurant offers a culinary journey through the rich and diverse Indian cuisine, with a focus on traditional flavors, aromatic spices, and beautifully presented dishes.It is an Indian fine dining restaurant offering an array of traditional flavors and dishes from the Indian subcontinent.",
      website: "https://www.khyber-restaurant.com/",
      contact_number: "+971 4 457 5454",
      google_map_address: "Khyber, Dukes The Palm, Palm Jumeirah, Dubai",
      google_map_link:
        "https://www.google.com/maps/place/Khyber+-+Indian+Restaurant+in+Palm+Jumeirah/@25.1124845,55.1380506,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5f6b2cb7213f9d:0x58faa08b544bbf5c!8m2!3d25.1124845!4d55.1380506!16s%2Fg%2F11f3r2sgq2",
      zomato_reviews:
        "https://www.zomato.com/dubai/khyber-dukes-the-palm-palm-jumeirah",
      tripAdvisor_reviews:
        "https://www.tripadvisor.com/Restaurant_Review-g295424-d3919600-Reviews-Khyber-Dubai_Emirate_of_Dubai.html",
      booking_title: "Khyber - Seven Rooms",
      // booking_link: "https://www.sevenrooms.com/reservations/dukesthepalm",
      booking_link:
        "https://www.palazzoversace.ae/restaurants-and-bars/enigma?utm_source=Search+&utm_medium=google&utm_campaign=Oct+2022+-+Enigma+-+Traffic&gclid=CjwKCAjw6vyiBhB_EiwAQJRoph9F4CvetHL7-NUdFTDkoIg127L8dbRFhOKkiW99iuQ1JmRa1ubBiBoC7qkQAvD_BwE",
      zomato_rating: "4.5/5",
      image_url: "/assets/khyber.png",
    },
    {
      title: "WHITE Restaurant",
      description:
        "Situated in Atlantis The Palm, WHITE Restaurant offers a contemporary dining experience with a fusion of Mediterranean, Asian, and Middle Eastern flavors. With its stylish decor and an extensive menu, it provides a vibrant atmosphere for a memorable culinary journey.",
      website: "https://www.atlantis.com/dubai/entertainment/white-beach-club",
      contact_number: "+971 4 818 2222",
      google_map_link:
        "https://www.google.com/maps/place/WHITE+Beach+Dubai/@25.128438,55.1140392,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5f153e4f48d60b:0x20f02e5ccaf6a6ed!8m2!3d25.1284332!4d55.1166141!16s%2Fg%2F1hc2slppr",
      google_map_address:
        "WHITE Restaurant, Atlantis The Palm, Palm Jumeirah, Dubai",
      zomato_reviews:
        "https://www.zomato.com/dubai/white-restaurant-palm-jumeirah",
      booking_title: "WHITE Restaurant - Seven Rooms",
      booking_link: "https://www.sevenrooms.com/reservations/whiterestaurant",
      image_url: "/assets/whiteRestaurant.png",
    },
    {
      title: "L'Olivo Ristorante",
      description:
        "L'Olivo Ristorante, situated in Rixos The Palm Dubai, is an authentic Italian restaurant that captures the essence of Italian cuisine. It features a warm and welcoming atmosphere, offering a menu of traditional Italian dishes prepared with fresh ingredients and traditional techniques. It offers authentic Italian cuisine with a focus on regional flavors and a cozy atmosphere.",
      website:
        "https://www.rixos.com/en/hotel-resort/rixos-the-palm-dubai/restaurants-bars/ristorante-olivo/",
      contact_number: "+971 4 457 5555",
      google_map_address: "Rixos The Palm Dubai, Palm Jumeirah, Dubai",
      tripAdvisor_reviews:
        "https://www.tripadvisor.com/Restaurant_Review-g295424-d8003621-Reviews-L_Olivo_Ristorante-Dubai_Emirate_of_Dubai.html",
      // zomato_reviews:
      //   "https://www.zomato.com/dubai/l-olivo-ristorante-rixos-the-palm-palm-jumeirah",
      booking_title: "L'Olivo Ristorante - Seven Rooms",
      booking_link: "https://www.sevenrooms.com/reservations/lolivoch",
      zomato_rating: "4.3/5",
      image_url: "/assets/olivo.png",
    },
  ];

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
                {item.attributes?.media?.data.map((img) => (
                <div className="post-image">
                  <img src={`https://admin.mybutler.co${img.attributes?.url}`} alt="post-thumb" />
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

                  <p className="mb-0 post-summary">{item.attributes?.description}</p>
                  <p className="mb-0 ">
                    Website:{" "}
                    <a href={item.attributes?.website} target="_blank" rel="noreferrer">
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
                      href={item.attributes?.zomatoReviews || item.attributes?.tripAdvisor_reviews}
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
                      Zomato Rating: <span>{item.attributes?.zomatoRating}</span>
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