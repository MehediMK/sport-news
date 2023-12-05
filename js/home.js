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
    }
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