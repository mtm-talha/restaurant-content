const categoryPosts = [
  {
    media: "/assets/Atlantis_Dubai.png",
    category: "Asian",
  },
  {
    media: "/assets/DIFC.png",
    category: "Russian",
  },
  {
    media: "/assets/Palm_Jumeirah.png",
    category: "Mexian",
  },
  {
    media: "/assets/DIFC.png",
    category: "Thai",
  },
  {
    media: "/assets/1.jpg",
    category: "Italian",
  },
];
function CategoryPost() {
  return (
    <section className="category-box-container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-5">
        {categoryPosts?.map((item, index) => (
          <div className="col" key={index}>
            <div className="category-box">
              <img src={item.media} alt="Category icon" />
              <h2>{item.category}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategoryPost;
