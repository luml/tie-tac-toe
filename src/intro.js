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
              <tr>
                <td>FootNote and flex-direction</td>
                <td>2020.04.12</td>
                <td>Note pad as a footer by changing FlexBox direction from row to column, and make a foot notepad.</td>
              </tr>
              <tr>
                <td>Reboot button</td>
                <td>2020.04.19</td>
                <td>Hit the reboot button then whole page will be reloaded.</td>
              </tr>
              <tr>
                <td>Button Layout</td>
                <td>2020.04.20</td>
                <td>Customize the button layout with linear-gradient of background</td>
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
