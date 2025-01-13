import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
  try {
    const { token } = req.headers;
    if (!token) {
      return res.json({ success: false, message: "Access denied" });
    }
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    if (token_decode !== process.env.ADMIN_Email + process.env.ADMIN_Password) {
      return res.json({ success: false, message: "Access denied" });
    }
    next();
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};
export default adminAuth;