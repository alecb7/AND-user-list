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

```
  npm install
```

# Run the server

```
node server.js
```
# This is bad

```
You're bad
```
