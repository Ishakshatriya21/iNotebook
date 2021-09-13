const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//JWT_SECRET will be passed for jwt token creation. It will be the part of the jwt which will help us to verify if the token is tempered
const JWT_SECRET = 'Utsav#$%Soni';

//create a user using: POST '/api/auth/createuser'. No login required
router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email').isEmail(),
    body('password').isLength({ min: 5 })
], async (req, res) => {
    // if there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    //check whether the user with this email exists already
    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ Error: 'User with this email already exist' })
        }
        //.genSalt will generate a salt, we are not going to store salt in our db as bcrypt works sort of different way | it returns a promise so we use wait here
        const salt = await bcrypt.genSalt(10); 
        //.hash will convert our password+salt into hash code | returns a promise so we use wait here
        const secPass = await bcrypt.hash(req.body.password, salt)
        //creating a user
        user = await User.create({
            name: req.body.name,
            password: secPass,
            email: req.body.email
        })
        //No neeed to use .then as we are using async await 
        // .then(user => res.json(user)).catch(err=>{console.log(err), res.json({error: 'Enter a unique value for email', message: err.message})});

        //data will be a unique key which will be passed for jwt token creation.
        const data = {
            user: {
                id: user.id
            }
        }
        //this function will create a jwt token. It is a synchronous function, therefore we need not to use await here.
        const authToken = jwt.sign(data, JWT_SECRET);
        console.log(authToken);
        // res.json(user);
        res.json({authToken});
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occurred");
    }
})

module.exports = router;