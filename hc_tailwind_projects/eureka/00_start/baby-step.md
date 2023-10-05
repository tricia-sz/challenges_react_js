## BABY STEP - TAILWINDCSS

1 - Iniciando o projeto:
`npm init -y`

2 - Instalando o TailwindCss:
`npm i tailwindcss@latest postcss@latest autoprefixer@latest`

3 - Gerar o arquivo de configuração `tailwind.config.js`
`npx tailwindcss init`

4 - Criar a estrutura de pastas `src/css/styles.css` e inserir:

`
@tailwind base;
@tailwind components;
@tailwind utilities;

`

5 - Gerar o build do css:
`npx tailwindcss-cli@latest build -o src/css/build.css`
