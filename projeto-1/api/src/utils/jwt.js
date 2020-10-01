const jwt = require('jsonwebtoken');

const generateToken = (email, name) => {
  try {
    const token = jwt.sign({ name, email }, secretKey, { expiresIn: 3000 });
    return token;
  } catch (error) {
    
  }
}

const getToken = (req) => {
  if (req.headers.authorization) {
    return req.headers.authorization.split(' ')[1];
  }
  return undefined;
};

const verifyJWT = (req, res, next) => {
  const token = getToken(req);
  if (!token) return res.status(401).json({ auth: false, message: 'Token was not provided' });

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) return res.status(500).json(new AuthenticationError(err.message, 401));
    console.log(decoded);
    // req.decoded = decoded;
    next();
  });
};