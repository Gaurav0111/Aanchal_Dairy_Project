import User from "../models/User-model.js";
import { StatusCodes } from "http-status-codes";
import {BadRequestError} from '../errors/index.js';


const register = async (req, res, next) => {
        const {name, password, email} = req.body
        if ( !name || !password || !email){
            throw new BadRequestError('please provide all the values')
        }
        const userAlreadyExists = await User.findOne({email});
        if (userAlreadyExists){
            throw new BadRequestError('Email Already In Use...')
        }
        const user = await User.create({ name, password, email });
        res.status(StatusCodes.OK).json({ user });
}

const login = async (req, res) => {
    res.send('Login User..');
}

const updateUser = async (req, res) => {
    res.send('Update User..');
}

export { register, login, updateUser };
