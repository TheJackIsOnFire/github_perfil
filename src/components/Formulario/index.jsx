import { useState, useEffect } from "react"; //funções que começam com use no react são chamadas de hook
//As funções hook conectam os valores do react e do DOM(html)

const Formulario = () => {
    //Criando um estado
    //useState cria um estado e retorna um valor e uma função para alterar este valor 
    const [materiaA, setMateriaA] = useState(0); //Desestruturação de array
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);

    const [nome, setNome] = useState('');

    //E executado quando o componete é renderizado
    //Podemos especificar uma condição de renderização
    useEffect(() => {
        console.log('O estado nome mudou')
    }, [nome]);//Condição -> Apenas se o campo nome mudar

    //Podemos ter varios use effect's
    useEffect(() => {
        console.log('a matéria A mudou para:' + materiaA);
    }, [materiaA, materiaB, materiaC])//Podemos ter varios argumentos

    //Podemos usar o useEffect para mostrar que um componente iniciou
    useEffect(() => {
        console.log('O componente iniciou')

        //Podemos usar o useEffect para mostrar que um componente desmontou/desligou/finalizou
        return () => {
            console.log('O componente finalizou')
        }
    }, []); //Não adiciona nada no array

    const alteraNome = (evento) => {
        //console.log(evento.target.value)
        //setNome(evento.target.value); //Podemos usar este valor assim ou criando uma função 

        setNome(estadoAnterior => { //Retorna um novo valor
            // console.log(estadoAnterior);
            return evento.target.value;
        });
    };

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        // console.log(soma);
        // console.log(media);
        

        if (media >= 7) {
            return (<p>Olá {nome}, você foi aprovado</p>);
        } else {
            return (<p>Olá {nome}, você não foi aprovado</p>);
        };
    };

    return (
        <form>
            <ul>
                {[1,2,3,4,5].map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
            <input type="text" placeholder="Seu nome" onChange={alteraNome}/>
            <input type="number" placeholder="Nota matéria A" onChange={({target}) => setMateriaA(parseInt(target.value))}/>
            <input type="number" placeholder="Nota matéria B" onChange={evento => setMateriaB(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota matéria C" onChange={evento => setMateriaC(parseInt(evento.target.value))}/>
            {renderizaResultado()}
        </form>
    );
};

export default Formulario;