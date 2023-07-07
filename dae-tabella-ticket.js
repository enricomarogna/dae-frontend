// ==UserScript==
// @name         DAE with Super Power
// @author       Enrico Marogna
// @namespace    dae-ticketing-system
// @version      1.3.3
// @description  Potenzia l'usabilità del ticketing system DAE, software aziendale di proprietà di 4Sparks Srl
// @match        https://dae.4sparks-dev.it/
// @match        https://dae.4sparks-dev.it/*
// @match        https://dae.4sparks-dev.it/apri_ticket?id=*
// @match        https://dae.4sparks-dev.it/report/reportPerData
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
            const idCell = row.cells[6]; // Ottieni la cella relativa alla colonna ID
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
            const hours = diff / 1000 / 60 / 60; // Calcola le ore di differenza
            if (hours > 24 && !solved) { // Se le ore di differenza sono maggiori di 24 e la segnalazione non è risolta
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
        });
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

        // Minuti effettivi di gestione
        const divs = document.querySelectorAll('div');
        divs.forEach(div => {
            if (div.textContent.startsWith('Minuti consuntivati:')) {
                // se div.textContent.substring(21) non è vuoto, 0 o NaN
                if (div.textContent.substring(21) && div.textContent.substring(21) !== '0' && !isNaN(div.textContent.substring(21))) {
                    const minutes = parseInt(div.textContent.substring(21)); // Ottieni i minuti effettivi
                    const hours = Math.floor(minutes / 60); // Ottieni le ore
                    const minutes2 = minutes % 60; // Ottieni i minuti
                    div.textContent = 'Consuntivazione: ' + div.textContent.substring(21) + ' min // ' + hours + 'h ' + minutes2 + 'm'; // Modifica il testo del div
                }
            }
        }
        );

        // Aggiungi alla classe "".zd-cooment p" "overflow-wrap: anywhere"
        const style = document.createElement('style');
        style.innerHTML = `
            .zd-comment p {
                overflow-wrap: anywhere;
            }
        `;
        document.head.appendChild(style);

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
    })();
}
