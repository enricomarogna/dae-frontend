// ==UserScript==
// @name         DAE with Super Power [DEV]
// @author       Enrico Marogna
// @namespace    dae-ticketing-system-dev
// @version      1.8.0
// @description  Potenzia l'usabilità del ticketing system DAE, software aziendale di proprietà di 4Sparks Srl
// @match        https://dae.4sparks-dev.it/
// @match        https://dae.4sparks-dev.it/*
// @match        https://dae.4sparks-dev.it/apri_ticket?id=*
// @match        https://dae.4sparks-dev.it/report/reportPerData
// @icon64       data:image/webp;base64,UklGRpIDAABXRUJQVlA4IIYDAAAQFACdASpWAFYAPjEYi0OiIaESuVyIIAMEsoBp5id2Z80qFt4DbyXYnvFn7XftvmWNE/wye0fds4d/P+wA6DP8APUm+J/3b8w7kFhSekj/Y+Vz8e/t//A9wn+Sfz3/Pdgf0Pf1QHpR0O2hrSi9iELXdUsi7btXMml8quF2VhQ4HHpVzfRdgF7G+WV08Y9c6mXw/Fz80r3vep/6089uyuIetv87gwVk0AQAAP77/yn/9pZ/1LP+pZ+/d+t/s0TeJeQ1Za6eWX/0C6/lLvl3H7HNaoN8Dw/seo5Y6Kupy5K/9DAOv4cN4tKayaE0HkDNX7ritdS/Lrr5k75ULO5Gm86uj/RY003m5s5gJ1+/L9NuNFygYSh06KmlOiHa+gY2uf2N6tByiGlsec2CznTyJuhJkQEv9DH/8MsQXqwH6xNs+tH8sB0uiN5jOzjOY0MjJU/53zJymjo03oY5r/v+eaPOYVzdWWZvEBGi33T2l0nbwa8ew19Dz7BSc7eqcuVFk8bu5DmXS7obFWX+Iyu36kyFfuNn/+F7x9WVqYy//jfuVMTt5j6m75eHunmq4Nd9v7ztF35yGcE5miQtKt7odUoB195Clf+YwFGm1sONBJ0voryQXz2UP9Sirmb16MFjNemEY2SVfpOXI7Ch3VZ+uAAWwnZicXDo5v/cxQWciOrUMP7Hl/8API/mfZREDBJ0sQ5cTHxDPuv547tTU5pcV6yA+wyaw+svOz603KQu964vcmcrLj2VN8hLbdQ67S5FkrGESsVDrtlYwMOZsSv5ZfUr3cq424zEqDVP0k81neyMf8dE/x23VAoGzcjK3EURe6IXQBFti2r35Z98qs15kK9gxa9gC78U5OgMxvngEknxNvCI2kD8LxgJJZhfhePvp/K7JWUlTaK7PqV64hv5DV05r25flXYMExw/jMB3+EsJkOt/wfxQ6xdcrYoaiB6CVRDxA6F69A0nkU8JAR3BVRLraoicQtqHXtzkqFT2BQqbD2fOAQvLn3bpk5p03nJRPwmvip9oTWxqTPNG/LMb77/yS7w9zOrUxxdizSw+h/N15M/tA6QqL5Vrt9yG+jf0BK3ZeZBlnUIz/+A7TSH0kG+vAgG9d3ypv+W+2u24SKSNCy3aB3+VQHplEZ48JnPhQkrUQ0q1XTGQhFkGN+/eiNQ88xAV3kciSpfnTVTBKJ3jjw22t4AAAA==
// @grant        none
// ==/UserScript==

if (window.location.href.startsWith("https://dae.4sparks-dev.it/")) {
    (function () {
        // none
    }
    )();
}

