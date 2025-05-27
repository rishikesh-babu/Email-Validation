const nodemailer = require('nodemailer')

async function testTransporter() {
    const testAccount = await nodemailer.createTestAccount()
    
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        // host: 'smtp.ethereal.email',
        // port: 587,
        auth: {
            // user: testAccount.user,
            // pass: testAccount.pass,
            user: 'rishikeshbabu2004@gmail.com', 
            pass: 'ohoh autd kgdv cfqq'
        }
    });

    return transporter
}

module.exports = {
    testTransporter
}