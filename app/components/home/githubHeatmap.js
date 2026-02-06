'use client';
import { GitHubCalendar } from 'react-github-calendar';

const GithubHeatmap = () => {
  return (
    <div style={{ overflowX: 'auto',
      display:'flex',
      borderTop: '.5px solid #0000002a',
      borderBottom: '.5px solid #0000002a',
      justifyContent:'center',
      padding:'10px',
      width:'100%'}}>
      <GitHubCalendar
        username="Mostafa-Ashraf0"
        blockSize={14}
        blockMargin={4}
        fontSize={14}
        tooltips= {true}
        theme={{
          light: ['#ebedf0', '#2d853e', '#7bc96f', '#239a3b', '#196127'],
          dark: ['#ebedf0', '#2d853e', '#7bc96f', '#239a3b', '#196127'],
        }}
        
      />
    </div>
  );
};

export default GithubHeatmap;
