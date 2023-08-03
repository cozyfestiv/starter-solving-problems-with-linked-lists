const LinkedList = require('../lib/linkedList');

/**
 * Return the third element from the end of the linked list.
 *
 * @param {LinkedList} list
 *
 * @returns {Node} the third element from the end of the list,
 * null if list length < 3
 *
 */
function thirdFromEnd (list) {
  if (list.length === 0) {
    return null;
  }

  let pointer1 = list.head;
  let i = 0;
  while (i < 2 && pointer1.next) {
    // Set pointer1 to its next pointer
    pointer1 = pointer1.next;
    // Increment i
    i++;
  }

  if (i < 2) {
    // If i is less than 2, it means there are not enough nodes in the list
    // to find the third node from the end, so return null.
    return null;
  }

  let pointer2 = list.head;
  while (pointer1.next) {
    // Move both pointers until pointer1 reaches the last node
    // and pointer2 will be pointing to the third node from the end.
    pointer1 = pointer1.next;
    pointer2 = pointer2.next;
  }

  return pointer2;
}

module.exports = thirdFromEnd;
