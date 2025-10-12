# Étape 1 : Base
FROM node:20-alpine AS base
WORKDIR /app

# Copie des fichiers nécessaires
COPY package.json package-lock.json ./

# Étape 2 : Dépendances
FROM base AS deps
# Installation avec npm ci (rapide + fiable car basé sur package-lock.json)
RUN npm ci

# Étape 3 : Build
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Build de l'application Next.js avec Turbopack
RUN npm run build

# Étape 4 : Runner (production)
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Copier uniquement ce qui est nécessaire pour exécuter
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=deps /app/node_modules ./node_modules

# Exposer le port
EXPOSE 3000

# Commande de démarrage
CMD ["npm", "start"]
