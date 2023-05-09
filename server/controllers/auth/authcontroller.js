import User from '../../models/users/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
export const register = async (req, res) => {
    const { firstName, lastName, email, username, mobile, password, role } = req.body;
    if (!firstName || !lastName || !username || !email || !password || !mobile || !role)
        return res.status(400).json({ message: "all fiels are mandatory" });
    //check if userexists(or)Not.
    const existinguser = await User.findOne({ email });
    if (existinguser)
        return res.status(400).json({ message: 'user already exists' });
    try {
        const hashedpwd = await bcrypt.hash(password, 12)

        const result = await User.create({
            firstName,
            lastName,
            username,
            email,
            mobile,
            role,
            password: hashedpwd
});
        console.log(result);
        res.status(201).json({ 'success': `${username} successfully registered` });
    } catch (error) {
        res.status(500).json
            ({ message: error.message });
    }
}
