const teams = ['Team 1', 'Team 2', 'Team 3', 'Team 4', 'Team 5', 'Team 6', 'Team 7', 'Team 8', 'Team 9', 'Team 10', 'Team 11', 'Team 12'];

const results = {
  'Team 1': [2, 1, 0, 4, 1],
  'Team 2': [1, 1, 1, 3, 3],
  'Team 3': [0, 2, 1, 2, 3],
  'Team 4': [0, 0, 3, 1, 6],
  'Team 5': [3, 0, 0, 7, 0],
  'Team 6': [1, 1, 1, 3, 3],
  'Team 7': [1, 1, 1, 3, 3],
  'Team 8': [2, 0, 1, 4, 2],
  'Team 9': [1, 0, 2, 3, 5],
  'Team 10': [1, 1, 1, 3, 3],
  'Team 11': [2, 0, 1, 4, 2],
  'Team 12': [1, 2, 0, 3, 2]
};

function createSchedule() {
  const spielplanDiv = document.getElementById('spielplan');

  for (let i = 0; i < teams.length; i++) {
    for (let j = i + 1; j < teams.length; j++) {
      const match = document.createElement('p');
      match.textContent = `${teams[i]} vs ${teams[j]}`;
      spielplanDiv.appendChild(match);
    }
  }
}

function updateTable(results) {
  const tableBody = document.querySelector('#tabelle tbody');

  for (let i = 0; i < teams.length; i++) {
    const team = teams[i];
    const teamResults = results[team];

    const row = document.createElement('tr');

    const teamNameCell = document.createElement('td');
    teamNameCell.textContent = team;
    row.appendChild(teamNameCell);

    for (let j = 0; j < teamResults.length; j++) {
      const cell = document.createElement('td');
      cell.textContent = teamResults[j];
      row.appendChild(cell);
    }

    tableBody.appendChild(row);
  }
}

createSchedule();
updateTable(results);
