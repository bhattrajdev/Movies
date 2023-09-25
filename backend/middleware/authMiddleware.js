// import jwt from "jsonwebtoken";
// import User from "../models/userModel.js";

// const protect = async (req, res, next) => {
//   console.log(req.headers);

//   try {
//     let token;

//     if (
//       req.headers.authorization &&
//       req.headers.authorization.startsWith("Bearer")
//     ) {
//       token = req.headers.authorization.split(" ")[1];
//       console.log(`Received token: ${token}`);

//       // Verify the token
//       const decoded = jwt.verify(token, process.env.JWT_SECRET_CODE);

//       console.log(`Decoded data:`, decoded);

//       // Fetch the user based on the decoded ID and exclude the password field
//       req.user = await User.findById(decoded.id).select("-password");

//       console.log(`User found:`, req.user);

//       next(); // Continue to the next middleware or route handler
//     } else {
//       res.status(401);
//       throw new Error("Not authorized, no token");
//     }
//   } catch (error) {
//     console.error("JWT Verification Error:", error);
//     res.status(401);
//     throw new Error("Not authorized, token failed");
//   }
// };

// export { protect };
