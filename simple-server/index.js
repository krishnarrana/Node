const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');

const mimetypes = {
    "html": "text/html",
    "jpeg": "image/jpeg",
    "jpg": "image/jpg",
    "png": "image/png",
    "js": "text/javascript",
    "css": "text/css"
}

http.createServer(function (req, res) {
    var uri = url.parse(req.url).pathname;
    console.log('uri...........', uri);
    var filename = path.join(process.cwd(), unescape(uri));
    console.log('filename....', filename);
    console.log('loading....' + uri);
    var stats;
    try {
        stats = fs.lstatSync(filename);
        console.log('try....')
    } catch (e) {
        console.log('catch....')
        res.writeHead(404, { 'Content-type': 'text/plain' });
        res.write('404 not found \n');
        res.end();
        return;
    }
    if (stats.isFile()) {
        var mimetype = mimetypes[path.extname(filename).split('.').reverse()[0]];
        res.writeHead(200, { 'Content-type': mimetype });
        var fileStream = fs.createReadStream(filename);

        fileStream.pipe(res)
    } else if (stats.isDirectory()) {
        res.writeHead(302, {
            'Location': 'index.html'
        })
        res.end();
    } else {
        res.writeHead(500, { 'Content-type': 'text/plain' });
        res.write('500 internal erroe\n');
        res.end();
    }
}).listen(3000)