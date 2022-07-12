$(document).ready(function(){

    function addTask() {
        var task = $('#new-task').val();

        // Create element for new task
        var elemTask = $('<li></li>').text(task);
        var editBtn = $('<button></button>').text('Edit');
        var deleteBtn = $('<button></button>').text('Delete');

        elemTask.append(editBtn);
        elemTask.append(deleteBtn);

        $('ul').append(elemTask);

        // Reset field
        $('#new-task').val('');
    }

    $('#new-task').keypress(function (e) { 
        if (e.which == 13) // on press Enter
            addTask();
    });

});