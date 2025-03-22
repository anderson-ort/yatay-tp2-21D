# TP21D: Trabajo Práctico Final

## Descripción

Este trabajo práctico busca que los estudiantes puedan aplicarse como desarrolladores de software. A diferencia de los anteriores, donde la consigna estaba completamente definida, este proyecto invita a desarrollar un **proyecto propio**, incluyendo la propuesta, el diseño y la implementación del mismo. Durante todo el proceso, se contará con el acompañamiento docente.

---

## **Objetivos**

- Integrar en un único trabajo todos los conocimientos adquiridos a lo largo de las materias de programación cursadas y en curso.
- Adquirir un mayor entendimiento de las metodologías de trabajo aplicadas en la elaboración de software, incluyendo:
  - Análisis del proyecto.
  - Definición del alcance del proyecto.
  - Planificación del proyecto.
  - Presentación oral de informes de avance.
  - Elaboración de diagramas UML para facilitar el entendimiento del sistema.
  - Entrega semanal de un ejecutable con un incremento visible y comprobable de sus funcionalidades, y libre de errores.

---

## **Requisitos mínimos del proyecto**

- **Arquitectura Cliente/Servidor:** Dentro de la materia, solo se evaluará el lado del servidor.
- **Servidor desarrollado en Node.js**, utilizando las técnicas vistas durante el curso y las nuevas funcionalidades de ES6+ (let/const, promesas, async/await, etc.).
- **Capa de persistencia:** Se debe utilizar una base de datos de libre elección y modularizar correctamente el código.
- **Persistencia de variables de configuración** mediante archivos.
- **Implementación de al menos 2 casos de uso de moderada a alta complejidad:**
  - Operaciones CRUD básicas **NO** serán consideradas de alta complejidad.
  - Se consideran casos moderados/altos aquellos que transforman la información del sistema para generar nueva información (ej. módulos estadísticos, importadores/exportadores de datos).
- **Cobertura de pruebas:**
  - Pruebas unitarias para los casos felices.
  - Al menos una prueba para casos no felices.
- **Documentación del sistema:**
  - Explicación de la funcionalidad desarrollada.
  - Puntos de acceso al servidor y comportamiento esperado.
  
---

## **Modalidad de trabajo**

- El trabajo será **grupal** (máximo 4 integrantes por grupo).
- La temática será definida íntegramente por los estudiantes.
- Se llevará a cabo una sesión de **brainstorming** en clase con docentes y alumnos para delimitar el alcance del proyecto.
- **Presentaciones semanales:**
  - Demostración funcional.
  - Estado de avance.
  - Documentación.
  - No se aceptarán entregas por mail o aula virtual.
- El orden de presentaciones será acordado previamente entre docentes y alumnos.

---

## **Estructura del Proyecto**

```
📁 tp2-proyecto-final
│── 📂 src
│   ├── 📂 controllers    # Controladores para manejar la lógica de negocio
│   ├── 📂 routes         # Definición de rutas del servidor
│   ├── 📂 models         # Modelos de datos y esquema de la base de datos
│   ├── 📂 services       # Servicios para interactuar con la capa de datos
│   ├── 📂 repositories   # Capa de acceso a datos y consultas a la base de datos
│   ├── 📂 config         # Archivos de configuración (ej. variables de entorno)
│   ├── 📂 tests          # Pruebas unitarias y de integración
│   ├── server.js        # Punto de entrada del servidor
│── 📂 docs              # Documentación del proyecto
│── 📂 public            # Archivos estáticos o frontend si aplica
│── .env                 # Configuración de variables de entorno
│── package.json         # Dependencias y scripts de npm
│── README.md            # Instrucciones de instalación y uso
```

La presentacion debera ser realizada por medio de GitHub | Gitlab | BitBuckets. 🚀

