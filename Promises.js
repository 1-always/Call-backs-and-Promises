const posts = [{title:'POST5'},];
const users={
  LastUserActivityTime:null
};
//Do not touch this function
function createPost(p) {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push(p);
            
            resolve()
        }, 2000)
    }) 
}
//Do not touch this function
function updateLastUserActivityTime() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            users.LastUserActivityTime=new Date();
            resolve();
        }, 1000)
    }) 
}

//Do not touch this function
function deletePost(){
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            if(posts.length > 0){
                const poppedElement  = posts.pop();
                resolve(poppedElement);
            } else {
                reject("ERROR: ARRAY IS EMPTY")
            }
        }, 1000)
    })
}

//Modify the lines below and use .then and .catch smartly to get the correct output.
createPost({title:'POST3'})
.then(()=>createPost({title:'POST36'}))
.then(()=>createPost({title:'POST39'}))
.then(()=>updateLastUserActivityTime())
.then(()=>{
  const currentPost=posts[posts.length-1];
  console.log(currentPost.title);
  //console.log(posts.title);
  console.log(users.LastUserActivityTime)
  return deletePost()})
//.then((deletedPost) => {
    //console.log("Deleted Post:", deletedPost);
    //console.log("Updated Posts:", posts);
 // })
.catch((error)=>console.log(error));
