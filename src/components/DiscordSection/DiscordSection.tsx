import './DiscordSection.scss'
import React from 'react'
import meduza from '../../assets/caracter.png'
import { Button } from '../Button'

interface Props {
}

const DiscordSection: React.FC<Props> = () => {
  
    
  return (
    <section className='discord'>
            <div className="discord-container">
                <div className='left-container-discord'>
                    <div className='header-discord'>
                      <h3>NOSOTROS LO LLAMAMOS LA CAFETERÍ­A</h3>
                      <h2>Tenemos Discord  : )</h2>
                    
                    <p>
                    Entra en nuestro discord. Conoce a otros desarrolladores como tú,
                    chatea de chill en los off-topic, conoce a nuestro equipo, súmate a
                    proyectos, resuelve dudas, realiza sugerencias… ¡lo que prefieras! Discord es nuestra cafeterí­a,
                    un punto de encuentro en la red para charlar y hablar tanto de aquello
                    que estamos desarrollando como de cualquier otra cosa.
                    </p>
                    <Button  text='UNETE A NUESTRO DISCORD' button_version='success'/>
                    </div>
                </div>

                <div className="right-container">
                    <img className='hero-image' src={meduza} alt="hero" />
                </div>
            </div>
    </section>
  )
 

 }

export default DiscordSection