if (window.location.href === "https://dae.4sparks-dev.it/") {
    (function () {
        'use strict';
        document.body.style.fontSize = '12px'; // Modifica la grandezza del font del body a 12px
        // Modifica il div con la classe "container body-content" in "container-fluid body-content"
        const container = document.querySelector('.container.body-content');
        container.classList.remove('container');
        container.classList.add('container-fluid');
        // modifica il margine a 4px per input[type="checkbox"], input[type="radio"]
        const inputs = Array.from(document.querySelectorAll('input[type="checkbox"], input[type="radio"]'));
        inputs.forEach(input => input.style.margin = '4px');
        // Imposta la posizione sticky per l'header della tabella
        const headerRow = document.querySelector('table > tbody > tr'); // Ottieni la prima riga della tabella
        headerRow.style.position = 'sticky'; // Imposta la posizione sticky
        headerRow.style.top = '50px'; // Imposta il top a 50px
        // Imposta il testo centrale per l'header della tabella
        const headerCells = Array.from(headerRow.querySelectorAll('th')); // Ottieni tutte le celle dell'header
        headerCells.forEach(cell => { // Per ogni cella dell'header
            cell.style.textAlign = 'center'; // Allinea il testo al centro
            cell.style.verticalAlign = 'middle'; // Allinea il testo al centro verticalmente
        });
        // Imposta il testo centrale su tutte le colonne tranne la prima e la seconda
        const rows2 = Array.from(document.querySelectorAll('table > tbody > tr:not(:first-child)')); // Ottieni tutte le righe della tabella, tranne l'intestazione
        rows2.forEach(row => { // Per ogni riga della tabella
            const cells2 = Array.from(row.querySelectorAll('td')); // Ottieni tutte le celle della riga
            cells2.forEach((cell, index) => { // Per ogni cella della riga
                if (index > 1) { // Se l'indice della cella è maggiore di 1
                    cell.style.textAlign = 'center'; // Allinea il testo al centro
                    cell.style.verticalAlign = 'middle'; // Allinea il testo al centro verticalmente
                }
            });
        });
        // Funzione per ottenere l'indice di un determinato stato
        function getIndexByStatus(status) {
            switch (status) {
                case 'open':
                case 'new':
                    return 0;
                case 'pending':
                    return 1;
                case 'solved':
                    return 2;
                default:
                    return 3;
            }
        }
        // Funzione per ottenere il colore del testo in base allo stato
        function getStatusColor(status) {
            switch (status) {
                case 'open':
                    return '#c42f2f'; // Rosso #db5959
                case 'pending':
                    return '#5555df'; // Blu #7f7fff
                case 'new':
                    return '#eab823'; // Arancione #ffcb2f
                case 'solved':
                    return '#575757'; // Grigio #999
                default:
                    return '#575757'; // Grigio
            }
        }
        const table = document.querySelector('table'); // Ottieni la tabella
        const rows = Array.from(table.querySelectorAll('tbody tr:not(:first-child)')); // Ottieni tutte le righe della tabella, tranne l'intestazione
        rows.sort((a, b) => { // Ordina le righe in base allo stato
            const statusA = a.cells[5].textContent.toLowerCase(); // Ottieni lo stato
            const statusB = b.cells[5].textContent.toLowerCase(); // Ottieni lo stato
            const indexA = getIndexByStatus(statusA); // Ottieni l'indice dello stato
            const indexB = getIndexByStatus(statusB); // Ottieni l'indice dello stato
            return indexA - indexB; // Ordina le righe in base all'indice dello stato
        });
        rows.forEach(row => row.remove()); // Rimuovi tutte le righe dalla tabella
        rows.forEach(row => table.tBodies[0].appendChild(row)); // Aggiungi le righe ordinate alla tabella
        rows.forEach(row => { // Per ogni riga della tabella
            const status = row.cells[5].textContent.toLowerCase(); // Ottieni lo stato
            const color = getStatusColor(status); // Ottieni il colore del testo in base allo stato
            row.cells[5].style.backgroundColor = color; // Modificare il colore di background della cella relativa alla colonna Stato
            row.cells[5].style.color = '#00000085'; // Modificare il colore del testo della cella relativa alla colonna Stato in bianco
            row.cells[5].style.verticalAlign = 'middle'; // Allinea il testo della cella relativa alla colonna Stato al centro verticalmente
            row.cells[5].style.textAlign = 'center'; // Allinea il testo della cella relativa alla colonna Stato al centro orizzontalmente
            row.cells[5].textContent = status.toUpperCase(); // Modifica il testo della cella relativa alla colonna Stato in maiuscolo
            row.cells[5].style.fontWeight = 'bold'; // Imposta il font-weight del testo della cella relativa alla colonna Stato a bold
            // Modifica il colore di background delle righe alternativamente
            const index = rows.indexOf(row); // Ottieni l'indice della riga
            if (index % 2 === 0) { // Se l'indice è pari
                row.style.backgroundColor = '#F7F6F3'; // Modifica il colore di background della riga in #F7F6F3
            } else { // Se l'indice è dispari
                row.style.backgroundColor = '#FFFFFF'; // Modifica il colore di background della riga in #FFFFFF
            }
            // Trasforma il link nell'ultima colonna in un button
            const linkCell = row.cells[row.cells.length - 1]; // Ottieni l'ultima cella della riga
            const link = linkCell.querySelector('a'); // Ottieni il link
            link.setAttribute('target', '_self'); // Imposta l'attributo "target" del link a "_self"
            link.setAttribute('class', 'btn btn-sm btn-primary'); // Imposta l'attributo "class" del link a "btn btn-primary"
            link.setAttribute('role', 'button'); // Imposta l'attributo "role" del link a "button"
            link.innerHTML = 'Apri in DAE'; // Modifica il contenuto del link
            linkCell.style.textAlign = 'center'; // Allinea il testo della cella al centro orizzontalmente
            // imposta il target del link in base al fatto che sia stato premuto il tasto centrale del mouse o il tasto Ctrl (Windows) o CMD (Mac)
            link.addEventListener('click', (event) => { // Al click sul link
                if (event.button === 1 || (event.ctrlKey || event.metaKey)) { // Se è stato premuto il tasto centrale del mouse o il tasto Ctrl (Windows) o CMD (Mac)
                    link.setAttribute('target', '_blank'); // Imposta l'attributo "target" del link a "_blank"
                } else {
                    link.setAttribute('target', '_self'); // Imposta l'attributo "target" del link a "_self"
                }
            });
            // Trasforma l'ID in un bottone cliccabile che apre il ticket in una nuova scheda su Zendesk
            const idCell = row.cells[7]; // Ottieni la cella relativa alla colonna ID
            idCell.style.cursor = 'pointer'; // Imposta il cursore della cella a pointer
            idCell.innerHTML = `<button style="background-color: #008A00; color: #FFFFFF; padding: 5px 10px; border: none; border-radius: 4px; cursor: pointer;">${idCell.textContent}</button>`; // Modifica il contenuto della cella con un button
            const idButton = idCell.querySelector('button'); // Ottieni il button
            idButton.addEventListener('click', (event) => { // Al click sul button
                if (event.button === 1 || (event.ctrlKey || event.metaKey)) { // Se è stato premuto il tasto centrale del mouse o il tasto Ctrl (Windows) o CMD (Mac)
                    window.open(`https://4sparkshelp.zendesk.com/agent/tickets/${idCell.textContent}`, '_blank'); // Apri il link in una nuova scheda
                } else {
                    window.open(`https://4sparkshelp.zendesk.com/agent/tickets/${idCell.textContent}`, '_blank'); // Apri il link in una nuova scheda
                }
            });
        });
        // Modifica il colore di background delle righe al mouseover e al mouseout
        rows.forEach(row => { // Per ogni riga della tabella
            row.addEventListener('mouseover', () => { // Al mouseover
                row.style.backgroundColor = '#cac1f2'; // Modifica il colore di background della riga in #cac1f2
            });
            row.addEventListener('mouseout', () => { // Al mouseout
                const index = rows.indexOf(row); // Ottieni l'indice della riga
                if (index % 2 === 0) { // Se l'indice è pari
                    row.style.backgroundColor = '#F7F6F3'; // Modifica il colore di background della riga in #F7F6F3
                } else { // Se l'indice è dispari
                    row.style.backgroundColor = '#FFFFFF'; // Modifica il colore di background della riga in #FFFFFF
                }
            });
        });
        // Allineamento verticale middle per tutte le celle della tabella
        const cells = Array.from(document.querySelectorAll('table > tbody > tr > td, .table > tbody > tr > th, .table > tfoot > tr > td, .table > tfoot > tr > th, .table > thead > tr > td, .table > thead > tr > th'));
        cells.forEach(cell => cell.style.verticalAlign = 'middle'); // Allinea il testo della cella al centro verticalmente
        // Animazione lampeggiante per le righe con data di scadenza superata
        const dateCells = Array.from(document.querySelectorAll('table > tbody > tr > td:nth-child(4)')); // Ottieni tutte le celle della colonna Data di scadenza
        dateCells.forEach(cell => { // Per ogni cella della colonna Data di scadenza
            //const date = new Date(cell.textContent); // Ottieni la data
            // verifica se la cella della colonna Stato è solved o closed, se lo è assegna alla variabile status true, altrimenti false
            const status = cell.closest('tr').cells[5].textContent.toLowerCase();
            let solved = false;
            if (status === 'solved' || status === 'closed') {
                solved = true;
            }
            // Ottieni la data che è nel formato dd/mm/yyyy hh:mm:ss e trasformala in un oggetto Date
            const date = new Date(cell.textContent.substring(6, 10), cell.textContent.substring(3, 5) - 1, cell.textContent.substring(0, 2), cell.textContent.substring(11, 13), cell.textContent.substring(14, 16), cell.textContent.substring(17, 19));
            const now = new Date(); // Ottieni la data attuale
            const diff = now - date; // Calcola la differenza tra la data attuale e la data di scadenza

            const workingDays = getWorkingDays(date, now); // Calcola il numero di giorni lavorativi trascorsi
            const hours = workingDays * 24; // Calcola il numero di ore lavorative trascorse

            if (hours > 48 && !solved) {
                const row = cell.closest('tr'); // Ottieni la riga
                row.style.fontWeight = 'bold'; // Modifica il font-weight della riga in bold
                // Creazione della regola CSS per l'animazione di lampeggio
                const style = document.createElement('style'); // Creazione dell'elemento style
                // style.innerHTML = `
                //     @keyframes blinking {
                //         0% {
                //             color: inherit;
                //         }
                //         50% {
                //             color: red;
                //         }
                //         100% {
                //             color: inherit;
                //         }
                //     }
                //     tr.blinking-animation {
                //         animation: blinking 2s infinite;
                //     }
                // `;
                style.innerHTML = ``;
                document.head.appendChild(style); // Aggiunta della regola CSS all'head del documento
                row.classList.add('blinking-animation'); // Aggiunta della classe CSS blinking-animation alla riga
                row.style.color = 'red'; // Modifica il colore del testo della riga in rosso
            }
            // Funzione per calcolare il numero di giorni lavorativi tra due date
            function getWorkingDays(startDate, endDate) {
                let workingDays = 0; // Inizializzazione del numero di giorni lavorativi a 0
                let currentDate = new Date(startDate); // Inizializzazione della data corrente alla data di inizio
            
                while (currentDate <= endDate) { // Finché la data corrente è minore o uguale alla data di fine
                const dayOfWeek = currentDate.getDay(); // Ottieni il giorno della settimana della data corrente
                if (dayOfWeek !== 0 && dayOfWeek !== 6) { // Se il giorno della settimana non è sabato o domenica
                    workingDays++; // Incrementa il numero di giorni lavorativi
                }
                currentDate.setDate(currentDate.getDate() + 1); // Incrementa la data corrente di un giorno
                }
                return workingDays; // Ritorna il numero di giorni lavorativi
            }
        });

        // Sposta l'input con id "MainContent_btnAggiorna" in un div con id "aggiorna-zendesk"
        const aggiornaButton = document.querySelector('#MainContent_btnAggiorna'); // Ottieni il button
        const aggiornaDiv = document.createElement('div'); // Creazione del div
        aggiornaDiv.id = 'aggiorna-zendesk'; // Assegnazione dell'id al div
        aggiornaDiv.style.display = 'flow-root'; // Modifica il display del div in flow-root
        aggiornaButton.classList.add('btn' ,'btn-success', 'btn-sm'); // Aggiunta delle classi CSS al div
        aggiornaButton.parentNode.insertBefore(aggiornaDiv, aggiornaButton); // Inserimento del div prima del button
        aggiornaButton.style.float = 'left'; // Modifica il float del button in left
        aggiornaDiv.appendChild(aggiornaButton); // Inserimento del button nel div

        // Button per aprire un nuovo ticket Zendesk
        const nuovoTicketLink = document.createElement('a'); // Creazione del link
        nuovoTicketLink.classList.add('btn', 'btn-warning', 'btn-sm'); // Aggiunta delle classi CSS al link
        nuovoTicketLink.textContent = 'Nuovo Ticket Zendesk'; // Aggiunta del testo al link
        nuovoTicketLink.href = 'https://4sparkshelp.zendesk.com/agent/tickets/new/1'; // Aggiunta dell'href al link
        nuovoTicketLink.target = '_blank'; // Aggiunta del target al link
        nuovoTicketLink.style.float = 'right'; // Modifica il float del link in right
        aggiornaDiv.appendChild(nuovoTicketLink); // Inserimento del link nel div

        // Campo di ricerca ticket
        const searchInput = document.createElement('input'); // Creazione dell'input
        searchInput.classList.add('form-control', 'form-control-sm'); // Aggiunta delle classi CSS all'input
        searchInput.style.height = '30px';
        searchInput.placeholder = 'Cerca ticket, esempio 12345'; // Aggiunta del placeholder all'input
        searchInput.style.float = 'right'; // Modifica il float dell'input in right
        searchInput.style.width = '250px'; // Modifica la larghezza dell'input in 200px
        searchInput.style.marginRight = '10px'; // Modifica il margin-right dell'input in 10px
        searchInput.addEventListener('keyup', function(event) { // Aggiunta dell'event listener keyup all'input
            if (event.key === 'Enter') { // Se il tasto premuto è invio
                const ticketNumber = searchInput.value; // Ottieni il numero del ticket
                if (ticketNumber === '' || !/^\d+$/.test(ticketNumber)) { // Se il numero del ticket è vuoto o non è nel formato numerico (00000)
                    alert('Inserisci un numero di ticket valido'); // Restituisci un alert
                } else { // Altrimenti
                    window.location.href = `https://dae.4sparks-dev.it/apri_ticket?id=${ticketNumber}`; // Vai alla pagina del ticket
                }
            }
        });
        aggiornaDiv.appendChild(searchInput); // Inserimento dell'input nel div

        /**
         * Crea il dropdown e filtra le righe in base all'operatore selezionato
         */
        function createAndFilterDropdown() {
            const operatorColumnIndex = 4; // Indice della quinta colonna (Operatore in carico)
            const table = document.querySelector('table'); // Ottieni la tabella
            const operatorData = Array.from(table.querySelectorAll(`tbody tr:not(:first-child) td:nth-child(${operatorColumnIndex})`)).map(cell => cell.textContent.trim()); // Ottieni tutti i dati della quinta colonna (Operatore in carico)
            const uniqueOperators = [...new Set(operatorData)]; // Ottieni i dati univoci degli operatori
            const dropdown = document.createElement('select'); // Creazione del dropdown
            dropdown.id = 'operatori-dropdown'; // Assegnazione dell'id al dropdown
            dropdown.classList.add('btn', 'btn-secondary', 'dropdown-toggle'); // Aggiunta delle classi CSS al dropdown
            dropdown.style.float = 'right'; // Modifica il float del dropdown in right
            dropdown.style.marginRight = '5px'; // Modifica il margin-right del dropdown in 5px
            dropdown.addEventListener('change', function () { // Aggiunta dell'event listener change al dropdown
                const selectedOperator = dropdown.value; // Ottieni l'operatore selezionato
                if (selectedOperator === 'Tutti gli operatori') { // Se l'operatore selezionato è "Tutti gli operatori"
                    table.querySelectorAll('tbody > tr').forEach(row => (row.style.display = '')); // Mostra tutte le righe
                } else { // Altrimenti
                    table.querySelectorAll('tbody > tr:not(:first-child)').forEach(row => { // Per ogni riga della tabella tranne la prima
                        const operatorCell = row.querySelector(`td:nth-child(${operatorColumnIndex})`); // Ottieni la cella relativa alla colonna Operatore in carico
                        const operator = operatorCell ? operatorCell.textContent.trim() : ''; // Ottieni l'operatore
                        row.style.display = operator === selectedOperator ? '' : 'none'; // Mostra la riga se l'operatore è uguale a quello selezionato, altrimenti nascondi la riga
                    });
                }
            });
            const allOperatorsOption = document.createElement('option'); // Creazione dell'opzione
            allOperatorsOption.textContent = 'Tutti gli operatori'; // Aggiunta del testo all'opzione
            dropdown.appendChild(allOperatorsOption); // Inserimento dell'opzione nel dropdown
            uniqueOperators.forEach(operator => { // Per ogni operatore
                const option = document.createElement('option'); // Creazione dell'opzione
                option.textContent = operator; // Aggiunta del testo all'opzione
                dropdown.appendChild(option); // Inserimento dell'opzione nel dropdown
            });
            aggiornaDiv.appendChild(dropdown); // Inserimento del dropdown nel div
        }
        if (window.location.href === 'https://dae.4sparks-dev.it/') { // Se la pagina corrisponde a quella desiderata
            createAndFilterDropdown(); // Chiama la funzione per creare il dropdown e filtrare le righe
        }

    })();
}

