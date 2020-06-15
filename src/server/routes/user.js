const UserModel = require('../models/user')

exports.userRegister = async (req, res) => {
  console.log('req.bidy --- ', req.body)
  let existingUser = await UserModel.findOne({
    'emailId': req.body.emailId
  })
  if (!existingUser) {
    var salt = await bcrypt.genSaltSync(10);
    var password = await bcrypt.hashSync(req.body.password, salt)
    console.log('password --- ', password)
    if (password) {
      let chatUser = {
        userName: req.body.userName,
        emailId: req.body.emailId,
        password: password
      }
      let user = new UserModel(chatUser)
      user.save(async (err, data) => {
        if (err)
          sendErrorResponse(res, err)
        else {
          sendSuccessResponse(res, {
            "message": "new user added successfully"
          })
        }
      })
    }
  } else {
    sendErrorResponse(res, {
      message: "User already existing"
    })
  }

}

exports.userLogin = async (req, res) => {
  if (req.body.emailId && req.body.password) {
    let user = await UserModel.findOne({
      emailId: req.body.emailId
    })
    if (user) {
      let checkPassword = await bcrypt.compareSync(req.body.password, user.password);
      if (checkPassword === true) {
        const token = await getToken(user)
        sendSuccessResponse(res, {
          email: user.emailId,
          token: token
        })
      } else {
        sendErrorResponse(res, {
          "message": "wrong password"
        }, 400)
      }
    } else {
      sendErrorResponse(res, {
        "message": "User not found"
      }, 400)
    }
  } else {
    sendErrorResponse(res, {
      "message": "Please give email/password"
    }, 400)
  }
}
