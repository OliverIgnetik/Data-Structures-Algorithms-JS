# Sorting Algorithms

Many languages have in built sorting methods. These languages make use of a number of powerful sorting algorithms.

## Resources

- [Wikipedia sorting algorithms resource](https://en.wikipedia.org/wiki/Sorting_algorithm)
- [Toptal sorting algorithms](https://www.toptal.com/developers/sorting-algorithms)
- [visualgo sorting examples](https://visualgo.net/bn/sorting?slide=1)
- [programiz](https://www.programiz.com/dsa)

## Key points in sorting

- Some algorithms are better then others for certain tasks (Nearly sorted, reversed, few unique etc.)
- Time and space complexity trade-offs

```javascript
// sort method in Javascript
const letters = ['z', 'a', 'd', 'e'];
const sorted_letters = letters.sort();
```

### Issues with using the sort method

- This method converts numbers to strings and uses the unicode value. [MDN sort documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- The sort algorithm can depend on the browser.
- Don't trust that the built in sorting method will work every time. You want to make sure that the you know how the sorting method works.

# Comparison Sorts

## Bubble Sort

**Time complexity**

- Average : O(N^2) -> jumbled in any particular order
- Best : O(N) -> already sorted
- Worst : O(N^2) -> reversed order

**Space complexity** : O(2) -> optimized algorithm that keeps tracks of swaps

Bubble sort is considered a basic sorting algorithm. The algorithm comes from the idea of bubbling up the largest value. It works by repeatedly swapping the adjacent elements if they are in wrong order.

![Sorting](.\bubble-sort.png)

### Applications

- Complexity of the code does not matter
- Short code is preferred

## Selection Sort

**Time complexity**

- Average : O(N^2) -> jumbled in any particular order
- Best : O(N^2) -> already sorted
- Worst : O(N^2) -> reversed order

**Space complexity** : O(1)

Selection sort is a more sophisticated version of bubble sort. The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from the unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array.

[geeksforgeeks.com resource](https://www.geeksforgeeks.org/selection-sort/)

![Selection sorting](.\selection-sort.png)

### Applications

- small list is to be sorted
- cost of swapping does not matter
- checking all the elements is compulsary
- cost of writing to a memory matters (there are O(N) swaps in comparison to bubble sort which has O(N^2) swaps)

## Insertion Sort

**Time complexity**

- Average : O(N^2) -> jumbled in any particular order
- Best : O(N) -> already sorted
- Worst : O(N^2) -> if the array is in ascending order and you want to sort in descending order

**Space complexity** : O(1)

Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part.

### Algorithm

To sort an array of size n in ascending order:

1. Iterate from arr[1] to arr[n] over the array.
2. Compare the current element (key) to its predecessor.
3. If the key element is smaller than its predecessor, compare it to the elements before. Move the greater elements one position up to make space for the swapped element.

[geeksforgeeks.com resource](https://www.geeksforgeeks.org/insertion-sort/)

![Insertion sorting](.\insertion-sort.png)

### Applications

- small list is to be sorted
- almost sorted list

## Merge Sort

![Merge Sort gif](./merge-sort-gif.gif)

**ONE OF THE BEST WAYS TO LEARN RECURSIVE ALGORITHMS IS USING THE DEBUGGER IN CHROME**

**Time complexity**

- Average : O(N\*logN)
- Best : O(N\*logN)
- Worst : O(N\*logN)

**Space complexity** : O(N)

Merge Sort is a divide and conquer algorithm. It divides the input array into two halves, call itself for the two halves and then merges the two sorted halves.

![Merge sorting](.\merge-sort.png)

### Applications

- inversion count problem
- external sorting (ie. memory won't be an issue)
- e-commerce applications

## Quick Sort

![Quick Sorting gif](./quicksort-gif.gif)

**Time complexity**

- Average : O(N\*logN)
- Best : O(N\*logN) -> pick the middle element (median)
- Worst : O(N\*logN) -> when the pivot is picked as either the greatest of the smallest element

**Space complexity** : O(N\*logN)

It is usually the best sorting algorithm. It is all about cutting an array into items less then the pivot and items more then the pivot.

Like Merge Sort, QuickSort is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot.

There are many different versions of quickSort that pick pivot in different way. **Picking the pivot point is crucial**. The best case is _median_.

### Important Points

- The goal of the partition subroutine is to find the appropriate pivot point for the next level of recursion.
- If you pick a bad pivot the worse case is the time complexity will be O(N^2).
- A bad item is the _largest_ or _smallest_ item in the array.

![Quick sorting](.\QuickSort.png)

_Resources_

- [HackerRank Video](https://www.youtube.com/watch?v=SLauY6PpjW4)

- [Back To Back SWE](https://www.youtube.com/watch?v=uXBnyYuwPe8)

### Applications

- Language is good for recursion
- Time complexity matters
- Space complexity matters

## Heap Sort

- Sorts in place

Time complexity : O(N\*logN)

Heapsort is a comparison-based sorting algorithm that uses a _binary heap_ data structure.

![Binary heap sort](.\heapsort.png)

# Non-Comparison Sorts

## Counting Sort

Time complexity : O(k+N)

Counting sort is an efficient algorithm for sorting an array of elements that each have a nonnegative integer key, for example, an array, sometimes called a list, of positive integers could have keys that are just the value of the integer as the key, or a list of words could have keys assigned to them by some scheme mapping the alphabet to integers (to sort in alphabetical order, for instance). Unlike other sorting algorithms, such as mergesort, counting sort is an integer sorting algorithm, not a comparison based algorithm. When the length of the input list is not much smaller than the largest key value, _k_, in the list. Counting sort can be used as a subroutine for other, more powerful, sorting algorithms such as radix sort.

### Instructions

Counting sort assumes that each of the nn input elements in a list has a key value ranging from 0 to k, for some integer k. For each element in the list, counting sort determines the number of elements that are less than it. Counting sort can use this information to place the element directly into the correct slot of the output array.

Counting sort uses three lists: the input list, A[0,1,…,n], the output list, B[0,1,…,n], and a list that serves as temporary memory, C[0,1,…,k]. Note that A and B have n slots (a slot for each element), while C contains k slots (a slot for each key value).

Counting sort starts by going through A, and for each element A[i], it goes to the index of C that has the same value as A[i] (so it goes to C[A[i]]) and increments the value of C[A[i]] by one. This means that if A has seven 0’s in its list, after counting sort has gone through all nn elements of A, the value at C[0] will be 7. Similarly, if A has two 4’s, after counting sort has gone through all of the elements of A, C[4] (using 0 indexing) will be equal to 2. In this step, C keeps track of how many elements in A there are that have the same value of a particular index in C. In other words, the indices of C correspond to the values of elements in A, and the values in C correspond to the total number of times that a value in A appears in A.

![Counting Sort](.\countingsort.gif)

[Counting Sort animation](https://www.cs.usfca.edu/~galles/visualization/CountingSort.html)

## Radix Sort

Time complexity : O(kN)

Radix sort is an integer sorting algorithm that sorts data with integer keys by grouping the keys by individual digits that share the same _significant position_ and _place value_. Radix sort uses counting sort as a subroutine to sort an array of numbers. Because integers can be used to represent strings (by hashing the strings to integers), radix sort works on data types other than just integers.

![Radix sort](.\Radix-Sort.png)

[Radix Sort animation](https://www.cs.usfca.edu/~galles/visualization/RadixSort.html)

## Which Sort is Best?

**The choice of sorting algorithms depends on the context.**

- Insertion Sort
  - input is small or the items are mostly sorted
- Bubble Sort
  - Never really going to use this
- Selection Sort
  - Teaching mechanism
- Merge Sort
  - Worried about worst case scenarios
  - Be wary of the **space complexity** O(N).
- Quick Sort
  - Be wary of picking the pivot incorrectly
