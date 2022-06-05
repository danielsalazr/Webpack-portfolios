const fs =require('fs');

fs.writeFilesync('./.env', `API=${[process.env.API]}`);