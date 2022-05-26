import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Overview from './components/Overview/Overview';
import Skills from './components/Skills/Skills';
import Project from './components/Projects/Project';
import Contact from './components/Contact/Contact';

function App() {
	return (
		<div className='app'>
			<Navbar />
			<Header />
			<Overview />
			<Skills />
			<Project />
			<Contact />
		</div>
	);
}

export default App;
