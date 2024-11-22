import '../assets/css/style.css';
import '../assets/css/vertical-menu.css';

function NavBar(){
	return(
		<nav>
			<div class="menu-vertical" id="menu-vertical">
				<div class="logo">
					<h1>Logo</h1>
					<button type="button" id="btnclose">x</button>
				</div>
				<div class="links">
					<a href="#" id="inicial">Home</a>
					<a href="servicos.html">Serviços</a>
					<a href="#">Sobre</a>
					<a href="#bn-2">Ajuda</a>
				</div>
			</div>
			<header>
				<div class="logo">
					<h1>Logo</h1>
				</div>
				<nav>
					<a href="#" id="inicial">Home</a>
					<a href="servicos.html">Serviços</a>
					<a href="#">Sobre</a>
					<a href="#bn-2">Ajuda</a>
				</nav>
				<nav>
					<a href="#">Contact</a>
					<a href="" id="getstart">Get start</a>
				</nav>
				<button type="button" id="btnmenu">Menu</button>
			</header>

			<div class="mn"> 
				<div class="links">
					<a href="#" id="inicial">Home</a>
					<a href="#cd-cards">Serviços</a>
					<a href="#">Sobre</a>
					<a href="#bn-2">Ajuda</a>
				</div>
			</div>
		</nav>
	)
}

export default NavBar;