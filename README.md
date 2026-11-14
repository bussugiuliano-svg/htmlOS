# htmlOS

Sistema operativo in un solo file HTML. Apri `htmlOS.html` nel browser: niente installazione.

## Pacchetti

La cartella `packages/` è il catalogo che il **Package Browser** di htmlOS legge di default
(repository `bussuguliano-svg/htmlOS`, ramo `main`, cartella `packages`).

```
htmlOS.html
packages/
  index.json        ← generato automaticamente, non modificarlo a mano
  calcolatrice.json
  ...
tools/build-index.mjs
.github/workflows/index.yml
```

### Aggiungere un pacchetto
1. Crea `packages/nome.json` nel formato pacchetto htmlOS (`id`, `name`, `version`, `icon`, `description`, `permissions`, `code`, `css`, `files`).
2. Aggiungi i campi per il catalogo: `author`, `category` (app, theme, addon, update o libera), `tags` (array) e `updated` (AAAA-MM-GG). Facoltativi: `rating` e `votes`.
3. Dichiara in `permissions` solo ciò che serve: il Package Browser concede in automatico solo i permessi che il codice usa davvero e chiede conferma per quelli sensibili (`net`, `fs.read`, `fs.write`, `settings.write`, `system`).
4. Fai commit: la GitHub Action rigenera `packages/index.json`. In locale puoi lanciare `node tools/build-index.mjs`.

### Recensioni
Dal Package Browser, "Condividi su GitHub" apre una issue già compilata. Per mostrare i voti nel catalogo aggiorna `rating` e `votes` nel file del pacchetto.

## Varianti
In Impostazioni → *Varianti del sistema* puoi scaricare una copia di htmlOS con i pacchetti installati già incorporati. Puoi caricarla qui accanto a `htmlOS.html`.

## Sicurezza
I permessi sono applicati dalle API di htmlOS ma il codice gira nella stessa pagina: non sono un isolamento del browser. Controlla il codice di ogni pacchetto prima di pubblicarlo.
