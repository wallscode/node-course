console.log('Loading function');

var aws = require('aws-sdk');
//var fs = require('fs');
var s3 = new aws.S3();
var bucket = 'digital-messaging-dev';
var key = 'qa/rounkubppteukv5kdcc668a31rno0euhveg34301';
var toEmail = 'stnovotest@capitalone-ite.com';
var textBeforeOTP = 'Use this code ';
var lengthOTP = 6;

exports.handler = function(event, context) {
    var params = {
        Bucket: bucket,
        Key: key
    };
    s3.getObject(params, function(err, data) {
        if (err) {
            console.log(err);
            var message = "Error getting object " + key + " from bucket " + bucket +
                ". Make sure they exist and your bucket is in the same region as this function.";
            console.log(message);
            context.fail(message);
        } else {
            console.log(params);
            console.log('CONTENT TYPE getObject:', data.ContentType);
            var emailBody = data.Body.toString('ascii');
            var toEmailString = 'To: \"' + toEmail + '\"';
            if(emailBody.indexOf(toEmailString) > -1) {
                //context.succeed(data.Body.toString('ascii'));
                var posStartOTP = emailBody.search(textBeforeOTP) + textBeforeOTP.length;
                console.log(emailBody.substring(posStartOTP, posStartOTP+lengthOTP));
                context.succeed(emailBody.substring(posStartOTP, posStartOTP+lengthOTP));
            } else {
                console.log('not found');
            }
        }
    });
};