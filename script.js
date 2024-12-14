document.addEventListener('DOMContentLoaded', function () {
    // Button event listener
    const button = document.getElementById('generate-button')
    button.addEventListener('click', (event) => {
        event.preventDefault()
        getFormValues()
        generateBoard()
    })
});

let year = ''
let items = []

function getFormValues() {
    console.log('Getting form values...')
    year = document.getElementById('year').value
    items = [
        document.getElementById('item1').value,
        document.getElementById('item2').value,
        document.getElementById('item3').value,
        document.getElementById('item4').value,
        document.getElementById('item5').value,
        document.getElementById('item6').value,
        document.getElementById('item7').value,
        document.getElementById('item8').value,
        document.getElementById('item9').value
    ]
}

function generateBoard() {
    console.log('Generating board...')

    const boardContainer = document.getElementById('board-container')
    boardContainer.innerHTML = '' // Clear previous content

    // Create and add h1 element
    const heading = document.createElement('h1')
    heading.textContent = `Crazy Bingo Board for ${year}`
    boardContainer.appendChild(heading)

    // Create and add board
    const board = document.createElement('div')
    board.id = 'bingo-board'
    boardContainer.appendChild(board)

    for (let i = 0; i < 3; i++) { // Create 3 rows
        const row = document.createElement('div')
        row.className = 'row'
        for (let j = 0; j < 3; j++) { // Create 3 cells per row
            const cell = document.createElement('div')
            cell.className = 'cell'
            cell.textContent = items[i * 3 + j] || `Cell ${i * 3 + j + 1}`
            row.appendChild(cell)
            cell.addEventListener('click', cellClicked)
        }
        board.appendChild(row)
    }
}

function cellClicked(event) {
    console.log('Cell clicked:', event.target.textContent)
    if (event.target.classList.contains('selected')) {
        event.target.classList.remove('selected')
        return
    } 
    event.target.classList.toggle('selected')
}