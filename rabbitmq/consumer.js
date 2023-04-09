const amqp = require("amqplib");

connect();
async function connect() {

    try {
        //const amqpServer = "server connection"
        const connection = await amqp.connect(amqpServer)
        const channel = await connection.createChannel();
        await channel.assertQueue("jobs");
        
        channel.consume("jobs", message => {
            const input = JSON.parse(message.content.toString());
            console.log(`Recieved job with input ${input.number}`)
            //"7" == 7 true //client ack is difficult in pub-sub model
            //"7" === 7 false

            if (input.number == 7 ) 
                channel.ack(message);
        })

        console.log("Waiting for messages...")
    
    }
    catch (ex){
        console.error(ex)
    }

}

//consumer: node consumer.js
//received job with input <msg>