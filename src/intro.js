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
          <table>
            <thead>
              <tr>
                <th>Tasks</th>
                <th>Date</th>
                <th>Detail</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Highlight the winner</td>
                <td>2020.04.09</td>
                <td>When someone wins, highlight the three squares that caused the win.</td>
              </tr>
            </tbody>
          </table>
          <li>Make it more interesting</li>
        </ol>
      </div>
    </div>
  );
};

export default Intro;
