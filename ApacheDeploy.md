This project was bootstrapped with Create React App.
Notas

En la guia uso editor nano. Para guardar control+O para salir control+X Para moverte por los directorios usa el Terminal.
Montar el Deploy en Apache

Pasos a seguir para ejecutar la app en Server Apache.
npm run build

Ejecutamos este script en la carpeta del proyecto para crear un deploy de nuestra app.
/var/www/html

En el directorio /var/www/html al que accedemos por consola o por otras ubicaciones/equipo creamos una carpeta ejemplo: miWeb para pegar todos los archivos generados con el build.
sites-available

Para hacer accesible miWeb nos movemos hasta sites-available cd /etc/apache2/sites-available Creamos una copia de 000-default.conf que se llame miWeb sudo cp 000-default.conf miWeb.conf Accedemos al nuevo archivo con sudo nano y editamos dos lineas:

En la primera virtualHost:80 cambiar a :8080 Mas abajo en DocumentRoot cambiamos a /var/www/miWeb

este es el puerto por el que accederemos a nuestro sitio y la dirección donde está.
Puertos

Configuramos puertos a escuchar para conectarnos remotamente a los archivos. Nos movemos hasta cd /etc/apache2 Editamos el archivo ports sudo nano ports.conf y añadimos Listen 8080

Introducimos nuestro sitio web en los sitios accesibles. Nos movemos hasta cd /etc/apache2/sites-enabled Para que sites-enabled apunte a nuestro fichero de configuracion sudo a2ensite miWeb.conf
apache2.conf

Para que todos los links internos de la app sean accesibles.

Editar el archivo sudo nano /etc/apache2/apache2.conf y cambiar en AllowOverride None por AllowOverride All

<Directory /var/www/>
Options Indexes FollowSymLinks
AllowOverride None
Require all granted
</Directory>

.htaccess

Nos movemos a la carpeta del proyecto dentro de apache cd /var/www/html/miWeb y creamos el archivo touch .htaccess

Lo editamos con sudo nano .htaccess y añadimos:

Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]

Reinicio de Apache

Una vez hechos todos estos pasos para que sean efectivos reiniciamos el servicio de apache systemctl restart apache2
Ejecución

Si todo ha ido bien el el navegador escribimos localhost:8080 y se carga la aplicación desarrollada.
