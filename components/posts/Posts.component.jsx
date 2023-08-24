import { useState } from "react"

const Posts = () => {
    const [posts, setPosts] = useState([]);

    return (
        <>
            {posts.map((post, i) => {
                return (
                    <div key={i}>
                        {JSON.stringify(post)}
                    </div>
                )
            })}
        </>
    )
}

export default Posts;