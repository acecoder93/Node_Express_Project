
$(function(){

    $.getJSON('api', updateFeedback);
    

    $('#form-feedback').submit(function(e){
        e.preventDefault();
        console.log('in the feedback.js')

        $.post('api', {
            name: $('#form-name').val(),
            email: $('#form-email').val(),
            phoneNumber: $('#form-number').val(),
            comments: $('#form-comments').val()
        }, updateFeedback);

        alert('form data changed');
    })

    function updateFeedback(data){
        var output = '';
        $.each(data,function(key,item){
            output += ' <div id = "feedback-key">' + key +'</div>';
            output += ' <div id = "feedback-new">' + item.name + item.email + item.phoneNumber + item.comments +'</div>';
        })

        $('#feedback').html(output);
    }
})
