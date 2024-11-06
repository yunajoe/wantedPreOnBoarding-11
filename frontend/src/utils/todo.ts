import { TodoResponseType } from "../type";

// 오름차순 (-1은 앞에, 1은 뒤에, 0은 no change)
const sortAscending = (arr: number[]) => {
  return arr.sort((a, b) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }

    return 0;
  });
};

//  selected array에 있는 값들을 index 요소라고 생각하면 된다.
// selcted = [0,3,4]
export const upOrderList = (arr: TodoResponseType[], selected: number[]) => {
  sortAscending(selected); // 오름차순 정렬
  for (let i = 0; i < arr.length; i++) {
    if (i >= selected.length) {
      break;
    }
    const index = selected[i];
    const prevIndex = selected[i] - 1;
    if (index === 0) {
      continue;
    }

    const newSelectedArr = [];
    for (const idx of selected) {
      newSelectedArr.push(arr[idx]);
    }

    const result = newSelectedArr.filter(
      (item) => item.id === arr[prevIndex].id
    );
    if (result.length > 0) {
      continue;
    }
    // if (selected.includes(arr[prevIndex])) {
    //   continue;
    // }

    //  swap
    [arr[prevIndex], arr[index]] = [arr[index], arr[prevIndex]];
  }

  console.log("정답앙========>", arr);
};
