const panels = document.querySelectorAll('.panel');
const topText = document.querySelector('.top-text');
const middleText = document.querySelector('.middle-text');
const bottomText = document.querySelector('.bottom-text');
document.querySelector('.credit').addEventListener('click', () => window.open('https://www.google.com', '_blank'));
document.querySelector('.refresh').addEventListener('click', () => window.location.href=window.location.href);

let numberArray = [];

let phrasesArray = [
    {
        top: 'Just',
        middle: 'Keep',
        bottom: 'Going'
    },
    {
        top: 'Love',
        middle: 'Conquers ',
        bottom: 'All'
    },
    {
        top: 'Dream',
        middle: 'Big,',
        bottom: 'Achieve'
    },
    {
        top: 'Live,',
        middle: 'Laugh,',
        bottom: 'Love'
    },
    {
        top: 'Dance',
        middle: 'In',
        bottom: 'Rain'
    },
    {
        top: 'Knowledge',
        middle: 'Is',
        bottom: 'Power'
    },
    {
        top: 'Learn,',
        middle: 'Grow,',
        bottom: 'Thrive'
    },
    {
        top: 'Never',
        middle: 'Give',
        bottom: 'Up'
    },
    {
        top: 'Time',
        middle: 'Heals',
        bottom: 'All'
    },
    {
        top: 'Chase',
        middle: 'Your',
        bottom: 'Dreams'
    },
    {
        top: 'Find',
        middle: 'Your',
        bottom: 'Purpose'
    },
    {
        top: 'Embrace',
        middle: 'The',
        bottom: 'Journey'
    },
    {
        top: 'Adventure',
        middle: 'Is',
        bottom: 'calling'
    },
    {
        top: 'Appreciate',
        middle: 'The',
        bottom: 'Moment'
    },
    {
        top: 'Be',
        middle: 'The',
        bottom: 'exception'
    },
    {
        top: 'Believe',
        middle: 'In',
        bottom: 'You'
    },
    {
        top: 'Believe',
        middle: 'You',
        bottom: 'Can'
    },
    {
        top: 'Break',
        middle: 'The',
        bottom: 'Routine'
    },
    {
        top: 'Build',
        middle: 'Your',
        bottom: 'Dreams'
    },
    {
        top: 'Calm.',
        middle: 'Peaceful.',
        bottom: 'Powerful.'
    },
    {
        top: 'Dare',
        middle: 'To',
        bottom: 'Begin'
    },
    {
        top: 'Dare',
        middle: 'To ',
        bottom: 'Try'
    },
    {
        top: 'Discipline',
        middle: 'Is',
        bottom: 'Key'
    },
    {
        top: `Don't`,
        middle: 'Give',
        bottom: 'Up'
    },
    {
        top: 'Hope',
        middle: 'Is',
        bottom: 'Strength'
    },
    {
        top: 'Give',
        middle: 'All',
        bottom: 'You can'
    }
];

function randomNumberGenerator() {
    while(numberArray.length < 25) {
        let randomNumber = Math.floor(Math.random() * 25);
        if (!numberArray.includes(randomNumber)) {
            numberArray.push(randomNumber)
        }
    }
};

document.querySelectorAll('.panel').forEach(panel => {
    panel.addEventListener('click', function() {
      if (this.classList.contains("widen")) {
        this.classList.remove("widen");
        this.classList.add("contract");
        this.children[0].classList.add('hide-top');
        this.children[0].classList.remove('reveal-top');
        this.children[1].setAttribute('style', 'animation: zoom-out-text 1s ease-in-out forwards');
        this.children[2].setAttribute('style', 'animation: hide-bottom-text 1s ease-in-out forwards;');
      } else {
        this.classList.remove("contract");
        this.classList.add("widen");
        this.children[0].classList.add('reveal-top');
        this.children[1].setAttribute('style', 'animation: zoom-in-text 1s ease-in-out forwards');
        this.children[2].setAttribute('style', 'animation: reveal-bottom-text 1s ease-in-out forwards; animation-delay: 0.5s;');
      }
    });
});

function backgroundSet() {
    for (let i = 0; i < 5; i++) {
        panels[i].setAttribute('style', `background-image: url(resources/${numberArray[i]}.jpg)`);
        panels[i].setAttribute('style', `background-image: url(resources/${numberArray[i]}.jpg)`);
        panels[i].setAttribute('style', `background-image: url(resources/${numberArray[i]}.jpg)`);
        panels[i].setAttribute('style', `background-image: url(resources/${numberArray[i]}.jpg)`);
        panels[i].setAttribute('style', `background-image: url(resources/${numberArray[i]}.jpg)`);
    }
    for (let i = 0; i < 5; i++) {
        panels[i].children[0].textContent = phrasesArray[numberArray[i]].top;
        panels[i].children[1].textContent = phrasesArray[numberArray[i]].middle;
        panels[i].children[2].textContent = phrasesArray[numberArray[i]].bottom;
    }
};

randomNumberGenerator()
backgroundSet()