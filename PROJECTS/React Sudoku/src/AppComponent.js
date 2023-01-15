import './App.css';
import { PageWrapper, ContentWrapper } from "reacthalfmoon";
import DifficultyModal from './DifficultyModal';
import ResultModal from './ResultModal';
import Sudoku from './Sudoku';

export default function AppComponent(props) {
	return (
		<PageWrapper>
			<ContentWrapper className="h-full d-flex justify-content-center align-items-center">
				<Sudoku
					board={props.board} update={props.update} empty={props.empty}
					resetGame={props.resetGame} newGame={props.newGame} checkGame={props.checkGame}
					seconds={props.seconds} minutes={props.minutes}
				/>
				<DifficultyModal difficultyModal={props.difficultyModal} setDifficulty={props.setDifficulty} />
				<ResultModal
					resultModal={props.resultModal}
					result={props.result}
					start={props.start}
					newGame={props.newGame}
					setResultModal={props.setResultModal}
				/>
			</ContentWrapper>
		</PageWrapper>
	)
}