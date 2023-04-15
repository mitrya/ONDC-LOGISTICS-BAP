const queue = require('../config/kue');

const messageMailer = require('../mailers/messageMailer');

queue.process('messageAdmin',function(job,done){
    console.log('message email worker is processing a job',job.data);

    messageMailer.sendMessage(job.data);
    messageMailer.sendConfirmation(job.data);
    done();
 });