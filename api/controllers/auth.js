import AuthModel from "../models/auth.js"
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs"

export const register = async (req, res) => {
    try {
        const { username, email, password } = req.body

        const user = await AuthModel.findOne({ email })

        if (user) {
            return res.status(400).json({ msg: "Already exist user" })
        }
        if (password.length < 6) {
            return res.status(400).json({ msg: "Passsword musn't be then 6 character" })
        }
        const passwordHash = await bcrypt.hash(password, 12)

        if (!ValidateEmail(email)) {
            return res.status(400).json({ msg: "You have entered an invalid email address!" })

        }

        // create new user 

        const newUser = await AuthModel.create({ username, email, password: passwordHash })

        const token = jwt.sign({ id: newUser._id,email }, "SECRET", { expiresIn: "1h" })


        res.status(201).json({
            status: "OK",
            newUser,
            token
        })

    } catch (error) {
        console.log('erro in abckend:', error)
        return res.status(500).json({ msg: error.message })
    }
}







export const login = async (req, res) => {
    try {

        const { email, password } = req.body
        console.log('email:', { email })
        const user = AuthModel.findOne( email )

        if (!user) {
            res.status(500).json({ msg: "User don't exist!!! " })
        }
        console.log('user:', user.email)
        console.log('------------------------------------------------------------------------------------')
        console.log('------------------------------------------------------------------------------------')
        console.log('------------------------------------------------------------------------------------')

        const passwordCompare = await bcrypt.compare(password, user.password || "")
        console.log('user:', email)

        if (!passwordCompare) {
            return res.status(400).json({ msg: "Invalid password!!!" })
        }

        const token = jwt.sign({ id: user._id }, "SECRET_KEY", { expiresIn: "1h" })

        res.status(200).json({ status: "OK", user, token })

    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}




















function ValidateEmail(mail) {
    if (/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(mail)) {
        return true
    }
    return false
}