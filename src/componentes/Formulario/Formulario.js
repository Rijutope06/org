import { useState } from 'react';
import './Formulario.css';
import Campo from '../Campo';
import ListaOPciones from '../ListaOpciones';
import Boton from '../Boton';

const Formulario = (props) => {

  const [nombre, actualizarNomnbre] = useState('');
  const [puesto, actualizarPuesto] = useState('');
  const [foto, actualizarFoto] = useState('');
  const [equipo, actualizarEquipo] = useState('');

  const [titulo, actualizarTitulo] = useState('');
  const [color, actualizarColor] = useState('');

  const { registrarColaborador, crearEquipo } = props

  const manejarEnvio = (e) => {
    e.preventDefault();
    console.log('Manejar el envio');
    let datosAEnviar = {
      nombre: nombre,
      puesto: puesto,
      foto: foto,
      equipo
    }
    registrarColaborador(datosAEnviar);
  }

  const manejarNuevoEquipo = (e) => {
    e.preventDefault();
    crearEquipo({ titulo, colorPrimario: color });
  }

  return <section className='formulario'>
    <form onSubmit={manejarEnvio}>
      <h2>Rellena el formulario para crear el colaborador.</h2>
      <Campo
        titulo='Nombre'
        placeholder='Ingresar nombre'
        required
        valor={nombre}
        actualizarValor={actualizarNomnbre}
      />
      <Campo
        titulo='Puesto'
        placeholder='Ingresar puesto'
        required
        valor={puesto}
        actualizarValor={actualizarPuesto}
      />
      <Campo
        titulo='Foto'
        placeholder='Ingresar enlace de foto'
        required
        valor={foto}
        actualizarValor={actualizarFoto}
      />
      <ListaOPciones
        valor={equipo}
        actualizarValor={actualizarEquipo}
        equipos={props.equipos}
      />
      <Boton>
        Crear
      </Boton>
    </form>

    <form onSubmit={manejarNuevoEquipo}>
      <h2>Rellena el formulario para crear el equipo.</h2>
      <Campo
        titulo='Titulo'
        placeholder='Ingresar titulo'
        required
        valor={titulo}
        actualizarValor={actualizarTitulo}
      />
      <Campo
        titulo='Color'
        placeholder='Ingresar Color en Hex'
        required
        valor={color}
        actualizarValor={actualizarColor}
        type='color'
      />
      <Boton>
        Registrar equipo
      </Boton>
    </form>
  </section>
}

export default Formulario;