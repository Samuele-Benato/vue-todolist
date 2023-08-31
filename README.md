# Descrizione:

Rifare l'esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:

- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no

## MILESTONE 1

Stampare all'interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

## MILESTONE 2

Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.

## MILESTONE 3

Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

## SVOLGIMENTO

- Creo l'app con Vue e collegamento HTML
- All'interno di data() inserisco l'array di oggetti con
  text : '', done : false ,
- Faccio una copia dell'array
- Creo il tamplate su HTML
- Con un v-for stampo la lista in HTML
- Setto sul click della casella il done su true (aggiungendo una classe si vedrà il testo sbarrato)
- Sul click della X la casella dovrà sparire
- Con il v-model imposto un imput che al click del pulsante situato alla fine dell'input farà un .unshift() sull'array copia
