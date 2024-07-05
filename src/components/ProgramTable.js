import React from "react";
import "./ProgramTable.css";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

const programData = [
  {
    program: "Professional Certificate Program in Product Management",
    referrerBonus: "1000 Rs",
    referralBonus: "500 Rs",
  },
  {
    program: "PG Certificate Program in Strategic Product Management",
    referrerBonus: "1200 Rs",
    referralBonus: "600 Rs",
  },
  {
    program: "Executive Program in Data Driven Product Management",
    referrerBonus: "1500 Rs",
    referralBonus: "700 Rs",
  },
  {
    program:
      "Executive Program in Product Management and Digital Transformation",
    referrerBonus: "1800 Rs",
    referralBonus: "800 Rs",
  },
  {
    program: "Executive Program in Product Management",
    referrerBonus: "2000 Rs",
    referralBonus: "900 Rs",
  },
  {
    program: "Advanced Certification in Product Management",
    referrerBonus: "2200 Rs",
    referralBonus: "1000 Rs",
  },
  {
    program:
      "Executive Program in Product Management and Digital Transformation",
    referrerBonus: "2500 Rs",
    referralBonus: "1100 Rs",
  },
];

const ProgramTable = () => {
  return (
    <Container className="container">
      <Typography variant="h4" gutterBottom className="title">
        Program Bonuses
      </Typography>
      <TableContainer component={Paper} className="table-container">
        <Table className="table">
          <TableHead className="table-header">
            <TableRow>
              <TableCell className="table-header-cell">Program</TableCell>
              <TableCell align="right" className="table-header-cell">
                Referrer Bonus
              </TableCell>
              <TableCell align="right" className="table-header-cell">
                Referral Bonus
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {programData.map((row, index) => (
              <TableRow key={index} className="table-row">
                <TableCell component="th" scope="row" className="table-cell">
                  {row.program}
                </TableCell>
                <TableCell align="right" className="table-cell">
                  {row.referrerBonus}
                </TableCell>
                <TableCell align="right" className="table-cell">
                  {row.referralBonus}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ProgramTable;
