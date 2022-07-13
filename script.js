$(document).ready(function(){

    function deleteTask(e) { // where e = delete button
        e.parent().remove();
    }

    function editTask(e) {  // where e = edit button
        var taskHolder = e.parent().find('span');
        
        let newVal = prompt('Edit task', taskHolder.text());
        if (newVal)
            taskHolder.text(newVal);
    }

    function addTask(task) {
        /*
            TEMPLATE:
            <li>
                <button class="far fa-square"><i class="fa fa-check"></i></button>
                <span>{{ task }}</span>
                <button class="fa fa-pen"></button>
                <button class="fa fa-trash"></button>
            </li>
        */

        var elemTask = $('<li></li>');

        // Add checkbox
        elemTask.append(
            $('<button></button>')
            .append(
                $('<i></i>')
                .addClass('fa fa-check')
            )
            .addClass('far fa-square')
        );

        // Add task label
        elemTask.append(
            $('<span></span>').text(task)
        );

        // Add edit button
        let editBtn = $('<button></button>');
        elemTask.append(
            editBtn
            .addClass('fa fa-pen')
            .click(() => {editTask(editBtn)})
        );

        // Add delete button
        let deleteBtn = $('<button></button>');
        elemTask.append(
            deleteBtn
            .addClass('fa fa-trash')
            .click(() => {deleteTask(deleteBtn)})
        );
        
        $('ul').append(elemTask);   // Add all elements to list
        $('#new-task').val('');     // Reset field
    }

    $('#new-task').keypress(function (e) { 
        if (e.which == 13) {    // on press Enter
            let task = $('#new-task').val();
            addTask(task);
        }
    });

    /* 
        From here,
        setup elements for demo only
    */
    addTask('Read a book');
    addTask('Buy groceries');
    addTask('Attend meeting at 4pm');

    // Demo checked item for the last item
    $('li:last-child > button:first-child').addClass('checked');

});