import AppComponent from './AppComponent'
import { useState, useEffect } from "react"
import { blink, checkMatrix } from 'sudoku-matrix'
import { useStopwatch } from 'react-timer-hook';

export default function App() {
	const [ difficultyModal, setdifficultyModal ] = useState(false)
	const [ resultModal, setResultModal ] = useState(false)
	const [ result, setResult ] = useState(false)
	const { seconds, minutes, start, pause, reset } = useStopwatch({ autoStart: false })
	const [ board, setBoard ] = useState(Array(9).fill(Array(9).fill('')))
	const [ empty, setEmpty ] = useState(Array(9).fill([]))
	const createGame = (emptyTiles) => {
		const sudoku = blink(emptyTiles)
		setBoard(sudoku)
		let _empty = []
		for(let i=0; i<9; ++i) {
			_empty.push([])
			for(let j=0; j<9; ++j) {
				if(sudoku[i][j] === '')
					_empty[i].push(j)
			}
		}
		setEmpty(_empty)
	}
	const newGame = () => {
		setResultModal(false)
		setdifficultyModal(true)
	}
	const checkGame = () => {
		pause()
		if(checkMatrix(board) === true) {
			setResult(minutes + ":" + seconds)
		}
		else {
			setResult(false)
		}
		setResultModal(true)
	}
	const resetGame = () => {
		let sudoku = [ ...board ]
		let _empty = [ ...empty ]
		for(let i=0; i<9; ++i) {
			_empty[i].forEach(j => sudoku[i][j] = '')
		}
		setBoard(sudoku)
	}
	const setDifficulty = (difficulty) => {
		createGame(difficulty)
		reset()
		start()
		setdifficultyModal(false)
	}
	const update =(e, row, col) => {
		let sudoku = [ ...board ]
		sudoku[row][col] = e.target.value
		setBoard(sudoku)
	}
	useEffect(newGame, [])
	return (
		<AppComponent
			board={board} checkGame={checkGame} empty={empty} result={result} resultModal={resultModal} difficultyModal={difficultyModal}
			newGame={newGame} update={update} resetGame={resetGame} setResultModal={setResultModal} setDifficulty={setDifficulty}
			seconds={seconds} minutes={minutes} start={start}
		/>
	)
}