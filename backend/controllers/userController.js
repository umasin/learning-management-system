import User from "../models/userModel.js";
export const register = async (req, res) => {
    const { email, name, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }
        const newUser = await User.create({
            email,
            password,
            name
  });
        return res.status(201).json({ message: "user account created", newUser });
    } catch (error) {
return res.status(501).json({message:"server error"});
 }}
export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "user do not exist" });
        }
        if (user.password !== password) {
            return res.status(401).json({message:"invalid password"});
        }
        return res.status(201).json({ message: "User login", user });
    }
     catch (error) {
return res.status(501).json({message:"server error"});
    }
}