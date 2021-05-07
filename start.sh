#!/bin/bash

echo "[Server - start.sh] Instalando pacotes..."
npm install

echo "[Server - start.sh] Iniciando servidor no nodemon..."
npx nodemon app.js