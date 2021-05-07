#!/bin/bash

echo "[Server - start.sh] Instalando pacotes..."
sudo npm install

echo "[Server - start.sh] Iniciando servidor no nodemon..."
node app.js