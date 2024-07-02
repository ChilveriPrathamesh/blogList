// Write your JS code here

import './index.css'

const BlogItem = props => {
  const {eachBlog} = props
  const {title, description, publishedDate} = eachBlog

  return (
    <li>
      <div className="blog-list-container">
        <h1 className="blog-title">{title}</h1>
        <p className="blog-date">{publishedDate}</p>
      </div>
      <p className="blog-description">{description}</p>
    </li>
  )
}

export default BlogItem
