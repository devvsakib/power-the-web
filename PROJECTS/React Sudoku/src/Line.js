import { Input, Row, Col } from "reacthalfmoon";

export default function Line(props) {
	return (
		<div>
			<Row className="h-50 w-350 w-md-450">
				{[0, 1, 2, 3, 4, 5, 6, 7, 8].map(col =>
					{
						const empty = props.empty[props.row].includes(col)
						const colClassName = "p-5 border " +
						( Math.floor(col % 3) === 0 ? "border-left " : "" ) +
						( col === 8 ? "border-right " : "" ) +
						( Math.floor(props.row % 3) === 0 ? "border-top" : "" ) +
						( props.row === 8 ? "border-bottom": "" )
						const className = "h-full text-center border-0 font-size-18 font-weight-bold " +
							(empty ? "text-user " : "text-readonly " ) +
							( (Math.floor(props.row / 3) + Math.floor(col / 3)) % 2 === 0 ? "bg-light-input" : "bg-input" )
						return (<Col key={col} className={colClassName}>
							<Input
								value={props.data[col]}
								{...(empty ? {onChange: (e) => props.update(e, props.row, col)} : {readOnly: true} )}
								className={className}
								min="1"
								max="9"
								type="number"
							></Input>
						</Col>)
					})
				}
			</Row>
		</div>
	)
}