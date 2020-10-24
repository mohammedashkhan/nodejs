const fs   = require('fs');
 const requestHandler = (req,res) => {
    // const url = req.url;
    // const method = req.method;
    
    // if(url === '/'){
    //     res.write('<Html>');
    // res.write('<head><title>Form test</title></head>');
    // res.write('<body><form method="POST" action="/message"><input type="text" name="message"><button type="submit">send</button></form></body>')
    // res.write('</Html>');
    // return res.end();    
    // }

    // if (url === '/message' && method === 'POST') {
    //     const body = [];
    //     req.on('data' , (chunk) => {
    //         console.log(chunk);
    //         body.push(chunk);
    //     });
    //     req.on('end' , () => {
    //         const parsedBody  = Buffer.concat(body).toString();
    //         const message = parsedBody.split('=')[1];
    //         fs.writeFileSync('message.txt' , message);
            
    //     });
    //     res.statusCode = 302;
    //     res.setHeader('Location','/');
    //     return res.end();    
    // }
    
    // res.setHeader('Content-Type' , 'text/Html') ;
    // res.write('<Html>');
    // res.write('<head><title>Node js</title></head>');
    // res.write('<body><h2 >First App</h2></body>')
    // res.write('<body><h2> </h2></body>')
    // res.write('</Html>');
    // res.end();

    var body = fs.readFileSync('./html/index.html', 'utf8');
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(body);
    res.end();
    }

    // module.exports = requestHandler;

    // module.exports = {
        // hander : requestHandler  //we can export module like this also for accessing many functions 
    // };
    
    // module.exports.hander = requestHandler;

    exports.hander = requestHandler;

    //the above is the three way fo exporting module.