import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import './Checkoutstyle.jsx'

export default function Playground() {
  const defaultProps = {
    options: top100Films,
    getOptionLabel: (option) => option.title,
  };

  const flatProps = {
    options: top100Films.map((option) => option.title),
  };

  const [value, setValue] = React.useState(null);

  return (
    <Stack spacing={1} sx={{ width: '90%' }}>
    
      <Autocomplete
        {...defaultProps}
        id="clear-on-escape"
        clearOnEscape
        renderInput={(params) => (
          <TextField {...params} label="Country *" variant="standard" />
        )}
      />
      
     
    </Stack>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'Uzbekistan', year: 1994 },
  { title: 'Russia', year: 1972 },
  { title: 'USA', year: 1995 },
  { title: 'Italy', year: 1974 },
  { title: 'Spain', year: 2008 },
  { title: 'France', year: 1957 },
  { title: "Germany", year: 1993 },
  { title: 'Poland', year: 1994 },
  {
    title: 'Portugal',
    year: 2003,
  },
  { title: 'Belgium', year: 1966 },
  { title: 'Estoniya', year: 1999 },
  {
    title: 'Turkey',
    year: 2001,
  },
  {
    title: 'Georgia',
    year: 1980,
  },
  { title: 'Albaniya', year: 1994 },
  { title: 'Ukraine', year: 2010 },
  {
    title: 'England',
    year: 2002,
  },
  { title: "Uk", year: 1975 },
  { title: 'Latvia', year: 1990 },
  { title: 'Belarus', year: 1999 },
  { title: 'Greece', year: 1954 },
  {
    title: 'Bulgariya',
    year: 1977,
  },
  { title: 'Solovakia', year: 2002 },
  { title: 'Estonia', year: 1995 },
  { title: 'Serbia', year: 1991 },
  { title: "Hungary", year: 1946 },
  { title: 'Croatia', year: 1997 },
  { title: 'Singapore', year: 1994 },
  { title: 'Malaysia', year: 2001 },
  { title: 'Hong Kong, China', year: 1998 },
  { title: 'India', year: 1968 },
  { title: 'Taiwan', year: 1998 },
  { title: 'Philippins', year: 2014 },
  { title: 'Vietnam', year: 1942 },
  { title: 'Japan', year: 1931 },
  { title: 'Pakistan', year: 1960 },
  { title: 'Indonesia', year: 1999 },
  { title: 'Nepal', year: 2011 },
  { title: 'Bangladesh', year: 1936 },
  { title: 'Maldives', year: 1981 },
  { title: 'Thailand', year: 1954 },
  { title: 'Sri Lanka', year: 2002 },
  { title: 'Mongolia', year: 2006 },
  { title: 'Kazakhstan', year: 1991 },
  { title: 'Cambodia', year: 1985 },
  { title: 'Czech Republic', year: 2014 },
  { title: 'Argentina', year: 2000 },
  { title: 'Nigeria', year: 2000 },
  { title: 'Taiwan, China', year: 2006 },
  { title: 'Chile', year: 1994 },
  { title: 'Paraguay', year: 1979 },
  { title: 'Guatemala', year: 1979 },
  { title: 'Sweden', year: 1950 },
  {
    title: 'Denmark',
    year: 1964,
  },


];
