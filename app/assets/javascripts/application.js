// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
// Loads all Semantic javascripts
//= require semantic-ui
const scrollDown = function () {
    const messagesElem = $('#messages')
    if (messagesElem.length > 0) {
        messagesElem.scrollTop(messagesElem[0].scrollHeight)
    }
}

const handleMessageSubmit = function () {
    $('#message_body').on('keydown', function (e) {
        if (e.keyCode == 13) {
            $('button').click()
            e.target.value = ""
        }
    })
}
$(document).on('turbolinks:load', function () {
    $('.ui.dropdown').dropdown();
    $('.message .close')
        .on('click', function () {
            $(this)
                .closest('.message')
                .transition('fade');
        });

    handleMessageSubmit()
    scrollDown()
})
