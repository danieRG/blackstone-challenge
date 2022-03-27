import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mui/material';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { removeTermAction } from '../../actions/tweets';


export const ChipComponent = () => {
  const { terms } = useSelector(state => state.tweets)
  const dispatch = useDispatch();

  const handleDelete = (index) => {
    const filteredTopics = terms.filter((_, i) => i !== index)
    dispatch(removeTermAction(filteredTopics));
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
          terms.map((term, index) => (
            <Chip key={index} label={term} variant="outlined" onDelete={() => handleDelete(index)} />
          ))
        }

      </Stack>
    </Box>

  )
}
