import './App.css';
import Description from "./sections/description";
import NavMenu from "./sections/navBar";
import Library from "./sections/library";
import Frame from "./sections/frame";
import Bib from "./sections/bibliography";
import Us from "./sections/us";
import Footer from "./sections/footer";
import Presentation from "./sections/presentation";
import Acknowledgment from "./sections/acknowledgment";

function App() {
	return (
		<div className="App">
			<NavMenu/>
			<Presentation/>
			<Description/>
			<Library/>
			<Frame/>
			<Us/>
			<Bib/>
			<Acknowledgment/>
			<Footer/>
		</div>
	);
}

export default App;
