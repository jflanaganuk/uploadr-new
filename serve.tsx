import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './src/app';
import express from 'express';

const app = express();

const output = ReactDOMServer.renderToString(
    <App/>
)

const ssrWrapper = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Portfolio site for Joshua Flanagan - Web Developer from Nottingham UK">
    <title>Uploadr - Joshua Flanagan</title>

    <meta name="title" content="Uploadr - Joshua Flanagan">
    <meta name="description" content="A blog for a web developer to ramble into">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://www.uploadr.co.uk">
    <meta property="og:title" content="Uploadr - Joshua Flanagan">
    <meta property="og:description" content="Portfolio site for Joshua Flanagan - Web Developer from Nottingham UK">
    <meta property="og:image" content="https://avatars.githubusercontent.com/u/23509159?v=4">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://www.uploadr.co.uk">
    <meta property="twitter:title" content="Uploadr - Joshua Flanagan">
    <meta property="twitter:description" content="Portfolio site for Joshua Flanagan - Web Developer from Nottingham UK">
    <meta property="twitter:image" content="https://avatars.githubusercontent.com/u/23509159?v=4">

    <style>
        #ssrWrapper {
            height: 100vh;
            background-image: linear-gradient(#0984e3 20%, #74b9ff);
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
        }
        #ssrWrapper .container {
            display: none;
        }
    </style>
</head>

<body>
    <div id="ssrWrapper">
    ${output}
    </div>
    <div id="root"></div>
    <script>var process = {env: {}}; process.env.BROWSER = true</script>
    <script src="bundle.js"></script>
</body>
</html>
`

app.use('/', express.static(__dirname + '/public'))
app.get('/', (_req, res) => {
    res.send(ssrWrapper);
})

app.listen(5500, () => {
    console.log('====-====[Listening on port 5500]====-====');
    console.log('Visit the site at http://localhost:5500');
})