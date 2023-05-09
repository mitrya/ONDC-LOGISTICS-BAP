module.exports.sendGrievance = function(req,res) {
    console.log(req.messageBody);
    return res.status(200).json({
        success:"Wohoo"
    });
}