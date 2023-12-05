const newsData = [
    {
        "headline": "Sensational Comeback: Team X Secures Victory in Overtime",
        "source": "Sports Chronicle",
        "date": "2023-12-10",
        "content": "Team X staged a remarkable comeback in a high-stakes match, securing victory in overtime. The players displayed exceptional resilience and determination, turning the game around in the final minutes."
    },
    {
        "headline": "Record-Breaking Run: Athlete Y Sets New 100m Sprint Record",
        "source": "Sprint Magazine",
        "date": "2023-12-11",
        "content": "In a jaw-dropping display of speed, Athlete Y shattered the previous 100m sprint record. The athlete's lightning-fast run has left fans and experts alike in awe of their extraordinary athleticism."
    },
    {
        "headline": "Surprise Upset: Underdog Team Z Defeats Champions",
        "source": "Upset Sports Weekly",
        "date": "2023-12-12",
        "content": "In a stunning turn of events, underdog Team Z pulled off a major upset by defeating the reigning champions. The victory has sent shockwaves through the sporting community, redefining expectations for the season."
    },
    {
        "headline": "Star Player Injury: Team Captain Out for Next Three Matches",
        "source": "Injury Update Daily",
        "date": "2023-12-13",
        "content": "Team A faces a setback as their star player and captain will be sidelined for the next three matches due to an unfortunate injury. The team is now strategizing to cope with the absence of their key player."
    },
    {
        "headline": "Rivalry Renewed: Classic Showdown Between Team P and Team Q",
        "source": "Rivalry Report",
        "date": "2023-12-14",
        "content": "The age-old rivalry between Team P and Team Q will be reignited in an upcoming match. Fans can expect a fierce competition as these two historic rivals face off once again on the field."
    },
    {
        "headline": "Rookie Sensation: Young Talent Shines in Debut Performance",
        "source": "Rising Stars Gazette",
        "date": "2023-12-15",
        "content": "A rookie player made a memorable debut, showcasing exceptional skills and contributing significantly to the team's success. The sports world is buzzing with excitement over the emergence of this promising young talent."
    },
    {
        "headline": "Championship Countdown: Final Four Teams Gear Up for Semifinals",
        "source": "Championship Watch",
        "date": "2023-12-16",
        "content": "As the championship approaches, the final four teams are intensifying their preparations for the semifinals. Fans are eagerly anticipating the thrilling matchups that will determine who advances to the grand finale."
    },
    {
        "headline": "Team Spirit Triumphs: Team M Celebrates Unforgettable Team-Building Retreat",
        "source": "Team Spirit Magazine",
        "date": "2023-12-17",
        "content": "Team M's recent team-building retreat proved to be a game-changer as players bonded, fostering a stronger sense of camaraderie. The positive effects were evident in their subsequent performances on the field."
    },
    {
        "headline": "Global Tournament Announced: Teams from Around the World to Compete",
        "source": "Global Sports News",
        "date": "2023-12-18",
        "content": "A prestigious global tournament has been announced, featuring top teams from around the world. The competition promises to be fierce, with teams vying for international glory and recognition."
    },
    {
        "headline": "Fan Frenzy: Ticket Sales Soar for Season Finale",
        "source": "Fanatics Tribune",
        "date": "2023-12-19",
        "content": "Excitement is reaching a fever pitch as fans clamor for tickets to the highly anticipated season finale. Organizers are reporting record-breaking ticket sales, reflecting the intense interest in the upcoming event."
    },
    {
        "headline": "Coach's Corner: Exclusive Interview with Team N's Head Coach",
        "source": "Coach's Insight",
        "date": "2023-12-20",
        "content": "In an exclusive interview, Team N's head coach shares insights into the team's strategies and preparations for the upcoming challenges. Fans gain a behind-the-scenes perspective on the coach's vision for success."
    },
    {
        "headline": "Community Engagement: Team R Hosts Youth Sports Clinic",
        "source": "Community Connection",
        "date": "2023-12-21",
        "content": "Demonstrating a commitment to community engagement, Team R organized a youth sports clinic, providing aspiring athletes with the opportunity to learn from and interact with professional players."
    },
    {
        "headline": "Athlete Spotlight: Profile of Rising Star Zara Johnson",
        "source": "Athlete Focus",
        "date": "2023-12-22",
        "content": "Discover the inspiring journey of Zara Johnson, a rising star in the world of sports. From overcoming challenges to achieving remarkable milestones, Zara's story serves as motivation for aspiring athletes."
    },
    {
        "headline": "Team Chemistry Test: Coach Implements New Training Drills",
        "source": "Training Tactics Today",
        "date": "2023-12-23",
        "content": "Team B's coach introduces innovative training drills to enhance team chemistry and coordination. Players are adapting to the new strategies, and early results suggest positive improvements on the field."
    },
    {
        "headline": "Historic Win: Team S Secures 1000th Victory in Franchise History",
        "source": "Historic Milestones",
        "date": "2023-12-24",
        "content": "Team S celebrated a historic milestone by securing their 1000th victory in franchise history. The achievement is a testament to the team's enduring legacy and sustained excellence over the years."
    },
    {
        "headline": "Behind the Scenes: Groundskeeper's Efforts Ensure Pristine Playing Surface",
        "source": "Field Maintenance Focus",
        "date": "2023-12-25",
        "content": "Explore the vital role of the unsung hero, the groundskeeper, whose meticulous efforts contribute to maintaining a pristine playing surface. Their dedication ensures that players compete on top-notch grounds."
    },
    {
        "headline": "Innovation in Sports Tech: Team C Adopts Cutting-Edge Performance Analytics",
        "source": "Tech in Sports",
        "date": "2023-12-26",
        "content": "Team C embraces the future of sports with the adoption of cutting-edge performance analytics. The use of advanced technology is revolutionizing training methodologies and player development."
    },
    {
        "headline": "Celebrity Showdown: Star-studded Charity Soccer Match Raises Millions",
        "source": "Charity Extravaganza",
        "date": "2023-12-27",
        "content": "Hollywood celebrities, athletes, and musicians came together for a star-studded charity soccer match that raised millions for a noble cause. The event showcased the power of sports in making a positive impact."
    },
    {
        "headline": "Epic Showdown: Archrivals Face Off in Championship Showdown",
        "source": "Championship Clash",
        "date": "2023-12-28",
        "content": "The long-standing rivalry between archrivals Team D and Team E will reach its pinnacle in the championship showdown. Fans can expect a battle of epic proportions as the two titans clash on the grand stage."
    },
    {
        "headline": "Year in Review: Top 10 Sporting Moments of 2023",
        "source": "Sports Recap",
        "date": "2023-12-29",
        "content": "Relive the excitement of the past year with a comprehensive review of the top 10 sporting moments of 2023. From thrilling victories to heartwarming stories, this recap encapsulates the best of the sporting world."
    }
    // ... (Add more news items as needed)
  ];

  // Function to create a news card
  function createNewsCard(newsItem) {
    const card = document.createElement("div");
    card.className = "card";

    const cardHeader = document.createElement("div");
    cardHeader.className = "card-header";
    cardHeader.innerText = "Sports News";
    card.appendChild(cardHeader);

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const cardTitle = document.createElement("h2");
    cardTitle.className = "card-title";
    cardTitle.innerText = newsItem.headline;
    cardBody.appendChild(cardTitle);

    const cardInfo = document.createElement("p");
    cardInfo.className = "card-info";
    cardInfo.innerText = `${newsItem.source} | ${newsItem.date}`;
    cardBody.appendChild(cardInfo);

    const cardContent = document.createElement("p");
    cardContent.className = "card-content";
    cardContent.innerText = newsItem.content;
    cardBody.appendChild(cardContent);

    card.appendChild(cardBody);

    return card;
  }

  // Populate the card container with news cards
  const cardContainer = document.getElementById("cardContainer");
  let currentRow;

  newsData.forEach((newsItem, index) => {
    // Create a new row for every three items
    if (index % 3 === 0) {
      currentRow = document.createElement("div");
      currentRow.className = "row";
      cardContainer.appendChild(currentRow);
    }

    // Create and append the news card
    const card = createNewsCard(newsItem);
    currentRow.appendChild(card);
  });




  let username = sessionStorage.getItem('username');

    if(username == null){
        let card_list = document.getElementById('cardContainer');
        card_list.style.display = 'none';
        console.log(username)
    }