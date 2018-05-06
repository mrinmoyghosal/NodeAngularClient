OAuth Example with Angular & Node
===================

Sample application using Angular.js, Node.js, and request API.


Installing and Running
----

Install [Node.js](http://nodejs.org/).

Clone GitHub repo:

```
git clone https://github.com/mrinmoyghosal/NodeAngularClient.git
```


Install node module dependencies:

```
npm install 
```

Run application:

```
npm start
```

Go to [http://localhost:5000](http://localhost:5000) in your browser.


Admin View
----

Click on Admin View and it will send a HTTP GET request to NodeJS endpoint. In NodeJS app, it will fetch the accesstoken and will request for resources using BEARER token. 

Admin user will get full RESTAURENT object from in-memory MongoMock library.


Normal User View
----

Click on the User View and it will request a plain GET request to PythonOAuthServer and it will get only public visible Name and Address for each RESTAURENT object.






Methodology
----
-  Angluar APP Connecting with Node Backend for Client Credential Grant type request to the Python Server 
-  Node.js Acquiring Access Token and Serving Frontend Requests
