import React from 'react'
import Box from '@mui/material/Box';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Category } from '@mui/icons-material';
import { routerServerGlobal } from 'next/dist/server/lib/router-utils/router-server-context';

const Search = () => {
  return (
    <>
     <div className='w-[180px] px-3 lg:w-[380px] md:w-[300px] sm:w-full'>
      <Box sx={{ width : "100%" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Search by category</InputLabel>
        <Select
          label="select by category"
        >
          <Link href='/product/mens'><MenuItem value="menswear">Menswear</MenuItem></Link>
          <Link href='/product/womens'><MenuItem value="womenswear">Womenswear</MenuItem></Link>
          <Link href='/product/kids'><MenuItem value="kidswear">kidswear</MenuItem></Link>
          <Link href='/product/beauty'><MenuItem value="beauty">beauty</MenuItem></Link>
          <Link href='/product/health'><MenuItem value="health">Health</MenuItem></Link>
          <Link href='/product/fitness'><MenuItem value="fitness">Fitness</MenuItem></Link>
          <Link href='/product/gadgets'><MenuItem value="gadgets">gadgets</MenuItem></Link>
        </Select>
      </FormControl>
    </Box>
     </div>
    </>
  )
}

export default Search