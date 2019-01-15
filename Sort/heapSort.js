function heapSort (arr) {
  buildMaxHeap(arr);

  last = arr.length - 1;

  while (last > 0) {
    swap(arr, 0, last);

    heapify(arr, 0, last);

    last -= 1;
  }
}

function buildMaxHeap (arr) {
  let i;
  i = Math.floor(arr.length / 2) -1;

  while (i >= 0) {
    heapify(arr, i, arr.length);
    i -= 1;
  }
}

function heapify (heap, i, max) {
  let index, left, right;

  while (i < max) {
    index = i;

    left = (2 * i) + 1;
    rigth = left + 1;

    if (left < max && heap[left] > heap[index]) {
      index = left;
    }

    if (right < max && heap[right] > heap[index]) {
      index = right;
    }

    if (index === i) {
      return;
    }
  }
}