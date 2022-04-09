// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM

let form = document.querySelector('#addForm');
let table = document.querySelector('#employees');

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER

let count = 0;
document.querySelector('#empCount').innerText = count;

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION

    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES

    let newId = document.querySelector('#id').value;
    let newName = document.querySelector('#name').value;
    let newExtension = document.querySelector('#extension').value;
    let newEmail = document.querySelector('#email').value;
    let newDepartment = document.querySelector('#department').value;

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE

    let row = table.insertRow();

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW

    let cellId = row.insertCell();
    let cellName = row.insertCell();
    let cellExtension = row.insertCell();
    let cellEmail = row.insertCell();
    let cellDepartment = row.insertCell();

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS

    cellId.appendChild(document.createTextNode(newId));
    cellName.appendChild(document.createTextNode(newName));
    cellExtension.appendChild(document.createTextNode(newExtension));
    cellEmail.appendChild(document.createTextNode(newEmail));
    cellDepartment.appendChild(document.createTextNode(newDepartment));

    // CREATE THE DELETE BUTTON

    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right';
    deleteBtn.appendChild(document.createTextNode('X'));

    let cellDelete = row.insertCell();
    cellDelete.appendChild(deleteBtn);

    // RESET THE FORM

    document.querySelector('#id').value = '';
    document.querySelector('#name').value = '';
    document.querySelector('#extension').value = '';
    document.querySelector('#email').value = '';
    document.querySelector('#department').value = '';

    // SET FOCUS BACK TO THE ID TEXT BOX

    document.querySelector('#id').focus();

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE

    count++;
    document.querySelector('#empCount').innerText = count;

});

// DELETE EMPLOYEE

table.addEventListener('click', (e) => {
    let targetRow = e.target.parentElement.tagName === 'TD' ? e.target.parentElement.parentElement : e.target.parentElement;
    let deleteName = targetRow.children[1].innerText;
    if (confirm(`Are you sure you want to delete ${deleteName}?`)) {
        table.deleteRow(targetRow.rowIndex);
        count--;
        document.querySelector('#empCount').innerText = count;
    }
});