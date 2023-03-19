import React, { Children } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export function Col(props) {
  return <>{props.children}</>
}

export function Row(props) {
  <TableRow key={props.key}
    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
    {
      props.children.map(col => {
        <TableCell key={colIndex}>{col}</TableCell>
      })
    }
  </TableRow>
}

export function Ta(props) {

  const cols = []
  const rows = []

  Children.forEach(props.children, child => {
    if (child.type === Col)
      cols.push(child)
    else if (child.type === Row)
      rows.push(child)
    else
      throw `Invalid type found here: ${child.type}`
  });

  let head = <></>
  if (cols.length) {
    head = <TableHead>
      <TableRow>
        {
          cols.map((col, colIndex) =>
            <TableCell key={colIndex}>{col}</TableCell>)
        }
      </TableRow>
    </TableHead>
  }
  let body = <></>
  if (rows.length) {
    body = <TableBody>
      {rows.map((row, rowIndex) => (
        <TableRow key={rowIndex}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
          {
            row.props.children.map((col, colIndex) =>
              <TableCell key={colIndex}>{col}</TableCell>)
          }
        </TableRow>
      ))}
    </TableBody>
  }

  return <TableContainer component={Paper} sx={{ mb: 4 }}>
    <Table aria-label="simple table">
      {head}
      {body}
    </Table>
  </TableContainer>
}