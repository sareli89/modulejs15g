// GET 
const getPosts =  (funcionALlamar) => {
    const xhttp = new XMLHttpRequest()
    xhttp.open( "GET" , `https://sara-15g-default-rtdb.firebaseio.com/posts/.json`, true)
    xhttp.onload = function(data) {
        // console.log(data)
        if(data.target.status === 200){
            funcionALlamar(data.target.response)
        }
    }
    xhttp.send()
}

const funcionCallback =  (posts) => {
    console.log(posts)
    let parsedPosts = JSON.parse(posts)
    console.log(parsedPosts)
    let layout = ''
    for(post in parsedPosts) {
        let { title, timetoread, resume, author } = parsedPosts[post]
        layout += `
        <div class="col-12 col-md-4 mb-4">
            <div class="card text-dark bg-light">
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${author} -  ${timetoread} min</h6>
                    <p class="card-text">${resume}</p>
                    <a href="updateIndex.html?idpost=${post}" class="card-link">Editar post</a>
                    <a href="post.html?idpost=${post}" class="card-link">Ver post</a>
                </div>
            </div>
        </div>
        `
    }

    document.querySelector('.list__posts').innerHTML = layout
    
}

getPosts(funcionCallback)

// const postsData = new XMLHttpRequest()
// postsData.open( "GET" , "https://sara-15g-default-rtdb.firebaseio.com/posts/.json", true)

// postsData.onload = function(data) {
// console.log(data.target.response)
//     if(data.target.status === 200){
//         let res = data.target.response
//         let dataResp = JSON.parse(res)

//         let templatePost = ''
//         for (post in dataResp) {
//             let {title, author, timeload, resume } = dataResp[post]
//             templatePost += `
                
//             <div class="col-12 col-md-4 mb-5" style="width: 18rem">
//                 <div class="card bg-light " >
//                     <div id="userCard" class="card-body m-2 rounded ">
//                         <h5 class="card-title mb-3 "><b>Titulo:</b> ${title}</h5>
//                         <h6 class="card-subtitle mb-2 text-muted"><b>Autor:</b> ${author}</h6>
//                         <p class="card-text"><b>Tiempo de lectura:</b> ${timetoread} min</p>
//                         <p class="card-text"><b>Resumen:</b> ${resume}</p>
//                     </div>
//                 </div>
//             </div>
//                 `
//         }
//         document.querySelector('#cardRow').innerHTML = templatePost
//     }
    
// }

// postsData.send()

