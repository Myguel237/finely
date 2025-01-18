const session = require('express-session');
// ...
app.use(morgan('dev'));
app.use(express.static('./public'));app.use(
session({
secret: process.env.AUTH_SECRET,
saveUninitialized: true,
resave: false,
})
);