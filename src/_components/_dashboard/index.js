import React, { Component } from 'react'

class Dashboard extends Component {
    state = {stickers_counter: 0,
             stickers : [],
             ready: false,
             msg:"",
             class:""}
    
    addToStickersCount = (e) => {
        e.preventDefault();
        this.setState ({
            stickers_counter: this.state.stickers_counter + 1
        })
    }

    removeToStickersCount = (e) => {
        e.preventDefault();
        if(this.state.stickers_counter > 0){
            this.setState ({
                stickers_counter: this.state.stickers_counter - 1
            })
        } 
    }

    checkboxController = (e) => {
        var alreadyHas = false;
        const value = e.target.value;
        const stickerValues = this.state.stickers;
        const filtered = stickerValues.filter((elem)=>{ 
            if(elem == value){
                alreadyHas = true
                return false
            } else {
                return true
            }})
        if(alreadyHas == true) {
            this.setState({ stickers: filtered })
        } else {
            this.setState({stickers:[...stickerValues, value]})
        }
    }

    validation = (e) => {
        e.preventDefault();
        const stickers_counter = this.state.stickers_counter;
        const stickers = this.state.stickers; 
        if(stickers_counter > 0 && stickers.length > 0){
            this.setState({ready:true, msg: "Formulário enviado com sucesso!", class:"sucess"})
        } else {
            this.setState({msg:"Campos invalidos", class:"error"})
        }
    }

    render(){
        return(
            <div className="box">
		<header className="header mb-s">
			<h1 className="title">Formulário<br />para compra de<br /><span>Pacote de Stickers</span></h1>
		</header>
		<form className="form">
			<div className="fieldset mb-m mt-s flex-column">
				<label className="label mb-s">Quais stickers:</label>
				<label className="checkbox" htmlFor="react"><input id="react" type="checkbox" value="react" onClick={this.checkboxController}/> React</label>
				<label className="checkbox"htmlFor="vue"><input id="vue" type="checkbox" value="vue" onClick={this.checkboxController}/> Vue</label>
				<label className="checkbox"htmlFor="angular"><input id="angular" type="checkbox" value="angular" onClick={this.checkboxController}/> Angular</label>
                {this.state.class == "error" && this.state.stickers.length <= 0 ? <p className="error">Obrigatório</p>:""}
			</div>
			<div className="fieldset mb-m">
				<div className="label mb-s">Quantos stickers de cada?</div>
				<div className="counter">
                    <button id="removeonesticker" tabIndex="0" aria-pressed="false" onClick={this.removeToStickersCount}>
					<svg className={this.state.stickers_counter == 0 ? "disabled" : "" } xmlns="http://www.w3.org/2000/svg" width="42" height="42">
						<path d="M4.667 0A4.668 4.668 0 0 0 0 4.667v32.666A4.668 4.668 0 0 0 4.667 42h32.666A4.668 4.668 0 0 0 42 37.333V4.667A4.668 4.668 0 0 0 37.333 0H4.667zm28 23.333H9.333v-4.666h23.334v4.666z" /></svg>
                    </button>
                    <input type="text" placeholder="0" value={this.state.stickers_counter ? this.state.stickers_counter : "" } readOnly/>
					<button id="addonesticker" tabIndex="0" aria-pressed="false" onClick={this.addToStickersCount}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42">
						<path d="M4.667 42h32.666A4.668 4.668 0 0 0 42 37.333V4.667A4.668 4.668 0 0 0 37.333 0H4.667A4.668 4.668 0 0 0 0 4.667v32.666A4.668 4.668 0 0 0 4.667 42zm4.666-23.333h9.334V9.333h4.666v9.334h9.334v4.666h-9.334v9.334h-4.666v-9.334H9.333v-4.666z" /></svg>
                    </button>   
				</div>
                {this.state.class == "error" && this.state.stickers_counter <= 0 ? <p className="error">Obrigatório</p>:""}
			</div>
			<div className="fieldset mb-m">
				<div className="label mb-s">Observações:</div>
				<textarea name="description" placeholder="Alguma dúvida? Recado?"></textarea>
			</div>
			<footer className="footer">
				<p id="msg-field" className={this.state.class}>{this.state.msg}</p><button onClick={this.validation}>Enviar</button>
			</footer>
		</form>
	</div>
        );
    }
}

export default Dashboard;