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
import "./User-allRequests.css"
import Cookies from "js-cookie";

const UserAllRequests = () => {
  const [req, setReq] = useState([]);
  const [message, setMessage] = useState([]);


  useEffect(() => {
    const cookie = Cookies.get("token");

    axios
      .post("https://silkfleet.com/php/userreqs.php", { cookie })
      .then((response) => {
        setReq(response.data.data || []);
        setMessage(response.data.message || "");
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setMessage("خطا در دریافت اطلاعات");
      });
  }, []);
 

  return (
    <div className="mt-5">
      <TableContainer component={Paper} className="req-list">
        <Table sx={{ minWidth: 650 }} aria-label="request table" >
          <TableHead>
            <TableRow>
              <TableCell>نام</TableCell>
              <TableCell align="right">مبدا</TableCell>
              <TableCell align="right">مقصد</TableCell>
              <TableCell align="right">محصول</TableCell>
              <TableCell align="right">نوع محصول</TableCell>
              <TableCell align="right">مقدار محصول</TableCell>
              <TableCell align="right">ایمیل</TableCell>
              <TableCell align="right">شماره تماس</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {req.length > 0 ? (
              req
              .map((item, index) => (
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

export default UserAllRequests;
