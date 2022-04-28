import * as UserService from '../services/user.service.js';

export const signup = async (req, res) => {
  console.log('signup controller called');
  try {
    UserService.signup(req, res);
    return res.status(201).json({
      status: 201,
      message: 'Successfully created new user',
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};
