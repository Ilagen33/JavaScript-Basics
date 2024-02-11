/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/*
Un Datatype è riferito al tipo di valore che una variabile può contenere, ce ne sono di diversin i principali sono: stringa, numeri, booleani, null, undefined, array, oggetti
*/

    /*
    Le stringhe sono come una sequenza di lettere o parole, vengono infatti usati per rappresentare del testo. 
    Come ad esempio "macchina" è una stringa perchè è un insieme di lettere tutte in fila una dopo l'altra
    Vengono delimitate da apici singoli, doppi o rovesci, può avere lunghezza variabile e parte da 0, infatti la stringa " " è vuota.
    */

        let stringa = "macchina";
        let nome = "Ilaria";
        let saluto = "Ciao, a tutti";

        console.log(stringa);
        console.log(nome);
        console.log(saluto);

    /*
    I numeri possonno essere qualsiasi presi da un certo intervallo, nel senso che non posso prendere infiniti numeri ma sonon definiti da un limite di grandezza ( e-(253-1) \ e+(253 - 1))
        I numeri possono essere grandi o piccoli, positivi o negativi, interi o decimali ed esistono dei valori speciali:
        - +Infinity / -Infinity: rappresenta l'infinito, risultato dato per esempio dalla divisione per zero o altri casi specifici;
        - NaN (Not a Number): ovvero se si eseguono operazioni non valide
        */
        
            let numeroPositivo = 1000;
            let numeroNegativo = -545;
            let numeroIntero = 2559;
            let numeroDecimale = 25.59;

            console.log(numeroPositivo);
            console.log(numeroNegativo);
            console.log(numeroIntero);
            console.log(numeroDecimale);
        
        /* 
        Si possono eseguire operazioni aritmetiche come addizione '+' , sottrazione '-', divisione '/'
        */

            let somma = 1000 + 2559;  //3559
            let sottrazione = 25 - 10; //15
            let moltiplicazione = 25 * 10; //250
            let divisione = 1000 / 15; //66.6666...

            console.log(somma);
            console.log(sottrazione);
            console.log(moltiplicazione);
            console.log(divisione);

        //CARATTERI SPECIALI
    
            let infinity = 3 / 0;
            let Nan = 10 - "ciao";

            console.log(infinity);
            console.log(Nan);

    /*
    I booleani rappreentano verità e falsità 
        infatti un valore booleano può essere solo uno trad ue possibili stati: 'true' o 'false'
        */
            
            let vero = true;
            let falso = false;

            console.log(vero);
            console.log(falso);

        /* Ci sono delle operazioi logiche usate per combinare o invertire i valori booleani
        */
            let and = vero && falso;
            let or = vero || falso;
            let not = !vero; 

            console.log(and);
            console.log(or);
            console.log(not);

        /*
        Le espressioni comparative: '<', '>', '<=', '>=', '===', restituiscono valori booleani.
        */

            console.log(numeroPositivo < numeroNegativo);
            console.log(numeroPositivo > numeroNegativo);
            console.log(stringa === vero);
            console.log(numeroPositivo !== somma);

    /*
    'null' e 'undefined' sono due valori che rappresentano l'assenza di un valore,
    ma tra i due ci sono alcune differenze.
    */
        /*Null è un valore assegnato per indicare intenzionalmente che la variabile non contenga alcun valore, 
        quindi dire esplicitamente che non c'è nulla e che il valore è vuoto
        */

            let variabileNull = null;

            console.log(variabileNull);

        /*Undefined indica una variabile inizializzata ma che non ha un valore assegnato
        spesso viene utilizzato come valore predefinito per le variabili quando viene omesso il valore specifico 
        oppure alcune operazioni possono restituire undefined quando il risultato non è definito o non è stato specificato
        */

            let z;

            console.log(z);
        
            //La differenza principale tra i due è che 'null' è un valore assegnato intenzionalmente mentre 'undefined' indica una variabile non inizializzata o senza valore assegnato
            
    /*   
    Gli Array sono strutture dati che consentono di raggruppare più valori in un unico oggetto o lista.
    Ogni elemento ha un indice, che inizia da zero.
    Una lista di valori array si dichiara racchiudendo i valori tra parentesi quadre []
    */

        let lista = [ "banana", "paperino", 75, 11, 23, true, "pianta", -3000];
        console.log(lista);

        // si può avere accesso ad un determinato elemento della lista utilizzando il suo indice
           
            console.log(lista[0]);
            console.log(lista[6]);
        
        // si può cambiare il valore di un singolo elemento di un array e assegnargli quindi un nuovo valore
            
            lista[1] = "citofono";
            console.log(lista);

        // si possono manipolare i dati in un array attraverso dei metodi integrati, tra i più comuni:
            
            //push (aggiunge uno o più elementi alla fine dell'array)
            
                lista.push("partita");
                console.log(lista);
                lista.push("gioco", 0);
                console.log(lista);

            //pop (rimuove l'ultimo elemento dell'array e lo restituisce)

                let elementoSaltato = lista.pop();
                console.log(elementoSaltato);
                console.log(lista);

            //shift (rimuove il primo elemento dell'array e lo restituisce)

                let elementoIniziale = lista.shift();
                console.log(elementoIniziale);
                console.log(lista);

            //unshift (aggiunge uno o più elementi all'inizio dell'array)

                lista.unshift("vittoria", 2);
                console.log(lista);

            //splice (modifica il contenuto di un array rimuovendo o sostituendo elementi esistenti e/o aggiungengo nuovi elementi)
            //splice (indiceDiPartenza, quantitàDaRimuovere, elementoDaAggiungere1, elementoDaAggiungere2, ...)

                lista.splice(1, 2, "topolino", 6, false);
                console.log(lista);

            //slice (restituisce una porzione dell'array, compresa tra gli indici 'inizio' e 'fine' (escluso));

                let sezione = lista.slice(1, 6);
                console.log(sezione);

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.

/*
Un oggetto è un gruppo di variabili che descrivono la stessa cosa 
Gli oggetti sono molto utili per descrivere concetti complessi; sono organizzati in coppie: chiave-valore
l'oggetto si può dichiarare utilizzando le parentesi graffe e definendo le sue proprietà con i loro valori
*/

    let studente = {
        nome: "Gennaro",
        cognome: "Esposito",
        età: 25,
        città: "Napoli",
        classe: "B",
        presenze: 50,
    }

    console.log(studente);

    //Acesso alle proprietà
        console.log(studente.nome);
        console.log(studente["cognome"]);
    //modifiche alle proprietà
        studente.nome = "Raffaele";
        studente["cognome"] = "Russo";
    //aggiunte alle proprietà
        studente.dataDiNascita = "12/12/1980";

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let a = 12;
let b = 20;

let addizione = a + b;

console.log(addizione);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;

console.log(x);


/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = "Ilaria";

console.log(name);

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let sottrazione2 = 4 - x;

console.log(sottrazione2);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

let name1 = "jhon";
let name2 = "Jhon";

console.log(name1 !== name2);

console.log(name1.toLowerCase() === name2.toLowerCase());