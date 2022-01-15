import express from 'express'
const app = express();
const port = 8080; // default port to listen
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(
    import.meta.url);
const __dirname = path.dirname(__filename);

// define a route handler for the default home page
app.get("/", (req, res) => {


    res.sendFile(path.join(__dirname, 'app.html'));


});

// start the Express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});