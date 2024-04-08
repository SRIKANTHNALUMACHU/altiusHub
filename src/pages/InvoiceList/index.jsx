import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { Link } from "@mui/material";
import { useEffect, useState } from "react";

const InvoiceList = () => {
  const defaultRows = [
    {
      id: 1,
      date: "02-01-2021",
      invoice_number: "12121",
      customer_name: "Srikanth",
      billing_address: "Plot No 1 ,Hyderabad",
      shipping_address: "Plot no 2",
      gstin: "GSTIN:55545466",
      invoice_items: ["a", "b", "c"],
      bill_sundrys: 4555,
      total_amount: 3 * 5,
    },
    {
      id: 2,
      date: "02-01-2023",
      invoice_number: "12121",
      customer_name: "hello",
      billing_address: "Plot No 4 44,Hyderabad",
      shipping_address: "Plot no 2",
      gstin: "GSTIN:555454664",
      invoice_items: ["a", "b", "c"],
      bill_sundrys: 4555,
      total_amount: 3 * 5,
    },
  ];

  const [rows, setRows] = useState(defaultRows);
  useEffect(() => {
    if (!localStorage.getItem("data")) {
      localStorage.setItem("data", JSON.stringify(rows));
      setRows(rows);
    } else {
      const data = localStorage.getItem("data");

      setRows(JSON.parse(data));
    }
  }, []);
  const columns = [
    { field: "id", headerName: "ID", width: 70, type: "string" },
    { field: "date", headerName: "Date", width: 130 },
    { field: "invoice_number", headerName: "Invoice Number", width: 130 },
    {
      field: "customer_name",
      headerName: "Customer Name",
      width: 90,
    },
    {
      field: "billing_address",
      headerName: "Billing Address",

      width: 160,
    },
    {
      field: "shipping_address",
      headerName: "Shipping Address",
      width: 160,
    },
    {
      field: "gstin",
      headerName: "GSTIN",
      width: 160,
    },
    {
      field: "invoice_items",
      headerName: "Items",
      width: 160,
    },
    {
      field: "bill_sundrys",
      headerName: "Bill Sundrys",
      width: 160,
    },
    {
      field: "total_amount",
      headerName: "Total Amount",
      width: 160,
    },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <Link href="/invoice-detail">
        <Button sx={{ backgroundColor: "#1C1678", color: "white" }}>Add</Button>
      </Link>

      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};
export default InvoiceList;
