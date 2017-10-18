# AND user list

A 3-tiered application with 2 main pages and 2 JSON API endpoints.

**Pages**

'/' -> Displays a list (First name, Last name) of all users in the database

'/user.html?id=xxxxxxxxx' -> Displays a specific users details along with their picture

**Endpoints**

'/users' -> Returns an array of all users in the database as user objects

'/user/:id' -> Returns a single user object matching the requested id 

**User object**

```
[
  {
    id: int,
    firstName: string,
    lastName: string,
    age: int,
    nat: string
  },
  {
    ...
  },
  ...
]
```

# Install instruction

#1#
> npm install
###

#2#
> Get mongo db running
> if it's not running locally, you can use docker container:
    - create a docker container with mongo
        'docker run --name mongo -p 27017:27017 mongo'
    - to kill previous instance of same db with name mongo:
        'docker kill mongo'
    - to remove leftover after killing previous docker container:
        'docker rm mongo'
###

###
At this point when you navigate in a browser to: "http://localhost:8080" the app wont be running
###

#3#
> Run the server
    - 'node server.js'
###

#3#
> If you need the dummy data population of the collection in mongo is enabled:
    - 'setUpDummyData' in server.js file is set to true
###

#4#
> Run docker compose that calls into the separate docker files
###

# This is bad

```
You're bad
```

### It's a joke. We're awesome. ###
