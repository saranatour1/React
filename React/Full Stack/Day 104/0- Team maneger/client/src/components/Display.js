import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteButton from './DeleteButton';
import { Link, useLocation } from 'react-router-dom';

function Display({items ,removeFromDom}) {
  console.log(items);
  const location = useLocation();
  const [isMainPage , setMainPage] = useState(true);

  useEffect(() => {
    if(location.pathname ==='/players/list'){
      setMainPage(true);
    }else{
      setMainPage(false)
    }

  }, [items, location.pathname]);



  
  return (
    <div style={{width:'60%', margin: '1em auto'}}>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Team name</TableCell>
            <TableCell align="right">Preferred Position</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isMainPage ? items.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              <Link to={`/players/${row._id}`}>{row.name }</Link>
                
              </TableCell>
              <TableCell component="th" scope="row">
                {row.position }
              </TableCell>
              <TableCell align="right"> <DeleteButton removeFromDom={removeFromDom} id={row._id} /></TableCell>
            </TableRow>
          )) : <p>hello</p>}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Display;