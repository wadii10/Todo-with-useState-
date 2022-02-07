import { IconButton, Input, InputAdornment } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import React from 'react';
import './TaskCard.css'

const TaskCard = ({oneTask, del, donee}) => {
  return (
  <div className='oneTask'>
  
  <Input disabled defaultValue={oneTask.text} 
     endAdornment={
      <InputAdornment position="end">
        <IconButton
          edge="end"
          onClick={()=>del(oneTask.id)}
        >
          <DeleteIcon />
        </IconButton>
      </InputAdornment>
    }

    startAdornment={
      <InputAdornment position="start">
        <IconButton
          edge="start"
          onClick={()=>donee(oneTask.id)}
        >
          { oneTask.isDone?<CheckCircleOutlineIcon sx={{ color: "green" }} /> :<CheckCircleOutlineIcon /> }
        </IconButton>
      </InputAdornment>
    } 
  />
  </div>
  )
};

export default TaskCard;
