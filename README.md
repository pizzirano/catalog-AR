# Catálogo AR - L&L Tecnologias LTDA

Catálogo de projetos em Realidade Aumentada desenvolvido pela L&L Tecnologias LTDA.

## Estrutura do Projeto

```
├── index.html                 ← catálogo (automático)
├── data/
│   └── projects.json          ← lista de projetos
├── assets/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── catalog.js
├── projects/
│   └── _template-ar/          ← TEMPLATE (duplica essa pasta)
│       ├── index.html         ← página do projeto
│       ├── ar.html            ← experiência AR
│       └── models/
│           └── model.glb      ← coloque seu modelo aqui
└── README.md
```

## Como Adicionar um Novo Projeto

1. **Duplique a pasta template:**
   - Copie a pasta `projects/_template-ar/`
   - Renomeie para o nome do seu projeto (ex: `projects/meu-projeto/`)

2. **Adicione o modelo 3D:**
   - Coloque o arquivo `model.glb` na pasta `models/` dentro da pasta do projeto
   - O modelo deve estar no formato GLB ou GLTF

3. **Adicione o modelo 3D e marcador:**
   - Adicione seu arquivo `model.glb` na pasta do projeto
   - O template usa o marcador padrão "hiro" do AR.js
   - Para usar um marcador personalizado, edite `ar.html` e adicione seu arquivo `.patt`
   - Você pode gerar um arquivo `.patt` usando: https://jeromeetienne.github.io/AR.js/three.js/examples/marker-training/examples/generator.html

4. **Edite as informações:**
   - Edite `index.html` dentro da pasta do projeto para adicionar descrição e informações

5. **Adicione ao catálogo:**
   - Edite `data/projects.json` e adicione uma entrada para seu projeto:
   ```json
   {
     "id": "meu-projeto",
     "name": "Nome do Projeto",
     "description": "Descrição do projeto",
     "image": "caminho/para/imagem.jpg",
     "folder": "meu-projeto"
   }
   ```

## Tecnologias Utilizadas

- **HTML5/CSS3** - Estrutura e estilização
- **JavaScript (Vanilla)** - Funcionalidades dinâmicas
- **A-Frame** - Framework para realidade aumentada
- **AR.js** - Biblioteca para marker tracking

## Requisitos

- Navegador moderno com suporte a WebGL
- Câmera web para experiência AR
- Conexão com internet (para carregar bibliotecas CDN)

## Desenvolvido por

**L&L Tecnologias LTDA**

