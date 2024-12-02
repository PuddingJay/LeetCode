class ListNode2 {
    val: number;
    next: ListNode2 | null;
    constructor(val?: number, next?: ListNode2 | null) {
        this.val = val ?? 0;
        this.next = next ?? null;
    }
}

const reverseList = (head: ListNode2 | null): ListNode2 | null => {
    let prev = null;
    let current = head;
    while (current) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}