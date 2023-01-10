import * as readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'
import { hashPassword, verifyPassword } from "./users/password"
import User from "./users/models/user"

const rl = readline.createInterface({ input, output })

const start = async () => {
const email = await rl.question('Email:')
const password = await rl.question('Password:')

rl.close()

function createUser(email, password) {
    const user = new User(
      {email: email, password: password}
    )
    if (!user) {
      console.log('Error')
    }
    user.save().then(
      () => {
        console.log(
          {
            success: true,
            id: user._id,
            message: 'Signup completed',
          }
        )
      }
    ).catch(
      error => {
              console.log(error)
          }
      )
  }

createUser(email, password)
}

start()
