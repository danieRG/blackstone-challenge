import { Box } from '@mui/material';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { useState } from 'react';

const wordsArray = [
  'javascript',
  'tesla',
  'twitter',
]

export const ChipComponent = () => {
  const [topics, setTopics] = useState(wordsArray);

  const handleDelete = (index) => {

    const filteredTopics = topics.filter((_, i) => i !== index)

    setTopics(filteredTopics);
  };
  
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      padding: '1rem',
      ml: 2,
    }}>
    <Stack direction="row" spacing={2}>
      {
        topics.map((word, index) => (
          <Chip key={index} label={word} variant="outlined" onDelete={() => handleDelete(index)} />
        ))
      }
        
  </Stack>
    </Box>

  )
}
