/* eslint-disable react/prop-types */
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const CategoryCard = ({ id, namaKategori, deskripsi, onEdit, onDelete }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "16px",
        marginBottom: "16px",
      }}
    >
      <Typography variant="h5" component="h2">
        {namaKategori}
      </Typography>
      <Typography variant="body1" component="p">
        {deskripsi}
      </Typography>
      <div style={{ marginTop: "8px" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => onEdit(id)}
          sx={{ mr: 2 }}
        >
          Edit
        </Button>
        <Button variant="contained" color="error" onClick={() => onDelete(id)}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default CategoryCard;
