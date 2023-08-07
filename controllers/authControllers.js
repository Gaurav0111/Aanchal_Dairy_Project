import User from "../models/User-model.js";

const register = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json({ user }); // Using res.status(201) and res.json()
    } catch (error) {
        res.status(500).json({ msg: 'There was an error while registering' });
    }
}

const login = async (req, res) => {
    res.send('Login User..');
}

const updateUser = async (req, res) => {
    res.send('Update User..');
}

export { register, login, updateUser };
