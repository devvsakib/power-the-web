import { Provider } from 'react-redux';
import store from '../../store/store';
import Home from './Home';
import Navbar from "../Navbar/Navbar";

const Main = () => {

	return (
		 <div className="App" style={{ backgroundColor: 'white', padding:'2rem',borderRadius:'5px'}}>
			<div className="Appcon">
			<Provider store={store}>
					<Navbar />
					{<Home />}
			</Provider>
			</div>
		</div>
	);
};

export default Main;
