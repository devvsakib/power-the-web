const { userModel } = require("../model");
const userSchemaValidation = require("../validation/user.validation");
const common = require('../services/common.service');

const AuthController = {
    /**
    * @api { post } auth/sign-up Sign Up
    * @apiName Sign Up
    * @apiGroup auth
    * @apiBody  {String} username Username of the user
    * @apiBody  {String} email Email of the user
    * @apiBody  {String} password Password of the user
    * @apiSuccess {String} account User created Succesfully
    * @apiSuccess {String} session Session logged in database Succesfully
    */
    signUp: async (req, res) => {
        const { email } = req.body;
        let data = await userSchemaValidation.validateAsync(req.body);
        const user = await userModel.findOne({ where: { email } });
        if (user) throw new Error('User already does exist');
        data.password = await common.passwordEncrpt(data.password);
        data = await (await userModel.create(data)).toJSON();
        delete data.password;
        res.status(201).send({ success: true, message: 'User created Succesfully' });
    },

    /**
    * @api { post } auth/sign-in Sign In
    * @apiName Sign In
    * @apiGroup auth
    * @apiBody  {String} email Email of the user
    * @apiBody  {String} password Password of the user
    * @apiSuccess {String} login User Login Succesfully
    * @apiSuccess {String} session Session logged in database Succesfully
    * @apiError  UserNotFound The <code>email or password</code> of the User is not valid.
    */

    signIn: async (req, res) => {
        const { email, password } = req.body;
        const user = await userModel.findOne({ where: { email } });
        if (!user) throw new Error('User does not exist');
        const password_valid = await common.passwordValid(password, user.password);
        if (!password_valid) throw new Error('Incorrect Password');
        res.status(200).send({ email: user.email });
    },

    /**
    * @api { post } auth/sign-out Sign Out 
    * @apiName Sign Out 
    * @apiGroup auth
    * @apiSuccess {String} logout User logout Succesfully
    * @apiSuccess {String} session Session Deleted from database Succesfully
    * @apiError  UserNotFound User is not logged
    */

    signOut: async (req, res) => {
        res.status(200).send({ status: '200', message: 'logout successfully' });
    },


};

module.exports = AuthController;
