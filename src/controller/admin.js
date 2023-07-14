
import bcrypt from "bcryptjs"
import admin from "../mongo/admin";
export const signupAdmin = async (req, res) => {
    try {
        const { password, email, name } = req.body;
        const maHoa = await bcrypt.hash(password, 10);
        const admins = await admin.create({
            name,
            email,
            password: maHoa
        })
        admins.password = undefined;
        return res.status(200).json({ admins })
    } catch {

    }
}
export const signinAdmin = async (req, res) => {
    try {
        const { password, email } = req.body;
        const admins = await admin.findOne({ email })
        if (!admins) {
            return res.status(400).json({
                message: "email khong ton tai"
            })
        }
        const checkPass = await bcrypt.compare(password, admins.password);
        if (!checkPass) {
            return res.status(400).json({
                message: "Pass sai"
            })
        }
        admins.password = undefined;
        return res.status(200).json({
            admins,
        })
    } catch { }
}
export const getIdAdmin = async (req, res) => {
    try {
        const admins = await admin.findById(req.params.id)
        return res.status(200).json(admins)
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}
