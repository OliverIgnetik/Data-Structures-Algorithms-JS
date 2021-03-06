# Linked lists

**Definition** : A list of nodes with a head and a tail

## Elements

Nodes consist of :

- value - data you want to store
- pointer - to the next node

**Note:** the _tail_ points to null (ie. null pointer)

## Tradeoffs

Linked lists have a loose structure that allows easier insertion.

In the case of having some kind of condition. The insertion is O(N):

- Deletion -> O(1)
- Insertion -> O(1)
- Access -> O(N)
- Search -> O(N)
- Hashtables don't have the same sorting advantage that linked lists have

#### PROS

- Fast insertion
- Fast deletion
- Ordered
- Flexible

#### CONS

- slow lookup
- more memory

### Note on pointers

In Javscript variables that are not being used (ie. nothing is pointing to it) are subjected to automatic garbage collection. Some other languages don't have automatic garbage collection so you have to keep track of unused memory allocations.

Garbage collection avoids memory leaks.

Visual algo linked list insertion : https://visualgo.net/en/list?slide=1

### Doubly LinkedLists

The elements:

- value - value stored
- prev - pointer to last node
- next - pointer to next node

**Note:** they allow traversal in reverse

### Singly vs Doubly

When should you use one of the other?

#### Singly

- Pros : less memory and simple implementation, faster execution of operations
- Cons : no reversal, you need the head reference

#### Doubly

- Cons : reversal
- Pros : more memory and more complex implementation, slower execution of operations
