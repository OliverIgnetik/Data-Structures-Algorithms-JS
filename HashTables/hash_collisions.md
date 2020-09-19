# Hash Collisions

Hash collisions occur when the two different keys map to the same memory location.
There are many ways to deal with collisions such as linear probing, quadratic probing, chaining (using linked lists).

Example of hash collisions : https://www.cs.usfca.edu/~galles/visualization/OpenHash.html

**Note:**
when you have a collision the reading and writing is slowed down by O(N/k) => O(N) where k is the size of the hash table
