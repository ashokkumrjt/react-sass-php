<html lang="en">
<head>
    <meta charset="utf-8">
    <title>React, Webpack, and Babel</title>
    <link rel="stylesheet" type="text/css" href="./styles/homePage.css"/>
    <script>
        var appData = {
            components: []
        };
    </script>
</head>
<body>
    <div class='react-component title-component' data-id='12345' data-component='title'></div>
    <script>
        appData.components.push({"component":"title","id":"12345","renderType":"client","attributes":{"title":"Some other title","description":"Something else"},"services":""});
    </script>
    <script src='./js/homePage.js'></script>
</body>
</html>