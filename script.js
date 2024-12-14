document.addEventListener('DOMContentLoaded', function () {
    // Button event listener
    const button = document.getElementById('generate-button')
    button.addEventListener('click', (event) => {
        event.preventDefault()
        getFormValues()
        generateBoard()
    })
});

let formValues = {}

function getFormValues() {
    console.log('Getting form values...')
    const form = document.querySelector('form')
    const formData = new FormData(form)
    const values = {}
    for (let [key, value] of formData.entries()) {
        values[key] = value
    }
    formValues = {
        year: values.year,
        cellContent: [values.item1, values.item2, values.item3, values.item4, values.item5, values.item6, values.item7, values.item8, values.item9]
    }
}

function generateBoard() {
    console.log('Generating board...')
    const board = document.getElementById('bingo-board')
    board.innerHTML = '' // Clear previous board
    let index = 0;
    for (let i = 0; i < 3; i++) { // Create 3 rows
        const row = document.createElement('div')
        row.className = 'row'
        for (let j = 0; j < 3; j++) { // Create 3 cells per row
            const cell = document.createElement('div')
            cell.className = 'cell'
            cell.id = `cell-${index}`
            row.appendChild(cell)
            cell.innerHTML = formValues.cellContent[index]
            index++
        }
        board.appendChild(row)
    }
}