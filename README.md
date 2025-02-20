# CRUD con React.js y Node.js

## 📌 Descripción del Proyecto

Este proyecto es una aplicación CRUD (Crear, Leer, Actualizar, Eliminar) que permite gestionar productos y categorías. Se desarrolló con **React.js** para el frontend y **Node.js con Express** para el backend, usando **MySQL** como base de datos.

---

## 🛠️ Tecnologías Utilizadas

- **Frontend:** React.js, Bootstrap, React Router, Axios, React Toastify.
- **Backend:** Node.js, Express.js, MySQL2, dotenv, cors.
- **Base de Datos:** MySQL.
- **Control de Versiones:** Git y GitHub.

---

## ⚙️ Requisitos Previos

Antes de ejecutar el proyecto, asegúrate de tener instalado:

- **Node.js** (v16 o superior)
- **MySQL**
- **Git**
- **Navicat** (opcional, para manejar la base de datos visualmente)

---

## 📥 Instalación y Configuración

### 1️⃣ Clonar el Repositorio

```bash
git clone https://github.com/Crua0316/CrudReactAndNode
cd CrudReactAndNode
```

### 2️⃣ Configurar el Backend

```bash
cd NodeJS
npm install
```

Crear un archivo `.env` en la carpeta `NodeJS` y agregar:

```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASS=
DB_NAME=crud_db
```

**Ejecutar el backend:**

```bash
npm run dev
```

### 3️⃣ Configurar el Frontend

```bash
cd ../frontend
npm install
npm run dev
```

---

## 📂 Estructura del Proyecto

```
├── NodeJS (Backend)
│   ├── config/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── index.js
│   ├── package.json
│   ├── .env
│
├── frontend (Frontend)
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── main.jsx
│   ├── package.json
│   ├── .gitignore
│
├── README.md
```

---

## 🚀 Uso y Ejecución

1. **Ejecutar el backend:**
   ```bash
   cd NodeJS
   npm run dev
   ```
2. **Ejecutar el frontend:**
   ```bash
   cd frontend
   npm run dev
   ```
3. **Abrir en el navegador:**
   ```
   ```

[http://localhost:5173/](http://localhost:5173/)

```

---

## 🔌 Endpoints de la API

### 📦 Productos (`/products`)
| Método | Endpoint         | Descripción                  |
|--------|----------------|------------------------------|
| GET    | /products       | Obtener todos los productos |
| GET    | /products/:id   | Obtener un producto por ID  |
| POST   | /products       | Crear un producto           |
| PUT    | /products/:id   | Actualizar un producto      |
| DELETE | /products/:id   | Eliminar un producto        |

### 📂 Categorías (`/categories`)
| Método | Endpoint         | Descripción                  |
|--------|----------------|------------------------------|
| GET    | /categories     | Obtener todas las categorías |
| GET    | /categories/:id | Obtener una categoría por ID |
| POST   | /categories     | Crear una categoría          |
| PUT    | /categories/:id | Actualizar una categoría     |
| DELETE | /categories/:id | Eliminar una categoría       |

---

## ✨ Autor
📌 Desarrollado por: Cristian Esteban Rua
📧 Contacto: [cresrugi@gmail.com](mailto:cresrugi@gmail.com)
🔗 GitHub: [github.com/Crua0316](https://github.com/Crua0316)

---


```

