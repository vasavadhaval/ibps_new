# 🖥️ Professional Knowledge — SQL Queries | Day 15 (PK)

> **PK Section:** 25 Q, **50 marks**, 20 min. Har sahi = **2 marks**.
> Aaj: **SQL Queries** — kal DBMS basics kiya, ab actual query syntax. IT Officer exam me output/syntax questions aate hain.

---

## 1. SQL Query ka Basic Structure

```sql
SELECT column1, column2
FROM table_name
WHERE condition
GROUP BY column
HAVING condition
ORDER BY column ASC/DESC;
```

> **Execution order (yaad rakho):** FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY

---

## 2. Important Clauses

| Clause | Kaam |
|---|---|
| **SELECT** | Kaunse columns chahiye |
| **FROM** | Kaunsi table |
| **WHERE** | Row filter (condition) |
| **GROUP BY** | Rows ko group karna |
| **HAVING** | Group par filter (WHERE ka group version) |
| **ORDER BY** | Sorting (ASC = badhta, DESC = ghatta) |
| **DISTINCT** | Duplicate hatana |

---

## 3. Common Functions

| Function | Kaam |
|---|---|
| **COUNT()** | Rows ginta hai |
| **SUM()** | Total |
| **AVG()** | Average |
| **MAX()** | Sabse bada |
| **MIN()** | Sabse chhota |

---

## 4. JOINs (bahut important)

| JOIN | Matlab |
|---|---|
| **INNER JOIN** | Dono tables me matching rows |
| **LEFT JOIN** | Left table ki saari + matching right |
| **RIGHT JOIN** | Right table ki saari + matching left |
| **FULL JOIN** | Dono tables ki saari rows |

```sql
SELECT e.name, d.dept_name
FROM employee e
INNER JOIN department d
ON e.dept_id = d.id;
```

---

## 5. Example Queries

**Q: Saare employees jinki salary > 50000:**
```sql
SELECT * FROM employee WHERE salary > 50000;
```

**Q: Har department me kitne employees:**
```sql
SELECT dept_id, COUNT(*)
FROM employee
GROUP BY dept_id;
```

**Q: Highest salary:**
```sql
SELECT MAX(salary) FROM employee;
```

**Q: Salary ke hisaab se sort (highest first):**
```sql
SELECT name, salary FROM employee ORDER BY salary DESC;
```

---

## 6. ✍️ MCQ Practice (10 questions)

1. Which clause filters rows?
   - a) SELECT  b) WHERE  c) ORDER BY  d) FROM

2. Which function counts rows?
   - a) SUM()  b) COUNT()  c) MAX()  d) AVG()

3. To remove duplicate values, use:
   - a) DISTINCT  b) UNIQUE  c) REMOVE  d) DELETE

4. Which JOIN returns only matching rows in both tables?
   - a) LEFT JOIN  b) RIGHT JOIN  c) INNER JOIN  d) FULL JOIN

5. ORDER BY salary DESC means:
   - a) Ascending  b) Descending  c) Random  d) No sort

6. Which clause filters groups (after GROUP BY)?
   - a) WHERE  b) HAVING  c) ORDER BY  d) SELECT

7. What does SELECT * mean?
   - a) All rows only  b) All columns  c) First column  d) No column

8. Which is an aggregate function?
   - a) WHERE  b) JOIN  c) AVG()  d) FROM

9. Correct query to get all data from "students" table:
   - a) GET * FROM students  b) SELECT * FROM students  c) SHOW students  d) READ students

10. In execution, which runs first?
    - a) SELECT  b) FROM  c) ORDER BY  d) HAVING

---

## ✅ Answers

1. **b) WHERE**
2. **b) COUNT()**
3. **a) DISTINCT**
4. **c) INNER JOIN**
5. **b) Descending**
6. **b) HAVING**
7. **b) All columns**
8. **c) AVG()**
9. **b) SELECT * FROM students**
10. **b) FROM** (execution FROM se shuru hota hai)

---

## 7. PK Error Notebook (roz yaad)

- Execution order: FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY
- WHERE = row filter; HAVING = group filter
- INNER JOIN = matching both; LEFT = all left
- Aggregate: COUNT, SUM, AVG, MAX, MIN
- DISTINCT = duplicate hatao

---

> **Aaj ka takeaway:** SQL = IT Officer PK ka dil. SELECT-FROM-WHERE structure aur JOIN types ratta maaro. Kal: Normalization + Keys deep + more DBMS MCQ.
