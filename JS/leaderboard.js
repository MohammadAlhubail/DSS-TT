const leaderboardData = [
  { rank: 1, name: "Mohammad", Wins: 10, losses: 0 },
  { rank: 2, name: "Bo MIn", Wins: 8, losses: 2 },
  { rank: 3, name: "Bing Bong B Min", Wins: 0, losses: 10 },
];

const leaderboard = document.getElementById("leaderboard");

for (let i = 0; i < leaderboardData.length; i++) {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${leaderboardData[i].rank}</td>
    <td>${leaderboardData[i].name}</td>
    <td>${leaderboardData[i].Wins}</td> 
    <td>${leaderboardData[i].losses}</td>
  `;
  leaderboard.appendChild(row);
}
