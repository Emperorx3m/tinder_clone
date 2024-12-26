import React from 'react'
import "./ActionButtons.css"
import { IconButton } from '@mui/material';
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';

function ActionButtons({goBack, swipe}) {

  return (
    <div className='actionbuttons'>
      
      <IconButton  onClick={() => goBack()} className='actionbuttons__repat'>
        <ReplayIcon fontSize="large"/>
      </IconButton>

       <IconButton onClick={() => swipe('left')} className='actionbuttons__left'>
        <CloseIcon fontSize="large"/>
      </IconButton>

       <IconButton className='actionbuttons__star'>
        <StarIcon fontSize="large"/>
      </IconButton>

      <IconButton onClick={() => swipe('right')} className='actionbuttons__right'>
        <FavoriteIcon fontSize="large"/>
      </IconButton>

      <IconButton className='actionbuttons__lightning'>
        <FlashOnIcon fontSize="large"/>
      </IconButton>


    </div>
  )
}

export default ActionButtons