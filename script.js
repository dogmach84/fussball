window.onload = function() {
  const teams = ['Team 1', 'Team 2', 'Team 3', 'Team 4', 'Team 5', 'Team 6', 'Team 7', 'Team 8', 'Team 9', 'Team 10', 'Team 11', 'Team 12'];

  const results = {
    'Team 1': [0, 0, 0, 0, 0],
    'Team 2': [0, 0, 0, 0, 0],
    'Team 3': [0, 0, 0, 0, 0],
    'Team 4': [0, 0, 0, 0, 0],
    'Team 5': [0, 0, 0, 0, 0],
    'Team 6': [0, 0, 0, 0, 0],
    'Team 7': [0, 0, 0, 0, 0],
    'Team 8': [0, 0, 0, 0, 0],
    'Team 9': [0, 0, 0, 0, 0],
    'Team 10': [0, 0, 0, 0, 0],
    'Team 11': [0, 0, 0, 0, 0],
    'Team 12': [0, 0, 0, 0, 0]
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

  function populateTeamSelects() {
    const homeTeamSelect = document.getElementById('homeTeam');
    const awayTeamSelect = document.getElementById('awayTeam');

    teams.forEach(function(team) {
      const option = document.createElement('option');
      option.value = team;
      option.textContent = team;

      homeTeamSelect.appendChild(option);
      awayTeamSelect.appendChild(option.cloneNode(true));
    });
  }

  function updateResults() {
    const homeTeamSelect = document.getElementById('homeTeam');
    const awayTeamSelect = document.getElementById('awayTeam');
    const homeTeam = homeTeamSelect.value;
    const awayTeam = awayTeamSelect.value;
    const homeScoreInput = document.getElementById('homeScore');
    const awayScoreInput = document.getElementById('awayScore');
    const homeScore = parseInt(homeScoreInput.value);
    const awayScore = parseInt(awayScoreInput.value);

    if (homeTeam && awayTeam && !isNaN(homeScore) && !isNaN(awayScore)) {
      results[homeTeam][0]++;
      results[awayTeam][0]++;
      results[homeTeam][4] += homeScore;
      results[awayTeam][4] += awayScore;

      if (homeScore > awayScore) {
        results[homeTeam][1]++;
        results[awayTeam][3]++;
        results[homeTeam][5] += 3;
      } else if (homeScore < awayScore) {
        results[homeTeam][3]++;
        results[awayTeam][1]++;
        results[awayTeam][5] += 3;
      } else {
        results[homeTeam][2]++;
        results[awayTeam][2]++;
        results[homeTeam][5]++;
        results[awayTeam][5]++;
      }

      homeScoreInput.value = '';
      awayScoreInput.value = '';

      updateTable();
    }
  }

  function updateTable() {
    const tableBody = document.querySelector('#tabelle tbody');

    tableBody.innerHTML = '';

    teams.forEach(function(team) {
      const teamResults = results[team];

      const row = document.createElement('tr');

      const teamNameCell = document.createElement('td');
      teamNameCell.textContent = team;
      row.appendChild(teamNameCell);

      teamResults.forEach(function(result) {
        const cell = document.createElement('td');
        cell.textContent = result;
        row.appendChild(cell);
      });

      tableBody.appendChild(row);
    });
  }

  function initialize() {
    createSchedule();
    populateTeamSelects();

    const submitButton = document.getElementById('submit');
    submitButton.addEventListener('click', updateResults);
  }

  initialize();
};
