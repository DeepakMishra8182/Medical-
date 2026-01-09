export const generateToken = (user, message, statusCode, res) => {
  const token = user.generateJsonWebToken();

  // cookie name based on role
  const cookieName =
    user.role === "Admin"
      ? "adminToken"
      : user.role === "Patient"
      ? "patientToken"
      : "doctorToken";

  res
    .status(statusCode)
    .cookie(cookieName, token, {
      httpOnly: true,
      secure: true,        
      sameSite: "None",    
      expires: new Date(
        Date.now() +
          Number(process.env.COOKIE_EXPIRE) * 24 * 60 * 60 * 1000
      ),
    })
    .json({
      success: true,
      message,
      user,
      token,
    });
};
