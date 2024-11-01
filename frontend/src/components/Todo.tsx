import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Button } from "@mui/material";
import { TodoResponseType } from "../type";

type TodoProps = {
  item: TodoResponseType;
  editMode: string;
  handleEdit: (id: string) => void;
};

function Todo({ item, editMode, handleEdit }: TodoProps) {
  return (
    <div
      key={item.id}
      className={item.id === editMode ? "todo active" : "todo"}
    >
      {/* title */}
      <h3
        role="button"
        style={{
          color: "black",
          border: "2px solid gray",
          padding: 10,
          cursor: "pointer",
        }}
      >
        {item.title}
      </h3>
      {/* content */}

      <div style={{ display: "flex", columnGap: 10 }}>
        {/* edit 버튼 */}
        <Button
          variant="outlined"
          startIcon={<EditIcon />}
          onClick={() => {
            handleEdit(item.id);
          }}
        >
          Edit
        </Button>
        {/* delete 버튼 */}
        <Button variant="outlined" startIcon={<DeleteIcon />}>
          Delete
        </Button>
      </div>
    </div>
  );
}

export default Todo;
