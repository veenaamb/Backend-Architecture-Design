/*
Server sent events - single request, long response (stream)
Use case: implmement all sort of applications, including those which need to fetch constant updates
from the server. As an example, imagine to have a graph in your web page which displays real time data. 
Your page must refresh the graph any time there is new data to display.

A data acquisition software and a web interface where a lot of graphs were updated 
every time a new data point was collected. This is a good fit for SSE if the number of
connected clients is low (essentially, only one), the user interface should update in real-time, 
and the server should not flooded with requests as it would be with polling.

Cons: Client must be online, client might not be able to handle, http/1.1 problem(6 connections) - other
requests will be starved [http2 we can send multiple streams in the same connection]
*/

const app = require("express")();

app.get("/", (req, res) => res.send("hello!"));

app.get("/stream", (req,res) => {
    res.setHeader("Content-Type", "text/event-stream");
    send(res);
})
const port = process.env.PORT || 8888;

let i = 0;
function send (res) {
    res.write("data: " + `message from server ---- [${i++}]\n\n`);
    setTimeout(() => send(res), 1000);
}

app.listen(port)
console.log(`Listening on port ${port}`)


/* Client Code 

let sse = new EventSource("http://localhost:8080/stream");
sse.onmessage = console.log

*/