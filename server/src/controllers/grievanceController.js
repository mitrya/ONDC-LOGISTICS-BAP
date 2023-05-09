const messageMailer = require('../mailers/messageMailer');

module.exports.sendGrievance = function(req,res) {
    console.log('Need to send grievance');
    if(!req.body.messageBody.name||!req.body.messageBody.email||!req.body.messageBody.content||!req.body.messageBody.queryType){
        return res.status(400).json({
            error:"All Fields are required"
        });
    }
    else{
        try{
            messageMailer.sendGrievance(req.body);
            messageMailer.sendConfirmation(req.body);
            return res.status(200).json({
                message:"Message delivered successfully"
            });
        }
        catch(err){
            if(err){
                return res.status(400).json({
                    error:"There was an error"
                });
            }
        }
    }
}