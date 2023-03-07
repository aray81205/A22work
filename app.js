const express = require('express')
const app = express()
const { engine } = require('express-handlebars')
const port = 3000


app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// setting static files
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index')
})
app.get('/about', (req, res) => {
    res.render('about')
})
app.get('/portfolio', (req, res) => {
    res.render('portfolio')
})
app.get('/contact', (req, res) => {
    res.render('contact')
})
app.listen(port, () => {
    console.log(`express is listening on localhost:${port}`)
})