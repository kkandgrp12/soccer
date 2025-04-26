// Mobile Menu Toggle
document.querySelector('.mobile-menu').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('show');
});

// Player Modal
const playerModal = document.getElementById('playerModal');
const modalContent = document.querySelector('.modal-content .modal-body');
const closeModal = document.querySelector('.close-modal');
const playerButtons = document.querySelectorAll('.player-modal-btn');

// Sample player data (in a real app, this would come from a database)
const players = {
    1: {
        name: "John Smith",
        position: "Goalkeeper",
        nationality: "England",
        number: 1,
        age: 28,
        joined: "2018",
        appearances: 145,
        cleanSheets: 62,
        bio: "John joined Stanley FC in 2018 from City FC and quickly established himself as first-choice goalkeeper. Known for his incredible reflexes and leadership skills, he was named club captain in 2021. John has represented England at various youth levels and is pushing for a senior call-up.",
        image: "https://i.pinimg.com/236x/dd/1e/37/dd1e378f5759099f65d13aa61809230f.jpg"
    },
    2: {
        name: "David Johnson",
        position: "Defender",
        nationality: "Scotland",
        number: 4,
        age: 26,
        joined: "2019",
        appearances: 120,
        goals: 8,
        bio: "David is a product of our youth academy who made his first-team debut in 2019. A versatile defender who can play across the back line, he's known for his composure on the ball and excellent reading of the game. David has earned 15 caps for Scotland.",
        image: "https://i.pinimg.com/474x/1a/ef/d7/1aefd7ae6ea5889e3e9f53609809ec71.jpg"
    },
    3: {
        name: "Michael Brown",
        position: "Midfielder",
        nationality: "England",
        number: 6,
        age: 25,
        joined: "2020",
        appearances: 110,
        assists: 28,
        bio: "Michael joined from Championship side Town FC in 2020 and has developed into one of the league's most creative midfielders. His vision and passing range make him the team's primary playmaker. Michael was named Young Player of the Year in 2022.",
        image: "https://i.pinimg.com/236x/50/2b/bf/502bbf56552697a5755a381a3652287c.jpg"
    },
    4: {
        name: "James Wilson",
        position: "Midfielder",
        nationality: "Wales",
        number: 8,
        age: 27,
        joined: "2017",
        appearances: 180,
        goals: 32,
        bio: "James is the engine of our midfield, combining tireless work rate with technical quality. He joined from Welsh club Dragons FC and has become a fan favorite for his commitment and important goals. James has 45 caps for Wales.",
        image: "https://media.istockphoto.com/id/1273297888/vector/default-avatar-profile-icon-grey-photo-placeholder-hand-drawn-modern-woman-avatar-profile.jpg?s=1024x1024&w=is&k=20&c=hRPQV9kMUzu5K-ZhIyz7tqageP_enJh1H7EqROo3gdU="
    },
    5: {
        name: "Robert Green",
        position: "Forward",
        nationality: "England",
        number: 9,
        age: 24,
        joined: "2021",
        appearances: 85,
        goals: 48,
        bio: "Robert is our star striker who joined from League Two side Stanley FC for a club-record fee. His pace, movement and clinical finishing have made him one of the most feared attackers in the league. Robert was top scorer last season with 26 goals.",
        image: "https://media.istockphoto.com/id/986668438/vector/default-placeholder-businessman-half-length-portr.webp?s=1024x1024&w=is&k=20&c=69c0MEhnp9d7-QBNY8xymArRgmSrsqNEE1XKWE_5NdA="
    },
    6: {
        name: "Marco Rodriguez",
        position: "Forward",
        nationality: "Spain",
        number: 10,
        age: 22,
        joined: "2025",
        appearances: 5,
        goals: 3,
        bio: "Our newest signing, Marco joined from Spanish club FC Sevilla where he was regarded as one of the most exciting young talents in La Liga. A technically gifted forward who can play across the front line, he's expected to form a deadly partnership with Robert Green.",
        image: "https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.webp?s=1024x1024&w=is&k=20&c=er-yFBCv5wYO_curZ-MILgW0ECSjt0DDg5OlwpsAgZM="
    }
};

// Open modal with player data
playerButtons.forEach(button => {
    button.addEventListener('click', function() {
        const playerId = this.getAttribute('data-player');
        const player = players[playerId];
        
        modalContent.innerHTML = `
            <div class="modal-image">
                <img src="${player.image}" alt="${player.name}">
            </div>
            <div class="modal-player-info">
                <h2>${player.name}</h2>
                <p class="position">${player.position} | #${player.number}</p>
                <p class="nationality"><img src="images/${player.nationality.toLowerCase()}.jpg" alt="${player.nationality}"> ${player.nationality}</p>
                <p class="bio">${player.bio}</p>
                
                <div class="modal-stats">
                    <h3>Player Statistics</h3>
                    <div class="stat-item">
                        <span class="stat-name">Age:</span>
                        <span>${player.age}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-name">Joined:</span>
                        <span>${player.joined}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-name">Appearances:</span>
                        <span>${player.appearances}</span>
                    </div>
                    ${player.position === 'Goalkeeper' ? `
                    <div class="stat-item">
                        <span class="stat-name">Clean Sheets:</span>
                        <span>${player.cleanSheets}</span>
                    </div>
                    ` : `
                    <div class="stat-item">
                        <span class="stat-name">Goals:</span>
                        <span>${player.goals}</span>
                    </div>
                    ${player.position === 'Midfielder' ? `
                    <div class="stat-item">
                        <span class="stat-name">Assists:</span>
                        <span>${player.assists}</span>
                    </div>
                    ` : ''}
                    `}
                </div>
            </div>
        `;
        
        playerModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
});

// Close modal
closeModal.addEventListener('click', function() {
    playerModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside
window.addEventListener('click', function(e) {
    if (e.target === playerModal) {
        playerModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});
