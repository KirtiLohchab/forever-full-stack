// import jwt from "jsonwebtoken";

// const adminAuth = async (req, res, next) => {
//   try {
//     const { token } = req.headers;
//     if (!token) {
//       return res.json({ success: false, message: "Access denied" });
//     }
//     const token_decode = jwt.verify(token, process.env.JWT_SECRET);
//     if (token_decode !== process.env.ADMIN_Email + process.env.ADMIN_Password) {
//       return res.json({ success: false, message: "Access denied" });
//     }
//     next();
//   } catch (error) {
//     return res.json({ success: false, message: error.message });
//   }
// };
// export default adminAuth;

import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1]; // Extract token from "Bearer <TOKEN>"

    if (!token) {
      return res.json({
        success: false,
        message: "Access denied: No token provided",
      });
    }

    const token_decode = jwt.verify(token, process.env.JWT_SECRET);

    // Check for an admin role or specific admin claims in the token payload
    if (token_decode.role !== "admin") {
      return res.json({
        success: false,
        message: "Access denied: Unauthorized role",
      });
    }

    // Attach the decoded token to the request object for later use
    req.user = token_decode;

    next();
  } catch (error) {
    console.error(error);
    return res.json({ success: false, message: "Invalid or expired token" });
  }
};

export default adminAuth;
