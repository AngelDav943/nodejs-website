const express = require('express');
const fs = require('fs');
const app = express();
const http = require('http').Server(app);
const page = require('angeldav-testpackage');

page.url = "http://localhost:3000"
page.default.template = `${__dirname}/template.html`
page.default.notfound = `${__dirname}/pages/error.html`

page.default.other = {
	templateheader: `${__dirname}/public/components/navigator.html`
};

app.use('/public', express.static('public'));

const pageloader = require(`angeldav-test-pageloader`)(page, {
    "app": app,
    "path": `${__dirname}/view`
})

http.listen(3000, () => {
	console.log('server started');
});