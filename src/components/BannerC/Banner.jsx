import './Banner.css'
import { Button } from '../ButtonC/Button'

export const Banner = () => {
  return (
    <>
      <section className="banner">
        <div className="content-banner">
          <p>
            El restobar preferido de los que buscan un lugar único y acogedor
          </p>
          <br />
          <br />
          <h2>
            Somos Cronos, un restobar diseñado para ofrecer no solo deliciosas
            bebidas y comidas, sino para transportarte a un espacio y un
            ambiente único se unen para brindarte una experiencia inolvidable.
          </h2>
          <Button direccion={"carta"} titulo={"Conocer Más"}/>
        </div>
      </section>
    </>
  )
}