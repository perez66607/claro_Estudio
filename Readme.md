# 🎓 Claro — Plataforma de Estudio Inteligente con IA

**Claro** es una aplicación web progresiva (PWA) diseñada para ayudar a estudiantes a organizar, resumir y memorizar su temario combinando métodos de estudio respaldados por la ciencia cognitiva con herramientas de **Inteligencia Artificial** (Google Gemini) y una pasarela de pagos integrada mediante **Stripe**.

🌐 **Web en producción:** [https://claro-estudio.vercel.app/](https://claro-estudio.vercel.app/)

---

## 📋 Índice de Contenidos

1. [Visión General del Proyecto](#-visión-general-del-proyecto)
2. [Métodos y Técnicas de Estudio Incluidas](#-métodos-y-técnicas-de-estudio-incluidas)
3. [Motor de Inteligencia Artificial (Resúmenes y Mapas)](#-motor-de-inteligencia-artificial-resúmenes-y-mapas)
4. [Modelo de Suscripción y Planes (Claro PRO)](#-modelo-de-suscripción-y-planes-claro-pro)
5. [Arquitectura Técnica y Flujo de Datos](#-arquitectura-técnica-y-flujo-de-datos)
6. [Estructura de Archivos del Proyecto](#-estructura-de-archivos-del-proyecto)
7. [Funcionamiento del Sistema de Pagos (Stripe Payment Links)](#-funcionamiento-del-sistema-de-pagos-stripe-payment-links)
8. [Aplicación Web Progresiva (PWA) y Caché](#-aplicación-web-progresiva-pwa-y-caché)
9. [Configuración de Variables de Entorno en Vercel](#-configuración-de-variables-de-entorno-en-vercel)
10. [Guía de Mantenimiento y Actualización](#-guía-de-mantenimiento-y-actualización)

---

## 🚀 Visión General del Proyecto

**Claro** nace para resolver el principal problema de los estudiantes: saber *cómo* estudiar un temario extenso sin perder tiempo. La plataforma centraliza en una interfaz limpia, rápida y sin distracciones:

* **Herramientas prácticas de concentración y estructuración de apuntes.**
* **Procesamiento automático de textos de estudio con IA** para transformar apuntes densos en esquemas claros, conceptos clave y mapas visuales.
* **Acceso multiplataforma (Móvil, Tablet y Ordenador)** gracias a su arquitectura PWA instalable sin necesidad de pasar por tiendas de aplicaciones.
* **Persistencia local inmediata** de sesiones, progreso y estado de cuenta del estudiante.

---

## 🧠 Métodos y Técnicas de Estudio Incluidas

La aplicación incorpora las cinco metodologías de aprendizaje más eficaces:

### 1. Técnica Pomodoro
* **Objetivo:** Maximizar la concentración evitando la fatiga mental.
* **Funcionamiento:** Divide el tiempo de estudio en bloques de enfoque intenso (tradicionalmente 25 minutos) seguidos de breves descansos de recuperación (5 minutos), con descansos más largos cada cuatro ciclos completados.
* **Acceso:** Incluido en la versión gratuita como herramienta base de productividad.

### 2. Método Feynman
* **Objetivo:** Comprender conceptos complejos explicándolos con palabras sencillas.
* **Funcionamiento:** Guía al estudiante a través de cuatro pasos: elegir un concepto, desarrollarlo como si se lo enseñara a un principiante, detectar lagunas en su explicación al atascarse y simplificar el lenguaje eliminando la jerga técnica.
* **Acceso:** Incluido en la versión gratuita.

### 3. Repetición Espaciada (Spaced Repetition)
* **Objetivo:** Combatir la curva del olvido y consolidar la memoria a largo plazo.
* **Funcionamiento:** Programa repasos del material en intervalos crecientes de tiempo (1 día, 3 días, 7 días, 14 días, 30 días) según el grado de dominio que el estudiante tenga sobre cada tema.
* **Acceso:** Función avanzada desbloqueable con **Claro PRO**.

### 4. Recuerdo Activo (Active Recall)
* **Objetivo:** Pasar de la lectura pasiva a la recuperación activa de información.
* **Funcionamiento:** Obliga al cerebro a recuperar datos mediante preguntas de autoevaluación y tarjetas de estudio (*flashcards*) antes de mirar la respuesta, fortaleciendo las conexiones neuronales.
* **Acceso:** Función avanzada desbloqueable con **Claro PRO**.

### 5. Método Cornell
* **Objetivo:** Estructurar los apuntes de clase o lectura de forma sistemática.
* **Funcionamiento:** Divide la página de estudio en tres áreas claras:
  1. **Columna de Ideas Clave / Preguntas (izquierda):** Conceptos detonantes y dudas.
  2. **Columna de Notas de Clase (derecha):** Desarrollo de las ideas principales.
  3. **Área de Resumen (inferior):** Síntesis de todo lo aprendido en pocas líneas al finalizar la sesión.
* **Acceso:** Función avanzada desbloqueable con **Claro PRO**.

---

## ✨ Motor de Inteligencia Artificial (Resúmenes y Mapas)

Claro integra **Google Gemini AI** para ayudar al estudiante a procesar apuntes largos o textos complejos en cuestión de segundos:

* **Generación de Resúmenes Estructurados:** A partir del texto introducido por el alumno, la IA extrae las ideas principales, puntos clave de examen y definiciones esenciales.
* **Creación de Mapas Conceptuales y Esquemas:** Transforma bloques de texto en estructuras jerárquicas fáciles de visualizar y repasar antes de un examen.
* **Seguridad de la Clave API:** Las peticiones se gestionan mediante el entorno de **Vercel** utilizando la variable de entorno privada `GEMINI_API_KEY`, evitando exponer credenciales sensibles en el navegador del usuario.

---

## 💎 Modelo de Suscripción y Planes (Claro PRO)

La plataforma opera bajo un modelo **Freemium** pensado para adaptarse al calendario real de cualquier estudiante:

| Plan | Precio | Tipo de Cobro | Ideal para... |
| :--- | :--- | :--- | :--- |
| **Claro Gratis** | **0,00 €** | Gratuito | Estudiantes que buscan usar las técnicas básicas (Pomodoro y Feynman) y probar la interfaz. |
| **Plan Mensual** | **3,99 € / mes** | Suscripción mensual recurrente | Entregas y parciales mensuales. Cancelable en cualquier momento. |
| **Pase Exámenes (30 días)** | **5,99 €** | Pago único (puntual, sin renovación) | Época de exámenes finales o selectividad. Acceso total durante 30 días sin atarse a una suscripción. *(Favorito de los estudiantes)* |
| **Curso Completo (Anual)** | **24,99 € / año** | Suscripción anual recurrente | Cubrir todo el año académico completo con un ahorro superior al 45 % (~2,08 € al mes). |

### Ventajas de Claro PRO:
* Desbloqueo de **todas las técnicas de estudio** (Repetición Espaciada, Recuerdo Activo y Método Cornell).
* Generación ilimitada de **resúmenes y mapas con Inteligencia Artificial**.
* Insignia **PRO** activa en el perfil del estudiante.

---

## 🏗️ Arquitectura Técnica y Flujo de Datos

La aplicación está diseñada bajo una arquitectura ligera, rápida y sin dependencias pesadas:

1. **Frontend (Single-Page Application):**
   * Construido íntegramente con **HTML5 semántico**, **CSS3 moderno** (variables personalizadas, diseño *responsive*, Flexbox/Grid y modales animados) y **JavaScript Vanilla (ES6+)**.
   * Todo el núcleo de la interfaz reside en `index.html`, lo que garantiza tiempos de carga prácticamente instantáneos.

2. **Almacenamiento y Estado de Sesión (`localStorage`):**
   * La aplicación guarda en el navegador del usuario su perfil de sesión, sus notas, su progreso en las técnicas de estudio y el estado de su suscripción (`claro_pro` / estado PRO).

3. **Hosting y Despliegue Continuo (GitHub + Vercel):**
   * El código fuente está alojado en **GitHub** (`main`).
   * **Vercel** está vinculado directamente al repositorio: cada vez que se realiza un `git push` desde el ordenador local, Vercel reconstruye y publica los cambios automáticamente en `https://claro-estudio.vercel.app/` en menos de 30 segundos.

---

## 📂 Estructura de Archivos del Proyecto

```text
claro/
├── index.html        # Aplicación principal (Interfaz, lógica de estudio, modales y conexión con Stripe/IA)
├── sw.js             # Service Worker para soporte PWA, instalación en dispositivos y control de caché
├── manifest.json     # Configuración de la aplicación instalable (nombre, iconos, colores de tema)
├── api/              # Funciones Serverless en Vercel para conectar de forma segura con Google Gemini
└── README.md         # Documentación general del proyecto
```

---

## 💳 Funcionamiento del Sistema de Pagos (Stripe Payment Links)

El cobro a los usuarios se realiza a través de la pasarela oficial de **Stripe** en modo de producción real, garantizando pagos seguros con tarjeta, Apple Pay, Google Pay, Klarna y Revolut Pay.

### Flujo completo de compra y activación automática:

1. **Selección del Plan:**
   El estudiante abre el modal de **Claro PRO** dentro de la web y pulsa en uno de los tres botones de compra (`mensual`, `examenes` o `anual`).

2. **Redirección Segura a Stripe (`STRIPE_LINKS`):**
   La función `iniciarPagoStripe(plan)` redirige al navegador hacia el enlace de pago correspondiente en Stripe:
   * **Plan Mensual (3,99 €/mes):** 
   * **Pase Exámenes (5,99 € único):** 
   * **Curso Completo (24,99 €/año):** 

3. **Retorno Automático tras el Pago (`?pago=exito`):**
   Cada enlace en Stripe está configurado en la pestaña *"Después del pago"* para redirigir automáticamente al comprador a:
   ```text
   https://claro-estudio.vercel.app/?pago=exito
   ```

4. **Desbloqueo Instantáneo de Claro PRO:**
   Al cargar `index.html`, el script comprueba los parámetros de la URL (`URLSearchParams`). Si detecta `pago=exito`:
   * Activa automáticamente el estado **PRO** del estudiante y lo guarda de forma persistente en su navegador.
   * Desbloquea todas las técnicas y funciones de IA.
   * Limpia la barra de direcciones para dejar la URL limpia (`https://claro-estudio.vercel.app/`) y muestra el mensaje de bienvenida a **Claro PRO**.

---

## 📱 Aplicación Web Progresiva (PWA) y Caché

Claro cuenta con un **Service Worker (`sw.js`)** y un archivo **`manifest.json`** que permiten instalar la web como una aplicación nativa en móviles Android, iOS (Añadir a pantalla de inicio) y ordenadores (Windows/Mac):

* **Estrategia Network-First (Red primero):** El archivo `sw.js` prioriza siempre descargar la versión más reciente desde internet (`fetch`) y recurre a la memoria caché solo si el estudiante pierde la conexión.
* **Control de Versiones de Caché (`CACHE_NAME`):** Cada vez que se actualiza la versión en `sw.js` (por ejemplo, `claro-v4`), el Service Worker elimina las cachés antiguas de forma automática para asegurar que todos los usuarios vean los últimos cambios al instante.

---

## 🔐 Configuración de Variables de Entorno en Vercel

Para que las funciones de Inteligencia Artificial operen correctamente en producción:

1. Entra en el panel de [Vercel](https://vercel.com/) -> Proyecto **claro-estudio**.
2. Ve a la pestaña **Settings** -> **Environment Variables**.
3. Asegúrate de tener configurada la variable:
   * **Key:** `GEMINI_API_KEY`
   * **Value:** *(Tu clave API de Google AI Studio)*
   * **Environments:** Production, Preview y Development.

---

## 🛠️ Guía de Mantenimiento y Actualización

Cada vez que modifiques cualquier texto, estilo o función en tu carpeta local (`C:\Users\Rider666\Desktop\claro`), sigue estos pasos en tu terminal de **PowerShell** para publicarlo en internet:

1. **Añadir los archivos modificados:**
   * Ejecuta `git add .` para preparar todos los cambios.
2. **Guardar el punto de control (Commit):**
   * Ejecuta `git commit -m "Descripción breve del cambio realizado"`.
3. **Subir a GitHub y actualizar Vercel:**
   * Ejecuta `git push`.
4. **Verificar en la web:**
   * Espera 20-30 segundos y recarga `https://claro-estudio.vercel.app/` (pulsando `Ctrl + Shift + R` si quieres forzar la limpieza de caché de tu navegador).

---

**Desarrollado para transformar la forma en que los estudiantes aprenden y preparan sus exámenes.**
