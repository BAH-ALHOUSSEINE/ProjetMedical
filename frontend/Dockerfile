FROM nginx:1.29.3-alpine-slim

# Supprimer l'ancien contenu
RUN rm -rf /usr/share/nginx/html/*

# Copier le build Angular
COPY dist/exo-frontend/browser/ /usr/share/nginx/html/

COPY nginx.conf /etc/nginx/conf.d/default.conf

# Renommer index.csr.html en index.html pour Nginx
RUN mv /usr/share/nginx/html/index.csr.html /usr/share/nginx/html/index.html

# Exposer le port 80
EXPOSE 80

# Lancer Nginx
CMD ["nginx", "-g", "daemon off;"]
