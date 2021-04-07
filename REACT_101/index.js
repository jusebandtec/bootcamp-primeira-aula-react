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
            <h2>{numero}</h2>
            <button onClick={somar}>+</button>
            <button onClick={subtrair}>-</button>
        </React.Fragment>
    )
}

function App(props) {
    return (
        <React.Fragment>
            <h1>Vote no seu preferido</h1>
            <Contador titulo="React" />
            <Contador titulo="Angular" />
            <Contador titulo="VueJS" />
        </React.Fragment>
    );
}

// ReactDOM.render(App(), container);
ReactDOM.render(React.createElement(App, null, null), container);