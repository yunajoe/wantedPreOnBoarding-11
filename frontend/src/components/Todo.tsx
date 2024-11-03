import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Button } from "@mui/material";
import { TodoResponseType } from "../type";

type TodoProps = {
  item: TodoResponseType;
  editMode: {
    editId: string;
    isEdit: boolean;
  };
  handleEdit: (id: string) => void;
};

function Todo({ item, editMode, handleEdit }: TodoProps) {
  return (
    <div
      key={item.id}
      className={
        item.id === editMode.editId && editMode.isEdit ? "todo active" : "todo"
      }
    >
      <div className="sub_todo">
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
      <div
        className={
          item.id === editMode.editId && editMode.isEdit
            ? "todo_content active"
            : "todo_content"
        }
      >
        {item.content}
      </div>
    </div>
  );
}

export default Todo;
