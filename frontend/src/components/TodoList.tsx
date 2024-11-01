type TODO = {
  title: string;
  content: string;
};

function TodoList(dataList: TODO[]) {
  return (
    <div>{dataList.length > 0 && dataList.map((item) => <h3>투두우</h3>)}</div>
  );
}

export default TodoList;
