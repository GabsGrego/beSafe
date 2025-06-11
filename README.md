# 📱 Be Safe – App de Apoio em Situação de Enchente

Be Safe é um aplicativo mobile criado com o objetivo de oferecer **informações práticas, suporte emocional e orientação a grupos vulneráveis** durante enchentes. Ele busca auxiliar a população com **guias de segurança** e um espaço para **contatos de emergência**.

---

## 📸 Capturas de Tela (Screenshots)

![image](https://github.com/user-attachments/assets/e83b593f-fca1-4a48-802e-672277506c3a)
![image](https://github.com/user-attachments/assets/3b7f69dd-d45d-4c3f-a64a-e2adca56de26)


---

### 🎥 Link do video de demonstração do app no Youtube

    https://youtu.be/CXInRf-vhz0


## 🚀 Funcionalidades

- ✅ Cadastro e login com autenticação Firebase
- ✅ Guia de segurança com orientações práticas
- ✅ Apoio para grupos vulneráveis: crianças, idosos, PCDs e animais
- ✅ Lista de contatos úteis para suporte emocional

---

## 🛠️ Tecnologias Utilizadas

- **React Native** com [Expo](https://expo.dev/)
- **Firebase Authentication** (login/cadastro)
- **Firestore** (armazenamento de dados de perfil)
- **React Navigation** (navegação entre telas)

---

## 📁 Estrutura de Pastas (sugestão)

```bash
BESAFE/
├── src
|    ├── firebase
|    |    └── config.ts
|    ├── navigation
|    |    ├── AppNavigator.tsx
|    |    └── types.tsx
|    └── screens
|         ├── LoginScreen.tsx
|         ├── CadastroScreen.tsx
|         ├── HomeScreen.tsx
|         ├── PerfilScreen.tsx
|         ├── GuiaEmergenciaScreen.tsx
|         ├── GruposVulneraveisScreen.tsx
|         └── SuporteEmocionalScreen.tsx
├── app.json
├── App.tsx
├── eas.json
├── index.ts
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json

```

---

## ⚙️ Como Rodar o Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/be-safe.git
cd be-safe
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Execute o App

```bash
npx expo start
```

### 4. Instale a extensão Mobile View no VSCode e acesse com a URL

```bash
http://localhost:8081
```

---


## 📌 Funcionalidades Futuras

- Notificações de alerta em tempo real

- Modo offline dos guias

- Cadastro de abrigos e pontos de apoio

- Tradução para outros idiomas

- Módulo de doações e voluntariado

## 🛡️ Licença
Este projeto está sob a licença **MIT**.

##💡 Créditos

**Desenvolvedores do Projeto:**

Gabriel Grego
Kayque Ferreira
André Alves

**Professor Orientador:** Hete Caetano dos Santos
**FIAP - Global Solutions 2025**
