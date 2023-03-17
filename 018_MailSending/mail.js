var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'tankrakesh44@gmail.com',
        pass: 'utvpcyoygfiliepi'
    }
});

var msg = {
    from: 'tankrakesh44@gmail.com',
    to: 'tankrakesh44@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(msg, (err, success) => {
    if (err) {
        console.log(err);
        return
    }
    console.log(success);

})