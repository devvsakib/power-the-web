import { Card, CardTitle, Button } from "reacthalfmoon";
import Line from "./Line";

export default function Sudoku(props) {
	return (
		<Card style={{ width: "max-content" }} className="text-center p-10 p-md-20">
			<CardTitle>
				<h1 className="elegantshadow float-left ml-5">SUDOKU</h1>
				<h1 className="elegantshadow float-right">
					<span>{props.minutes < 10 ? "0" + props.minutes : props.minutes}</span>:
					<span>{props.seconds < 10 ? "0" + props.seconds : props.seconds}</span>
				</h1>
			</CardTitle>
			{[0, 1, 2, 3, 4, 5, 6, 7, 8].map(value => 
			<Line key={value} data={props.board[value]} row={value} update={props.update} empty={props.empty} />)}
			<div className="d-flex justify-content-around mt-10 mt-md-20">
				<Button color="secondary" size="lg" onClick={props.resetGame}>Reset</Button>
				<Button color="danger" size="lg" onClick={props.newGame}>New game</Button>
				<Button color="success" size="lg" onClick={props.checkGame}>Check</Button>
			</div>
		</Card>
	)
}