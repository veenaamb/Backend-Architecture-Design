/* RabbitMQ */
const amqp = require("amqplib");

const msg = {number: process.argv[2]} //node publisher.js <msg>
/*
process.argv => [node.exe execution path, path for publisher.js file, <msg1> <msg2> <msg3>]
process.argv property is part of the process module used to get the arguments passed to 
the node.js process when run in the command line.
*/
connect();
async function connect() {

    try {
        const amqpServer = "amqp://localhost:5672" //rabbit-mq server
        const connection = await amqp.connect(amqpServer)
        const channel = await connection.createChannel();
        await channel.assertQueue("jobs");
        await channel.sendToQueue("jobs", Buffer.from(JSON.stringify(msg)))
        console.log(`Job sent successfully ${msg.number}`);
        await channel.close();
        await connection.close();
    }
    catch (ex){
        console.error(ex)
    }

}
//publishercli : node publisher.js 300 