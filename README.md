# htmlOS

Un sistema operativo in un solo file HTML: apri `htmlOS.html` nel browser, senza installare nulla.
Ha finestre, file system, app, temi, pacchetti installabili e un **Package Browser** che legge il catalogo da questa repository.

---

## ⚠️ Leggi prima di usarlo

**È un progetto sperimentale, non un prodotto finito. Usalo per curiosità e per provare, non per lavoro.**

- **Chi ha scritto il codice.** Il codice di `htmlOS.html`, dei pacchetti in `packages/` e degli strumenti di questa repository è stato **scritto da Claude, un assistente di intelligenza artificiale di Anthropic**, in conversazione con il proprietario della repository (@bussugiuliano-svg), che ha deciso cosa realizzare, ha provato i risultati e ha pubblicato la repository. Non è stato scritto né rivisto riga per riga da sviluppatori esperti.
- **È testato poco.** I controlli fatti sono stati test automatici in un browser simulato (non in browser reali, né su telefono) e prove manuali limitate. Non c'è stato un test serio, né un controllo di sicurezza indipendente. Possono esserci errori, comportamenti diversi da browser a browser e perdite di dati.
- **Non caricarci file importanti.** I file di htmlOS vivono nel browser (`localStorage` e, con l'apposito pacchetto, `IndexedDB`). Possono sparire se cancelli i dati del sito, se il browser libera spazio, in navigazione privata, se lo spazio finisce o per un errore del programma. Non c'è sincronizzazione né copia di sicurezza automatica. Tieni sempre una copia altrove di ciò che ti serve (Impostazioni → Archiviazione → *Esporta sistema*; con IndexedDB attivo usa il *backup completo*).
- **Nessuna garanzia.** Il software è fornito «così com'è», senza alcuna garanzia, e chi lo pubblica o lo scrive non risponde di danni o perdite derivanti dall'uso.
- **Non è un sistema sicuro.** La password di blocco è una protezione leggera: i dati restano leggibili nel browser. Nulla è cifrato.

## 🔒 Pacchetti e sicurezza

I pacchetti sono **codice che viene eseguito nella pagina**. I permessi che vedi (rete, file, sistema…) sono controllati dalle API di htmlOS, ma **non sono un isolamento del browser**: un pacchetto scritto male o con cattive intenzioni potrebbe aggirarli. Per questo:

- installa solo pacchetti di cui ti fidi e, se puoi, leggine il codice;
- il Package Browser concede in automatico solo i permessi essenziali che il codice usa davvero e ti chiede conferma per quelli sensibili (`net`, `fs.read`, `fs.write`, `settings.write`, `system`) e per il codice che accede direttamente al browser: **leggi con attenzione quegli avvisi**, l'analisi è automatica e può sbagliare;
- i pacchetti inclusi qui sono stati scritti anch'essi con Claude e provati poco; alcuni (per esempio quelli con `system` o `fs.read`) hanno accesso ampio per natura;
- chiunque può copiare questa repository e cambiarne i pacchetti: collega il Package Browser solo a repository che ritieni affidabili (⚙ Sorgente).

Quando il Package Browser è collegato, il tuo browser contatta `raw.githubusercontent.com` e `api.github.com`: GitHub vede quindi il tuo indirizzo IP, come per qualsiasi sito.

## ⭐ Recensioni e stelle

Le stelle del Package Browser sono visibili a tutti e usano le **Issues** di questa repository (devono essere attive).

- Per recensire, "Pubblica su GitHub" apre una issue con titolo `Recensione 4★: Nome (id)`: serve un account GitHub. Una recensione per account e pacchetto, vale l'ultima. Il Package Browser le legge senza login e calcola la media; i risultati restano in memoria per 10 minuti ("Aggiorna" li ricarica).
- **Le recensioni NON sono moderate automaticamente.** Chiunque abbia un account GitHub può scrivere ciò che vuole: possono esserci recensioni false, di parte, offensive o scritte da chi non ha mai usato il pacchetto. Nessuno verifica che chi vota abbia davvero installato il pacchetto, e non esiste alcun filtro automatico.
- La moderazione è **solo manuale**: il proprietario può chiudere o eliminare un'issue (e sparisce dal conteggio) o bloccare le conversazioni, quando se ne accorge. Non ci sono tempi garantiti.
- **Le stelle non sono una garanzia di sicurezza o di qualità.** Un pacchetto con tante stelle può comunque essere pericoloso o difettoso: controlla sempre i permessi richiesti.
- Le recensioni pubbliche mostrano il nome utente GitHub di chi le scrive e sono visibili a chiunque.
- Per i limiti di GitHub (circa 60 richieste all'ora per indirizzo IP senza login) le stelle possono risultare non aggiornate.
- `rating` e `votes` nel file di un pacchetto sono un valore di partenza facoltativo, **dichiarato dall'autore del pacchetto e non verificato**, che si somma ai voti pubblici.

## Come è fatta la repository

```
htmlOS.html
packages/
  index.json        ← generato automaticamente, non modificarlo a mano
  calcolatrice.json
  ...
tools/build-index.mjs
.github/workflows/index.yml
```

Il Package Browser legge di default la repository `bussugiuliano-svg/htmlOS`, ramo `main`, cartella `packages`. Si può cambiare da ⚙ Sorgente.

### Aggiungere un pacchetto
1. Crea `packages/nome.json` nel formato pacchetto htmlOS (`id`, `name`, `version`, `icon`, `description`, `permissions`, `code`, `css`, `files`).
2. Aggiungi i campi per il catalogo: `author`, `category` (app, theme, addon, update o libera), `tags` (array) e `updated` (AAAA-MM-GG).
3. Dichiara in `permissions` **solo ciò che serve**.
4. Fai commit: la GitHub Action rigenera `packages/index.json` (in locale: `node tools/build-index.mjs`). Anche senza Action, il Package Browser mostra comunque i file `.json` presenti nella cartella.

Chi pubblica un pacchetto è responsabile del suo contenuto: non includere codice che non hai scritto o che non capisci.

## Varianti

In Impostazioni → *Varianti del sistema* puoi scaricare una copia di htmlOS con i pacchetti installati già incorporati. Una variante ha dati propri, separati dagli altri htmlOS aperti dallo stesso indirizzo. Valgono le stesse avvertenze: contiene il codice dei pacchetti scelti.
