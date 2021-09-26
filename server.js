const express = require('express')
const path = require('path')
const app = express()
app.use(express.static(path.join(__dirname, '/dist/')))
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '/dist/index.html')))

app.listen(3000)

// const express = require('express');
// const app = express();
// const portNumber = 3000;
// const sourceDir = 'dist';

// app.use(express.static(sourceDir));

// app.listen(portNumber, () => {
//   console.log(`Express web server started: http://localhost:${portNumber}`);
//   console.log(`Serving content from /${sourceDir}/`);
// });
