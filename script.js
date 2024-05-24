

const teamMembers = [
    {
        rank: '1.',
        name: 'Superman',
        age: 36,
        activelyPlaying: true,
        position: 'Forward',
        skills: ['Dribbling', 'Shooting', 'Passing'],
        strengths: 'Ball control', 
        weaknesses: 'Heading Ability',
        biography: 'Lionel Messi is considered one of the greatest football players of all time',
        image: 'images/superman.png',
    },
    {
        rank: '2.',
        name: 'Thor',
        position: 'Midfielder',
        skills: ['Dribbling', 'Shooting', 'Passing'],
        strengths: 'Ball control', 
        weaknesses: 'Heading Ability',
        biography: 'Lionel Messi is considered one of the greatest football players of all time',
        image: 'images/thor.jpg'
    },
    {
        rank: '3.',
        name: 'Dr. Manhattan',
        position: 'Defender',
        skills: ['Dribbling', 'Shooting', 'Passing'],
        strengths: 'Ball control', 
        weaknesses: 'Heading Ability',
        biography: 'Lionel Messi is considered one of the greatest football players of all time',
        image: 'images/manhattan.jpg'
    },
    {
        rank: '4.',
        name: 'Hulk',
        position: 'Defender',
        skills: ['Dribbling', 'Shooting', 'Passing'],
        strengths: 'Ball control', 
        weaknesses: 'Heading Ability',
        biography: 'Lionel Messi is considered one of the greatest football players of all time',
        image: 'images/hulk.jpg'
    },
    {
        rank: '5.',
        name: 'Wonder Woman',
        position: 'Defender',
        skills: ['Dribbling', 'Shooting', 'Passing'],
        strengths: 'Ball control', 
        weaknesses: 'Heading Ability',
        biography: 'Lionel Messi is considered one of the greatest football players of all time',
        image: 'images/ww.jpg'
    },
    {
        rank: '6.',
        name: 'Doctor Strange',
        position: 'Defender',
        skills: ['Dribbling', 'Shooting', 'Passing'],
        strengths: 'Ball control', 
        weaknesses: 'Heading Ability',
        biography: 'Lionel Messi is considered one of the greatest football players of all time',
        image: 'images/strange.png'
    },
    {
        rank: '7.',
        name: 'Scarlet Witch',
        position: 'Defender',
        skills: ['Dribbling', 'Shooting', 'Passing'],
        strengths: 'Ball control', 
        weaknesses: 'Heading Ability',
        biography: 'Lionel Messi is considered one of the greatest football players of all time',
        image: 'images/witch.jpg'
    },
    {
        rank: '8.',
        name: 'Sentry',
        position: 'Defender',
        skills: ['Dribbling', 'Shooting', 'Passing'],
        strengths: 'Ball control', 
        weaknesses: 'Heading Ability',
        biography: 'Lionel Messi is considered one of the greatest football players of all time',
        image: 'images/sentry.png'
    },
    {
        rank: '9.',
        name: 'Shazam',
        position: 'Defender',
        skills: ['Dribbling', 'Shooting', 'Passing'],
        strengths: 'Ball control', 
        weaknesses: 'Heading Ability',
        biography: 'Lionel Messi is considered one of the greatest football players of all time',
        image: 'images/shazam.jpg'
    },
    {
        rank: '10.',
        name: 'The Flash',
        position: 'Defender',
        skills: ['Dribbling', 'Shooting', 'Passing'],
        strengths: 'Ball control', 
        weaknesses: 'Heading Ability',
        biography: 'Lionel Messi is considered one of the greatest football players of all time',
        image: 'images/flash.jpg'
    },
    {
        rank: '11.',
        name: 'Frank Richards',
        position: 'Defender',
        skills: ['Dribbling', 'Shooting', 'Passing'],
        strengths: 'Ball control', 
        weaknesses: 'Heading Ability',
        biography: 'Lionel Messi is considered one of the greatest football players of all time',
        image: 'images/franklin.jpg'
    },
    {
        rank: '12.',
        name: 'Supergirl',
        position: 'Defender',
        skills: ['Dribbling', 'Shooting', 'Passing'],
        strengths: 'Ball control', 
        weaknesses: 'Heading Ability',
        biography: 'Lionel Messi is considered one of the greatest football players of all time',
        image: 'images/supergirl.jpg'
    },
    
]

function generateTeamCards (){
    const teamCardsContainer = document.getElementById('teamCards')

    teamMembers.forEach(member => {
        const card = document.createElement('div')
        card.classList.add('col-md-4')

        //styling card based on position:
        let backgroundColor = ''

        switch(member.position.toLowerCase()){
            case 'forward':
                backgroundColor = '#758fb6'// orange for forward
                break
            case 'midfielder':
                backgroundColor = '#758fb6'// orange for forward
                break    
            case 'defender':
                backgroundColor = '#758fb6'// orange for forward
                break              
        }   



        //Create a list of skills with the <li> tag
        const skillsList = member.skills.map(skill => `<li> ${skill} </li>`).join('')
        card.innerHTML = `
            <div class = "card" style= "margin-bottom: 1em;">
                <div class = "card-header" style="background-color: ${backgroundColor}">             
                <h3><b>${member.rank}</b> ${member.name} </h3></div>
                <div class = "card-body">
                <img style="width: 200px" src=${member.image} style="justify-content-center">
                    <p><strong>Position:</strong> ${member.position}</p>
                    <p><strong>Skills:</strong>
                        <ul>
                        ${skillsList}
                        </ul>
                    <p><strong>Strengths:</strong> ${member.strengths}</p>
                    <p><strong>Weaknesses:</strong> ${member.weaknesses}</p>
                    <p><strong>Biography:</strong> ${member.biography}</p>
                </div>
            </div>
            
        `
        teamCardsContainer.appendChild(card)
    })
    
}

window.onload = generateTeamCards()