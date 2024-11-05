import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { TodoResponseType } from "../type";
import "./Todo.css";

type TodoProps = {
  item: TodoResponseType;
  editMode: {
    editId: string;
    isEdit: boolean;
  };
  handleEdit: (id: string) => void;
};

function Todo({ item, editMode, handleEdit }: TodoProps) {
  const navigate = useNavigate();

  const handleNavigateToEditPage = (editId: string) => {
    navigate(`/todos/${editId}`);
  };

  return (
    <div
      key={item.id}
      className={
        item.id === editMode.editId && editMode.isEdit ? "todo active" : "todo"
      }
    >
      <div className="sub_todo">
        <div className="todo_title">
          <div>
            <input type="checkbox" id={editMode.editId} className="checkbox" />
          </div>
          <h3 className="todo_title_button" role="button">
            {item.title}
          </h3>
        </div>

        <div style={{ display: "flex", columnGap: 10 }}>
          <Button
            onClick={() => {
              handleEdit(item.id);
            }}
          >
            상세내용 확인하기
          </Button>
          {/* edit 버튼 */}
          <Button
            variant="outlined"
            startIcon={<EditIcon />}
            onClick={() => handleNavigateToEditPage(item.id)}
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
