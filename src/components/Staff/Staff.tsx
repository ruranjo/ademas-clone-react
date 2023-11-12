import React from 'react'
import './Staff.scss'
import person1 from '../../assets/person1.jpg'
import person2 from '../../assets/person2.jpg'
import person3 from '../../assets/person3.jpg'
import person4 from '../../assets/person4.jpg'
import person5 from '../../assets/person5.jpg'
import person6 from '../../assets/person6.jpg'
import person7 from '../../assets/person7.png'

import { Button } from '../Button'


interface IStaff {
  img: string,
  name: string,
  position: string,
  description: string,
  linkeding: string
}

interface Props {
   
}

const staffList:IStaff[] = [
    {
      img: person7,
      name: "Rubens Rangel",
      position: "web developér",
      description: "Yo hice este clone",
      linkeding: "joshua-wilson"
    },
    {
      img: person1,
      name: "John Doe",
      position: "Software Developer",
      description: "John is a skilled developer with experience in Python, JavaScript, and React",
      linkeding: "john-doe"
    },
    {
      img: person2,
      name: "Jane Doe",
      position: "Project Manager",
      description: "Jane is experienced in managing software development projects with a focus on agile methodologies",
      linkeding: "jane-doe"
    },
    {
      img: person3,
      name: "Alex Smith",
      position: "Database Administrator",
      description: "Alex is responsible for designing and maintaining database systems for the company",
      linkeding: "alex-smith"
    },
    {
      img: person4,
      name: "Bob Johnson",
      position: "Web Designer",
      description: "Bob is a talented designer who is passionate about crafting visually appealing and user-inclusive interfaces for web applications",
      linkeding: "bob-johnson"
    },
    {
      img: person5,
      name: "Sarah Brown",
      position: "Support Engineer",
      description: "Sarah is a skilled technician who provides technical support and assistance to users of the company's software products",
      linkeding: "sarah-brown"
    },
    {
      img: person6,
      name: "Emily Jones",
      position: "User Experience Designer",
      description: "Amber is skilled in creating user-focused designs that help improve the user experience for the company's software products",
      linkeding: "emily-jones"
    },
    
]


const Staff: React.FC<Props> = () => {
     
  return (
    
     <div className='container-comunity'>
      <div className="content">
        <h3>CONOCE A LOS ROCKSTARS DE ADEMASS, Y CONVIÉRTETE EN UNO DE ELLOS</h3>
        <Button text='VER MIEMBROS DE LA COMUNIDAD CON MAYOR REPUTACIÓN' button_version='secondary'/>
        <h2>Los Pilares de nuestra Comunidad</h2>
        
        <div className='cards'>
          {
             staffList &&  staffList.map(( staff, index)=>{
              return (
                <div className='card' key={index}>
                  <img  src={staff.img} alt="" />
                  <h2>{staff.name}</h2>
                  <p>
                    {staff.description}
                  </p>
                </div>
              )
            })
          }
          
        </div>
          <div className='btn-comunity'>
            <Button  text='Ver todos' button_version='secondary'/>
          </div>
        </div>
      </div>
    
  )
 

 }

export default Staff