/**
 * AJAX
 * Asynchronous JavaScript and XML
 * Metodologia
 * 
 * xmlhttprequest
 * .fetch()
 * 
 * https://www.javascript-coder.com/tutorials/images/ajax-block-diagram1.jpg
 * https://jsonplaceholder.typicode.com/posts
 * 
 */

// cliente
// armar el request
// enviar la peticion http
// verbos http: POST, GET, PUT, PATCH, DELETE

// server
// status code
// entender la peticon
//  armar la respuesta
// enviar la respuesta
/* 
// Declarar un objeto XMLHttpRequest
const xhttp = new XMLHttpRequest()

// Abrir la conexion (empezar a crear el request)
// xhttp.open(metodo, url)
xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true)

// Escuchar cuando el response este listo
xhttp.onload = function(data) {
    if(data.target.status === 200){
        let res = data.target.response
        let objResp = JSON.parse(res)
        console.loc(objResp)
    }
}

// xhttp.open( "GET" , "https://jsonplaceholder.typicode.com/posts/1", true)

// Enviar peticion

xhttp.send() */

// let obj = [

// ]

// texto a objetos JSON.parse()
// objeto a texto JSON.stringify()

// API fetch

// fetch()


// ejercico 1 en clase
// const xhttp = new XMLHttpRequest()
// xhttp.open( "GET" , "https://jsonplaceholder.typicode.com/posts", true)

// xhttp.onload = function(data) {
// console.log(data.target.response)
//     if(data.target.status === 200){
//         let res = data.target.response
//         let objResp = JSON.parse(res)

//         let templateUser = ''
//         objResp.forEach(element => {
//             templateUser += `
            
//             <div class="col-12 col-md-4 mb-5" style="width: 18rem">
//             <div class="card bg-light " >
//                 <div id="userCard" class="card-body m-2 rounded ">
//                     <h5 class="card-title mb-3 "><b>Titulo:</b> ${element.title}</h5>
//                     <h6 class="card-subtitle mb-2 text-muted"><b>ID:</b> ${element.id}</h6>
//                     <p class="card-text">${element.body}</p>
//                 </div>
//             </div>
//             </div>
//             `
//             });
//         document.querySelector('#cardRow').innerHTML = templateUser
//     }   
// }

// xhttp.send()


// Ejercico 2 en clase 
const getData = new XMLHttpRequest()
getData.open( "GET" , "https://jsonplaceholder.typicode.com/posts/1", true)

getData.onload = function(data) {
console.log(data.target.response)
    if(data.target.status === 200){
        let res = data.target.response
        let dataResp = JSON.parse(res)

        let templateUser = ''
        dataResp.forEach(element => {
            templateUser += `
            
            <div class="col-12 col-md-4 mb-5" style="width: 18rem">
            <div class="card bg-light " >
                <div id="userCard" class="card-body m-2 rounded ">
                
                    <h5 class="card-title mb-3 "><b>Titulo:</b> ${element.title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted"><b>ID:</b> ${element.id}</h6>
                    <p class="card-text">${element.body}</p>
                    <h2>Comentarios</h2>
                    <div class="card" > 
                        <ul id="comentarios" class="list-group list-group-flush">
                            
                        </ul>
                    </div>
                </div>
                
            </div>
            </div>
            `
            });
        document.querySelector('#cardRow').innerHTML = templateUser
    }
    
}

getData.send()

const xhttp2 = new XMLHttpRequest()
xhttp2.open( "GET" , "https://jsonplaceholder.typicode.com/posts/1/comments", true)
xhttp2.onload = function(data) {

    if(data.target.status === 200){
        let res2 = data.target.response
        let objResp2 = JSON.parse(res2)
        console.log(objResp2, "comentario")
        let comentUser = ''
        objResp2.forEach(element => {
            comentUser += `
                <li class="list-group-item">
                <strong>${element.name}</strong>
                <span class="comment__body">${element.body}</span>
            `
            });
        document.querySelector('#comentarios').innerHTML = templateUser2
    }
        
}

xhttp2.send()

/* 
// https://jsonplaceholder.typicode.com/posts/1 {} 
// https://jsonplaceholder.typicode.com/posts/1/comments [{},{}]
*/
//ejercicio 2 en clase

{/* <div class="card" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                    <div class="card" > 
                        <ul class="list-group list-group-flush">
                        <li class="list-group-item">An item</li>
                        <li class="list-group-item">A second item</li>
                        <li class="list-group-item">A third item</li>
                        </ul>
                    </div>
            </div>

<div class="card" style="width: 18rem;">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
</div> */}