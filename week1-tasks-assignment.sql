
-- 1. How many tasks are in the task table?
SELECT COUNT(*)
FROM task;


-- 2. How many tasks do not have a valid due date?
SELECT COUNT(*)
FROM task
WHERE date(due_date) IS NULL;


-- 3. Find all tasks marked as done.
SELECT task.*
FROM task
JOIN status
ON task.status_id = status.id
WHERE status.name = 'Done';


-- 4. Find all tasks not marked as done.
SELECT task.*
FROM task
JOIN status
ON task.status_id = status.id
WHERE status.name <> 'Done';


-- 5. Get all tasks sorted most recently created first.
SELECT *
FROM task
ORDER BY created DESC;


-- 6. Get the single most recently created task.
SELECT *
FROM task
ORDER BY created DESC
LIMIT 1;


-- 7. Get title and due date where title or description contains database.
SELECT title, due_date
FROM task
WHERE title LIKE '%database%'
OR description LIKE '%database%';


-- 8. Get title and status as text of all tasks.
SELECT task.title, status.name
FROM task
JOIN status
ON task.status_id = status.id;


-- 9. Get each status name and count of tasks with that status.
SELECT status.name, COUNT(task.id) AS task_count
FROM status
LEFT JOIN task
ON status.id = task.status_id
GROUP BY status.id, status.name;


-- 10. Get status names sorted by most tasks first.
SELECT status.name, COUNT(task.id) AS task_count
FROM status
LEFT JOIN task
ON status.id = task.status_id
GROUP BY status.id, status.name
ORDER BY task_count DESC;
