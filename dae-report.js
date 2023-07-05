// ==UserScript==
// @name         Calcola somma minuti effettivi
// @namespace    EnricoMarogna
// @version      1.0
// @description  Calcola la somma dei minuti effettivi e aggiunge una riga alla fine della tabella con il totale in ore
// @match        https://dae.4sparks-dev.it/report/reportPerData
// @grant        none
// ==/UserScript==

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
