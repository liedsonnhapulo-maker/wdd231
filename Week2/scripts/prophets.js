const displayProphets = (prophets) => {

    prophets.forEach((prophet) => {

        // Criar elementos do cartão
        const card = document.createElement('section');
        const fullName = document.createElement('h2');
        const portrait = document.createElement('img');
        const birthDate = document.createElement('p');
        const birthPlace = document.createElement('p');


        // Nome completo
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;


        // Informações de nascimento
        birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;

        birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;


        // Imagem
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute(
            'alt',
            `Portrait of ${prophet.name} ${prophet.lastname}`
        );
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');


        // Adicionar elementos ao cartão
        card.appendChild(fullName);
        card.appendChild(portrait);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);


        // Adicionar cartão ao div cards
        cards.appendChild(card);

    });
};