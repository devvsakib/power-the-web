import { AppBar, InputBase, Toolbar, Typography } from '@material-ui/core'
import { Autocomplete } from '@react-google-maps/api'
import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import useStyle from './style'
function Header() {
  const classes = useStyle()
  return (
    <AppBar position='stataic'>
      <Toolbar className={classes.toolbar}>
        <Typography variant='h5' className={classes.title}>
          TravelAppAPI
        </Typography>
        {/* <Autocomplete> */}
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase placeholder='Search...' classes={{ root: classes.inputRoot, input: classes.inputTUT }} />
          </div>
        {/* </Autocomplete> */}
      </Toolbar>
    </AppBar>
  )
}

export default Header