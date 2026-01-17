import React, { useEffect, useState } from "react";
import {
  Modal,
  Box,
  TextField,
  Button,
  Typography,
  Switch,
  FormControlLabel
} from "@mui/material";
import api from '../../../api'
import Swal from "sweetalert2";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  maxHeight: "90vh",   // 👈 important
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
  overflowY: "auto",   // 👈 vertical scroll
};


const FaqModal = ({ open, handleClose,editData,refresh }) => {
  const [faq, setfaq] = useState({
    question: "",
    answer: "",
    isActive:true
  });



useEffect(() => {
  if (open) {
    if (editData) {
      setfaq({
        question: editData.question || "",
        answer: editData.answer || "",
        isActive: editData.isActive || "",
      });
    } else {
      setfaq({
        question: "",
        answer: "",
        isActive: "",
      });
    }
  }
}, [editData, open]);




  const handleChange = (e) => {
    const { name, value } = e.target;
    setfaq({ ...faq, [name]: value });
  };




const handleSubmit = async () => {
  try {
    // 🔄 Loading Alert
    Swal.fire({
      title: editData ? "Updating Faq..." : "Creating Faq...",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    const apiUrl = editData
      ? `/api/chatbot/Update-faq/${editData._id}`
      : "/api/chatbot/Save-faq";

    const method = editData ? "put" : "post";

    const res = await api({
      method,
      url: apiUrl,
      data: faq,
    });

    handleClose(); // close modal only after success
    // ✅ Success Alert
    await Swal.fire({
      icon: "success",
      title: "Success",
      text: editData
        ? "Faq updated successfully"
        : "Faq added successfully",
      timer: 2000,
      showConfirmButton: true,
    });
    window.location.reload()

  } catch (error) {

    handleClose();
    await Swal.fire({
      icon: "error",
      title: "Error",
      target: document.body,
      text:error?.response?.data?.errors ||"Something went wrong",
      showConfirmButton: true,
    });
    
  }
};


  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography variant="h6" mb={2}>
          {editData ? "Edit Faq" : "Add New Faq"}
        </Typography>

        <TextField
          fullWidth
          label="Question"
          name="question"
          value={faq.question !== "" ? faq.question : editData?.question || ""}
          onChange={handleChange}
          margin="normal"
        />

        <TextField
          fullWidth
          label="Answer"
          name="answer"
          value={faq.answer !== "" ? faq.answer : editData?.answer || ""}
          onChange={handleChange}
          margin="normal"
        />

 {/* Active / Inactive Switch */}
    <FormControlLabel
      sx={{ mt: 2 }}
      control={
        <Switch
          checked={
            faq.isActive !== undefined
              ? faq.isActive
              : editData?.isActive || false
          }
          onChange={(e) =>
            setfaq({ ...faq, isActive: e.target.checked })
          }
          color="success"
        />
      }
      label={
        faq.isActive || editData?.isActive
          ? "Active"
          : "Inactive"
      }
    />


        <Box sx={{pt: 3,display: "flex",justifyContent: "flex-end",gap: 2,}}>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" onClick={handleSubmit}>
            {editData?"Edit Faq" : "Save Faq"}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default FaqModal;
