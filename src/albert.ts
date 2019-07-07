const parser = require('comment-parser');

parser.file('./src/example_haha.js', function(err: any, result: any) {
    console.log(err);
    console.log(JSON.stringify(result));

    console.log(result[0]);
    console.log(result[1]);
    console.log(result[2]);
});
