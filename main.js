const cells = document.querySelectorAll('.cell')
const setGameStatus = (message) => {
    document.querySelector('.status').innerText = message
}
let nextStep = 'X'
let isFinished = false
let winLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const checkWin = () => {
    const win = winLines.find(winLine => {
        const first = cells[winLine[0]].innerText
        const second = cells[winLine[1]].innerText
        const third = cells[winLine[2]].innerText
        if (first === second && second === third && third !== '') {
            return true
        } else {
            return false
        }
    })

    const winner = nextStep === 'X' ? 'O' : 'X'

    if (win) {
        isFinished = true
        setGameStatus('Game finished! ' + winner + ' is winner')
    }
}

const handleCell = (cell) => {
    if (cell.innerText === '' && !isFinished) {
        cell.innerText = nextStep === 'X' ? 'X' : 'O'
        nextStep = nextStep === 'X' ? 'O' : 'X'
        setGameStatus('Next move: ' + nextStep)
        checkWin()
    } else {
        alert(isFinished ? "O'yin tugadi!" : "bu yacheyka bo'sh emas")
    }
}

cells.forEach(cell => {
    cell.addEventListener('click', () => handleCell(cell))
});