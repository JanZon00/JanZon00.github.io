const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const cors = require('cors');
const User = require('./models/User');
const jwt = require('jsonwebtoken');

mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://admin_user:qwerty123@cluster0.t9k7inn.mongodb.net/test')

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//routes
app.post('/register', (req, res, next) => {
    //console.log(req.body)
    const newUser = new User({
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        nickname : req.body.nickname,
        email : req.body.email,
        password : bcrypt.hashSync(req.body.password, 10),
    })
    //console.log(newUser)
    newUser.save(err => {
        if(err){
            return res.status(400).json({
                title: 'error',
                error: 'email in use'
            })
        }
        return res.status(200).json({
            title: 'signup success'
        })
    })
})

app.post('/login', (req, res, next) => {
    User.findOne({ nickname : req.body.nickname}, (err, user) => {
        if(err) return res.status(500).json({
            title : 'server error',
            error: err
        })
        if (!user) {
            return res.status(401).json({
                title : 'user not found',
                error: 'invalid credentials'
            })
        }
        //incorrect password
        if(!bcrypt.compareSync(req.body.password, user.password)) {
            return res.status(401).json({
                title: 'login failed',
                error: 'invalid credentials'
            })
        }
        //If all is good create a token and send it to frontend
        let token = jwt.sign({userId: user._id}, 'secretkey');
        return res.status(200).json({
            title : 'login success',
            token : token
        })

    })
})

//grabbing user info
app.get('/data', (req, res, next) => {
    let token = req.headers.token; //token
    jwt.verify(token, 'secretkey', (err, decoded) => {
      if (err) return res.status(401).json({
        title: 'unauthorized'
      })
      //token is valid
      User.findOne({ _id: decoded.userId }, (err, user) => {
        if (err) return console.log(err)
        return res.status(200).json({
          title: 'user grabbed',
          user: {
            nickname: user.nickname,
            first_name: user.first_name,
            last_name: user.last_name
          }
        })
      })
  
    })
})

const port = process.env.PORT || 5000;

app.listen(port, (err) => {
    if (err) return console.log(err);
    console.log('server running on port ' + port);
})