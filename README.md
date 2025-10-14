# 🧩 Chunky Monkey Algorithm  

Welcome to the **Chunky Monkey Algorithm** — a simple yet powerful **JavaScript practice project** built to strengthen understanding of **loops**, **nested arrays**, and **array manipulation**! 🧠💪  

---

## 📘 Project Overview

The **Chunky Monkey Algorithm** takes:
- 🧮 An **array** (as the first argument), and  
- 🔢 A **number** (as the second argument).  

It then splits the given array into smaller **subarrays (chunks)**, each with a length equal to the number provided, and returns them as a **two-dimensional array** (an array of arrays).  

---

## 📁 Project Structure
```bash
📦 chunky-monkey-algorithm
├── .gitignore
├── README.md
└── source.js
```

## 🧠 How It Works
- 📏 Determine how many subarrays are needed by dividing the length of the main array by the chunk size (num).

- 🔁 Loop through the array, adding items into a temporary subarray.

- 🧩 Once the subarray reaches the desired length, push it into a new array.

- 🧹 Reset the subarray and continue adding items until all are processed.

- 🎯 Return the nested array containing all the subarrays.

## 🧪 Example Outputs

| Input                         | Chunk Size | Output                                  |
| ----------------------------- | ---------- | --------------------------------------- |
| `[2, 5, 1, 5, 9, 8, 3]`       | `3`        | `[[2, 5, 1], [5, 9, 8], [3]]`           |
| `["a", "b", "c", "d"]`        | `2`        | `[["a", "b"], ["c", "d"]]`              |
| `[0, 1, 2, 3, 4, 5]`          | `3`        | `[[0, 1, 2], [3, 4, 5]]`                |
| `[0, 1, 2, 3, 4, 5]`          | `2`        | `[[0, 1], [2, 3], [4, 5]]`              |
| `[0, 1, 2, 3, 4, 5]`          | `4`        | `[[0, 1, 2, 3], [4, 5]]`                |
| `[0, 1, 2, 3, 4, 5, 6]`       | `3`        | `[[0, 1, 2], [3, 4, 5], [6]]`           |
| `[0, 1, 2, 3, 4, 5, 6, 7, 8]` | `4`        | `[[0, 1, 2, 3], [4, 5, 6, 7], [8]]`     |
| `[0, 1, 2, 3, 4, 5, 6, 7, 8]` | `2`        | `[[0, 1], [2, 3], [4, 5], [6, 7], [8]]` |

## Core Concepts Practiced
| Concept                   | Description                                                              |
| ------------------------- | ------------------------------------------------------------------------ |
| 🔁 **Nested Loops**       | Used to iterate over the outer batch count and the inner array elements. |
| 🧩 **Array Manipulation** | Creating, resetting, and appending subarrays dynamically.                |
| 🧮 **Math Methods**       | Using `Math.ceil()` to handle uneven divisions (round up).               |
| 🧠 **Control Flow**       | Tracking progress using a counter (`count`) and conditions.              |

## 🎯 Learning Goals
This project helps you:

- Understand how to break down large arrays into smaller chunks

- Practice nested looping logic

- Master array indexing and tracking variables

- Strengthen algorithmic thinking in JavaScript fundamentals

## License
The project is free to use and suggestions are highly recommended by opening a pull request