import { Request, Response } from 'express';
import { Usuario } from '../models/usuario';
import { Departamento } from '../models/departamentos';

export class UsuarioController {
  static async crearUsuario(req: Request, res: Response) {
    try {
      const nuevoUsuario = new Usuario(req.body);
      await nuevoUsuario.save();
      res.status(201).json(nuevoUsuario);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }

  static async obtenerUsuarios(req: Request, res: Response) {
    try {
      const usuarios = await Usuario.find();
      res.json(usuarios);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async obtenerUsuariosEmpresa(req: Request, res: Response) {
    try {
<<<<<<< HEAD
      const {empresaId} = req.params;
      const usuarios = await Usuario.find({empresa:empresaId});
      res.status(200).json({ok:true, usuarios});
    } catch (error) {
      res.status(500).json({'error':'Error en la solicitud'});
=======
      const {empresaId} = req.body;
      const usuarios = await Usuario.find({empresa:empresaId});
      res.json(usuarios);
    } catch (error) {
      res.status(500).json(error);
>>>>>>> 97797fca8e8ec0a100b4c30265d2f3c1d6e06a89
    }
  }
  static async obtenerAdmins(req:Request, res:Response) {
    try {
        const usuarios = await Usuario.find({ rol: 'admin' });
        res.status(200).json({ok:true, usuarios});
    } catch (error) {
        res.status(500).send({ message: 'Error al obtener los usuarios admin' });
    }
};

  static async obtenerUsuarioPorId(req: Request, res: Response) {
    try {
      const usuario = await Usuario.findById(req.params.id);
      if (!usuario) return res.status(404).json({ message: 'Usuario no encontrado' });
      res.json({
        ok:true,
        usuario
      }); 
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async actualizarUsuario(req: Request, res: Response) {
    try {
<<<<<<< HEAD
      console.log('update');
      const usuarioActualizado = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!usuarioActualizado) return res.status(404).json({ message: 'Usuario no encontrado' });
      
      res.json({
        ok:true,
        usuarioActualizado
      });
=======
      const usuarioActualizado = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!usuarioActualizado) return res.status(404).json({ message: 'Usuario no encontrado' });
      res.json(usuarioActualizado);
>>>>>>> 97797fca8e8ec0a100b4c30265d2f3c1d6e06a89
    } catch (error) {
      res.status(500).json(error);
    }
  }

<<<<<<< HEAD
  static async eliminarUsuario(req: Request, res: Response) { 
=======
  static async eliminarUsuario(req: Request, res: Response) {
>>>>>>> 97797fca8e8ec0a100b4c30265d2f3c1d6e06a89
    try {
      const usuarioEliminado = await Usuario.findByIdAndDelete(req.params.id);
      if (!usuarioEliminado) return res.status(404).json({ message: 'Usuario no encontrado' });
      res.status(200).json({ message: 'Usuario eliminado' });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
