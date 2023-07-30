import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

// Define the Field interface
interface Field {
  id: any;
  _id:any;
  name: string;
  email: string;
  phone: string;
  date: string;
  mathematics_mark: number;
  history_mark: number;
  science_mark: number;
  total_mark: number;
  status: string;
}

interface Column {
  id: keyof Field;
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  // Assuming you want to display 'name', 'email', 'phone', 'date', 'mathematics_mark', 'history_mark', 'science_mark', 'total_mark', 'status'
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'email', label: 'Email', minWidth: 170 },
  { id: 'phone', label: 'Phone', minWidth: 170 },
  { id: 'date', label: 'Date', minWidth: 170 },
  { id: 'mathematics_mark', label: 'Mathematics Mark', minWidth: 170, align: 'right' },
  { id: 'history_mark', label: 'History Mark', minWidth: 170, align: 'right' },
  { id: 'science_mark', label: 'Science Mark', minWidth: 170, align: 'right' },
  { id: 'total_mark', label: 'Total Mark', minWidth: 170, align: 'right' },
  { id: 'status', label: 'Status', minWidth: 170 },
];

interface Data extends Field {}

// ... (same imports and interfaces)

export default function Update() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rows, setRows] = useState<Data[]>([]);
  const [data,setData] = useState<any>({});
  const nav = useNavigate();

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleUpdate = async (id: any) => {
    try {
      const response = await axios.get(`http://localhost:5000/list`);
      if (response.status === 200) {
        setData(rows.find((row) => row._id === id ));

        nav("/update/"+id);
        console.log("7222",rows) //  filter row from the state
      } else {
        console.error('Failed to update record. Please try again.');
      }
    } catch (error) {
      console.error('An error occurred while update the record. Please try again later.');
    }
  };

  useEffect(() => {
    // Fetch data from the API
    axios
      .get('http://localhost:5000/list')
      .then((response) => {
        // Assuming the API response is an array of objects with 'name', 'email', 'phone', 'date', 'mathematics_mark', 'history_mark', 'science_mark', 'total_mark', and 'status' properties
        const data = response.data as Data[];
        setRows(data); // Update the state with the fetched data
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array to ensure the effect runs only once on component mount
 

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ height: '100vh' }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="center" style={{ backgroundColor: 'blue', color: 'white' }}>
                S.No
              </TableCell>
              {columns.map((column) => (
                <TableCell
                  // key={column.id}
                  // align={column.align}
                  style={{ backgroundColor: 'green', color: 'white' }}
                >
                  {column.label}
                </TableCell>
              ))}
              <TableCell align="center" style={{ minWidth: 170, backgroundColor: 'green', color: 'white' }}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                  <TableCell align="center">{page * rowsPerPage + index + 1}</TableCell>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                  <TableCell align="center">
                    <Button variant="contained" color="secondary" onClick={() => handleUpdate(row._id)}>
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
