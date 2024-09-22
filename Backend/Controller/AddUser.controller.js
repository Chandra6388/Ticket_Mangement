// "use strict";
const db = require('../Modals');
const user_signup = db.user_signup
const subscribedChennels = db.subscribedChennels
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
ObjectId = mongoose.Types.ObjectId;

// Login CLASS
class Login {

    async AddUser(req, res) {

        try {
            const {name , email, phone, password, notes} = req.body

            bcrypt.hash(req.body.password, 10, async (err, hash) => {
                if (err) {
                    res.send({
                        status: false,
                        msg: "Error in conver in hashing",
                        data: errorMsg
                    })
                }
                else {
                    const newUser = new user_signup({
                        Username: name,
                        PhoneNo: phone,
                        Email: email,
                        Notes: notes,
                        Password: hash
                    })

                    await newUser.save()
                    return res.send({
                        status: true,
                        msg: "User successfully added",
                        data: []
                    })
                }
            })
        }
        catch (error) {
            return res.send({
                status: false,
                msg: 'internal server error',
                data: []
            })
        }
    }

    async AllUser(req, res) {
        try {
            const AllUser = await user_signup.find()
            return res.send({
                status: true,
                msg: 'All User',
                data: AllUser
            })

        }
        catch (err) {
            return res.send({
                status: false,
                msg: 'internal server error',
                data: []
            })
        }
    }
    
    async EditUser(req, res) {
        const { newEmail, oldEmail, newPhone, FullName } = req.body
        try {

            const UpdatedUser = await user_signup.findOneAndUpdate({ Email: oldEmail }, { $set: { Email: newEmail, PhoneNo: newPhone, FullName: FullName } }, { new: true })

            return res.send({
                status: true,
                msg: 'Updated one user',
                data: UpdatedUser
            })

        }
        catch (err) {
            return res.send({
                status: false,
                msg: 'internal server error',
                data: []
            })
        }
    }
    async DeleteUser(req, res) {
        const { email } = req.body
        try {
            const AllUser = await user_signup.deleteOne({ Email: email })
            res.send({
                status: true,
                msg: 'deleted successfully',
                data: AllUser
            })
        }

        catch (err) {
            return res.send({
                status: false,
                msg: 'internal server error',
                data: []
            })
        }

    }

  
}


module.exports = new Login();