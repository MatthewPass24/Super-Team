

const teamMembers = [
    {
        name: 'Lionel Messi',
        age: 36,
        activelyPlaying: true,
        position: 'Forward',
        skills: ['Dribbling', 'Shooting', 'Passing'],
        strengths: 'Ball control', 
        weaknesses: 'Heading Ability',
        biography: 'Lionel Messi is considered one of the greatest football players of all time',
    },
    {
        name: 'Lionel Messi Jr.',
        position: 'Midfielder',
        skills: ['Dribbling', 'Shooting', 'Passing'],
        strengths: 'Ball control', 
        weaknesses: 'Heading Ability',
        biography: 'Lionel Messi is considered one of the greatest football players of all time',
    },
    {
        name: 'Lionel Messi III',
        position: 'Defender',
        skills: ['Dribbling', 'Shooting', 'Passing'],
        strengths: 'Ball control', 
        weaknesses: 'Heading Ability',
        biography: 'Lionel Messi is considered one of the greatest football players of all time',
    },
    {
        name: 'Lionel Messi III',
        position: 'Defender',
        skills: ['Dribbling', 'Shooting', 'Passing'],
        strengths: 'Ball control', 
        weaknesses: 'Heading Ability',
        biography: 'Lionel Messi is considered one of the greatest football players of all time',
    },
    {
        name: 'Lionel Messi III',
        position: 'Defender',
        skills: ['Dribbling', 'Shooting', 'Passing'],
        strengths: 'Ball control', 
        weaknesses: 'Heading Ability',
        biography: 'Lionel Messi is considered one of the greatest football players of all time',
    },
    {
        name: 'Lionel Messi III',
        position: 'Defender',
        skills: ['Dribbling', 'Shooting', 'Passing'],
        strengths: 'Ball control', 
        weaknesses: 'Heading Ability',
        biography: 'Lionel Messi is considered one of the greatest football players of all time',
    },
    {
        name: 'Lionel Messi III',
        position: 'Defender',
        skills: ['Dribbling', 'Shooting', 'Passing'],
        strengths: 'Ball control', 
        weaknesses: 'Heading Ability',
        biography: 'Lionel Messi is considered one of the greatest football players of all time',
    },
    {
        name: 'Lionel Messi III',
        position: 'Defender',
        skills: ['Dribbling', 'Shooting', 'Passing'],
        strengths: 'Ball control', 
        weaknesses: 'Heading Ability',
        biography: 'Lionel Messi is considered one of the greatest football players of all time',
    },
    {
        name: 'Lionel Messi III',
        position: 'Defender',
        skills: ['Dribbling', 'Shooting', 'Passing'],
        strengths: 'Ball control', 
        weaknesses: 'Heading Ability',
        biography: 'Lionel Messi is considered one of the greatest football players of all time',
    },
    {
        name: 'Lionel Messi III',
        position: 'Defender',
        skills: ['Dribbling', 'Shooting', 'Passing'],
        strengths: 'Ball control', 
        weaknesses: 'Heading Ability',
        biography: 'Lionel Messi is considered one of the greatest football players of all time',
    },
    {
        name: 'Lionel Messi III',
        position: 'Defender',
        skills: ['Dribbling', 'Shooting', 'Passing'],
        strengths: 'Ball control', 
        weaknesses: 'Heading Ability',
        biography: 'Lionel Messi is considered one of the greatest football players of all time',
    },
    {
        name: 'Lionel Messi III',
        position: 'Defender',
        skills: ['Dribbling', 'Shooting', 'Passing'],
        strengths: 'Ball control', 
        weaknesses: 'Heading Ability',
        biography: 'Lionel Messi is considered one of the greatest football players of all time',
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
            <div class = "card">
                <div class = "card-header" style="background-color: ${backgroundColor}"> ${member.name}</div>
                <div class = "card-body">
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