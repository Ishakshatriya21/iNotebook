const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');

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
        //creating a user
        user = await User.create({
            name: req.body.name,
            password: req.body.password,
            email: req.body.email
        })
        //No neeed to use .then as we are using async await 
        // .then(user => res.json(user)).catch(err=>{console.log(err), res.json({error: 'Enter a unique value for email', message: err.message})});
        res.json(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occurred");
    }
})

module.exports = router;