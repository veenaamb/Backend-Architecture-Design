**_Example code:_** <br/>
Run the program and execute the following commands on terminal

1.  `curl -X POST http://localhost:8080/submit`

        job:1672100051044

2.  `curl http://localhost:8080/checkstatus\?jobId\=job:1672100051044`

        JobStatus: Complete 100%

Note here that it sends the update only after the job is completed, there are no intermediate responses unlike short polling.
