const recentPosts = [
  {
    media: "/assets/1.jpg",
    title: "Meal Prep Breakfast For The Week",
    commentCount: 0,
    postLink: "https://especio.themerex.net/lemon-and-banana-buns/",
    date: "February 01, 2023",
  },
  {
    media: "/assets/DIFC.png",
    title: "Meal Prep Lunch For The Week",
    commentCount: 40,
    postLink: "https://especio.themerex.net/lemon-and-banana-buns/",
    date: "December 26, 2022",
  },
  {
    media: "/assets/Dubai_Marina.png",
    title: "Meal Prep Dinner For The Week",
    commentCount: 15,
    postLink: "https://especio.themerex.net/lemon-and-banana-buns/",
    date: "January 14, 2023",
  },
  {
    media: "/assets/Palm_Jumeirah.png",
    title: "Meal Prep Hi-Tea For The Week",
    commentCount: 10,
    postLink: "https://especio.themerex.net/lemon-and-banana-buns/",
    date: "November 26, 2018",
  },
];

function RecentPost() {
  return (
    <div className="col-lg-4">
      {recentPosts?.map((item, index) => (
        <div className="category-detail-right" key={index}>
          <div className="row">
            <div className="col-4">
              <div className="recent-post-left-info">
                <img src={item.media} alt="" />
              </div>
            </div>
            <div className="col-8">
              <div className="recent-post-right-info">
                <h3>{item.title}</h3>
                <span className="post-date">
                  <a href={item.postLink}>{item.date}</a>
                </span>
                <a href="#">
                  <i className="fas fa-comments"></i>
                  <span className="post-number">{item.commentCount}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecentPost;
