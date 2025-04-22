const express = require('express');


/**
 * This file defines a simple Express.js server with the following types of routes:
 *
 * 1. Query Parameters Route:
 *    - Method: GET
 *    - Path: /query
 *    - Description: Accepts query parameters `name` and `age` from the URL.
 *    - Example: /query?name=John&age=30
 *    - Response: JSON object with a message containing the received query parameters.
 *
 * 2. Route Parameters Route:
 *    - Method: GET
 *    - Path: /route/:id
 *    - Description: Accepts a route parameter `id` from the URL.
 *    - Example: /route/123
 *    - Response: JSON object with a message containing the received route parameter.
 *
 * 3. Request Body Route:
 *    - Method: POST
 *    - Path: /body
 *    - Description: Accepts a JSON request body with `name` and `age` fields.
 *    - Example Request Body: { "name": "John", "age": 30 }
 *    - Response: JSON object with a message containing the received request body data.
 *
 * Server:
 * - Port: 3000
 * - URL: http://localhost:3000
 * - Description: Starts the server and listens for incoming requests on the specified port.
 */


const app = express();

app.use(express.json()); // Middleware to parse JSON request body

// Route with query parameters
app.get('/query', (req, res) => {
    const { name, age } = req.query;
    res.json({ message: `Query parameters received: name=${name}, age=${age}` });
});

// Route with route parameters
app.get('/route/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Route parameter received: id=${id}` });
});

// Route with request body
app.post('/body', (req, res) => {
    const { name, age } = req.body;
    res.json({ message: `Request body received: name=${name}, age=${age}` });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});