import { useState } from "react";
import logo from '../../assets/Ademass-logo.png'
import './Navbar.scss'

interface ILanguages {
    flag : string,
    name : string,
    classStyled: string
}

const languages:ILanguages[] = [
    {
        flag : "",
        name : "español",
        classStyled: "es"
    },
    {
        flag : "",
        name : "italiano",
        classStyled: "it"
    },
    {
        flag : "",
        name : "frances",
        classStyled: "fr"
    },
    {
        flag : "",
        name : "aleman",
        classStyled: "ge"
    },
    {
        flag : "",
        name : "ingles",
        classStyled: "en"
    },
];




const Navbar = () => {
  
    
    const [languageSelected, setLanguageSelected] = useState<ILanguages>(languages[0]);

    const handleLanguageSelect = (name:string) => {
            let obj:ILanguages = {
                flag : "",
                name : "",
                classStyled: ""
            }

            languages.forEach((item) => {
              if (item["name"] === name) {
                obj = item;
              }
            });
            setLanguageSelected(obj);
          }

    
  return (
    <div className="navbar-container">
        <nav className="navbar">
        <div className="logo-container">
            <img className="logo" src={logo} alt="logo" />
            <span>CLONE</span>
        </div>


        <div className="items-btns-container">
            
            <ul className="items">
                <li className="itema active"><a href="#">Inicio</a></li>
                <li className="itema"><a href="#">Empresas</a></li>
                <li className="itema"><a href="#">Rocktars</a></li>
                <li className="itema"><a href="#">Blog</a></li>
            </ul>

            <div className="btns">
                <button className="btn-primary">Campus</button>
                <button className="btn-secondary">Registrarse / Acceder</button>
            </div>

            <ul className="language-selector">
                <li className="item">    
                    <a className={`${languageSelected.classStyled}`} href="#">{languageSelected.name}</a>
                </li>
                <ul className="lang-menu">
                    {
                      languages.map((lang, index) =>{
                        return ( lang.name !== languageSelected.name ? 
                        <li className="item pitem" onClick={() => handleLanguageSelect(lang.name)} key={index}>    
                            <a className={`${lang.classStyled} `} href="#">{lang.name}</a>
                        </li> 
                        :
                        "")
                      })  
                    }
                </ul>
            </ul>
        </div>
        </nav>
    </div>
  )
 

 }

export default Navbar