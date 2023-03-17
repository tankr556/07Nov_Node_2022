const jwt = require("jsonwebtoken")

const auth = async (req, resp, next) => {
    const token = req.header("auth-token")
    try {
        const userdata = await jwt.verify(token, "thisismytokenverificatinkey")
        req.uid = userdata._id;
        next();
    } catch (error) {
        resp.send("Invalid credentials")
    }
}

module.exports = auth;