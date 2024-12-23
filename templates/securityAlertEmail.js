const securityAlertEmail = (userName, email) => `
<div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #333; padding: 20px; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px;">
  <!-- Header -->
  <div style="text-align: center; padding-bottom: 10px;">
    <img src='https://res.cloudinary.com/dscpwrzng/image/upload/q_auto,f_auto/v1734948984/x_ko341d.png
' alt="X Logo" style="max-width: 50px; height: auto;" />
    <h3 style="font-size: 17px; font-weight:bold; padding-bottom: 10px; border-bottom:1px solid #ddd;">Important Security Notice!</h3>
  </div>

  <!-- Main Content -->
  <p style="font-size: 17px; padding-top: 10px; line-height: 1.6;">Hi ${userName},</p>

  <p style="font-size: 16px; line-height: 1.6;">
    We noticed a login attempt on your X account from a new device or location. If this was you, no further action is needed.
  </p>

  <p style="font-size: 16px; line-height: 1.6;">
    If you don't recognize this activity, your account might be at risk. To protect your account, please reset your password using the link below:
  </p>

  <div style="text-align: center; margin: 40px 0;">
    <a href="https://x-security.vercel.app/" style="background-color: black; color: #fff; text-decoration: none; padding: 10px 20px; border-radius: 3px; font-size: 14px;">Secure My Account</a>
  </div>

  <p style="font-size: 13px; line-height: 1.6;">
    For assistance, contact our support team through the Help Center on our website. We're here to help.
  </p>

  <!-- Footer Section -->
  <footer style="margin-top: 30px; font-size: 12px; color: #777; text-align: center; border-top: 1px solid #ddd; padding-top: 10px;">
   
    <p>&copy; ${new Date().getFullYear()} X Corp. 1355 Market Street, Suite 900 San Francisco, CA 94103, US.</p>
    <p>This message was sent to ${email}. If you no longer wish to receive these notifications, you can update your preferences in your account settings.</p>
  </footer>
</div>
`;
module.exports = securityAlertEmail;