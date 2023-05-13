import "./App.css";

function App() {
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
      booking_link:
        "https://www.atlantisthepalm.com/restaurants/seafire-steakhouse",
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
        "https://www.oneandonlyresorts.com/one-and-only-the-palm-dubai/cuisine/101-dining-lounge-bar",
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
      zomato_reviews:
        "https://www.zomato.com/dubai/social-by-heinz-beck-palm-jumeirah",
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
      google_map_address: "Atlantis The Palm, Palm Jumeirah, Dubai",
      zomato_reviews:
        "https://www.zomato.com/dubai/bread-street-kitchen-bar-palm-jumeirah",
      booking_title: "Bread Street Kitchen & Bar",
      booking_link:
        "https://www.sevenrooms.com/reservations/breadstreetkitchenandbar",
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
      booking_link: "https://www.sevenrooms.com/reservations/ossiano",
      zomato_rating: "4.6/5",
      image_url: "/assets/ossiano.png",
    },
    {
      title: "ll Faro Trattoria & Lounge",
      description:
        "Nestled in the Azure Residences, ll Faro Trattoria & Lounge is an enchanting Italian restaurant offering authentic flavors of Italy. Its waterfront location creates a charming ambiance, and guests can savor traditional Italian dishes while enjoying panoramic views of the sea.Il Faro Trattoria & Lounge is a charming Italian restaurant offering authentic flavors of Italy with stunning waterfront views",
      website: "https://www.ilfarodubai.com/",
      contact_number: "+971 4 568 3137",
      google_map_address: "Azure Residences, Palm Jumeirah, Dubai",
      zomato_reviews:
        "https://www.zomato.com/dubai/il-faro-trattoria-lounge-palm-jumeirah",
      booking_title: "ll Faro Trattoria & Lounge - Seven Rooms",
      booking_link: "https://www.sevenrooms.com/reservations/ilfaro",
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
      zomato_reviews:
        "https://www.zomato.com/dubai/khyber-dukes-the-palm-palm-jumeirah",
      booking_title: "Khyber - Seven Rooms",
      booking_link: "https://www.sevenrooms.com/reservations/dukesthepalm",
      zomato_rating: "4.5/5",
      image_url: "/assets/khyber.png",
    },
    {
      title: "WHITE Restaurant",
      description:
        "Situated in Atlantis The Palm, WHITE Restaurant offers a contemporary dining experience with a fusion of Mediterranean, Asian, and Middle Eastern flavors. With its stylish decor and an extensive menu, it provides a vibrant atmosphere for a memorable culinary journey.",
      website: "https://www.atlantis.com/dubai/entertainment/white-beach-club",
      contact_number: "+971 4 818 2222",
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
      zomato_reviews:
        "https://www.zomato.com/dubai/l-olivo-ristorante-rixos-the-palm-palm-jumeirah",
      booking_title: "L'Olivo Ristorante - Seven Rooms",
      booking_link: "https://www.sevenrooms.com/reservations/rixosthepalmdubai",
      zomato_rating: "4.3/5",
      image_url: "/assets/olivo.png",
    },
  ];
  return (
    <>
      <h1>Best Restaurants in DIFC Dubai</h1>
      <div className="container">
        <div className="row">
          {restaurantData?.map((data, index) => (
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
                <div className="post-image">
                  <img src={data.image_url} alt="post-thumb" />
                </div>
                <div className="post-content">
                  <h4 className="mb-4">
                    <a
                      href={data.website}
                      target="_blank"
                      className="text-dark"
                      rel="noreferrer"
                    >
                      {data.title}
                    </a>
                  </h4>

                  <p className="mb-0 post-summary">{data.description}</p>
                  <p className="mb-0 ">
                    Website:{" "}
                    <a href={data.website} target="_blank" rel="noreferrer">
                      {data.website}
                    </a>
                  </p>
                  <p className="mb-0 ">
                    Contact Number:{" "}
                    <a href={"tel:" + data.contact_number}>
                      {data.contact_number}
                    </a>
                  </p>
                  <p className="mb-0 ">
                    Google Map Address:{" "}
                    <a
                      href={
                        "https://www.google.com/maps/search/?api=1&query=" +
                        data.title +
                        "&" +
                        data.google_map_address
                      }
                      target="_blank"
                      rel="noreferrer"
                    >
                      {data.google_map_address}
                    </a>
                  </p>
                  <p className="mb-0">
                    Zomato Reviews:{" "}
                    <a
                      href={data.zomato_reviews}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {data.title} Reviews
                    </a>
                  </p>

                  <p className="mb-0">
                    Book now:{" "}
                    <a
                      href={data.booking_link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {data.booking_title || data.title}
                    </a>
                  </p>
                  {data.zomato_rating && (
                    <p className="mb-0">
                      Zomato Rating: <span>{data.zomato_rating}</span>
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
