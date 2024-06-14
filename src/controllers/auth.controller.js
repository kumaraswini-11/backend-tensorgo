import { OAuth2Client } from "google-auth-library";
import { config } from "../config/config.js";
import User from "../models/user.model.js";

const oAuth2Client = new OAuth2Client(
  config.googleClientID,
  config.googleClientSecret,
  "postmessage"
);

const cookieOptions = {
  httpOnly: true,
  secure: true,
  sameSite: "strict",
};

export const handleGoogleLogin = async (req, res) => {
  try {
    const { code } = req.body;
    const { tokens } = await oAuth2Client.getToken(code);

    const ticket = await oAuth2Client.verifyIdToken({
      idToken: tokens.id_token,
      audience: config.googleClientID,
    });

    const payload = ticket.getPayload();
    const { email, name, picture } = payload;

    let user = await User.findOne({ email });
    if (!user) {
      // Create a new user if one doesn't exist
      user = await User.create({
        email,
        name,
        picture,
        refreshToken: tokens.refresh_token,
      });
    } else {
      // Update existing user's refresh token
      user.refreshToken = tokens.refresh_token;
      await user.save();
    }

    return res
      .status(201)
      .cookie("accessToken", tokens.access_token, cookieOptions)
      .cookie("idToken", tokens.id_token, cookieOptions)
      .json({
        message: "Login successful",
        data: { userId: user._id, email, name, picture },
      });
  } catch (error) {
    console.error("Error handling Google login:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// export const handleRefreshToken = async (req, res) => {
//   try {
//     const { email } = req.body;

//     // Retrieve refresh token from your database
//     const storedRefreshToken = await getRefreshTokenFromDatabase(email);

//     if (!storedRefreshToken) {
//       return res.status(401).json({ error: "Refresh token not found" });
//     }

//     oAuth2Client.setCredentials({ refresh_token: storedRefreshToken });
//     const { credentials } = await oAuth2Client.refreshAccessToken();

//     return res
//       .status(200)
//       .cookie("accessToken", credentials.access_token, cookieOptions)
//       .cookie("idToken", credentials.id_token, cookieOptions)
//       .json({
//         message: "Token refreshed successfully",
//       });
//   } catch (error) {
//     console.error("Error refreshing token:", error);
//     return res.status(500).json({ error: "Internal Server Error" });
//   }
// };
