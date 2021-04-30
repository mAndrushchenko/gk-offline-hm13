export interface IQuote {
  text: string;
  author: string;
}

const quotesData: IQuote[] = [];

const arrOfText: string[] = [
  'You miss 100% of the shots you don\'t take.', 'Wayne Gretzky',
  'Whether you think you can or you think you can\'t, you\'re right.', 'Henry Ford',
  'I have learned over the years that when one\'s mind is made up, this diminishes fear.', 'Rosa Parks',
  'I alone cannot change the world, but I can cast a stone across the water to create many ripples.', 'Mother Teresa',
  'Nothing is impossible, the word itself says, ‘I\'m possible!\'', 'Audrey Hepburn',
  'The question isn\'t who is going to let me; it\'s who is going to stop me.', 'Ayn Rand',
  'The only person you are destined to become is the person you decide to be.', 'Ralph Waldo Emerson',
  'If you really look closely, most overnight successes took a long time.', 'Steve Jobs',
  'The secret of success is to do the common thing uncommonly well.', 'John D. Rockefeller Jr.',
  'I find that the harder I work, the more luck I seem to have.', 'Thomas Jefferson',
  'Never let the fear of striking out keep you from playing the game.', 'Babe Ruth',
  'Life is either a daring adventure or nothing at all.', 'Helen Keller',
  'Many of life\'s failures are people who did not realize how close they were to success when they gave up.', 'Thomas A. Edison',
  'The future belongs to those who believe in the beauty of their dreams.', 'Eleanor Roosevelt',
  'Tell me and I forget. Teach me and I remember. Involve me and I learn.', 'Benjamin Franklin'
];

arrOfText.forEach((str, index) => {
  if (index % 2 === 0) {
    quotesData.push({
      text: str,
      author: arrOfText[index + 1]
    });
  }
});

export { quotesData };


