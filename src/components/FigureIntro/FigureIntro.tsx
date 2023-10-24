import './FigureIntro.scss'
import award from '../../assets/award-symbol.png'

const FigureIntro = () => {
    
    return(
    <div  className='container'>
        <div className='container-img'>
            
        </div>
        <div className='container-winners'>
            <div className='winner'>
                <img src={award} alt="" />
                <p>Impact Start-Up Web Summit 2023</p>
            </div>
            <div className='winner'>
                <img src={award} alt="" />
                <p>Alpha Start-Up Web Summit 2023</p>
            </div>
        </div>
    </div>
    )

    

}

export default FigureIntro