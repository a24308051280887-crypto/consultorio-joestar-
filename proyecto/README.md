
# Backend + Frontend mínimo

Instrucciones rápidas:

- Copia `.env.example` a `.env` y rellena `MONGO_URI` y `COLLECTION_NAME`.
- Instala dependencias:

```bash
npm install
```

- Ejecuta en desarrollo:

```bash
npm run dev
```

- El servidor sirve ahora archivos estáticos desde la carpeta `public/`. Mueve o coloca tu frontend en `public/`.

- Accede al frontend en: http://localhost:3000

API disponibles:

- Obtener todos los documentos de una colección (ej.: `usuarios`):

```bash
GET /api/usuarios
```

- Buscar dentro de una colección (por texto en `nombre` o `descripcion` por defecto):

```bash
GET /api/usuarios/search?q=juan
```

- Buscar por campo específico:

```bash
GET /api/usuarios/search?q=juan&field=apellido
```

- Insertar documento en una colección:

```bash
POST /api/usuarios
Content-Type: application/json
{
	"nombre": "Juan",
	"apellido": "Perez"
}
```

Notas:
- El backend soporta rutas dinámicas `/api/:collection` y `/api/:collection/search`.
- Para el frontend de demostración ya moví `index.html` a `public/index.html`.

