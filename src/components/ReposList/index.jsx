import { useState, useEffect } from "react";
import styles from './ReposList.module.css';

const ReposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);

    useEffect(() => {
        setEstaCarregando(true);
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(res => res.json())
        .then(resJson => {
            setTimeout(() => {
                setEstaCarregando(false)
                setRepos(resJson);
                //console.log(resJson);
            }, 3000);
        })
    }, [nomeUsuario]);

    return (
        <div className="container">
            {estaCarregando ? (
                <h1>Carregando...</h1>
            ) : (
                <ul className={styles.list}>
                    {repos.map(({ id, name, language, html_url }) => (
                        <li className={styles.listItem} key={id}>
                            <div className={styles.itemName}>
                                <b>Nome:</b> 
                                {name} 
                            </div>    
                            <div className={styles.itemLanguage}>
                                <b>Linguagem:</b> 
                                {language}
                            </div>    
                            <a className={styles.itemLink} target="_blank" href={html_url}>Visitar no Github</a>
                        </li>
                    ))}
                </ul>
            )}
            
            {/* <ul> Sem desestruturação 
                {repos.map(repositorio => (
                    <li key={repositorio.id}>
                        <b>Nome:</b> {repositorio.name} <br />
                        <b>Linguagem:</b> {repositorio.language} <br />
                        <a target="_blank" href={repositorio.html_url}>Visitar no Github</a> <br />
                    </li>
                ))}
            </ul> */}
        </div>
    )
}

export default ReposList;