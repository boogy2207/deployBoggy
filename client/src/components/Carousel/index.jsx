import harry from '../../media/harry.jpg'
import descarga from '../../media/descarga.png'
import negocio from '../../media/negocio.jpg'
import Libros from '../../media/Libros-20-off.png'
import style from './carousel.module.css'

export default function Carousel() {
  return (

<div className={`${style.slider} rounded-xl`}>
<ul>
    <li>
        <img src={harry}/>
    </li>
    <li>
        <img src={descarga}/>
    </li>
    <li>
        <img src={Libros}/>
    </li>
    <li>
        <img src={negocio}/>
    </li>
</ul>
</div>

  )
}