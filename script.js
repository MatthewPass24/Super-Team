

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
        biography: 'Diana Prince is a highly trained pacifist and Amazon warrior-princess. She leads a disciplined but peaceful life with her fierce tribe of elite fighters.',
        image: 'images/ww.jpg'
    },
    {
        rank: '6.',
        name: 'Doctor Strange',
        position: 'Defender',
        skills: ['Astral Projection', 'Time Travel', 'Spellcasting'],
        strengths: 'Intelligence and Decisiveness', 
        weaknesses: 'Arrogance',
        biography: 'Doctor Stephen Strange was a talented neurosurgeon who was gravely injured after a car accident. Afterwards he must learn the secrets of mysticism and alternate dimensions.',
        image: 'images/strange.png'
    },
    {
        rank: '7.',
        name: 'Scarlet Witch',
        position: 'Defender',
        skills: ['Chaos Magic', 'Telepathy', 'Transmutation'],
        strengths: 'Mastery of Magic', 
        weaknesses: 'Inconsistent Control of Body',
        biography: 'The Scarlet Witch is  a mutant and born with superhuman abilities and traits. She was influenced by the High Evolutionary experimenting on her as a child.',
        image: 'images/witch.jpg'
    },
    {
        rank: '8.',
        name: 'Sentry',
        position: 'Defender',
        skills: ['Immortality', 'Biokinesis', 'Telepathy'],
        strengths: 'Heightened Senses', 
        weaknesses: 'The Void',
        biography: 'Robert Reynolds became the Sentry thanks to the Golden Sentry Serum. This serum changed his molecules and was a more advanced version of the super soldier serum.',
        image: 'images/sentry.png'
    },
    {
        rank: '9.',
        name: 'Shazam',
        position: 'Defender',
        skills: ['Power of Zeus', 'Transformation', 'Strength of Hercules'],
        strengths: 'Purity of Heart and Courage', 
        weaknesses: 'Heading Ability',
        biography: 'Billy Batson is a young boy who transforms into the superhero by speaking "Shazam!" His powers come from six mythological figures, and he must stay pure.',
        image: 'images/shazam.jpg'
    },
    {
        rank: '10.',
        name: 'The Flash',
        position: 'Defender',
        skills: ['Super Speed', 'Time Travel', 'Speed Thinking'],
        strengths: 'Intuitive and Adaptable', 
        weaknesses: 'Extreme Temperatures',
        biography: 'Barry Allen gained super speed when lightning hit him and was doused in chemicals. He took the name "Flash" and became one of the founding members of the Justice League.',
        image: 'images/flash.jpg'
    },
    {
        rank: '11.',
        name: 'Frank Richards',
        position: 'Defender',
        skills: ['Psionic Abilities', 'Reality Manipulation', 'Pocket Universes'],
        strengths: 'Intelligence', 
        weaknesses: 'Instability',
        biography: 'Franklin Richards is the son of Reed Richards and Sue Storm. He is an Omega-level mutant with reality-warping abilities, making him one of the most powerful beings.',
        image: 'images/franklin.jpg'
    },
    {
        rank: '12.',
        name: 'Supergirl',
        position: 'Defender',
        skills: ['Super Strength', 'Super Speed', 'Solar Energy Absorption'],
        strengths: 'Combat Trained', 
        weaknesses: 'Heading Ability',
        biography: 'Kara Zor-El is the cousin of Superman and shares similar powers. She was sent to Earth to protect her cousin, but her spacecraft was knocked off course and arrived much later.  ',
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