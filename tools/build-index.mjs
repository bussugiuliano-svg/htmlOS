// Rigenera packages/index.json leggendo tutti i pacchetti .json della cartella.
import {readdirSync,readFileSync,writeFileSync} from 'node:fs';
const dir=new URL('../packages/',import.meta.url),out=[];
for(const f of readdirSync(dir).filter(n=>n.endsWith('.json')&&n!=='index.json').sort()){
  let m;try{m=JSON.parse(readFileSync(new URL(f,dir),'utf8'))}catch(e){console.error('JSON non valido:',f);process.exitCode=1;continue}
  if(!/^[\w.\-]{2,60}$/.test(m.id||'')||!m.name||(typeof m.code!=='string'&&!m.css)){console.error('Pacchetto non valido (id, name, code/css):',f);process.exitCode=1;continue}
  out.push({id:m.id,name:m.name,version:String(m.version||'1'),icon:m.icon||'🧩',description:m.description||'',category:m.category||m.preset||'app',tags:m.tags||[],author:m.author||'',permissions:m.permissions||[],updated:m.updated||'',rating:m.rating||0,votes:m.votes||0,file:f});
}
writeFileSync(new URL('index.json',dir),JSON.stringify({packages:out},null,2)+'\n');
console.log(out.length+' pacchetti nell’indice');
