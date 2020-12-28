function ListNode(val) {
    this.val = val;
    this.next = null;
}

function sumLinkedList(l1, l2) {
    const out = new ListNode()
    let cursor = out

    const l1Size = getSize(l1)
    const l2Size = getSize(l2)
    do {
        l1 = l1 || new ListNode(0)
        l2 = l2 || new ListNode(0)
        l1.val = l1.val || 0
        l2.val = l2.val || 0
        const addResult = l1.val + l2.val
        const digit = addResult % 10
        cursor.val = digit
        cursor.next = new ListNode()

        if(addResult > 9) {
            l2.next.val += 1
        }
        l1 = l1.next
        l2 = l2.next
        cursor = cursor.next
    } while(l1 !== null || l2 !== null)


    return out
}

function getSize(listNode) {
    let count = 0
    while(listNode) {
        count++
        listNode = listNode.next
    }

    return count
}


const foo = new ListNode(2)
foo.next = new ListNode(4)
foo.next.next = new ListNode(3)

const bar = new ListNode(5)
bar.next = new ListNode(6)
bar.next.next = new ListNode(4)
const output1 = sumLinkedList(foo, bar)


const fizz = new ListNode(8)
fizz.next = new ListNode(3)

const buzz = new ListNode(1)
buzz.next = new ListNode(9)
buzz.next.next = new ListNode(2)
const output2 = sumLinkedList(fizz, buzz)

console.log(output1)
console.log(output2)
