console.log("hiii")
console.log(__dirname)
console.log()

new page.loader({
    "res":res,
    "req":req,
    "title":"title",
    "templatedir":`${__dirname}/../../pages/test.html`,
    "other":{
        "foo":"hello"
    }
}).load()