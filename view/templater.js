var htmlcontent = ""

var array = [
    "first", "second", "third", "fourth", "fifth", "sixth", "seventh", "nineth", "tenth"
]

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    htmlcontent += new page.templater({
        "content": `${__dirname}/../../public/components/test.html`,
        "other": {
            "name": i+1,
            "description": element,
        }
    }).load()
}

/*for (let i = 1; i <= 100; i++) {
    element = ""
    if (i % 3 == 0) element += "fizz"
    if (i % 5 == 0) element += "buzz"
    if (element == "") element = i
    htmlcontent += new page.templater({
        "content": `${__dirname}/../../public/components/test.html`,
        "other": {
            "name": i,
            "description": element,
        }
    }).load()
}*/

new page.loader({
    "res": res,
    "req": req,
    "title": "Sum of numbers",
    "content": `${__dirname}/../../pages/templater.html`,
    "other": {
        content: htmlcontent
    }
}).load()
