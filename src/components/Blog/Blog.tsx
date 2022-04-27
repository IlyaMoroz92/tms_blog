import './Blog.css'

type BlogProps = {
    className?: string
    image?: string
}

export const Blog = (props: BlogProps) => {
    return (
        <div className='mainDivBlog'>
            <div className="divBlog"><p className='pBlog' >Blog</p></div>
            <div className="navBlog">
                <span className="spanAll spanBlog">All</span>
                <span className="spanFavorites spanBlog">My favorites</span>
                <span className="spanPopular spanBlog">Popular</span>
            </div>
        </div>
    )
}