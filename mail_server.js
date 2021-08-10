const nodemailer = require('nodemailer');
const receiver = "receiver@gmail.com";
const transporter = nodemailer.createTransport({
  service:'gmail',
  auth:{
    user:'****@gmail.com',
    pass:'*******'
  }
});

const mailoptions = {
  from : '****@gmail.com',
  to : receiver,
  subject:'mail from nodemailer',
  text:'Welcome to Nodemailer'
};

transporter.sendMail(mailoptions,(err,info)=>{
  if (err) console.log(err);
  else{
    console.log("mail sent to : "+info.response);
  }
});
