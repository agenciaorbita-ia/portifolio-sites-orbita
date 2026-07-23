# Portfólio Órbita — Sites & Landing Pages

Site institucional/portfólio do braço de construção de sites e landing pages da **Agência Órbita**.

Site estático em **HTML + CSS + JavaScript puro** (sem framework), pronto para deploy na Vercel, Netlify ou GitHub Pages.

## Estrutura

```
.
├── index.html        # Portfólio (home): hero, serviços, portfólio, depoimentos, FAQ
├── precos.html       # Página de planos e políticas
├── css/
│   └── styles.css    # Estilos (mobile-first, paleta navy + dourado da Órbita)
├── js/
│   └── main.js       # Menu, esteiras, FAQ, animações
└── assets/
    ├── logo-icon.png
    ├── cases/        # Capturas dos sites entregues (esteira do portfólio)
    └── services/     # Recortes usados no leque de cada serviço
```

## Desenvolvimento

Por ser estático, basta abrir o `index.html` no navegador. Para servir localmente:

```bash
npx serve .
```

## Deploy na Vercel

1. Importar este repositório na Vercel.
2. Framework Preset: **Other** (site estático — sem build).
3. Deploy. A Vercel serve `index.html` na raiz automaticamente.

---

© Agência Órbita · Vale do Aço, MG