// ==UserScript==
// @name         Pagina del singolo ticket
// @match        https://dae.4sparks-dev.it/apri_ticket?id=*
// ==/UserScript==
if (window.location.href.startsWith('https://dae.4sparks-dev.it/apri_ticket?id=')) {
    // Codice da eseguire sulla pagina con l'URL corrispondente
    (function() {

        // Sposta il footer all'interno del container
        const footer = document.querySelector('footer');
        const container = document.querySelector('.container.body-content');
        container.appendChild(footer);

        // il titolo h3 della pagina ha questa struttura "24658:La tua licenza ESET sta per scadere."
        const h3 = document.querySelector('h3');
        const titleParts = h3.textContent.split(':');
        const ticketNumber = titleParts[0].trim();
        h3.outerHTML = `
        <div class="ticket-title" style="margin:10px 0;">
            <a href="https://4sparkshelp.zendesk.com/agent/tickets/${ticketNumber}" target="_blank" class="btn btn-warning btn-sm">Apri ticket ${ticketNumber} su Zendesk</a>
            </br>
            <span class="fs-4">${ticketNumber} - ${titleParts.slice(1).join(':')}</span>
        </div>
        `;

        // // Minuti effettivi di gestione
        // const divs = document.querySelectorAll('div');
        // divs.forEach(div => {
        //     if (div.textContent.startsWith('Minuti consuntivati:')) {
        //         // se div.textContent.substring(21) non è vuoto, 0 o NaN
        //         if (div.textContent.substring(21) && div.textContent.substring(21) !== '0' && !isNaN(div.textContent.substring(21))) {
        //             const minutes = parseInt(div.textContent.substring(21)); // Ottieni i minuti effettivi
        //             const hours = Math.floor(minutes / 60); // Ottieni le ore
        //             const minutes2 = minutes % 60; // Ottieni i minuti
        //             div.textContent = 'Consuntivazione: ' + div.textContent.substring(21) + ' min // ' + hours + 'h ' + minutes2 + 'm'; // Modifica il testo del div
        //         } else {
        //             div.textContent = 'Consuntivazione: 0 min';
        //         }
        //     }
        // }
        // );

        // Aggiungi alla classe "".zd-cooment p" "overflow-wrap: anywhere"
        const style = document.createElement('style');
        style.innerHTML = `
            .zd-comment p {
                overflow-wrap: anywhere;
            }
        `;
        document.head.appendChild(style);

        // assegna al div superiore all'inpunt con id "MainContent_btnPrendiInCarico", l'id "prendi-in-carico"
        const prendiInCaricoDiv = document.querySelector('#MainContent_btnPrendiInCarico').parentNode;
        prendiInCaricoDiv.id = 'prendi-in-carico';
        prendiInCaricoDiv.style.display = 'flow-root';
        // inserisci nel div con id "prendi-in-carico" un link a con href #
        const prendiInCaricoLink = document.createElement('a');
        prendiInCaricoLink.href = 'mailto:enrico.marogna@4sparks.it?cc=davidesimone.rosa@gmail.com&subject=Escalation%20ticket%20' + ticketNumber + '%20-%20' + titleParts.slice(1).join(':') + '&body=Ciao,%0A%0Achiedo%20supporto%20per%20il%20ticket%20' + ticketNumber + ':%0A%0A';
        prendiInCaricoLink.textContent = 'Escalation via Mail';
        prendiInCaricoLink.classList.add('btn', 'btn-info');
        prendiInCaricoLink.style.float = 'right';
        prendiInCaricoDiv.appendChild(prendiInCaricoLink);


    })();
}

