const blogPosts = [
  {
    id: 1,
    title: "Introduction to JavaScript",
    author: "John Doe",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    category: "Programming",
    createdAt: new Date("2023-01-15"),
    totalViews: 1500,
    readTime: "10 min",
  },
  {
    id: 2,
    title: "Getting Started with React",
    author: "Jane Smith",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    category: "Web Development",
    createdAt: new Date("2023-02-10"),
    totalViews: 2200,
    readTime: "15 min",
  },
  {
    id: 3,
    title: "Machine Learning Basics",
    author: "Michael Johnson",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    category: "Artificial Intelligence",
    createdAt: new Date("2023-03-05"),
    totalViews: 1800,
    readTime: "20 min",
  },
  {
    id: 4,
    title: "Traveling Around the World",
    author: "Emily Brown",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    category: "Travel",
    createdAt: new Date("2023-04-20"),
    totalViews: 3000,
    readTime: "30 min",
  },
  {
    id: 5,
    title: "Healthy Eating Habits",
    author: "John Doe",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    category: "Health",
    createdAt: new Date("2023-05-12"),
    totalViews: 2500,
    readTime: "25 min",
  },
  {
    id: 6,
    title: "Introduction to Python",
    author: "Jane Smith",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    category: "Programming",
    createdAt: new Date("2023-06-08"),
    totalViews: 2100,
    readTime: "18 min",
  },
  {
    id: 7,
    title: "Exploring Deep Learning",
    author: "Michael Johnson",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    category: "Artificial Intelligence",
    createdAt: new Date("2023-07-25"),
    totalViews: 2800,
    readTime: "22 min",
  },
  {
    id: 8,
    title: "Discovering New Technologies",
    author: "Emily Brown",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    category: "Technology",
    createdAt: new Date("2023-08-03"),
    totalViews: 3200,
    readTime: "35 min",
  },
  {
    id: 9,
    title: "The Power of Data Science",
    author: "John Doe",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    category: "Data Science",
    createdAt: new Date("2023-09-18"),
    totalViews: 2700,
    readTime: "28 min",
  },
  {
    id: 10,
    title: "Healthy Living Tips",
    author: "Jane Smith",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    category: "Health",
    createdAt: new Date("2023-10-30"),
    totalViews: 2900,
    readTime: "23 min",
  },
  {
    id: 11,
    title: "Advanced Web Development Techniques",
    author: "Michael Johnson",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    category: "Web Development",
    createdAt: new Date("2023-11-15"),
    totalViews: 2300,
    readTime: "17 min",
  },
  {
    id: 12,
    title: "Exploring Cloud Computing",
    author: "Emily Brown",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    category: "Technology",
    createdAt: new Date("2023-12-05"),
    totalViews: 2600,
    readTime: "19 min",
  },
  {
    id: 13,
    title: "Tips for Learning a New Programming Language",
    author: "John Doe",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    category: "Programming",
    createdAt: new Date("2024-01-10"),
    totalViews: 3100,
    readTime: "27 min",
  },
  {
    id: 14,
    title: "Exploring the World of Cybersecurity",
    author: "Jane Smith",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    category: "Technology",
    createdAt: new Date("2024-02-20"),
    totalViews: 2700,
    readTime: "21 min",
  },
  {
    id: 15,
    title: "The Future of Artificial Intelligence",
    author: "Michael Johnson",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    category: "Artificial Intelligence",
    createdAt: new Date("2024-03-15"),
    totalViews: 3500,
    readTime: "24 min",
  },
];

function Cards() {
  return (
    <div className="d-flex align-items-center justify-content-center flex-wrap">
      {blogPosts.map((blogPost) => (
        <div
          className="card mx-3 my-4"
          style={{ width: "23rem" }}
          key={blogPost.id}
        >
          <img
            src="https://i.ytimg.com/vi/I4LRs_blKdI/maxresdefault.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{blogPost.title}</h5>
            <p className="card-text">{blogPost.content}</p>
            <span className="badge bg-primary my-2 me-1">
              {blogPost.category}
            </span>
            <span className="badge bg-primary my-2 me-1">
              Total Views - {blogPost.totalViews}
            </span>
            <span className="badge bg-primary my-2">{blogPost.readTime}</span>
            <span className="badge bg-success my-2 w-100">
              Created By - {blogPost.author} on {""}
              {blogPost.createdAt.toDateString()}
            </span>
            <a href="#" className="btn btn-primary btn-sm w-100">
              Read Full Blog
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
