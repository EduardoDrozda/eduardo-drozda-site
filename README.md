# Site Portfólio Eduardo Drozda

Um site de portfólio moderno e responsivo desenvolvido com Angular, inspirado no design cyberpunk/terminal com tema escuro e elementos neon.

## 🚀 Características

- **Design Cyberpunk**: Interface com tema escuro, cores neon e efeitos de terminal
- **Responsivo**: Funciona perfeitamente em todos os dispositivos
- **Navegação Suave**: Scroll suave entre seções com offset para header fixo
- **Animações**: Efeitos de matrix rain, typewriting, neon pulse e bounce
- **Menu Mobile**: Hamburger menu responsivo com animações
- **Download CV**: Botão funcional para download do currículo
- **SEO Friendly**: Estrutura semântica e acessível

## 📁 Estrutura do Projeto

```
src/app/
├── core/                    # Funcionalidades principais
│   ├── models/             # Interfaces (Skill, PersonalInfo, ContactInfo)
│   └── services/           # Serviços (DataService, NavigationService)
├── pages/
│   └── home/               # Página inicial
│       ├── components/     # Componentes da página home
│       │   ├── hero/        # Seção principal com typewriting
│       │   ├── about/       # Sobre mim com foto e código
│       │   ├── skills/      # Habilidades técnicas com chips
│       │   └── contact/     # Formulário de contato
│       └── enums/           # Enumerações (SectionEnum)
└── shared/                 # Componentes compartilhados
    └── components/
        └── header/         # Cabeçalho com navegação e menu mobile
```

## 🛠️ Tecnologias Utilizadas

- **Angular 20** - Framework principal
- **TypeScript** - Linguagem de programação
- **SCSS** - Pré-processador CSS com variáveis customizadas
- **Font Awesome** - Ícones
- **Google Fonts** - Tipografia (Source Code Pro, Inter)

## 🎨 Design System

### Cores
- **Matrix Green**: `#00ff41` - Cor principal neon
- **Cyber Blue**: `#00d4ff` - Cor secundária
- **Matrix Dark**: `#0a0a0a` - Fundo escuro
- **Code Background**: `#1a1a1a` - Fundo dos cards

### Tipografia
- **Fonte Principal**: Source Code Pro (monospace)
- **Fonte Secundária**: Inter (sans-serif)

### Efeitos
- **Neon Pulse**: Animação de brilho para elementos neon
- **Matrix Rain**: Efeito de chuva de código na hero
- **Typewriting**: Animação de digitação no título
- **Bounce**: Animação de salto no scroll down

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

## 🎯 Funcionalidades Principais

### Hero Section
- **Typewriting Animation**: Título "ENGENHEIRO DE SOFTWARE" com efeito de digitação
- **Matrix Rain**: Efeito de chuva de código com tecnologias
- **Botões de Ação**: GitHub, LinkedIn e Download CV
- **Scroll Down**: Indicador animado para próxima seção

### About Section
- **Layout Responsivo**: Ordem dos elementos ajustada para mobile
- **Foto Profissional**: Imagem com hover effects
- **Código Criativo**: Snippet JavaScript estilizado
- **Estatísticas**: Anos de experiência e métricas
- **Quote**: Citação inspiradora

### Skills Section
- **Chips de Tecnologia**: Linguagens e frameworks organizados por categoria
- **Categorias**: Front-end, Back-end e Mobile
- **Animações**: Cards com efeitos de entrada
- **Terminal Stats**: Estatísticas em formato terminal

### Header
- **Navegação Suave**: Scroll smooth entre seções
- **Menu Mobile**: Hamburger menu responsivo
- **Detecção de Seção**: Destaque da seção ativa
- **Logo Animado**: Efeito hover no logo

## 📱 Responsividade

O site é totalmente responsivo com breakpoints:
- **Mobile**: até 767px
- **Tablet**: 768px - 1023px  
- **Desktop**: 1024px+

### Ajustes Mobile
- Menu hamburger com animações
- Ordem dos elementos ajustada na seção About
- Cards de skills empilhados verticalmente
- Scroll down centralizado

