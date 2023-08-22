# Utiliza una imagen base oficial de PHP
FROM php:8.0-fpm

# Instala las dependencias necesarias (ajusta según tus necesidades)
RUN apt-get update && apt-get install -y \
    libpng-dev \
    zip \
    unzip

# Instala Composer globalmente
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Configura el directorio de trabajo en el contenedor
WORKDIR /var/www

# Copia los archivos del proyecto al contenedor
COPY . .

# Instala las dependencias de Composer
RUN composer install

# Expone el puerto 9000 (ajusta según tu configuración)
EXPOSE 8000

# Comando para iniciar el servidor PHP-FPM
CMD ["php-fpm"]
