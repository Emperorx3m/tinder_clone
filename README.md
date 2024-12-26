# Tinder Clone

This is a high-level clone of the popular dating app Tinder, built using the MERN stack (MongoDB, Express, React, Node.js). The application implements basic swipe functionality, allowing users to swipe left or right on profiles, as well as an undo swipe feature.

## Features

- Swipe left to reject a profile.
- Swipe right to like a profile.
- Undo the last swipe action.
- Add profiles through a RESTful API using Postman.

## Technologies Used

- **MongoDB**: NoSQL database to store user profiles.
- **Express**: Web framework for Node.js to build the backend API.
- **React**: Frontend library for building user interfaces.
- **Node.js**: JavaScript runtime for the backend server.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB installed and running, or use a cloud MongoDB service.

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Emperorx3m/tinder_clone.git
   cd tinder-clone

2. **Install dependencies for both frontend and backend**
    1. Frontend (React):
        ```bash
        cd frontend
        npm install ```
    
    2. Backend (Node/Express):
        ```bash
        cd backend
        npm install```

3. **Start the application**
    - configure db connection 'backend/server.js line 9 
    ```const dbconn = 'mongodb://127.0.0.1:27017/tinder_db';```
    - Backend (server) on port 3003:
        ```bash
        cd server
        npm start```
    - Frontend (client) on port 3001:
        ```bash
        cd client
        npm start```

4. **Adding Profiles via Postman**
    Profiles can be added to the database by sending a POST request to http://localhost:3003/tinder/cards using Postman.

    Sample Payload
    ```json
    [
    { "name": "Alice", "imgUrl": "https://images.pexels.com/photos/123/pexels-photo-123.jpeg" },
    { "name": "Bob", "imgUrl": "https://images.pexels.com/photos/456/pexels-photo-456.jpeg" },
    ...
    ]

 [![DEMO WORKING VIDEO](./TINDER_CLONE_DEMO.mp4)](./TINDER_CLONE_DEMO.mp4)