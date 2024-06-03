import './Equipo.css';
import Colaborador from '../Colaborador';
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) => {

  const { colorPrimario, colorSecundario, titulo, id } = props.datos;
  const { colaboradores, eliminarColaborardor, actualizarColor, like } = props;

  console.log('Colaboradores desde equipos compornente', colaboradores);

  const obj = {
    backgroundColor: hexToRgba(colorPrimario, 0.6),
  }

  const estiloTitulo = { borderColor: colorPrimario }

  return <>
    {colaboradores.length > 0 &&
      <section className="equipo" style={obj}>
        <input
          type='color'
          className='input-color'
          value={hexToRgba(colorPrimario, 0.6)}
          onChange={(evento) => {
            actualizarColor(evento.target.value, id);
          }}

        />
        <h3 style={estiloTitulo}>{titulo}</h3>
        <div className="colaboradores">
          {
            colaboradores.map((colaborador, index) => <Colaborador
              datos={colaborador}
              key={index}
              colorPrimario={colorPrimario}
              eliminarColaborardor={eliminarColaborardor}
              like={like}
            />)
          }
        </div>
      </section>
    }
  </>
}

export default Equipo;