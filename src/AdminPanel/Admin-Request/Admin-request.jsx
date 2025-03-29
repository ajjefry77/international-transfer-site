import { useState, useEffect } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const AdminRequest = () => {
  const [req, setReq] = useState([]);

  useEffect(() => {
    axios
      .get("https://silkfleet.com/php/showreqs.php")
      .then((response) => {
        console.log("API Response:", response.data);
        setReq(Array.isArray(response.data[0]) ? response.data[0] : []);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="req-list mt-5">
      <TableContainer component={Paper} style={{width:'80%', marginRight:'11%'}}>
        <Table sx={{ minWidth: 650 }} aria-label="request table" >
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Query</TableCell>
              <TableCell align="right">Destination</TableCell>
              <TableCell align="right">Product Name</TableCell>
              <TableCell align="right">Type</TableCell>
              <TableCell align="right">Count</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Phone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {req.length > 0 ? (
              req.map((item, index) => (
                <TableRow key={item.id || `row-${index}`}>
                  <TableCell component="th" scope="row">{item.name}</TableCell>
                  <TableCell align="right">{item.query}</TableCell>
                  <TableCell align="right">{item.destination}</TableCell>
                  <TableCell align="right">{item.proname}</TableCell>
                  <TableCell align="right">{item.type}</TableCell>
                  <TableCell align="right">{item.count}</TableCell>
                  <TableCell align="right">{item.email}</TableCell>
                  <TableCell align="right">{item.phone}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={8} align="center">
                  No requests found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AdminRequest;
