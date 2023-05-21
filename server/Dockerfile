# Начинаем с базового образа Node.js
FROM node:14

# Создаем директорию app
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем файлы сервера
COPY src/ .

# Запускаем сервер
CMD [ "node", "socket.js" ]
