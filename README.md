# CRUD Node Express JS with MongoDb


[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)  [![forthebadge](http://forthebadge.com/images/badges/powered-by-electricity.svg)](http://forthebadge.com)

This is a simple application with which to learn the basics of ExpressJS and MangoDb.

- ExpressJs is a nodejS framework that offers many advantages in terms of performance and flexibility for your applications
- MongoDB is the most popular NoSQL database solution
    "Unlike SQL databases, the data in a Mongo collection can be completely heterogeneous (Schemaless). This is called the Schemaless. The advantage of not necessarily having a strict data structure is to be able to quickly change its data structure. This flexibility is greatly appreciated in projects at the prototype stage which are still discovering how their data should be structured."
    
    * [plus d'informati](https://practicalprogramming.fr/mongodb/) 
    


###prerequisite

- Basic knowledge of web development (HTML, CSS, JavaScript).
- Knowledge of server side development principles.
- Installation of XCode for those who are on Mac.

### Install ExpressJS for NodeJS with npm

- initialize a NodeJS project in a new folder

![alt text](https://raw.githubusercontent.com/lutiku/Back-End-22878-CA1/master/init.png)

- install Express JS

![alt text](https://raw.githubusercontent.com/lutiku/Back-End-22878-CA1/master/installExpress.png)



## Start with this project
```bash
$ git clone git://github.com/lutiku/Back-End-CA1.git
 
$ cd Back-End-22878-CA1

$ npm install
```



## Features

 _This application include all CRUD operations_
 - Create 
    - collection.insertOne(<your object>)
 - Read
    - collection.findOne(<id>) – find one by id
    - collection.find() – find all
 - Update
    - collection.updateOne(<id>, <operation type>:<updated object>)
 - Delete
    - collection.delete(<id/your object>)
    
    
## Docs & Community

####Express JS


* [Website and Documentation](http://expressjs.com/) - [[website repo](https://github.com/expressjs/expressjs.com)]
* [#express](https://webchat.freenode.net/?channels=express) on freenode IRC
    
* [Practical Programming](https://practicalprogramming.fr/express-js/)
####MongoDb
  
  * [Practical Programming](https://practicalprogramming.fr/mongodb/)
  * [MongoDB CRUD operations](https://docs.mongodb.com/manual/crud/)


## Versions

Node v12.18.4
npm 6.14.8


## Authors

* **George Blanaru** _alias_ [@georgeBl](https://github.com/georgeBl)
* **Lutiku Ndongala** _alias_ [@lutiku](https://github.com/lutiku)



