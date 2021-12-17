/**
 * 
 * Tarea 1
 * Estudiar promesas JS : is an object representing the eventual completion or failure of an asynchronous operation.
 * Essentially, a promise is a returned object to which you attach callbacks, instead of passing callbacks into a function.
 * 
 * Esdutiar el api fetch : The Fetch API provides an interface for fetching resources 
 * (including across the network). It will seem familiar to anyone who has used XMLHttpRequest, 
 * but the new API provides a more powerful and flexible feature set.
 * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
 * 
 */

/**
 * Tarea 2
 * Metodos (verbos http)
 * GET : idempotent The HTTP GET method requests a representation of the specified resource. 
 * Requests using GET should only be used to request data (they shouldn't include data).
 * sintax: GET /index.html
 * 
 * POST : noIdempotent  sends data to the server. The type of the body of the request is indicated by the Content-Type header.
 * When the POST request is sent via a method other than an HTML form — like via an XMLHttpRequest — the body can take any type. As described in the HTTP 1.1 specification, POST is designed to allow a uniform method to cover the following functions:
 * sintaxis: POST /test
Annotation of existing resources
Posting a message to a bulletin board, newsgroup, mailing list, or similar group of articles;
Adding a new user through a signup modal;
Providing a block of data, such as the result of submitting a form, to a data-handling process;
Extending a database through an append operation.
 * 
 * PUT: idempotent creates a new resource or replaces a representation of the target resource 
 * with the request payload.
 * sintax: PUT /new.html HTTP/1.1
 * 
 * PATCH : applies partial modifications to a resource. A PATCH request is considered a set of instructions on how to modify a resource. 
 * Contrast this with PUT; which is a complete representation of a resource. .may have side-effects on other resources.
 * sintaxis: PATCH /file.txt HTTP/1.1    A successful response is indicated by any 2xx status code.
 * 
 * DELETE : noIdempotent The HTTP DELETE request method deletes the specified resource.
 * sintaxis: DELETE /file.html HTTP/1.1
 * If a DELETE method is successfully applied, there are several response status codes possible:
A 202 (Accepted) status code if the action will likely succeed but has not yet been enacted.
A 204 (No Content) status code if the action has been enacted and no further information is to be supplied.
A 200 (OK) status code if the action has been enacted and the response message includes a representation describing the status.
 * 
 */


/**
 * Tarea 3
 * Crear una cuenta en firebase
 */


/**
 * 
 * Tarea 4
 * Generar un grid de todos los usuarios 
 * https://jsonplaceholder.typicode.com/users
 * 
 */


 const userData = new XMLHttpRequest()
userData.open( "GET" , "https://jsonplaceholder.typicode.com/users", true)

userData.onload = function(data) {
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
                    <img src="https://i.pravatar.cc/150?img=3" class="card-img-top rounded-circle mb-2" alt="avatar picture">
                    <h5 class="card-title mb-3 "><b>Nombre:</b> ${element.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted"><b>Nombre de usuario:</b> ${element.username}</h6>
                    <p class="card-text">${element.email}</p>
                        <div class="card rounded $gray-100 mb-2">
                            <ul class="list-group list-group-flush ">
                                <li class="list-group-item">
                                    <strong><b>Direccion:</b> ${element['address'].street}</strong>
                                    <span class="comment__body"> ${element['address'].suite}</span>  
                                </li>
                            </ul>
                        </div>
                    <p class="card-text"><b>Telefono:</b> ${element.phone}</p>
                    <p class="card-text">${element.website}</p>
                    <p class="card-text">${element.company}</p>
                </div>
                
            </div>
            </div>
            `
            });
        document.querySelector('#cardRow').innerHTML = templateUser
    }
    
}

userData.send()
