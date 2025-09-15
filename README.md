# Site Portfólio Eduardo Drozda

Um site de portfólio moderno e responsivo desenvolvido com Angular, baseado no site atual do Eduardo Drozda.

## 🚀 Características

- **Design Moderno**: Interface limpa e profissional
- **Responsivo**: Funciona perfeitamente em todos os dispositivos
- **Tema Escuro/Claro**: Alternância de tema com persistência no localStorage
- **Navegação Suave**: Scroll suave entre seções
- **Formulário de Contato**: Sistema de contato funcional
- **Animações**: Transições suaves e animações CSS
- **SEO Friendly**: Estrutura otimizada para mecanismos de busca

## 📁 Estrutura do Projeto

```
src/app/
├── core/                    # Funcionalidades principais
│   ├── models/             # Interfaces e tipos
│   └── services/           # Serviços (Data, Theme, Contact, Navigation)
├── pages/                   # Páginas principais
│   ├── home/               # Página inicial
│   ├── about/              # Sobre mim
│   ├── skills/             # Habilidades técnicas
│   └── contact/            # Contato
└── shared/                 # Componentes compartilhados
    ├── components/         # Componentes reutilizáveis
    │   ├── header/         # Cabeçalho com navegação
    │   ├── footer/         # Rodapé com links sociais
    │   ├── skill-card/     # Card de habilidade
    │   └── contact-form/   # Formulário de contato
    └── pipes/              # Pipes personalizados
```

## 🛠️ Tecnologias Utilizadas

- **Angular 20** - Framework principal
- **TypeScript** - Linguagem de programação
- **SCSS** - Pré-processador CSS
- **Font Awesome** - Ícones
- **Google Fonts** - Tipografia (Inter)

## 📦 Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd eduardo-drozda-site
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto:
```bash
npm start
```

4. Acesse `http://localhost:4200` no seu navegador

## 🎨 Personalização

### Adicionando Imagens

1. Coloque suas imagens em `src/assets/images/`
2. Atualize as referências nos componentes conforme necessário

### Modificando Conteúdo

1. **Informações Pessoais**: Edite `src/app/core/services/data.service.ts`
2. **Habilidades**: Modifique o array de skills no mesmo arquivo
3. **Informações de Contato**: Atualize as informações de contato

### Customizando Estilos

1. **Cores**: Modifique as variáveis CSS nos arquivos SCSS
2. **Fontes**: Altere a fonte no `src/styles.scss`
3. **Layout**: Ajuste os estilos nos componentes individuais

## 📱 Responsividade

O site é totalmente responsivo e funciona em:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (até 767px)

## 🌙 Tema Escuro

O site inclui um sistema de tema escuro que:
- Alterna entre tema claro e escuro
- Salva a preferência no localStorage
- Respeita a preferência do sistema operacional
- Aplica o tema em todos os componentes

## 📧 Formulário de Contato

O formulário de contato inclui:
- Validação de campos obrigatórios
- Validação de email
- Estados de loading e sucesso
- Tratamento de erros

## 🚀 Deploy

Para fazer o deploy:

1. Gere o build de produção:
```bash
npm run build
```

2. Os arquivos estarão em `dist/eduardo-drozda-site/`

3. Faça o upload para seu servidor de hospedagem

## 📄 Licença

Este projeto é propriedade de Eduardo Drozda.

## 🤝 Contribuição

Para contribuir com o projeto:
1. Faça um fork do repositório
2. Crie uma branch para sua feature
3. Faça commit das mudanças
4. Abra um Pull Request

## 📞 Contato

- **Email**: contato@eduardodrozda.com
- **LinkedIn**: [Eduardo Drozda](https://linkedin.com/in/eduardodrozda)
- **GitHub**: [eduardodrozda](https://github.com/eduardodrozda)
