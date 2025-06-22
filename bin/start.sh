#!/bin/bash

if ! command -v node &> /dev/null
then
    echo "Node.js no está instalado. Instálalo antes de continuar."
    exit 1
fi


echo "Iniciando el frontend..."
cd ../frontend || { echo "No se puede acceder a la carpeta frontend"; exit 1; }
pnpm install  
npm run dev &  

echo "Iniciando el backend..."
cd ../backend || { echo "No se puede acceder a la carpeta backend"; exit 1; }
uvicorn app.main:app --reload  

cd ../bin || { echo "No se puede acceder a la carpeta bin"; exit 1; }

echo "Ambos entornos (frontend y backend) están corriendo."
wait
