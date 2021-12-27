# connect-react

## Description

### Technologies used
* VSCode
* GitHub
* Node.js
* Express.js
* Mongoose
* MongoDB
* Moment

### Future Development
* To make front-end for this app.

## Table of Contents
* [Installation](#installation)
* [Tests](#tests)
* [Contributors](#contributors)
* [API Endpoints](#api-endpoints)
* [Videos](#videos)
* [License](#license)

## Installation
### If you want to run locally
1. Clone repository to your local machine.
2. Run 'npm install' in your command line.  
3. Ensure you have the node_modules folder.
4. Run 'npm start'.

## Tests
1. Install Insomnia Core or Postman (testing software)
2. Using the above installed software test the following URLs to test the APIs

### API Endpoints
1. User

- Get all users: GET /api/users
- Create a user: POST /api/users
- Get user by ID: GET /api/users/:id
- Update a user: PUT /api/users/:id
- Delete a user: DELETE /api/users/:id
- Add a friend: PUT /api/users/:userId/friends/:friendId (friendId is other user's userId)
- Delete a friend: DELETE /api/users/:userId/friends/:friendId (friendId is other user's userId)

2. Thought

- Get all thoughts: GET /api/thoughts
- Create a thought: POST /api/thoughts/:userId
- Get thought by ID: GET /api/thoughts/:id
- Update a thought: PUT /api/thoughts/:id
- Delete a thought: DELETE /api/thoughts/:id

3. Reaction

- Add a reaction: PUT /api/thoughts/:id/reactions
- Delete a reaction: DELETE /api/thoughts/:id/reactions

4. Friends

- Add friend: POST /api/users/:userId/friends/:friendId
- delete friend: DELETE /api/users/:userId/friends/:friendId

### Local testing
1. Install Insomnia Core or Postman (testing software)
2. Using the above installed software test, replace the above mentioned URLs heroku address before '/' with localhost:3001.

## Videos

## Contributors
### Please feel free to contact us with any questions
* Purvi Mecwan | 
  Contact email: princy.mecwan94@gmail.com |
  GitHub: [PurviMec](https://github.com/PurviMec)      

## License
This project is unlicensed.
