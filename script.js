$(document).ready(function(){

    function deleteTask(e) {
        e.parent().remove();
    }

    function addTask() {
        var task = $('#new-task').val();

        // Create element for new task
        var elemTask = $('<li></li>').text(task);
        var editBtn = $('<button></button>');
        var deleteBtn = $('<button></button>');

        editBtn.text('Edit');

        deleteBtn.text('Delete');
        deleteBtn.click(() => {deleteTask(deleteBtn)});

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