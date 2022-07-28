const server = require("./src/app.js");
const port = process.env.PORT || 3001;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    }
);
module.exports = server;