// ==UserScript==
// @name         Pagina del report
// @match        https://dae.4sparks-dev.it/report/reportPerData
// ==/UserScript==
if (window.location.href === "https://dae.4sparks-dev.it/report/reportPerData") {
    (function() {
        'use strict';
        // Ottieni la tabella
        var table = document.querySelector('tbody');
        // Calcola la somma dei minuti effettivi
        var totalMinutes = 0;
        var rows = table.querySelectorAll('tr');
        for (var i = 1; i < rows.length; i++) {
            var row = rows[i];
            var minutesCell = row.querySelector('td:last-child');
            var minutes = parseInt(minutesCell.textContent);
            if (!isNaN(minutes)) {
                totalMinutes += minutes;
            }
        }
        // Calcola il totale in ore
        var totalHours = Math.floor(totalMinutes / 60);
        var remainingMinutes = totalMinutes % 60;
        // Crea una nuova riga con il totale in ore
        var newRow = document.createElement('tr');
        newRow.innerHTML = '<td colspan="5"></td><td>' + totalHours + ' ore ' + remainingMinutes + ' minuti</td>';
        table.appendChild(newRow);

        // Trasforma i ticket in button
        var ticketNumbers = document.querySelectorAll('tbody tr td:nth-child(2)');
        ticketNumbers.forEach(ticketNumber => {
            var ticketNumberText = ticketNumber.textContent;
            if (ticketNumberText.length === 5 && /^\d+$/.test(ticketNumberText)) {
                ticketNumber.innerHTML = '<a class="btn btn-primary btn-sm mx-auto" href="https://dae.4sparks-dev.it/apri_ticket?id=' + ticketNumberText + '" target="_self">' + ticketNumberText + '</a>';
            }
        }
        );
        
    })();
}
