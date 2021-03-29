var container = window.document.getElementById("app")
// var titulo = document.createElement("h1");
// titulo.innerHTML = "Titulo inserido por JavaScripto :O \\"
// container.appendChild(titulo)

function Contador(props) {

    const [numero, setNumero] = React.useState(0);

    function somar() {
        setNumero(numero + 1)
        
        console.log("Numero: " + numero)
    }

    function subtrair() {
        setNumero(numero - 1)
        
        console.log("Numero: " + numero)
    }
    return (
        <React.Fragment>
            <h1>{props.titulo}</h1>
            <img src={props.img}></img>
            <h2>{numero}</h2>
            <button onClick={somar}>+</button>
            <button onClick={subtrair}>-</button>
        </React.Fragment>
    )
}

function App(props) {
    return (
        <React.Fragment>
            <h1>Vote no melhor piloto deste final de semana</h1>
            <Contador titulo="Max Verstappen" img="./img/verstappen.jpg"/>
            <Contador titulo="Charles Leclerc" img="./img/leclerc.jpg"/>
            <Contador titulo="Lewis Hamilton" img="./img/lewis.jpg"/>
        </React.Fragment>
    );
}

// ReactDOM.render(App(), container);
ReactDOM.render(React.createElement(App, null, null), container);