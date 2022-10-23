import Tile from "./Tile";

export default function Row(props) {
	return (
		<tr>{ Array.from({length: 7}, (v, i) => 
			<Tile key={i} board={props.board} value={props.row*7 + i} handleClick={props.handleClick} handleMouseEnter={props.handleMouseEnter} handleMouseLeave={props.handleMouseLeave} />
		) }</tr>
	)
}