## 🔧 Personalização

### Modificando Conteúdo

1. **Informações Pessoais**: Edite `src/app/core/services/data.service.ts`
   - Nome, título, descrição
   - Experiência profissional
   - Informações de contato

2. **Habilidades**: Modifique o array de skills no mesmo arquivo
   - Linguagens por categoria
   - Frameworks e ferramentas
   - Descrições das competências

3. **Imagens**: Substitua arquivos em `public/images/`
   - `me.jpeg` - Foto profissional
   - `github.png`, `linkedin.png`, `file.png` - Ícones dos botões

### Customizando Estilos

1. **Cores**: Modifique as variáveis CSS em `src/styles.scss`
2. **Animações**: Ajuste durações e efeitos nos arquivos SCSS
3. **Layout**: Modifique grid e flexbox nos componentes

## 📄 Arquivos Estáticos

- **Currículo**: `public/files/Curriculo Eduardo Fullstack - PT.pdf`
- **Ícones**: `public/images/` (GitHub, LinkedIn, Download)
- **SVGs**: `public/svgs/` (Ícones das skills)

## 🔍 SEO e Otimizações

O projeto inclui otimizações completas de SEO:

### **Meta Tags Otimizadas**
- ✅ Title e description otimizados
- ✅ Open Graph para redes sociais
- ✅ Twitter Cards
- ✅ Meta tags para dispositivos móveis
- ✅ Canonical URLs

### **Dados Estruturados**
- ✅ Schema.org Person markup
- ✅ Breadcrumb navigation
- ✅ Occupation e skills markup
- ✅ JSON-LD structured data

### **Performance**
- ✅ Lazy loading de imagens
- ✅ Preload de recursos críticos
- ✅ DNS prefetch para domínios externos
- ✅ Compressão e minificação
- ✅ Service Worker (opcional)

### **Acessibilidade**
- ✅ Alt texts em todas as imagens
- ✅ ARIA labels e roles
- ✅ Hierarquia de headings correta
- ✅ Navegação por teclado
- ✅ Contraste de cores adequado

### **Analytics**
- ✅ Google Analytics 4 integrado
- ✅ Tracking de eventos personalizados
- ✅ Monitoramento de performance
- ✅ Relatórios de conversão

## 🚀 Deploy

Para fazer o deploy:

1. Gere o build de produção:
```bash
npm run build
```

2. Os arquivos estarão em `dist/eduardo-drozda-site/`

3. Faça o upload para seu servidor de hospedagem

### **Configuração Pós-Deploy**

1. **Google Search Console**:
   - Adicione o site ao Google Search Console
   - Verifique a propriedade usando o arquivo HTML ou meta tag
   - Envie o sitemap.xml

2. **Google Analytics**:
   - Configure o GA4 com seu ID de tracking
   - Atualize o `GA_TRACKING_ID` no `GoogleAnalyticsService`

3. **Verificação de SEO**:
   - Use ferramentas como Lighthouse, PageSpeed Insights
   - Teste a estrutura de dados com Google Rich Results Test
   - Verifique acessibilidade com axe-core

## 🎮 Interações

- **Hover Effects**: Todos os elementos interativos têm efeitos hover
- **Scroll Smooth**: Navegação suave entre seções
- **Menu Mobile**: Animação do hamburger e transições
- **Download CV**: Download automático do currículo
- **Links Externos**: GitHub e LinkedIn abrem em nova aba

## 📞 Contato

- **Email**: contato@eduardodrozda.com
- **LinkedIn**: [Eduardo Drozda](https://linkedin.com/in/eduardodrozda)
- **GitHub**: [eduardodrozda](https://github.com/eduardodrozda)

## 📄 Licença

Este projeto é propriedade de Eduardo Drozda.

## 🤝 Contribuição

Para contribuir com o projeto:
1. Faça um fork do repositório
2. Crie uma branch para sua feature
3. Faça commit das mudanças
4. Abra um Pull Request

---

**Desenvolvido com ❤️ por Eduardo Drozda**
