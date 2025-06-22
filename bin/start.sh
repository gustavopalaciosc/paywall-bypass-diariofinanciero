#!/bin/bash

# Verifica si Node.js está instalado (por si es necesario para el frontend)
if ! command -v node &> /dev/null
then
    echo "Node.js no está instalado. Instálalo antes de continuar."
    exit 1
fi


# Cambia al directorio del frontend y arranca el entorno
echo "Iniciando el frontend..."
cd ../frontend || { echo "No se puede acceder a la carpeta frontend"; exit 1; }
pnpm install  # Instalar dependencias si es necesario
npm run dev &  # Ejecuta el frontend en segundo plano

# Cambia al directorio del backend y arranca el entorno
echo "Iniciando el backend..."
cd ../backend || { echo "No se puede acceder a la carpeta backend"; exit 1; }
uvicorn app.main:app --reload  

# Regresa al directorio original
cd ../bin || { echo "No se puede acceder a la carpeta bin"; exit 1; }

# Mantén el script corriendo para que los servicios sigan activos
echo "Ambos entornos (frontend y backend) están corriendo."
wait
