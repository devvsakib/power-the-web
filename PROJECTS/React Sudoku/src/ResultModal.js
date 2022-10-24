import { Button, Modal, ModalDialog, ModalContent } from "reacthalfmoon";

export default function ResultModal(props) {
	return (
		<Modal isOpen={props.resultModal} data-overlay-dismissal-disabled="true" data-esc-dismissal-disabled="true" >
			<ModalDialog>
				<ModalContent className="text-center">
					{props.result ? 
						<div>
							<h4 className="text-success">You Solved it in {props.result} !</h4>
							<Button color="primary" size="lg" onClick={props.newGame}>New Game</Button>
						</div> :
						<div>
							<h4 className="text-danger">Not Solved It Yet!</h4>
							<Button color="primary" size="lg" onClick={ () =>
								{
									props.setResultModal(false)
									props.start()
								}
							}>Keep trying</Button>
						</div>
					}
				</ModalContent>
			</ModalDialog>
		</Modal>
	)
}