// const getPosts=async()=>{
// const res=await fetch('https://jsonplaceholder.typicode.com/posts')
// return res.json()
// }
const posts=await getPosts()
const PostsPage =async() => {
    const res= await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts=await res.json()
    return (
        <div>
           <h2>Total Posts: {posts.length}</h2>
        </div>
    );
};

export default PostsPage;