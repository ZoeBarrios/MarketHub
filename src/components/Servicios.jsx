import React from 'react'
import Icono1 from "../imgs/icono1.png";
import Icono2 from "../imgs/icono2.png";
import Icono3 from "../imgs/icono3.png";
import Icono4 from "../imgs/icono4.png";

export default function Servicios() {
  return (
    <div>
<div className="fondo_servicios">

<div className="cont_servicios">
<div className="card_servicio">
<div className="img_serv">
  <img src={Icono1} alt="" />
</div>
<div className="des_serv">
  <h4>Free Delivery</h4>
  <h5>Free shipping on all order</h5>
</div>
</div>
<div className="card_servicio">
<div className="img_serv">
  <img src={Icono2} alt="" />
</div>
<div className="des_serv">
  <h4>Online Suppor 24/7</h4>
  <h5>Support online 24 hours a day</h5>
</div>
</div>
<div className="card_servicio">
<div className="img_serv">
  <img src={Icono3} alt="" />
</div>
<div className="des_serv">
  <h4>Money Return</h4>
  <h5>Back guarantee under 7 days</h5>
</div>
</div>
<div className="card_servicio">
<div className="img_serv">
  <img src={Icono4} alt="" />
</div>
<div className="des_serv">
  <h4>Member Discount</h4>
  <h5>Onevery order over $120.00</h5>
</div>
</div>


</div>


</div>


    
    </div>
  )
}
