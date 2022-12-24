const fstat = require("fs");

fstat.readFile('.env', (err, data) => {
    console.log(data.toString());
})

fstat.truncate(".env",2, () => console.log("sucsess"))