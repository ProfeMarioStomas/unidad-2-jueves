import { Router } from 'express';
import jwt from "jsonwebtoken";

const router = Router();

router.post('/login', async (request, response) => {
    // NOTA: Esto es un MOCK (datos de prueba), no es una validación real de contraseña
    // SystemUser puede crear, actualizar o eliminar información
    const data = request.body;
    
    const userMock = {
        rut: data.rut,
        name: "Mario",
        lastName: "Cares",
        userTypeId: {
            id: (parseInt(data.rut) % 2 === 0) ? 1 : 2,
            description: (parseInt(data.rut) % 2 === 0) ? "SystemUser" : "SystemClient"
        }
    }
    
    const token = jwt.sign(
        userMock,
        process.env.CLAVE_JWT,
        { expiresIn: '10h' }
    );
    
    response.status(200).json({ token });
});

export default router;
