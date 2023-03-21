// Create speaker section
const fighters = document.querySelector('.fighters');

const fightersObj = {
  indicators: ['./img/indicator.svg', './img/indicator02.svg'],
  profileImg: ['img/fighters/alexa.png','img/fighters/izzy.png','img/fighters/jones.png','img/fighters/pereira.png','img/fighters/volk.png','img/fighters/Zhang.png'],
  name: [
  'Alexa Grasso',
  'Israel Adesanya',
  'Jon Jones',
  'Alex Pereira',
  'Alex Volkanoski',
  'Zhang Weili'
  ],
  title: [
  'UFC Womens\' Strawweight Champion ',
  '#1 Ranked UFC Middleweight',
  'UFC Heavyweight Champion',
  'UFC Middleweight Champion',
  'UFC Featherweight Champion',
  'UFC Womens\' Strawweight Champion',
  ],
  description: [
  'Alexa Grasso is a Mexican mixed martial artist who competes in the women\'s flyweight division of the Ultimate Fighting Championship (UFC). She was born on August 9, 1993, in Guadalajara, Jalisco, Mexico.',
  'Israel Mobolaji Odunayo Oluwafemi Temitayo Owolabi Adesanya is a New Zealand professional mixed martial artist, kickboxer, and former boxer with multiple championships in all three disciplines.',
  'Jonathan Dwight Jones is an American professional mixed martial artist currently signed to the Ultimate Fighting Championship, where he is the current UFC Heavyweight Champion. He is a former two-time UFC Light Heavyweight Champion, holding the title from March 2011 to April 2015 and from December 2018 to August 2020.',
  'Alexsandro Pereira is a Brazilian professional mixed martial artist and former kickboxer. He currently competes in the Middleweight division in the Ultimate Fighting Championship, where he is the current UFC Middleweight Champion',
  'Alexander Volkanovski is an Australian mixed martial artist. He currently competes in the Featherweight division in the Ultimate Fighting Championship, where he is the current UFC Featherweight Champion. ',
  'Zhang Weili is a Chinese mixed martial artist. She is the former Kunlun Fight strawweight champion and competes in the strawweight division of the Ultimate Fighting Championship, where she is the current and two-time UFC Women\'s Strawweight Champion.',
  ],
};


window.onload = function getData() {
  const divOne = document.createElement('div');
  const h2One = document.createElement('h2');
  h2One.textContent = 'Guest fighters';
  const imgOne = document.createElement('img');
  imgOne.classList.add('indicator');
  imgOne.setAttribute('src', fightersObj.indicators[0]);
  divOne.append(h2One, imgOne);
  fighters.append(divOne);

  const divTwo = document.createElement('div');
  divTwo.classList.add('fightersContainer');

  const divThree = [];
  const divFour = [];
  const imgTwo = [];
  const divFive = [];
  const h2Two = [];
  const h3One = [];
  const imgThree = [];
  const pOne = [];

  function dynamic(index, num) {
    for (let i = index; i < num; i += 1) {
      divThree[i] = document.createElement('div');
      divThree[i].classList.add('fighterItem');
      divFour[i] = document.createElement('div');
      imgTwo[i] = document.createElement('img');
      imgTwo[i].setAttribute('src', fightersObj.profileImg[i]);
      divFour[i].append(imgTwo[i]);
      divThree[i].append(divFour[i]);
      divFive[i] = document.createElement('div');
      divFive[i].classList.add('profile');
      h2Two[i] = document.createElement('h2');
      h2Two[i].textContent = fightersObj.name[i];
      divFive[i].append(h2Two[i]);
      h3One[i] = document.createElement('h3');
      h3One[i].textContent = fightersObj.title[i];
      divFive[i].append(h3One[i]);
      imgThree[i] = document.createElement('img');
      imgThree[i].setAttribute('src', fightersObj.indicators[1]);
      divFive[i].append(imgThree[i]);
      pOne[i] = document.createElement('p');
      pOne[i].textContent = fightersObj.description[i];
      divFive[i].append(pOne[i]);
      divThree[i].append(divFive[i]);
      divTwo.append(divThree[i]);
    }
    fighters.append(divOne, divTwo);
  }

  if (window.innerWidth < 768) {
    dynamic(0, 2);
  } else {
    dynamic(0, 6);
  }

  if (window.innerWidth < 768) {
    const more = document.createElement('div');
    const moreBtn = document.createElement('button');
    moreBtn.setAttribute('type', 'button');
    moreBtn.classList.add('moreBtn');
    moreBtn.textContent = 'More';
    const moreImg = document.createElement('img');
    moreImg.setAttribute('src', './img/union.svg');
    moreImg.classList.add('moreImg');
    moreBtn.append(moreImg);
    more.append(moreBtn);
    fighters.append(more);

    more.addEventListener('click', () => {
      if (moreBtn.textContent === 'More') {
        dynamic(2, 6);
        moreBtn.textContent = 'Less';
        moreImg.setAttribute('src', './img/union.svg');
        moreImg.classList.add('moreImg');
        moreImg.classList.add('flipImg');
        moreBtn.append(moreImg);
        more.append(moreBtn);
        fighters.append(more);
      } else {
        divThree[2].remove();
        divThree[3].remove();
        divThree[4].remove();
        divThree[5].remove();
        moreBtn.textContent = 'More';
        moreImg.setAttribute('src', './img/union.svg');
        moreImg.classList.add('moreImg');
        moreImg.classList.remove('flipImg');
        moreBtn.append(moreImg);
        more.append(moreBtn);
        fighters.append(more);
      }
    });
  }
};

// Reload during screen resize
window.onresize = function checkWindow() {
  window.location.reload();
};