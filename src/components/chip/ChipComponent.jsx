import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';


export const ChipComponent = () => {
  const { terms } = useSelector(state => state.tweets)

  const handleDelete = () => {
    console.log("deletinnng")
    //elimiinar de redux
    /*     const filteredTopics = topics.filter((_, i) => i !== index)
    
        setTopics(filteredTopics); */
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
          terms.map((word, index) => (
            <Chip key={index} label={word} variant="outlined" onDelete={handleDelete} />
          ))
        }

      </Stack>
    </Box>

  )
}
