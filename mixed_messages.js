// Store possible message components in object
const components = {
    name: ['Mesut Ozil', 'Theo Walcott', 'Aaron Ramsey', 'Thierry Henry', 'Dennis Bergkamp', 'Ian Wright', 'Robert Pires', 'Patrick Viera', 'Bukayo Saka'],
    verb: ['played for', 'coached for', 'scored against', 'got injured against', 'was loaned to'],
    team: ['Arsenal', 'Tottenham', 'Barcelona', 'Real Madrid', 'Napoli', 'AC Milan']
};

// Function to randomly select the components of the message
function randomMessage(comps){
    const nameInd = Math.floor(Math.random() * comps.name.length);
    const verbInd = Math.floor(Math.random() * comps.verb.length);
    const teamInd = Math.floor(Math.random() * comps.team.length);

    return `${comps.name[nameInd]} ${comps.verb[verbInd]} ${comps.team[teamInd]}`;
}

// Print the randomized message out to the user
const message = randomMessage(components);
console.log(message);