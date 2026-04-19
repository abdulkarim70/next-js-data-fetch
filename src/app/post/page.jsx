// // const getPosts=async()=>{
// // const res=await fetch('https://jsonplaceholder.typicode.com/posts')
// // return res.json()
// // }
// const posts=await getPosts()


// const getPosts=async()=>{
// try{
//     const res=await fetch('https://jsonplaceholder.typicode.com/posts')
// return res.json()
// }
// catch(err){
//     throw new Error ('failed to fetch posts')
    
// }

// }

 const getPosts=async()=>{
const res=await fetch('https://jsonplaceholder.typicode.com/posts')
if(!res.ok){
    throw new Error ('Failed to fetch posts')
}
return res.json()
}
const posts=await getPosts()



const PostsPage =async() => {
    // const res= await fetch('https://jsonplaceholder.typicode.com/posts')
    // const posts=await res.json()
    // const posts=getPosts()
    return (
        <div>
           <h2>Total Posts: {posts.length}</h2>
        </div>
    );
};

export default PostsPage;