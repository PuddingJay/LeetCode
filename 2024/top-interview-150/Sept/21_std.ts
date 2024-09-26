class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const mergeTwoLists = (
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null => {
  const dummy = new ListNode(-Infinity);

  let prev = dummy;
  let current1 = list1;
  let current2 = list2;

  while (current1 && current2) {
    if (current1.val <= current2.val) {
      prev = prev.next = current1;
      current1 = current1.next;
    } else {
      prev = prev.next = current2;
      current2 = current2.next;
    }
  }

  if (current1) prev.next = current1;
  if (current2) prev.next = current2;

  return dummy.next;
};

mergeTwoLists([1, 2, 4] as unknown as ListNode, [1, 3, 4] as unknown as ListNode)

// console.log(mergeTwoLists([1, 2, 4] as unknown as ListNode, [1, 3, 4] as unknown as ListNode));
