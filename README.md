
# 🏥 Projet Médical – Gestion Clinique Dentaire

## 🧠 Description
Ce projet est une application web destinée à la gestion d’une **clinique dentaire**.  
Il permet à chaque **patient** de créer un compte, choisir un **médecin**, consulter les **rendez-vous disponibles**, annuler un rendez-vous, voir son **historique de consultations** et modifier son profil.  

Les **médecins** peuvent, quant à eux :
- Ajouter, modifier ou supprimer leurs rendez-vous,  
- Voir les rendez-vous pris par leurs patients,  
- Accéder à leurs informations et à l’historique des consultations.  

Le **médecin principal** peut également **ajouter d’autres médecins** au système.

---

## 🧩 Stack technique
- **Frontend :** Angular  
- **Backend :** Spring Boot (Java 17+)  
- **Base de données :** MySQL (via LAMP ou XAMPP)  
- **API REST :** Communication entre le frontend et le backend  

---

## ⚙️ Prérequis
Avant de lancer le projet, assure-toi d’avoir installé :
- **Node.js + Angular CLI** (`npm install -g @angular/cli`)  
- **Java 17** ou supérieur  
- **Maven** (souvent intégré dans Spring Boot)  
- **Serveur MySQL** (LAMP, XAMPP)

---

## 🚀 Lancement du projet


   ```
### Démaerer  le backend
3. Ensuite, exécute la commande :
   ```bash
   mvn spring-boot:run
   ```
   clique simplement sur le bouton ▶️ “Run Application”.

➡️ Le serveur Spring Boot démarre sur :  
👉 `http://localhost:8080` (ou `8081` selon ta configuration)

---

### 2️⃣ Démarrer le Frontend (Angular)

1. Ouvre le dossier du frontend.  
2. Installe les dépendances :
   ```bash
   npm install
   ```
3. Lance le projet :
   ```bash
   ng serve
   ```

➡️ Le frontend sera accessible sur :  
👉 `http://localhost:4200`

---

## 🌐 Accès à l’application
- **Frontend (Angular)** : `http://localhost:4200`  
-   `http://localhost:8081`  
- **Base de données MySQL** : via `phpMyAdmin`

---


