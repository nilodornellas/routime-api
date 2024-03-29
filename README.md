# APP

Routime App.

## RFs (Requisitos funcionais)

- [X] Deve ser possível se cadastrar;
- [X] Deve ser possível se autenticar;
- [X] Deve ser possível obter o perfil de um usuário logado;

- [X] Deve ser possível o usuário cadastrar atividades;
- [ ] Deve ser possível o usuário listar suas atividades;
- [ ] Deve ser possível o usuário editar suas atividades;
- [ ] Deve ser possível o usuário excluir suas atividades;

- [ ] Deve ser possível o usuário cadastrar seus grupos de atividades;
- [ ] Deve ser possível o usuário listar seus grupos de atividades;
- [ ] Deve ser possível o usuário editar seus grupos de atividades;
- [ ] Deve ser possível o usuário excluir seus grupos de atividades;

## RNs (Requisitos negócio)

- [X] O usuário não deve poder se cadastrar com um e-mail duplicado;

## RNFs (Requisitos não-funcionais)

- [X] A senha do usuário precisa estar criptografada;
- [ ] Os dados da aplicação precisam estar persistidos em um banco PostgresSQL;
- [ ] O usuário deve ser identificado por um JWT (JSON Web Token);


## INSTRUÇÕES DE PACKAGES PARA INSTALAR
- npm i typescript @types/node tsx tsup - D
- npx tsc --init
- npm i fastify
- configurar o package.json
- configurar npmrc
- npm i dotenv
- npm i zod
- npm i eslint @rocketseat/eslint-config -D
- npm i prisma -D  
- npm i @prisma/client
- npm i bcryptjs 
- npm i -D @types/bcryptjs
- npm i vitest vite-tsconfig-paths -D 