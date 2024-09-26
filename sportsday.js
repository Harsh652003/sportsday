
let scores = {
    red: 0,
    blue: 0,
    green: 0,
    yellow: 0
  };
  

  function delay(ms, callback) {
    setTimeout(callback, ms);
  }
  
  function OpeningCeremony(callback) {
    console.log("Welcome to the Sports Day Event!");
    console.log("Initializing the event...");
  
    let countdown = 3;
  
    const intervalId = setInterval(() => {
      if (countdown > 0) {
        console.log(`${countdown}...`);
        countdown--;
      } else {
        clearInterval(intervalId);
        console.log("Event is starting now...");
  
       
        callback(scores, LongJump);
      }
    }, 1000);
  }
  
  function Race100M(currentScores, callback) {
    console.log("100M Race is starting...");
  
    delay(3000, () => {
      const raceTimes = {
        red: (Math.random() * 5 + 10).toFixed(2),
        blue: (Math.random() * 5 + 10).toFixed(2),
        green: (Math.random() * 5 + 10).toFixed(2),
        yellow: (Math.random() * 5 + 10).toFixed(2)
      };
  
      console.log("Race times:", raceTimes);
  
      
      const sortedTeams = Object.keys(raceTimes).sort((a, b) => raceTimes[a] - raceTimes[b]);
  
      
      currentScores[sortedTeams[0]] += 50;
      currentScores[sortedTeams[1]] += 25;
      currentScores[sortedTeams[2]] += 10;
      currentScores[sortedTeams[3]] += 5;
  
      console.log("Scores after 100M Race:", currentScores);
  
      
      callback(currentScores, HighJump);
    });
  }
  
  function LongJump(currentScores, callback) {
    console.log("Long Jump is starting...");
  
    delay(2000, () => {
      const teams = ['red', 'blue', 'green', 'yellow'];
  
            const winner = teams[Math.floor(Math.random() * teams.length)];
  
      
      currentScores[winner] += 150;
  
      console.log(`${winner.toUpperCase()} wins the Long Jump!`);
      console.log("Scores after Long Jump:", currentScores);
  
      
      callback(currentScores, AwardCeremony);
    });
  }
  
  function HighJump(currentScores, callback) {
    console.log("High Jump is starting...");
  
   
    const userInput = prompt("Which team had the highest jump? (red, blue, green, yellow)");
  
    delay(2000, () => {
      if (userInput && currentScores.hasOwnProperty(userInput.toLowerCase())) {
        const team = userInput.toLowerCase();
        currentScores[team] += 100;
        console.log(`${team.toUpperCase()} wins the High Jump!`);
      } else {
        console.log("No valid team input received. No points awarded for High Jump.");
      }
  
      console.log("Scores after High Jump:", currentScores);
  
      
      callback(currentScores);
    });
  }
  
  function AwardCeremony(currentScores) {
    console.log("Award Ceremony is starting...");
  
   
    const sortedScores = Object.entries(currentScores).sort((a, b) => b[1] - a[1]);
  
    console.log("Final Scores:", currentScores);
  
    console.log(`1st Place: ${sortedScores[0][0].toUpperCase()} with ${sortedScores[0][1]} points`);
    console.log(`2nd Place: ${sortedScores[1][0].toUpperCase()} with ${sortedScores[1][1]} points`);
    console.log(`3rd Place: ${sortedScores[2][0].toUpperCase()} with ${sortedScores[2][1]} points`);
    console.log(`4th Place: ${sortedScores[3][0].toUpperCase()} with ${sortedScores[3][1]} points`);
  
    console.log("Congratulations to all the participants!");
  }
  
 
  OpeningCeremony(Race100M);
  
