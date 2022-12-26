This is a simple program to understand how short polling works. <br>
<br>
**To run the program:**

1. node \<path to index.js file>
2. Type `curl -X POST http:localhost:portnumber/submit` into terminal. This produces a jobId. For example: job:1672096243418
3. Check status on the jobId using `curl http://localhost:portnumber/checkstatus?jobId=job:1672096243418`
