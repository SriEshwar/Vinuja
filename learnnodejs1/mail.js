const nodeMailer=require('nodemailer');
let transportmail=nodeMailer.createTransport({
    service:'gmail',
    auth:{
        user:'vinumsvk24@gmail.com',
        pass:'djuzizekvqepdxbw'

    }
});

let mailoption={
    from:'vinumsvk24@gmail.com',
    to:'feedyourbrain@gmail.com',
    subject:'Hello',
    text:'learn nodemailer concepts'
}

transportmail.sendMail(mailoption,(err,val)=>{
    if(err){
        console.log(err);
    }else{
        console.log("sent mail",val.messageId)
    }
})