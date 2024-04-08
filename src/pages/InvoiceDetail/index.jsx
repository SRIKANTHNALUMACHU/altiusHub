import { Box } from "@mui/material";
import { useEffect, useState } from "react";

import TextField from "@mui/material/TextField";

import { Button, InputAdornment } from "@mui/material";

const InvoiceDetail = () => {
  const [rows, setRows] = useState();
  const id = useState(Math.floor(Math.random() * 100));
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [amount, setAmount] = useState(0);
  useEffect(() => {
    const calAmount = price * quantity;
    setAmount(calAmount);
  }, [price, quantity]);
  const onClickSubmit = () => {
    const payload = {
      id: id,
      date: "02-01-2023",
      invoice_number: "12121",
      customer_name: "hello",
      billing_address: "Plot No 4 44,Hyderabad",
      shipping_address: "Plot no 2",
      gstin: "GSTIN:555454664",
      invoice_items: itemName,
      bill_sundrys: "4",
      total_amount: amount,
    };
    const newData = [...rows, payload];
    localStorage.setItem("data", JSON.stringify(newData));

    console.log("newer", newData);
    console.log(itemName, quantity, price, amount, id);
  };

  useEffect(() => {
    if (localStorage.getItem("data")) {
      const data = localStorage.getItem("data");
      setRows(JSON.parse(data));
    }
  }, []);

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "50%" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>Add Invoice Details</div>

      <TextField
        required
        id="outlined-read-only-input"
        value={itemName}
        placeholder="Enter Item Name"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">Item Name</InputAdornment>
          ),
        }}
        onChange={(e) => {
          setItemName(e.target.value);
        }}
      />
      <TextField
        required
        id="outlined-read-only-input"
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => {
          setQuantity(e.target.value);
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">Quantity</InputAdornment>
          ),
        }}
      />
      <TextField
        required
        id="outlined-read-only-input"
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">Price</InputAdornment>
          ),
        }}
      />
      <TextField
        id="outlined-read-only-input"
        disabled
        InputProps={{
          readOnly: true,
          startAdornment: (
            <InputAdornment position="start">Amount</InputAdornment>
          ),
        }}
        type="number"
        placeholder="Amount"
        value={amount}
      />
      <Box>
        <Button onClick={onClickSubmit} sx={{ backgroundColor: "#7BC9FF" }}>
          Sumbit
        </Button>
      </Box>
    </Box>
  );
};
export default InvoiceDetail;
