import { useEffect, useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { usePetsContext } from "../hooks/usePetsContext";



const Home = () => {
	const { pets, dispatch } = usePetsContext();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	const fetchPets = async () => {
		const response = await fetch(`${import.meta.env.VITE_BASE_API_URL}/api/v1/pets`);
		const result = await response.json();
		if (response.ok) {
			dispatch({ type: "SET_PETS", payload: result });
			setLoading(false);
		}
		if (!response.ok) {
			setError(result.message);
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchPets();
	}, []);

	const [currentImage, setCurrentImage] = useState(0);
	const [viewerIsOpen, setViewerIsOpen] = useState(false);

	const openLightBox = useCallback((event: any, { photo, index }: any) => {
		setCurrentImage(index);
		setViewerIsOpen(true);
	}, []);

	return (
		<>
			<div className="flex flex-col">
				<h4 className="text-4xl text-center my-2">Ours Lovely Pets</h4>
			</div>
			{loading && (
				<div className="flex justify-center content-center my-5">
					<progress className="progress progress-info w-56" />
				</div>
			)}
			{error && <h1 className="text-8xl text-center my-2">{error}</h1>}
			{pets && <Gallery photos={pets} onClick={openLightBox} />}
			{/* @ts-expect-error */}
			<ModalGateway>
				{viewerIsOpen ? (
					<Modal onClose={() => setViewerIsOpen(false)}>
						<Carousel
							currentIndex={currentImage}
							views={pets.map((photo: any) => ({
								...photo,
								srcset: photo.srcSet,
								caption: photo.name,
							}))}
							styles={{
								container: (base) => ({
									...base,
									boxShadow:
										"0 1px 10px -1px rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.04), 0 1px 0 rgba(0,0,0,0.04)",
									padding: "20px",
									justifySelf: "center",
									alignSelf: "center",
								}),
							}}
						/>
					</Modal>
				) : null}
			</ModalGateway>
		</>
	);
};

export default Home;
