import { useDispatch, useSelector } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import { addTermAction } from '../../actions/tweets';
import { tweetsApi } from '../../api'
import { setAlertOpen } from '../../actions/ui';
import { startLogout } from '../../actions/auth';
import { Search, SearchIconWrapper, StyledInputBase } from './Search';


export const Header = () => {
  const [inputValue, setInputValue] = useState('');

  const { terms } = useSelector(state => state.tweets)
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleClickButtonApply = (value) => {
    const newValue = value.toLowerCase()

    if (terms.length < 3 && newValue !== '' && !terms.includes(newValue)) {
      dispatch(addTermAction(newValue));
      dispatch(setAlertOpen(`Now streaming  ${newValue}`));
    }

    setInputValue('');

  }

  const handleLogout = () => {
    dispatch(startLogout());
  }

  useEffect(() => {
    if (terms.length > 0) {

      const updateTerms = async (newTerms) => {

        await tweetsApi.post('/updateSearchTerm', {
          searchTerm: newTerms
        })
      }

      updateTerms(terms)
    }

  }, [terms])

  return (
    <Box sx={{ flexGrow: 1, mb: 8 }}>
      <AppBar position="fixed">
        <Toolbar sx={{
          justifyContent: 'center',
        }}>
          <Button color="inherit" sx={{
            mr: 2,
          }}
            onClick={handleLogout}
          >
            Logout
          </Button>
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
