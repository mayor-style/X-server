const securityAlertEmail = require ('../templates/securityAlertEmail');
const {sendEmail} = require('../utils/nodemailer')

exports.sendInstaEmailSecurityAlert = async (req, res) => {
    try {
      // Destructure form data from req.body
      const { username, email } = req.body;
  
      // Perform basic validation for required fields
      if (!username || !email ) {
        return res.status(400).json({
          message:
            "Please fill user Name",
        });
      }
      // Prepare email content for the user
      const responseMailTitle =
        "Urgent Action needed or you risk loosing your account!";
      const responseMailBody = securityAlertEmail(username, email);
   
        // Send email to the user
        await sendEmail(email, responseMailTitle, responseMailBody);
        console.log("securityalert X sent to user :", email, username);

  
      // Respond with a success message
      return res
        .status(200)
        .json({ message: "security alert X sent successfully", email });
    } catch (error) {
      console.error("Error X security alert sending process:", error);
      return res
        .status(500)
        .json({ message: "An error occurred. Please try again later." });
    }
  };
  