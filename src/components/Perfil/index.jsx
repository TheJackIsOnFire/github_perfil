import styles from './Perfil.module.css';

// Outras formas de fazer a exportação
// export default () => {
// export default function() {
const Perfil = ({nomeUsuario}) => { //Desestruturação como argumento 
    //const {endereco, nome} = props //Desestrutura e acessa os valores/ propriedades
    return (
        <header className={styles.header}>
            <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`}/>
            <h1 className={styles.name}>{nomeUsuario}</h1>
        </header>
    )
}

//Exportando a função
export default Perfil;