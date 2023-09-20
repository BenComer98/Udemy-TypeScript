import { Sortable } from "./Sortable";

export const sort = (list: Sortable) => {
  const mergeSort: (list: Sortable, a: number, b: number) => void = (list, a, b) => {
    if (a >= b) return;

    const m = Math.floor((a + b) / 2);
    mergeSort(list, a, m);
    mergeSort(list, m+1, b);

    let unsorted: (number|string)[] = [];
    for (let i = 0; i < list.size(); ++i) {
      unsorted.push(list.at(i));
    }
    let i = 0; let j = 0;
    while (a + i <= m && m + 1 + j <= b) {
      if (unsorted[a + i] < unsorted[m + 1 + j]) {
        list.set(a + i + j, unsorted[a + i]);
        ++i;
      }
      else {
        list.set(a + i + j, unsorted[m + 1 + j]);
        ++j;
      }
    }

    while (a + i <= m) {
      list.set(a + i + j, unsorted[a + i]);
      ++i;
    }

    while (m + 1 + j <= b) {
      list.set(a + i + j, unsorted[m + 1 + j]);
      ++j;
    }
  };

  mergeSort(list, 0, list.size()-1);
}

export default sort;