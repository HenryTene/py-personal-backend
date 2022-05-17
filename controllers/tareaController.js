import Proyecto from "../models/Proyecto.js";
import Tarea from "../models/Tarea.js";

const agregarTarea = async (req, res) => {
  const { proyecto } = req.body;
  const existeProyecto = await Proyecto.findById(proyecto);
  console.log(existeProyecto);
  if (!existeProyecto) {
    const error = new Error("Proyecto no encontrado");
    return res.status(404).json({ error: error.message });
  }
  if (existeProyecto.creador.toString() !== req.usuario.id.toString()) {
    const error = new Error("No tienes permiso para agregar tareas");
    return res.status(403).json({ error: error.message });
  }

  try {
    const tareaAlmacenada = await Tarea.create(req.body);
    res.json(tareaAlmacenada);
  } catch (error) {
    console.log(error);
  }
};
const obtenerTarea = async (req, res) => {
  const { id } = req.params;
  const tarea = await Tarea.findById(id).populate("proyecto");
  if (!tarea) {
    const error = new Error("Tarea no encontrada");
    return res.status(404).json({ error: error.message });
  }
  if (tarea.proyecto.creador.toString() !== req.usuario.id.toString()) {
    const error = new Error("Acción no válida");
    return res.status(403).json({ error: error.message });
  }
  res.json(tarea);
};
const actualizarTarea = async (req, res) => {
  const { id } = req.params;
  const tarea = await Tarea.findById(id).populate("proyecto");
  if (!tarea) {
    const error = new Error("Tarea no encontrada");
    return res.status(404).json({ error: error.message });
  }
  if (tarea.proyecto.creador.toString() !== req.usuario.id.toString()) {
    const error = new Error("Acción no válida");
    return res.status(403).json({ error: error.message });
  }
  tarea.nombre = req.body.nombre || tarea.nombre;
  tarea.descripcion = req.body.descripcion || tarea.descripcion;
  tarea.prioridad = req.body.prioridad || tarea.prioridad;
  tarea.fechaEntrega = req.body.fechaEntrega || tarea.fechaEntrega;

  try {
    const tareaAlmacenada = await tarea.save();
    res.json(tareaAlmacenada);
  } catch (error) {
    console.log(error);
  }
};
const eliminarTarea = async (req, res) => {};
const cambiarEstado = async (req, res) => {};

export {
  agregarTarea,
  obtenerTarea,
  actualizarTarea,
  eliminarTarea,
  cambiarEstado,
};
