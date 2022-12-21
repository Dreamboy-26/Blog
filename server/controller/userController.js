import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import USER from '../model/user.js';


export const loginUser =  (req, res) => {
    const { email, password } = req.body
  
    if (!email || !password) {
      return res.status(422).json({ error: 'please add email and apassword' })
    }
  
    USER.findOne({ email: email }).then((savedUser) => {
      if (!savedUser) {
        return res.status(422).json({ error: 'error' })
      }
      bcrypt
        .compare(password, savedUser.password)
        .then((match) => {
          if (match) {
          
            const token = jwt.sign({ _id: savedUser.id }, "SECRET")
          const {_id,name,email,userName}=savedUser
            res.json({token,user:_id,name,email,userName})
            
          } else {
            res.status(422).json({ error: 'error password' })
          }
        })
        .catch((err) => {
          return res.status(422).json({ error: 'error' })
        })
    })
  }
  
  export const singupUser =  (req, res) => {
    const { name, userName, email, password } = req.body
  
    if (!name || !userName || !email || !password) {
      res.status(422).json({ error: 'please fill all the fields' })
    }
  
    USER.findOne({ $or: [{ email: email }, { userName: userName }] }).then(
      (exist) => {
        if (exist) {
          res.status(422).json({ error: 'user already exist' })
        } else {
          bcrypt.hash(password, 10).then((hasedPassword) => {
            const user = new USER({ ...req.body, password: hasedPassword })
            user
              .save()
              .then((user) => {
                res.json({
                  message: 'user saved',
                })
              })
              .catch((err) => {
                console.log(err)
              })
          })
        }
      },
    )
  }
  
  
