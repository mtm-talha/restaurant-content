import "./App.css";

function App() {
  const restaurantData = [
    {
      name: "Zuma Dubai",
      website: "https://zumarestaurant.com/dubai/",
      address: "Gate Village 6, DIFC, Dubai",
      contact_number: "+971 4 425 5660",
      description:
        "Zuma Dubai is a Japanese restaurant located in the Dubai International Financial Centre (DIFC). The restaurant's menu features a range of traditional Japanese dishes, including sushi, sashimi, and robata-grilled meats. The restaurant's decor is sleek and sophisticated, with an open kitchen and a stylish bar that serves a range of cocktails and wines. Some of the standout dishes at Zuma Dubai include the miso-marinated black cod, the wagyu beef skewers, and the spicy tuna roll. The restaurant is known for its lively atmosphere and trendy crowd, making it a popular spot for a night out on the town. Overall, Zuma Dubai offers a memorable dining experience that combines exceptional food with a sophisticated ambiance.",
      zomato_reviews: "https://www.zomato.com/dubai/zuma-difc",
      booking_link: "https://www.sevenrooms.com/reservations/zumadubai",
      image_url:
        "https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/63a98b757194fe001c587612.jpg",
    },
    {
      name: "La Petite Maison Dubai",
      website: "https://www.lpmdubai.ae/",
      address: "Gate Village 8, DIFC, Dubai",
      contact_number: "+971 4 439 0505",
      description:"La Petite Maison is a French-Mediterranean restaurant located in the Dubai International Financial Centre (DIFC). The restaurant offers a charming and lively atmosphere with a focus on fresh and flavorful cuisine. The menu is inspired by the traditional dishes of the Cote d'Azur, with a focus on fresh seafood and vegetables. The restaurant's decor is elegant and sophisticated, with a charming Mediterranean feel that transports guests to the south of France. The restaurant's lively ambiance and exceptional food have made it a favorite among locals and visitors alike, and it is often recommended for special occasions or romantic dinners. Overall, La Petite Maison offers a memorable dining experience that combines exceptional food, lively atmosphere, and charming decor.",
      zomato_reviews: "https://www.zomato.com/dubai/la-petite-maison-difc",
      booking_link:
        "https://www.sevenrooms.com/reservations/lapetitemaisondubai",
      image_url:
        "https://whatson.ae/wp-content/uploads/2017/11/RS-La-Petite-Maison-Abu-Dhabi-22.jpg",
    },
    {
      name: "Carnival by Tresind",
      website: "https://www.carnivalbytresind.com/",
      address: "Burj Daman, DIFC, Dubai",
      contact_number: "+971 4 421 8665",
      description:"Carnival by Tresind is a modern Indian restaurant located in the DIFC area of Dubai. The restaurant's menu is inspired by the traditional flavors of Indian cuisine, but with a modern and creative twist. Some of the standout dishes at Carnival by Tresind include the tandoori chicken popcorn, the goat cheese kofta, and the lamb shank biryani. The restaurant's decor is colorful and lively, with a carnival-inspired theme that adds to the festive atmosphere. The restaurant is known for its exceptional service, with knowledgeable and friendly staff who are happy to make recommendations and offer guidance on the menu. Overall, Carnival by Tresind offers a unique and exciting dining experience that combines exceptional food, creative presentation, and a lively atmosphere, making it a top choice for a fun night out with friends or family.",
       zomato_reviews: "https://www.zomato.com/dubai/carnival-by-tresind-difc",
      booking_link: "https://www.sevenrooms.com/reservations/carnivalbytresind",
      image_url: "https://images.otstatic.com/prod1/41904068/1/large.jpg",
    },
    {
      name: "Roberto's Dubai",
      website: "https://www.robertos.ae/",
      address: "Gate Village 1, DIFC, Dubai",
      contact_number: "+971 4 386 0066",
      description:"Roberto's is an upscale Italian restaurant located in the DIFC area of Dubai. The restaurant's menu is inspired by the traditional flavors of Italian cuisine, with a focus on fresh, high-quality ingredients. The menu features a range of classic Italian dishes, such as homemade pasta, wood-fired pizzas, and grilled meats, as well as a selection of creative and innovative dishes that showcase the chef's culinary skills. Some of the standout dishes at Roberto's include the beef tartare, the black truffle risotto, and the braised veal ossobuco. The restaurant's decor is elegant and sophisticated, with a contemporary Italian style that creates a warm and welcoming ambiance. Overall, Roberto's offers a refined and luxurious dining experience that combines exceptional food, impeccable service, and a sophisticated atmosphere, making it a top choice for special occasions or romantic dinners.",
      zomato_reviews: "https://www.zomato.com/dubai/robertos-difc",
      booking_link: "https://www.sevenrooms.com/reservations/robertosdubai",
      image_url:
        "https://cdn.welcometotheworld.com/wp-content/uploads/2020/08/29104024/ROBERTOS-copy.jpg",
    },
    {
      name: "Akira Back",
      website: "https://www.akirabackdubai.com/",
      address: "W Dubai - The Palm, West Crescent, Palm Jumeirah, Dubai",
      contact_number: "+971 4 245 5800",
      description:
        "Akira Back is located in the heart of Dubai's financial district, Akira Back is a contemporary Japanese restaurant that offers a unique culinary experience blending Japanese cuisine with Korean accents. The restaurant's namesake is the famous Korean-American chef Akira Back, who infuses his heritage into every dish. The menu features a range of sushi rolls, sashimi, and grilled meats, as well as signature dishes like the tuna pizza and the wagyu beef tacos. The restaurant's decor is sleek and modern, with an open kitchen and a sushi bar that allow guests to watch the chefs at work. Overall, Akira Back offers a sophisticated yet relaxed dining experience, making it a popular spot for both business and pleasure.",
      zomato_reviews: "https://www.zomato.com/dubai/akira-back-palm-jumeirah",
      booking_link: "https://www.sevenrooms.com/reservations/akirabackdubai",
      image_url:
        "https://www1.lovethatdesign.com/wp-content/uploads/2019/07/Love-that-design-Akira-Back-05-1024x633.jpg",
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
                  <img
                    className="img-fluid"
                    src={data.image_url}
                    alt="post-thumb"
                  />
                </div>
                <div className="post-content">
                  {/* <ul className="list-inline d-flex justify-content-between border-bottom post-meta pb-2 mb-4">
                    <li className="list-inline-item">
                      <i className="ti-calendar mr-2"></i>June 2, 2018
                    </li>
                    <li className="list-inline-item">
                      <i className="ti-alarm-clock mr-2"></i>
                      <span className="eta">8 min</span> read
                    </li>
                  </ul> */}
                  <h4 className="mb-4">
                    <a
                      href={data.website}
                      target="_blank"
                      className="text-dark"
                      rel="noreferrer"
                    >
                      {data.name}
                    </a>
                  </h4>
                  <p className="mb-0 ">
                    Contact Number:{" "}
                    <a href={"tel:" + data.contact_number}>
                      {data.contact_number}
                    </a>
                  </p>
                  <p className="mb-0 ">
                    Address:{" "}
                    <a
                      href={"https://www.google.com/maps/place/" + data.address}
                    >
                      {data.address}
                    </a>
                  </p>
                  <p className="mb-0 post-summary">{data.description}</p>
                  <p className="mb-0">
                    <a href={data.zomato_link} target="_blank" rel="noreferrer">
                      Zomato Review
                    </a>
                  </p>

                  <p className="mb-0">
                    Book now:
                    <a href={data.booking_link}>{data.name}</a>
                  </p>
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
