const jwt = require('jsonwebtoken');
module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[12];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userData = { userId: decoded.userId };
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Authentication failed' });
  }
};
