const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {

    const token = req.header("Authorization");

    if (!token) {
        return res.status(401).json({
            message: "Access Denied"
        });
    }

    try {

        const actualToken = token.replace("Bearer ", "");

        const verified = jwt.verify(
            actualToken,
            process.env.JWT_SECRET
        );

        req.user = verified;

        next();

    } catch (err) {

        res.status(401).json({
            message: "Invalid Token"
        });

    }

};