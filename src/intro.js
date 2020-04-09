import React from 'react';

const Intro = () => {
  return (
    <div className="intro-content">
      <div>
        Try this little game, check out who is the winner.
        Is it X or O?
        Maybe this isn't a million dollar question, but it's fun.
        <ol>
          <li>Complete requirments</li>
            <ol>
              <li>When someone wins, highlight the three squares that caused the win.</li>
            </ol>
          <li>Make it more interesting</li>
        </ol>
      </div>
    </div>
  );
};

export default Intro;
