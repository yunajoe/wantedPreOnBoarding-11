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

// 내림차순
const sortDescending = (arr: number[]) => {
  return arr.sort((a, b) => {
    if (a > b) {
      return -1;
    }
    if (a < b) {
      return 1;
    }
    return 0;
  });
};

export const upOrderList = (arr: TodoResponseType[], selected: number[]) => {
  sortAscending(selected);
  const selectedWithObject = selected.map((index) => {
    return arr[index];
  });

  for (let i = 0; i < arr.length; i++) {
    if (i >= selected.length) {
      break;
    }
    const index = selected[i];
    const prevIndex = selected[i] - 1;
    if (index === 0) {
      continue;
    }

    const result = selectedWithObject.findIndex(
      (item) => item.id === arr[prevIndex].id
    );

    if (result !== -1) {
      continue;
    }

    //  swap
    [arr[prevIndex], arr[index]] = [arr[index], arr[prevIndex]];
  }

  return arr;
};

//  upDownList

export const upDownList = (arr: TodoResponseType[], selected: number[]) => {
  sortDescending(selected);
  const selectedWithObject = selected.map((index) => {
    return arr[index];
  });
  for (let i = 0; i < arr.length; i++) {
    if (i >= selected.length) {
      break;
    }
    const index = selected[i];
    const nextIndex = selected[i] + 1;

    // 바꿀 인덱스가 현재 길이보다 길면은?
    if (nextIndex >= arr.length) {
      continue;
    }

    const result = selectedWithObject.findIndex(
      (item) => item.id === arr[nextIndex].id
    );

    if (result !== -1) {
      continue;
    }

    [arr[index], arr[nextIndex]] = [arr[nextIndex], arr[index]];
  }
  return arr;
};
