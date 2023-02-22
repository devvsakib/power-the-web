import { Button, Modal, ModalDialog, ModalContent } from "reacthalfmoon";

export default function DifficultyModal(props) {
	return (
		<Modal isOpen={props.difficultyModal} data-overlay-dismissal-disabled="true" data-esc-dismissal-disabled="true" >
			<ModalDialog>
				<ModalContent className="text-center">
					<h3>Select Difficulty</h3>
					<div className="d-flex justify-content-around mt-10 mt-md-20">
						<Button color="success" size="lg" onClick={ ()=>{ props.setDifficulty(20) } }>Easy</Button>
						<Button color="secondary" size="lg" onClick={ ()=>{ props.setDifficulty(30) } }>Medium</Button>
						<Button color="danger" size="lg" onClick={ ()=>{ props.setDifficulty(40) } }>Hard</Button>
					</div>
				</ModalContent>
			</ModalDialog>
		</Modal>
	)
}