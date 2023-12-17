import React from 'react';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useUnitsContext } from '../../contexts/UnitsContext';


export const UnitsToggle=()=>{
    const {units,setUnits}=useUnitsContext()
    const handleChange=(_e:React.ChangeEvent<HTMLInputElement>,checked:boolean)=>{
        if(checked)setUnits('imperial')
        else setUnits('metric');
    }
    return <Box sx={{display:"flex"}}>
    <Typography sx={{marginTop:"4px"}}>C&deg;</Typography>
    <Switch checked={units==='imperial'} onChange={handleChange}/>
    <Typography sx={{marginTop:"4px"}}>F&deg;</Typography>
    </Box>
   
}