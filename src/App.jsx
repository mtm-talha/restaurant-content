
import "./App.css";

function App() {
  const restaurantData = 
    [
      {
        "name": "Onyx Restaurant",
        "website": "https://www.onyxrestaurant.hu/en/",
        "address": "1051 Budapest, Vörösmarty tér 7-8., Hungary",
        "contact_number": "+36 30 508 0622",
        "description": "Onyx Restaurant is a Michelin-starred fine dining establishment in Budapest, offering a unique culinary experience that showcases the best of Hungarian cuisine. The restaurant's elegant interior, attentive service, and exceptional food and wine make it a must-visit destination for foodies and luxury travelers.",
        "zomato_rating": "4.9/5",
        "zomato_link": "https://www.zomato.com/budapest/onyx-restaurant-belv%C3%A1ros-lip%C3%B3tv%C3%A1ros",
        "google_map_link": "https://goo.gl/maps/TWCcU6es83FGiutv9",
        "image_url": "https://johnrieber.files.wordpress.com/2018/12/onyx-restaurant-budapest-hungary-two-michelin-stars.jpeg?w=700&h=525"
      },
      {
        "name": "Costes Downtown",
        "website": "https://costesdowntown.hu/",
        "address": "1051 Budapest, Vigyázó Ferenc u. 5., Hungary",
        "contact_number": "+36 1 920 1015",
        "description": "Costes Downtown is a Michelin-starred restaurant in Budapest that offers a contemporary twist on traditional Hungarian cuisine. The restaurant's chic decor, attentive service, and inventive dishes make it a popular destination for foodies and travelers seeking a unique dining experience.",
        "zomato_rating": "4.8/5",
        "zomato_link": "https://www.zomato.com/budapest/costes-downtown-belv%C3%A1ros-lip%C3%B3tv%C3%A1ros",
        "google_map_link": "https://goo.gl/maps/gKTC8zfH2bMfJNnX9",
        "image_url": "https://costesdowntown.hu/wp-content/uploads/2022/11/Screenshot_548.png"
      },
      {
        "name": "MÁK Bistro",
        "website": "https://makbistro.hu/en/",
        "address": "1051 Budapest, Vigyázó Ferenc u. 4., Hungary",
        "contact_number": "+36 1 951 9041",
        "description": "MÁK Bistro is a popular restaurant in Budapest, serving modern Hungarian cuisine with a focus on locally-sourced ingredients. The restaurant's stylish decor and friendly staff make it a great spot for a casual meal or a special occasion. The menu changes seasonally and features dishes that are both inventive and comforting, using fresh, high-quality ingredients. The wine list is also carefully curated to complement the flavors of the food.",
        "zomato_rating": "4.6/5",
        "zomato_link": "https://www.zomato.com/budapest/m%C3%A1k-bistro-belv%C3%A1ros-lip%C3%B3tv%C3%A1ros",
        "google_map_link": "https://goo.gl/maps/Z4XV2HX8q3zF5oKj6",
        "image_url": "https://images.ctfassets.net/314o13npeir2/3ZFWKOg9OhUxuX9XiT6hMW/9e9945eae1fd497c6b876a80aa35126b/mak-bistro-budapest-22.jpg?w=1920&q=80"
      },
      {
        "name": "GasztroBár",
        "website": "https://gasztrobargroup.com/",
        "address": "1073 Budapest, Kertész u. 48., Hungary",
        "contact_number": "+36 70 413 7273",
        "description": "GasztroBár is a cozy and stylish restaurant in Budapest's bustling Jewish Quarter. The menu features a variety of Hungarian and international dishes, as well as an extensive selection of wines and cocktails. The atmosphere is relaxed and welcoming, making it a great spot for a casual meal or a night out with friends.",
        "zomato_rating": "4.5/5",
        "zomato_link": "https://www.zomato.com/budapest/gasztr%C3%B3b%C3%A1r-erzs%C3%A9betv%C3%A1ros",
        "google_map_link": "https://goo.gl/maps/1fBDJwdW8SCfMmuX9",
        "image_url": "https://media.wlrp.hu/images/ultimatebudapest.com/uploads/Bors.jpg"
      },
      {
        "name": "Borkonyha WineKitchen",
        "website": "https://borkonyha.hu/en/",
        "address": "1051 Budapest, Sas u. 3., Hungary",
        "contact_number": "+36 1 266 0835",
        "description": "Borkonyha WineKitchen is a Michelin-starred restaurant in Budapest that offers an unforgettable fine dining experience. The menu features a mix of traditional Hungarian cuisine and modern, international dishes, all made with the finest ingredients and presented beautifully. The wine list is extensive, featuring both Hungarian and international wines, and the restaurant's knowledgeable staff are happy to make recommendations to complement your meal. The elegant, modern decor and attentive service make Borkonyha WineKitchen a top choice for a special occasion or romantic night out.",
        "zomato_rating": "4.8/5",
        "zomato_link": "https://www.zomato.com/budapest/borkonyha-winekitchen-belv%C3%A1ros-lip%C3%B3tv%C3%A1ros",
        "google_map_link": "https://goo.gl/maps/3q63cEEHUtZwskTj8",
        "image_url": "https://www.hungryformore-mag.com/wp-content/uploads/2016/07/restaurant_borkonyha_budapest_location_4-1080x720.jpg"
      }
  ];
  return (
      <>
        <h1>Top Five Restaurants in Budapest</h1>
        <div className="container">
          <div className="row">
          {restaurantData?.map((data,index)=>
            <div className="col-12 mb-100" key={index}>
              <article
                data-file="articles/b.html"
                data-target="article"
                className={index%2?"article-full-width":"article-full-width article-right"}
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
                    <a href={data.website} target="_blank" className="text-dark" rel="noreferrer">
                    {data.name}
                    </a>
                  </h4>
                  <p className="mb-0 post-summary">
                  Contact Number: <a href={'tel:'+data.contact_number}>
                  {data.contact_number}
                  </a>
                  </p>
                  <p className="mb-0 post-summary">
                    Address:  <a href={"https://www.google.com/maps/place/"+data.address} className="text-dark">
                    {data.address}
                    </a>
                  </p>
                  <p className="mb-0 post-summary">
                    {data.description}
                  </p>
                  <p className="mb-0 post-summary">
                   Zomato Rating:  <a href={data.zomato_link} className="text-dark">
                    {data.zomato_rating}
                    </a>
                  </p>
                
                </div>
              </article>
            </div>
          )}
          </div>
        </div>
      </>
  );
}

export default App;
