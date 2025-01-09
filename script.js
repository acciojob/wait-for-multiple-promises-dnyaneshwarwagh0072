function createRandomPromise(id) {
    const time = Math.random() * 2 + 1;
    return new Promise((resolve) => {
        setTimeout(() => resolve({ id, time }), time * 1000);
    });
}

const promises = [
    createRandomPromise('Promise 1'),
    createRandomPromise('Promise 2'),
    createRandomPromise('Promise 3'),
];

function populateTable(results) {
    const tableBody = document.getElementById('output');
    let totalTime = 0;

    results.forEach((result) => {
        const row = document.createElement('tr');
        const cell1 = document.createElement('td');
        const cell2 = document.createElement('td');

        cell1.textContent = result.id;
        cell2.textContent = result.time.toFixed(3);
        row.appendChild(cell1);
        row.appendChild(cell2);
        tableBody.appendChild(row);

        totalTime += result.time;
    });

    const totalRow = document.createElement('tr');
    const totalCell1 = document.createElement('td');
    const totalCell2 = document.createElement('td');

    totalCell1.textContent = 'Total';
    totalCell2.textContent = totalTime.toFixed(3);
    totalRow.appendChild(totalCell1);
    totalRow.appendChild(totalCell2);
    tableBody.appendChild(totalRow);
}

Promise.all(promises).then((results) => {
    document.getElementById('loading').remove();
    populateTable(results);
});
