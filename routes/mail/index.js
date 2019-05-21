var express = require('express');

const mongoose = require('mongoose');
const request = require('request');

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

        request.post(api_url, {
            json: data
        }, (error, res, body) => {
            if (error) {
                console.error(error);
                return;
            }
            if (res.statusCode != 200) {
                console.error(body);
            }
        });
    })
}


/**
 * 
 * @param {ObjectID} user_id The MongoDB ObjectID of user
 * @param {JSONObject} ticketJSON The object contains ticket information, queried from DB
 * @param {JSONObject} ticketCount Integer contains number of tickets booked
 */
function sendBookingConfirm(user_id, tripJSON, ticketCount) {
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
            from_ticket: tripJSON.from_name,
            to_ticket: tripJSON.to_name,
            ticket_count: ticketCount
        }

        var http = new XMLHttpRequest();
        http.open('POST', api_url, true);

        request.post(api_url, {
            json: data
        }, (error, res, body) => {
            if (error) {
                console.error(error);
                return;
            }
            if (res.statusCode != 200) {
                console.error(body);
            }
        })
    })
}

module.exports = {
    sendNewAccountEmail: sendNewAccountEmail,
    sendBookingConfirm: sendBookingConfirm,
};