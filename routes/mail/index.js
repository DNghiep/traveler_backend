var express = require('express');

const mongoose = require('mongoose');
const userSchema = require('../../model/user.model');

const userModel = mongoose.model('user', userSchema);

const api_url = 'https://api.emailjs.com/api/v1.0/email/send'

function formDataTemplate(user_name, email) {
    return {
        service_id: 'gmail',
        user_id: "user_vOy4AVcb1VotHDiSgwFTE",
        template_id: null,
        template_params: null
    }
}

/**
 * 
 * @param {ObjectID} user_id The MongoDB ObjectID of user
 */
function sendNewAccountEmail(user_id) {
    const template_id = "account_validation_template";

    userModel.findById(user_id, (err, user) => {
        if (err) {
            console.error(err);
            return;
        }

        var data = formDataTemplate();
        data.template_id = template_id;
        data.template_params = {
            user_name: user.user_name,
            user_email: user.email
        }

        var http = new XMLHttpRequest();
        http.open('POST', url, true);

        http.setRequestHeader('Content-Type', 'application/json')
        http.onreadystatechange = function (event) {
            if (http.readyState == 4 && http.status != 200) {
                console.error(http.statusText);
            }
        }
        http.send(JSON.stringify(data))
    })
}


/**
 * 
 * @param {ObjectID} user_id The MongoDB ObjectID of user
 * @param {JSONObject} ticketJSON The object contains ticket information, queried from DB
 */
function sendBookingConfirm(user_id, ticketJSON) {
    const template_id = "booking_template";

    userModel.findById(user_id, (err, user) => {
        if (err) {
            console.error(err);
            return;
        }

        var data = formDataTemplate();
        data.template_id = template_id;
        data.template_params = {
            user_name: user.user_name,
            user_email: user.email,
            from_ticket: ticketJSON.from_str,
            to_ticket: ticketJSON.to_str
        }

        var http = new XMLHttpRequest();
        http.open('POST', url, true);

        http.setRequestHeader('Content-Type', 'application/json')
        http.onreadystatechange = function (event) {
            if (http.readyState == 4 && http.status != 200) {
                console.error(http.statusText);
            }
        }
        http.send(JSON.stringify(data))
    })
}