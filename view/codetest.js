const number1 = parseInt(req.query.a)
const number2 = parseInt(req.query.b)
var total = number1 + number2

new page.loader({
    "res": res,
    "req": req,
    "title": "Sum of numbers",
    "templatedir": `${__dirname}/../../pages/codetest.html`,
    "other": {
        "num1": number1,
        "num2": number2,
        "total": total
    }
}).load()
