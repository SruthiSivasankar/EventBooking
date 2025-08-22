const jwt = require("jsonwebtoken");

const blacklistedTokens = new Set();

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  if (blacklistedTokens.has(token)) {
    return res.status(401).json({ message: "Token is blacklisted. Please log in again." });
  }

  jwt.verify(token, "secret_key", (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    req.user = user; 
    next();
  });
}

function blacklistToken(token) {
  blacklistedTokens.add(token);
}

module.exports = { authenticateToken, blacklistToken };
