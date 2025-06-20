# Express blog api crud
## giorno 1
### Milestone 1
Creare un controller per i nostri post, in una cartella controllers.
All’interno, preparare tutte le funzioni necessarie e copare in ciascuna la logica delle funzioni che attualmente si trovano nel router (al momento restituiscono solo dei messaggi).
Poi tornare sul file delle rotte. Qui importare le funzioni dichiarate nel controller e le associamo alle varie rotte.
Testare su postman se chiamando gli endpoint riceviamo effettivamente le stesse risposte che avevamo prima.

### Milestone 2
Creare una cartella data in cui creare un file che contenga ed esporti l’array di posts.  Importare questo file in cima al controller.
Implementare le logiche delle CRUD:
- Index dovrà restituire la lista dei post in formato JSON
- Show dovrà restituire un singolo post in formato JSON
- Destroy dovrà eliminare un singolo post dalla lista, stampare nel terminale (console.log) la lista aggiornata, e rispondere con uno stato 204 e nessun contenuto.
### Bonus
- Implementare un filtro di ricerca nella index che mostri solo i post che hanno un determinato Tag
- In Show e Destroy, controllare se il parametro si riferisce ad un post esistente, in caso contrario, rispondere con uno stato 404 e un messaggio d’errore, sempre in formato JSON.

## giorno 2
### Milestone 1
Andare su Postman e preparare una nuova chiamata verso la rotta store.
- Impostare il verbo e l’endpoint corretti
- Selezionare il tab body e scegliere il formato raw e JSON
- Inserire come corpo della nostra request un oggetto che rappresenti un nuovo post
### Milestone 2
Impostare il body-parser per far sì che l app riesca a decifrare il request body.
Poi, all’interno della rotta Store, stampare nel terminale i dati in arrivo, grazie a un console.log
### Milestone 3
Implementare quindi la logica per aggiungere un nuovo post al nostro blog, e prepariamo la risposta adeguata.
Testare con postman.
### Milestone 4
Ripetere il procedimento per la rotta di Update, in modo da avere la possibilità di modificare le nostre risorse.
### Bonus
- In Update, controllare se il parametro si riferisce ad un post esistente, in caso contrario, rispondere con uno stato 404 e un messaggio d’errore, sempre in formato JSON.
