import React, { Component } from 'react'

class Dashboard extends Component {
    state = {}

    render(){
        return(
            <div className="box">
		<header className="header mb-s">
			<div className="title">Formulário<br />para compra de<br /><span>Pacote de Stickers</span></div>
		</header>
		<form className="form">
			<div className="fieldset mb-m mt-s flex-column">
				<label className="label mb-s">Quais stickers:</label>
				<label><input type="checkbox" /> React</label>
				<label><input type="checkbox" /> Vue</label>
				<label><input type="checkbox" /> Angular</label>
			</div>
			<div className="fieldset mb-m">
				<div className="label mb-s">Quantos stickers de cada?</div>
				<div className="counter">
					<svg xmlns="http://www.w3.org/2000/svg" width="42" height="42">
						<path d="M4.667 0A4.668 4.668 0 0 0 0 4.667v32.666A4.668 4.668 0 0 0 4.667 42h32.666A4.668 4.668 0 0 0 42 37.333V4.667A4.668 4.668 0 0 0 37.333 0H4.667zm28 23.333H9.333v-4.666h23.334v4.666z" /></svg>
					<input type="text" placeholder="0" />
					<svg xmlns="http://www.w3.org/2000/svg" width="42" height="42">
						<path d="M4.667 42h32.666A4.668 4.668 0 0 0 42 37.333V4.667A4.668 4.668 0 0 0 37.333 0H4.667A4.668 4.668 0 0 0 0 4.667v32.666A4.668 4.668 0 0 0 4.667 42zm4.666-23.333h9.334V9.333h4.666v9.334h9.334v4.666h-9.334v9.334h-4.666v-9.334H9.333v-4.666z" /></svg>
				</div>
			</div>
			<div className="fieldset mb-m">
				<div className="label mb-s">Observações:</div>
				<textarea name="description" placeholder="Alguma dúvida? Recado?"></textarea>
			</div>
			<footer className="footer">
				<button>Enviar</button>
			</footer>
		</form>
	</div>
        );
    }
}

export default Dashboard;