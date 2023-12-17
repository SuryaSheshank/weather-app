import React, { useState} from 'react';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import { IconButton } from '@mui/material';
import {toast} from 'react-toastify'
import { fetchWeatherData } from '../current-weather-card/current-weather-card-service';
import { useCityContext } from '../../contexts/CityContext';



const CitySearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const {cities,setCities}=useCityContext();
  const updateCities=(city:string)=>{
    setCities([...cities,city]);
  }

  const handleSearchChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  const validate=()=>{
    if(searchTerm==="")return false;
    if(cities.includes(searchTerm)){
      toast.error('city alreeady exists');
      return false;
    }
    
    return true;
  }
  const handleAdd=async ()=>{
    if(!validate())return;
    
    const res=await fetchWeatherData(searchTerm,'metric');
    if(res?.cod===200){
      const city=`${res?.name}, ${res?.sys?.country}`
      if(cities.includes(city)){
        toast.error('city already exists');
        return;

      }
      updateCities(city);
      // console.log('success');
    }else{
       toast.error(`Error : ${res?.message}`)
      // console.log('error')
    }
  }


  return (
    <div>
       <TextField onInput={handleSearchChange} label="City,Country Code" />
       <IconButton onClick={handleAdd}><AddIcon fontSize='large'/></IconButton>
    </div>
  );
};

export default CitySearch;
