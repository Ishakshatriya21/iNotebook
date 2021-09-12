const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    obj = {
        a: 'This is notes route'
    }
    res.json(obj)
})

module.exports= router;