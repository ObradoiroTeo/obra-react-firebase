## Montar el Deploy en NGINX

Pasos a seguir para ejecutar la app en Server Nginx.

### `apt-get`

Ejecutamos `apt-get install nginx` para instalar nginx en ubuntu.

### `Crear el directorio`

El siguiente paso es crear una carpeta en nuestro sistema, si queremos añadir un dominio.com, hacemos lo siguiente:
`sudo mkdir -p /var/www/{dominio.com ó nombre de la aplicación}/`

### `Clonar repositorio`

Si nuestro proyecto esta en git lo idea es clonar el reposotirio en la carpeta que creamos, si usamos react o angular con gulp ejecutamos los comando correspondientes:
`npm run build`

### `Crear el Host Virtual en Nginx sites-Availables`

Vamos a crear un archivo para dominio.com ejecutando el siguiente comando: `sudo nano /etc/nginx/sites-available/dominio.com`

Pegamos el siguiente contenido:

```console
server {
    ## Escucha en el puerto 80 (HTTP)
    listen  8080;

    ## Raíz donde se encuentra la aplicación recuerda que reactcreala carpeta build y angular con ## gulp crea la carpeta dist
    root /var/www/dominio.com/build;

    ## Orden de prioridad de los archivos index
    index index.html index.htm;

    ## dominbre de dominio que se ingresa en el navegador
    server_name dominio.com;

    ##ruta principal
    location / {

        ## si nuestra app  usa modo html5 siempre que cargueelindex.html
        try_files $uri  /index.html;
    }
}
```

### `Crear el Host Virtual en Nginx sites-enabled`

A pesar de haber creado este archivo, todavía no podemos acceder a nuestra página Web, ya que la configuración está en sites-available, pero no en sites-enabled. Para habilitar el host virtual crearemos un enlace simbólico entre ambas carpetas:

`sudo ln -s /etc/nginx/sites-available/dominio.com /etc/nginx/sites-enabled/dominio.com`

## `Reiniciar Nginx`

A menos que reiniciemos Nginx, los cambios no se aplicarán:
`sudo service nginx restart`

## Ejecución

Si todo ha ido bien el el navegador escribimos `localhost:8080` y se carga la aplicación desarrollada.
