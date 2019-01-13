
$(function(){
//     $(function(){
//     $.getJSON('api', updateFeedback);
//     console.log('hello world');
// });
    

$.getJSON('/api', updateFeedback);

    $('#form-feedback').submit(function(e){
        e.preventDefault();

        $.post('/api', {
            name: $('#form-name').val(),
            email: $('#form-email').val(),
            phoneNumber: $('#form-number').val(),
            comments: $('#form-comments').val()
        }, updateFeedback);

        alert('form data changed');
    });


    $('#feedback').on('click', function(e) {
        if (e.target.className == 'remove-button'){
            $.ajax({
            url: 'api/' + e.target.id,
            type: 'DELETE',
            success: updateFeedback
          }); //ajax
        } // the target is a delete button
    });



    function updateFeedback(data){
        var output = '';
        $.each(data,function(key,item){

            output += ' <div id = "main div">';
            output += ' <div id = "button_header">';
            output += ' <button class = "remove-button">' + key + '</button>';
            output += ' <div id = "content">' + item.name + item.email + item.phoneNumber + item.comments;
            output += ' </div>';
            output += ' </div>';
            output += ' </div>';



            // output += '     <div class="feedback-item item-list media-list">';
            // output += '       <div class="feedback-item media">';
            // output += '       <div class="media-left"><button><span id="' + key + '" class="glyphicon glyphicon-remove"></span></button></div>';
            // output += '         <div class="feedback-info media-body">';
            // output += '           <div class="feedback-head">';
            // output += '             <div class="feedback-title">' + item.name + ' <small class="feedback-name label label-info">' + item.name + '</small></div>';
            // output += '           </div>';
            // output += '           <div class="feedback-message">' + item.email + item.phoneNumber + item.comments + '</div>';
            // output += '         </div>';
            // output += '       </div>';
            // output += '     </div>';
          });

            // output += '<button><span id="delete-button' + key + '></span></button>';
            // output += ' <div id = "feedback-new">' + item.name + item.email + item.phoneNumber + item.comments +'</div>';
            // output += '<button><span id="delete-button' + key + '></span></button>';




        $('#feedback').html(output);
    }
});






