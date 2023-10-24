import './Heropage.scss'
import hero from '../../assets/hero.png'
import caracter from '../../assets/icon-caracter.png'
import { Button } from '../Button';

const Heropage = () => {
    console.log(caracter); 
    return(
        <div className='container'>
            <div className="hero-container">
                <div className='left-container'>
                    <h3>FORMACIÓN, EMPLEO Y CERTIFICACIONES DEVS. GRATIS.</h3>
                    <h2>Somos Comunidad. Somos Developers. Esta es tu casa.</h2>
                    <p>
                        Ademass es una comunidad de desarrolladores abierta que busca aunar en un único 
                        lugar y totalmente gratis todo lo que un desarrollador necesita: Formación de 
                        calidad para todos los niveles y especializaciones, oportunidades de empleo para
                        mejorar en tu carrera, certificaciones de peso que acrediten tus conocimientos,
                        resolución de dudas, posibilidad de participar en grandes proyectos y mucho más.
                    </p>
                    <div className='icon-reference'>
                    <img  className={hero} src={caracter} alt="" />
                        <div className='icon-text'>
                            <p>
                                «No necesitas haber ido a la universidad, o tener conocimientos previos.
                                Si eres o quieres ser programador, Ademass es tu casa. Aquí
                                encontrarás todo lo que necesitas, sin miedo a tener que pagar por ello.
                                Somos una comunidad. Únete, juntos somos mejores.»
                            </p>
                            <h4>Juanjo Ruiz, CTO Ademass</h4>
                        </div>
                    </div>
                </div>

                <div className="right-container">
                    <img className='hero-image' src={hero} alt="hero" />
                </div>
            </div>
            <div className='btns'>
                <Button text='Accede al campus' button_version='primary'/>
                <Button text='Regístrate ahora' button_version='secondary'/>
            </div>
            
        </div>
    )

}

export default Heropage