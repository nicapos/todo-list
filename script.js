$(document).ready(function(){

    function deleteTask(e) { // where e = delete button
        e.parent().remove();
    }

    function editTask(e) { // where e = edit button
        var taskHolder = e.parent().find('span');
        
        let newVal = prompt('Edit task', taskHolder.text());
        taskHolder.text(newVal);
    }

    function addTask() {
        let task = $('#new-task').val();

        // Create element for new task
        var elemTask = $('<li></li>');
        var taskHolder = $('<span></span>');
        var editBtn = $('<button></button>');
        var deleteBtn = $('<button></button>');

        taskHolder.text(task);

        editBtn.text('Edit');
        editBtn.click(() => {editTask(editBtn)});

        deleteBtn.text('Delete');
        deleteBtn.click(() => {deleteTask(deleteBtn)});

        elemTask.append(taskHolder);
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