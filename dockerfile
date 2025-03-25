# Etapa 1 - Imagem base leve com Node.js
FROM node:18-alpine

# Etapa 2 - Define o diretório de trabalho dentro do container
WORKDIR /app

# Etapa 3 - Copia apenas o package.json e o package-lock.json para instalar dependências
COPY package*.json ./

# Etapa 4 - Instala dependências
RUN npm install

# Etapa 5 - Copia o restante do código (opcional se usar volume)
COPY . .

# Etapa 6 - Expõe a porta 3000 para acesso externo
EXPOSE 3000

# Etapa 7 - Comando de execução no modo desenvolvimento
CMD ["npm", "start"]

RUN addgroup app && adduser -S -G app app
USER app

