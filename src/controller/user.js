
import bcrypt from "bcryptjs"
import user from "../mongo/user";
import jwt from "jsonwebtoken"
import { DateTime } from "luxon";
import { Signin, Signup } from "../model/user";
const timeNow = DateTime.now().toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })
export const signup = async (req, res) => {
    try {
        const { error } = Signup.validate(req.body)
        if (error) {
            return res.status(400).json({
                message: "Pass sai"
            })
        }
        const { password, email, name, phone } = req.body;
        const maHoa = await bcrypt.hash(password, 10);
        const users = await user.create({
            name,
            phone,
            email,
            password: maHoa,
            timeUpdate: timeNow
        })
        users.password = undefined;
        return res.status(200).json({
            users,
        })
    } catch {
        return res.status(400).json({
            message: "Pass sai"
        })
    }
}
export const signin = async (req, res) => {
    try {
        const { error } = Signin.validate(req.body)
        if (error) {
            return res.status(400).json({
                message: "Pass sai"
            })
        }
        const { password, email } = req.body;
        const users = await user.findOne({ email: req.body.email })
        if (!users) {
            return res.status(400).json({
                message: "email khong ton tai"
            })
        }
        const checkPass = await bcrypt.compare(password, users.password);
        if (!checkPass) {
            return res.status(400).json({
                message: "Pass sai"
            })
        }
        const token = jwt.sign({ _id: user._id }, "24354656");
        users.password = undefined;
        return res.status(200).json({
            users,
        })
    } catch { }
}
export const getUser = async (req, res) => {
    try {
        const users = await user.findById(req.params.id)
        return res.status(200).json(users)
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}
export const putUser = async (req, res) => {
    try {
        const users = await user.findByIdAndUpdate(req.params.id, req.body)
        return res.status(200).json(users)
    } catch (error) {
        return res.status(400).json({
            message: "ngu"
        })
    }
}
export const getUserAll = async (req, res) => {
    try {
        const users = await user.find()
        return res.status(200).json(users)
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}
export const searchUserName = async (req, res) => {
    try {
        const checkSearchName = await user.findOne({ name: req.body.name })
        if (!checkSearchName) {
            return res.status(400).json({
                message: "Người dùng không tồn tại"
            })
        }
        return res.status(200).json(checkSearchName)
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}