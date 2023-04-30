// Scrapes entirety of cards table
// Use filesaver js to export as JSON file

const table = document.querySelector('.card-list');
const rows = table.querySelectorAll('tr')
const data = []

// Loop through and extract stats
rows.forEach(row => {
    var name, imageUrl, type, maxHP, maxATK, spells, buddies;

    const cells = row.querySelectorAll('td');

    if (!cells[0] || !cells[1] || !cells[2] || !cells[3] || !cells[4] || !cells[5])
        return

    name = cells[0].querySelectorAll('a')[1].textContent;
    imageUrl = cells[0].querySelector('img').src
    type = cells[1].textContent.trim();
    maxHP = cells[2].textContent.trim();
    maxATK = cells[3].textContent.trim();
    spells = cells[4].textContent.trim();
    
    buddies = [];
    var buddyDivs = cells[5].querySelectorAll('.card-list-buddy a');
    var buddyDivsBonus = cells[5].querySelectorAll('.card-list-buddy');
    
    for (let i = 0; i < buddyDivs.length; i++) {
        var buddy = {
            name: buddyDivs[i].title,
            bonus: buddyDivsBonus[i].textContent.trim()
        }
        buddies.push(buddy);
    }
    
    // Store the extracted information as an object in the data array
    data.push({
    name,
    imageUrl,
    type,
    maxHP,
    maxATK,
    spells,
    buddies
    })
})

// Export data as JSON file
