import { useDispatch, useSelector } from 'react-redux';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { addTermAction } from '../../actions/tweets';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '30ch'
    },
  },
}));

export const Header = () => {
  const [inputValue, setInputValue] = useState('');

  const { terms } = useSelector(state => state.tweets)
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleClickButtonApply = (value) => {
    if (terms.length < 3) {
      dispatch(addTermAction(value));
    }

    setInputValue('');

  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{
          justifyContent: 'center',
        }}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Type a topic"
              inputProps={{ 'aria-label': 'search' }}
              onChange={handleInputChange}
              value={inputValue}
            />
          </Search>
          <Box sx={{ ml: 4 }}>
            <Button
              variant="contained"
              color='secondary'
              onClick={() => handleClickButtonApply(inputValue)}
            >
              Apply
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
