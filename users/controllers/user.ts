import User from "../models/user"
import { hashPassword, verifyPassword } from "../password"
import jwt from "jsonwebtoken"
import {SECRET} from "../../index"


const signUp = (req, res) => {
	const body = req.body

	function createUser( body ) {
		const user = new User(body)
		if (!user) {
			return res.status(400)
		}
		user.save().then(
			() => {
				return res.status(201).json(
					{
		                success: true,
		                id: user._id,
		                message: 'Signup completed',
	            	}
	            )
			}
		).catch(
			error => {
	            return res.status(400).json({error})
	        }
	    )
	}

	hashPassword(body.password).then( hash => {
			body.password = hash
			createUser(body)
		}
	)
}

const login = (req, res) => {
	const body = req.body
	
	const user = User.findOne(
		{'username': body['email']},
		function(err, user) {
			if (!err) {
				verifyPassword(body.password, user.password, (err, isValid) => {
					if (isValid) {
						const token = jwt.sign(user.email, SECRET)
						return res.status(200).json(token)
					}
					return res.status(400).json(err)
				})
			}
		}
	)
}

const test = (req, res) => {
	console.log(req.body)
	return res.status(200).json({})
}

export {
    signUp,
    login,
    test
}