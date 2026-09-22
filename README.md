# PixelFrame

Projeto de faculdade — Exp. Prática 2 / Estilização e layouts.
Interface de uma plataforma para organizações do terceiro setor, construída com HTML e CSS puro (sem frameworks).

## Estrutura

```
pixelframe/
├── index.html
├── script.js
├── README.md
└── css/
    ├── variables.css   → variáveis do Design System (cores, tipografia, espaçamentos)
    ├── base.css        → reset e estilos globais
    ├── grid.css        → sistema de grid de 12 colunas + 5 breakpoints
    ├── flexbox.css     → alinhamento interno dos componentes
    ├── nav.css         → menu de navegação (dropdown + hambúrguer)
    ├── estados.css     → estados interativos de botões e validação de formulários
    └── feedback.css    → alertas, badges, toast e modal
```

## Como rodar

Basta abrir o `index.html` no navegador — não há dependência de build ou servidor.

## Tecnologias

- HTML5 semântico
- CSS3 (variáveis nativas, Grid, Flexbox, pseudo-classes `:user-valid`/`:user-invalid`, `:focus-visible`)
- JavaScript vanilla (apenas para abrir/fechar toast e modal)
