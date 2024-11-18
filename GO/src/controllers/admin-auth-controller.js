




const loginAttempt = async (req, res) => {
  res.send('login failed. please try again');
}

const callbackSuccessURI = async (req, res) => {
    // Successful login
    res.redirect('/auth/profile');
  
};


  
const verifyProfile = async (req, res) => {
  if (req.isAuthenticated()) {
    res.json({ message: 'You are authenticated!', user: req.user });
  } else {
    res.redirect('/login');
  }
}

module.exports = {
  loginAttempt,
  callbackSuccessURI,
  verifyProfile
};