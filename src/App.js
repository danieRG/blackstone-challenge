import { Tweet }  from './components/tweet/';
import './App.css';
import { Box } from '@mui/material';
import { Layout } from './components/layout';

function App() {
  return (
    <div className="App">
      <Layout>
        <Box sx={{
            gap: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
        </Box>

      </Layout>
    </div>
  );
}

export default App;
