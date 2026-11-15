# CSS do site (Tailwind)

O site não usa mais o Tailwind pelo CDN. O CSS é gerado uma vez e servido pelo próprio site:

- `assets/site.css`: página inicial (index.html)
- `assets/pages.css`: contato, privacidade e blog

Sempre que adicionar classes novas do Tailwind no HTML, gere o CSS de novo (na raiz do projeto):

```
npx tailwindcss@3.4.17 -c tools/tailwind/site.config.js -i tools/tailwind/input.css -o assets/site.css --minify
npx tailwindcss@3.4.17 -c tools/tailwind/pages.config.js -i tools/tailwind/input.css -o assets/pages.css --minify
```

(o site.config.js precisa dos plugins: `npm i -D @tailwindcss/forms @tailwindcss/typography @tailwindcss/aspect-ratio`)
