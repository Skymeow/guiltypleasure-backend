let AuthService = {};

AuthService.restrict = (req, res, next) => {
  if(req.headers['authorization']) {
    const payload = jwt.verify(req.headers['authorization'],'taco cat');
    if (payload) {
      req.user = payload;
      next();
    } else {
      res
       .status(401)
       .json({error: 'Token is not valid'});
    }
  } else {
    res
     .status(401)
     .json({error: 'Please provide an authenticated token'})
  }
}

module.exports = AuthService;
