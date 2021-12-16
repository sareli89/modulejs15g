/**
 * AJAX
 * Asynchronous JavaScript and XML
 * Metodologia
 * 
 * xmlhttprequest
 * .fetch()
 * 
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

const xhttp = new XMLHttpRequest()

xhttp.onload = function(data) {
    if(data.target.status === 200){
        console.log(data.target)
        JSON.parse(data.target.response)
    }
}

xhttp.open("GET", "https://jsonplaceholdes.typicode.com/post", true)
xhttp.send()