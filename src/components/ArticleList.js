import Article from "./Article";
function ArticleList({posts}){
    console.log(posts)
    return(
        <main>
           {posts.map(post=> <Article 
           key={post.id}
           title={post.title} 
           date={post.date}
           preview={post.preview}
           />)} 
           
        </main>
    )
}
export default ArticleList;