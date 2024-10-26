import "./CartaPrincipal.css";
export const CartaPrincipal = ({tituloCarta, direccionImagen}) => {
  return (
    <>
      <section className="header">
        <div className="header-content">
          <div className="header-image">
            <img src={direccionImagen}/>
          </div>
          <h1>{tituloCarta}</h1>
        </div>
      </section>
      <div className="container-cartaPrincipal">
      <section className="menu-cartaPrincipal">
        <h2>Menu de pickeos</h2>
        <div className="items-cartaPrincipal">
          <div className="item-cartaPrincipal">
            <div className="item-image-cartaPrincipal">Imagen</div>
            <h3>Nombre del pickeo</h3>
            <p>Precio desde: X</p>
            <button>Agregar</button>
          </div>
          <div className="item-cartaPrincipal">
            <div className="item-image-cartaPrincipal">Imagen</div>
            <h3>Nombre del pickeo</h3>
            <p>Precio desde: X</p>
            <button>Agregar</button>
          </div><div className="item-cartaPrincipal">
            <div className="item-image-cartaPrincipal">Imagen</div>
            <h3>Nombre del pickeo</h3>
            <p>Precio desde: X</p>
            <button>Agregar</button>
          </div><div className="item-cartaPrincipal">
            <div className="item-image-cartaPrincipal">Imagen</div>
            <h3>Nombre del pickeo</h3>
            <p>Precio desde: X</p>
            <button>Agregar</button>
          </div><div className="item-cartaPrincipal">
            <div className="item-image-cartaPrincipal">Imagen</div>
            <h3>Nombre del pickeo</h3>
            <p>Precio desde: X</p>
            <button>Agregar</button>
          </div>
          <div className="item-cartaPrincipal">
            <div className="item-image-cartaPrincipal">Imagen</div>
            <h3>Nombre del pickeo</h3>
            <p>Precio desde: X</p>
            <button>Agregar</button>
          </div>
        </div>
      </section>
      <section className="order-cartaPrincipal">
        <h2>Mi pedido</h2>
        <div className="order-content-cartaPrincipal">
          <p>No tienes Pedidos</p>
          <button>Aceptar</button>
        </div>
      </section>
    </div>
    </>
  );
};
