# Lions Seminovos — front-end

Aplicação front-end criada para o desafio técnico: uma versão **inspirada** do site da [Lions Seminovos](https://lionsseminovos.com.br/), com as abas **Página inicial**, **Catálogo** e **Agende uma visita**, responsiva e com botões que levam a páginas externas.

**Stack:** React · Vite · React Router · MUI (Material UI) · Swiper

---

## Como rodar

**Pré-requisitos:** Node.js 18 ou superior e npm.

```bash
# 1. instalar as dependências
npm install

# 2. rodar em desenvolvimento
npm run dev
# abra http://localhost:5173

# 3. (opcional) gerar a versão de produção e visualizá-la
npm run build
npm run preview
```

---

## Como foi resolver o teste

1. **Protótipo.** Comecei esboçando o layout que queria recriar e o que era essencial no site e não poderia faltar, também anotei detalhes como botões flutuantes lateral e Whatsapp e pedido de permissão de cookies.
2. **Código.** Escrevi o projeto em React usando o Vite separando telas, componentes, regras e dados, e levando o estado dos filtros para a URL.
3. **Biblioteca de UI.** Utilizei o MUI por já possuir familiaridade com a biblioteca, utilizei a configuração fácil de tema oferecida pela ferramenta disponibilizando tema claro e escuro.

## O que eu mantive do site original e o que eu mudei

| Do site original | Na minha versão |
| --- | --- |
| Identidade vermelha e amarelo, fonte Montserrat | Mesmo esquema de cores e fonte, definidos no tema |
| Vários slides promocionais | Carrossel com Swiper |
| Aba lateral "Seu desconto está aqui" | Aba que abre no hover/toque e pede só nome e telefone |
| Botão flutuante do WhatsApp | Botão com mensagem **contextual** (já informa o carro que a pessoa está vendo ou simulação feita) |
| Catálogo por categoria | Catálogo com busca, filtros e ordenação |

**Melhorias que acrescentei**
- **Simulador de parcela:** cada card mostra "ou 48x de R$ X" e abre um diálogo com sliders de entrada e prazo (tabela Price). Dali o cliente vai para o agendamento ou para o WhatsApp com a simulação já escrita.
- **Busca rápida na Home:** leva marca, tipo e preço máximo direto para o catálogo já filtrado.
- **Agendamento com validação:** não aceita domingos nem datas passadas; ao concluir, oferece **adicionar ao calendário** (arquivo `.ics`) e confirmar no WhatsApp, o que ajuda a reduzir faltas.
- **Camada de leads:** todo contato (aba lateral e agendamento) passa por um ponto único, que anexa a página de origem e o consentimento.

## Organização do código

```
src/
├── main.jsx · App.jsx            # entrada, tema, rotas
├── theme/                        # tema MUI (paleta, tipografia, overrides) e ThemeRoot
├── pages/                        # telas finais: Home, Catalog, Visit
├── components/
│   ├── layout/                   # Header, Footer, Layout
│   ├── ui/                       # Button, SelectField, SectionHeader, Sprite
│   ├── cars/                     # CarCard, CarGrid, CarFilters, CarDetailDialog, CarIllustration
│   ├── home/                     # HeroCarousel, QuickSearch, Differentials
│   └── engagement/               # WhatsAppFab, LeadDrawer, CookieConsent (captação e privacidade)
├── features/visit/               # formulário, validação, sucesso e info da loja
├── hooks/useCarFilters.js        # filtros e ordenação (estado na URL)
├── services/leads.js             # ponto único de saída de leads
├── data/                         # cars, slides, store (dados e constantes)
├── utils/                        # format, finance, whatsapp, calendar, consent
└── assets/                       # imagens dos produtos e banners
```