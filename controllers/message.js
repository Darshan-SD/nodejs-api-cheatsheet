// Controller for /get route
const getAPI = (req, res) => {
    try {
        // Your code here....................

        return res.status(200).json({ message: "Wohoo!! Your GET API is working!!" }); // Send JSON message with status code 200
    }
    catch (error) {
        console.log(error); // For debugging purposes
        return res.status(500).json({ error: "Internal server error" }); // Send error mesage with status code 500
    }
}

// Controller for /get/:parameter route
const getParameterAPI = (req, res) => {
    try {
        const { parameter } = req.params; // Get the parameter
        console.log(`Parameter: ${parameter}`);

        // Your code here....................

        return res.status(200).json({ message: "Wohoo!! Your GET parameter API is working!!", parameter: parameter }); // Send JSON message with status code 200
    }
    catch (error) {
        console.log(error); // For debugging purposes
        return res.status(500).json({ error: "Internal server error" }); // Send error mesage with status code 500
    }
}


// Controller for /post route
const postAPI = (req, res) => {
    try {
        const { data } = req.body; // Capture the 'data' from the request body
        console.log(`You sent ${data}`);

        // Your code here......................

        return res.status(200).json({ message: "Wohoo!! POST API is working!!", data: data }); // Send response in JSON with status code 200 and data
    }
    catch (error) {
        console.log(error); // For debugging purposes
        return res.status(500).json({ error: "Internal server error" }); // Send error mesage with status code 500
    }
}

// Export all the controllers
module.exports = { getAPI, getParameterAPI, postAPI };