import React from 'react'
import './ComunityRules.scss'
import './card.scss'
import comunidad from '../../assets/comunidad.png'
import birrte from '../../assets/birrete.png'
import diploma from '../../assets/diploma.png'
import finance from '../../assets/finanzas.png'
import git from '../../assets/git.png'
import working from '../../assets/work-from-home.png'

interface IRule {
  figure: string,
  title: string,
  content: string
}

interface Props {
   
}

const rulesList:IRule[] = [
  {
    figure: birrte,
    title: 'Formación',
    content: 'Categorizada por hojas de ruta según especialidad, de cero a experto. Todo ordenado para que tan solo tengas que preocuparte de una cosa: Estudiar.',
  },
  {
    figure: working,
    title: 'Empleo',
    content: 'Cumplimenta tu perfil de empleo y la plataforma te autoinscribirá en todas las ofertas compatibles con tu perfil. ¡Encuentra trabajo de forma sencilla!',
  },
  {
    figure: diploma,
    title: 'Certificaciones',
    content: 'Acredita todo aquello que sabes pasando nuestros exámenes de certificación, y obtén tu diploma acreditativo. ¡Que sepan lo que sabes!',
  },
  {
    figure: git,
    title: 'Proyectos',
    content: 'Únete a desarrollar proyectos de obra social tutelados por nuestro equipo, y obtén la experiencia demostrable que necesitas para mejorar en tu carrera.',
  },
  {
    figure: finance,
    title: 'Gratis',
    content: 'En Ademass todo es gratis. Los ingresos provienen de nuestros mecenas, y de cobrar a las empresas por encontrarles el dev con el que sueñan: Tú.',
  },
  {
    figure: comunidad,
    title: 'Comunidad',
    content: 'El alma de Ademass somos todos y cada uno de los devs que la conformamos. Una comunidad sana y unida bajo el propósito de poder mejorar juntos.',
  },
]


const ComunityRules: React.FC<Props> = () => {
     
  return (
    
     <div className='container'>
        <h3>CONOCE ADEMASS. ES GRATIS, SIEMPRE LO SERÁ.</h3>
        <h2>Los Pilares de nuestra Comunidad</h2>
        
        <div className='cards'>
          {
            rulesList && rulesList.map((rule, index)=>{
              return (
                <div className='card' key={index}>
                  <img  src={rule.figure} alt={rule.title} />
                  <h2>{rule.title}</h2>
                  <p>
                    {rule.content}
                  </p>
              </div>
              )
            })
          }
          
            
        </div>
      </div>
    
  )
 

 }

export default ComunityRules