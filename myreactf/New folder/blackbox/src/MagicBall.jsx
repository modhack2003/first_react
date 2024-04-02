import React from 'react';

const answers = [
  'It is certain',
  'It is decidedly so',
  'Without a doubt',
  'Yes, definitely',
  'You may rely on it',
  'As I see it, yes',
  'Most likely',
  'Outlook good',
  'Signs point to yes',
  'Yes',
  'Reply hazy, try again',
  'Ask again later',
  'Better not tell you now',
  'Cannot predict now',
  'Concentrate and ask again',
  "Don't bet on it",
  'My reply is no',
  'My sources say no',
  'Outlook not so good',
  'Very doubtful',
];

const MagicBall = () => {
  const [answer, setAnswer] = React.useState(null);

  const shakeBall = () => {
    setAnswer(answers[Math.floor(Math.random() * answers.length)]);
  };

  return (
<div className="magic-ball">
      <div className="magic-ball-inner" onClick={shakeBall}>
        {answer ? (
          <p className="answer">{answer}</p>
        ) : (
          <p className="shake">SHAKE ME!</p>
        )}
      </div>
    </div>
  );
};

export default MagicBall;