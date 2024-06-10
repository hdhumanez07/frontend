
# Pasos para ejecutar el proyecto

- Clonar el repositorio del backend https://github.com/hdhumanez07/api-rest-users.git

- Usar en el backend las variables de entorno enviadas a su correo .env.development y .env.production



## Config. backend

Para ejecutar en desarrollo debe tener instalado pnpm.

Para desarrollo
```bash
  pnpm install
  pnpm run dev
```
Tambien tienes otros scripts adicionales para hacer debugging y hacer pre-commit con husky para impedir hacer push a ramas si tienen errores de linter con eslint. lo que obliga a desarrolladores a seguir las reglas de eslint.
```bash
  pnpm run debug
  pnpm run prepare
```
Para producción
```bash
  pnpm install
  pnpm run build
  pnpm start
```
## Config. Frontend

Para ejecutar en desarrollo debe tener instalado node.
- Clonar el repositorio del frontend https://github.com/hdhumanez07/frontend.git

Para desarrollo
```bash
  npm install
  npm run dev
```

Para producción
```bash
  npm install
  npm run build
  npm run preview
```

**Para tener en cuenta**: 
- Debe estar corriendo ambos proyectos para su correcto funcionamiento.

- Las etiquetas del Dom utiliza class no className ya que utilizo una versión liviana similar a React llamado Preact y este no tiene necesidad de usar className.

## Authors

- [@hdhumanez07](https://www.github.com/hdhumanez07)

