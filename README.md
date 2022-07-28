# Full-Stack-JS-CopyWrite-Code-Challenge
Prueba Técnica de código para puesto Full Stack JS en Copywrite 

## Demo Deployeado -> 
* Client --> https://client-challenge-copywrite.herokuapp.com/
* Api --> https://api-challenge-copywrite.herokuapp.com/iecho?text=

## Demo Local ( Descargar el repositorio )

## Back End 
- Abrir la carpeta api
- Abrir un Terminal
- Para instalar las dependencias ejecutar <code>npm install</code>
- Para iniciar el Servidor ejecutar <code>npm start</code>
- Para correr los test ejecutar <code>npm test</code>

## Front End
- Abrir un Terminal
- Para instalar las dependencias ejecutar <code>npm install</code>
- Para iniciar el Cliente ejecutar <code>npm start</code>

Una vez hecho ambos pasos tanto para Back-End como para Front-End en la pestaña abierta por el terminal del Front-End se vera el Proyecto en ejecución.

## Breve descripción: 
 Code Challenge
 El JavaScript challenge para Full Stack esta dividido en 3 partes:
- Un API usando Node + Express o NestJS
- Un Frontend cliente usando Bootstrap/Material UI + React
- Puntos opcionales para el challenge

## Opcional
- Usar Docker o Docker Compose para correr las apps.

## API
- Un API REST, a la cual se le envía un texto y responde con el mismo texto invertido.

## API - libs & frameworks:
- NodeJs
- ExpressJs
- Mocha
- Chai
- SuperTest

## API - specs
Usando NodeJs +ExpressJs se debe crear API de un solo endpoint al cual se le envía el texto de la siguiente forma:

    GET /iecho?text=test
y da una respuesta 200 en caso de exito:

    "content-type": "application/json"
    {
        "text": "tset"
    }
o una respuesta 400 en caso de parámetros inválidos:

    "content-type": "application/json"
    {
        "error": "no text"
    }
Ejemplo usando curl:

    $ curl -v -X GET "http://apihost/iecho?text=test" -H "accept: application/json"
    > GET /iecho?text=test HTTP/1.1
    > Host: apihost
    > User-Agent: curl/7.68.0
    > accept: application/json
    >
    < HTTP/1.1 200 OK
    < Date: Mon, 19 Oct 2020 15:18:53 GMT
    < Content-Type: application/json; charset=utf-8
    < Content-Length: 15
    < Connection: keep-alive
    {"text":"tset"}
También se deben crear los tests que validan el API usando Mocha + Chai + Supertest. Los tests deben poder correrse usando "npm test".

## API - Opcional
- En la respuesta, indicar por medio del flag "palindrome": true si el texto enviado es un palindromo.
- Usar StandarJs

## FRONT
- Un App cliente en React que permita enviar textos a la API del punto anterior y muestre las respuestas del API desde la ultima a la primera.

## FRONT - libs & frameworks:
- NodeJs
- Webpack
- Bootstrap
- React

## FRONT - specs
- Usando React + Bootstrap/Material UI se debe crear una pantalla similar a la que se muestra en el siguiente wireframe:

<img src="https://github.com/PMolina00/Code_Challenge/blob/main/assets/img_n1.png?raw=true" alt="image front">

## FRONT - Opcional
- Usar Redux.
- Test unitarios usando Jest.
