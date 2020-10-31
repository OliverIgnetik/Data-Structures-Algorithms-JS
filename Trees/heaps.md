# Binary Heaps

They take up the least amount of storage and they do left to right insertion.

They can be **implemented using arrays**.

![max heap](.\heaps.png)

Heaps are great at doing comparative operations.

## Min heap

Rule : parent is less then its children

## Max heap

Rule : parent is greater then its children

[binary heap resource](https://visualgo.net/en/heap)

## Priority queues can be implemented using heaps

Elements are served before other elements based on their importance.

- Using left to right insertion we can preserve priority in a binary heap

#### Applications

- aircraft boarding procedure
- Security clearances

### Pros

- Better then O(N)
- Priority
- Flexible Size
- Fast Insert

### Cons

- Slow lookup

# Tries (prefix tree)

![Trie example](.\Trie.png)

Consists of an empty root node and multiple children.
The power of the trie is shown when we search for word associations

### Pros

- O(length of the word)
- you can store more words in less space because of the relationship structure

#### Applications

- autocompletion
- searching words in a dictionary
