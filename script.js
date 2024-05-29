

const teamMembers = [
    {
        rank: '1.',
        name: 'Superman',
        age: 36,
        activelyPlaying: true,
        position: 'Forward',
        skills: ['Flight', 'Super Strength', 'Heat Vision'],
        strengths: 'Leadership and Integrity', 
        weaknesses: 'Kryptonite',
        biography: 'Superman was sent to Earth after his planet, Krypton, was destroyed. With his great powers, he seeks to protect the world and achieve justice.',
        image: 'images/superman.png',
    },
    {
        rank: '2.',
        name: 'Thor',
        position: 'Midfielder',
        skills: ['Energy Manipulation', 'Mjolnir control', 'Durability'],
        strengths: 'Bravery', 
        weaknesses: 'Stubborness and recklessness',
        biography: 'Thor is the God of Thunder and is the son of Odin. He wields the magical hammer Mjolnir and protects innocents across the nine realms.',
        image: 'images/thor.jpg'
    },
    {
        rank: '3.',
        name: 'Dr. Manhattan',
        position: 'Defender',
        skills: ['Telekinesis', 'Reality Warping', 'Omniscience'],
        strengths: 'Mastery over physics', 
        weaknesses: 'Apathy',
        biography: 'Physicist Jon Osterman developed the power to manipulate matter after a lab accident. He was dubbed Doctor Manhattan because of his limitless power. ',
        image: 'images/manhattan.jpg'
    },
    {
        rank: '4.',
        name: 'Hulk',
        position: 'Defender',
        skills: ['Super Strength', 'Invulnerability', 'Regeneration'],
        strengths: 'Ball control', 
        weaknesses: 'Mind Control',
        biography: 'The Hulk is the alter ego of Dr. Bruce Banner who emerged after exposure to gamma radiation. Banner transforms when he is angry or stressed. ',
        image: 'images/hulk.jpg'
    },
    {
        rank: '5.',
        name: 'Wonder Woman',
        position: 'Defender',
        skills: ['Agility/reflexes', 'Super Healing', 'Magic Weaponry'],
        strengths: 'Wisdom and Honesty', 
        weaknesses: 'Biological Clock',
        biography: 'Lionel Messi is considered one of the greatest football players of all time',
        image: 'images/ww.jpg'
    },
    {
        rank: '6.',
        name: 'Doctor Strange',
        position: 'Defender',
        skills: ['Astral Projection', 'Time Travel', 'Spellcasting'],
        strengths: 'Intelligence and Decisiveness', 
        weaknesses: 'Arrogance',
        biography: 'Lionel Messi is considered one of the greatest football players of all time',
        image: 'images/strange.png'
    },
    {
        rank: '7.',
        name: 'Scarlet Witch',
        position: 'Defender',
        skills: ['Chaos Magic', 'Telepathy', 'Transmutation'],
        strengths: 'Mastery of Magic', 
        weaknesses: 'Inconsistent Control of Body',
        biography: 'Lionel Messi is considered one of the greatest football players of all time',
        image: 'images/witch.jpg'
    },
    {
        rank: '8.',
        name: 'Sentry',
        position: 'Defender',
        skills: ['Immortality', 'Biokinesis', 'Telepathy'],
        strengths: 'Heightened Senses', 
        weaknesses: 'The Void',
        biography: 'Lionel Messi is considered one of the greatest football players of all time',
        image: 'images/sentry.png'
    },
    {
        rank: '9.',
        name: 'Shazam',
        position: 'Defender',
        skills: ['Power of Zeus', 'Transformation', 'Strength of Hercules'],
        strengths: 'Purity of Heart and Courage', 
        weaknesses: 'Heading Ability',
        biography: 'Lionel Messi is considered one of the greatest football players of all time',
        image: 'images/shazam.jpg'
    },
    {
        rank: '10.',
        name: 'The Flash',
        position: 'Defender',
        skills: ['Super Speed', 'Time Travel', 'Speed Thinking'],
        strengths: 'Intuitive and Adaptable', 
        weaknesses: 'Extreme Temperatures',
        biography: 'Lionel Messi is considered one of the greatest football players of all time',
        image: 'images/flash.jpg'
    },
    {
        rank: '11.',
        name: 'Frank Richards',
        position: 'Defender',
        skills: ['Psionic Abilities', 'Reality Manipulation', 'Pocket Universes'],
        strengths: 'Intelligence', 
        weaknesses: 'Instability',
        biography: 'Lionel Messi is considered one of the greatest football players of all time',
        image: 'images/franklin.jpg'
    },
    {
        rank: '12.',
        name: 'Supergirl',
        position: 'Defender',
        skills: ['Super Strength', 'Super Speed', 'Solar Energy Absorption'],
        strengths: 'Combat Trained', 
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