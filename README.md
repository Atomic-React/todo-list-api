# ⚛️ Atomic React - Todo list API

-   [⚛️ Atomic React - Todo list API](#️-atomic-react---todo-list-api)
    -   [Setup](#setup)
    -   [Docs](#docs)
        -   [Task Model](#task-model)
        -   [API Routes](#api-routes)
            -   [Get tasks](#get-tasks)
                -   [Retrieve all tasks](#retrieve-all-tasks)
                -   [Filter tasks](#filter-tasks)
                -   [Search tasks](#search-tasks)
            -   [Get one task by id](#get-one-task-by-id)
            -   [Count tasks](#count-tasks)
            -   [Create Task](#create-task)
            -   [Delete Task](#delete-task)
            -   [Update Task](#update-task)

## Setup

Clone the repository:

```bash
git clone git@github.com:Atomic-React/todo-list-api.git
```

Enter the directory:

```bash
cd todo-list-api
```

Install dependencies:

```bash
npm i
```

Run the server:

```bash
node index.js
```

The server stats on `http://localhost:3000` by default.

## Docs

### Task Model

Details of the Task Model:

<table>
    <thead>
        <tr>
            <th>
                Property name
            </th>
            <th>
                Type
            </th>
            <th>
                Contraints
            </th>
            <th>
                Default value
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <code>id</code> (primary key)
            </td>
            <td>
                uuid string
            </td>
            <td>
                not nullable
            </td>
            <td>
                Auto generated
            </td>
        </tr>
         <tr>
            <td>
                <code>title</code>
            </td>
            <td>
                string
            </td>
            <td>
                not nullable
            </td>
            <td></td>
        </tr>
         <tr>
            <td>
                <code>isDone</code>
            </td>
            <td>
                boolean
            </td>
            <td>
                not nullable
            </td>
            <td>
                <code>false</code>
            </td>
        </tr>
         <tr>
            <td>
                <code>createdAt</code>
            </td>
            <td>
                Date (ISO string)
            </td>
            <td></td>
            <td>
                <code>new Date()</code>
            </td>
        </tr>
         <tr>
            <td>
                <code>updatedAt</code>
            </td>
            <td>
                Date (ISO string)
            </td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>

Example of task object:

```json
{
	"id": "e2708b21-57ba-48a4-981c-ffc060b66ea6",
	"title": "Hello world",
	"isDone": false,
	"createdAt": "2023-06-26T11:18:34.593Z",
	"updatedAt": "2023-06-26T11:18:39.533Z"
}
```

### API Routes

#### Get tasks

##### Retrieve all tasks

The following request will return the full tasks list and tasks count.

```bash
GET /tasks
```

Example of response:

```json
{
    "count": 7,
    "rows": [
        {
            "id": "e2708b21-57ba-48a4-981c-ffc060b66ea6",
            "title": "Hello world",
            "isDone": false,
            "createdAt": "2023-06-26T11:18:34.593Z",
            "updatedAt": "2023-06-26T11:18:39.533Z"
        },
		// ...
    ]
}
```

##### Filter tasks

You can use this request to pass query parameters to filter return tasks:

```bash
GET /tasks?isDone=true
```

Reponse:

```json
{
    "count": 1,
    "rows": [
        {
            "id": "3c40d4eb-1503-4e0e-9b7b-8788249a3f33",
            "title": "Hello Sun",
            "isDone": true,
            "createdAt": "2023-06-26T11:26:12.474Z",
            "updatedAt": "2023-06-26T11:27:11.605Z"
        }
    ]
}
```

##### Search tasks

You can use this request to pass a `search` query parameter to filter return tasks:

```bash
GET /tasks?search=world
```

Reponse:

```json
{
    "count": 5,
    "rows": [
        {
            "id": "e2708b21-57ba-48a4-981c-ffc060b66ea6",
            "title": "Hello world",
            "isDone": false,
            "createdAt": "2023-06-26T11:18:34.593Z",
            "updatedAt": "2023-06-26T11:18:39.533Z"
        },
        {
            "id": "abaf8ee1-b5bb-4e8f-8a67-62ba2519f46a",
            "title": "Hello earth",
            "isDone": false,
            "createdAt": "2023-06-26T11:18:34.593Z",
            "updatedAt": "2023-06-26T11:19:15.114Z"
        },
        // ...
    ]
}
```

#### Get one task by id

You can retrieve a single task with its `id` using the following request passing the `id` value as route paramter:

```bash
GET /tasks/:id
```

Reponse:

```json
{
    "id": "cf838b78-8138-42e1-92d9-5474c4842e50",
    "title": "New task!!!",
    "isDone": false,
    "createdAt": "2023-06-26T11:57:11.579Z",
    "updatedAt": "2023-06-26T12:11:12.771Z"
}
```

#### Count tasks

You can retrieve the number of _completed_, _todo_, and _all_ tasks using the following request:

```bash
GET /tasks/count
```

Reponse:

```json
{
    "todoTasksCount": 7,
    "completedTasksCount": 1,
    "allTasksCount": 8
}
```

#### Create Task

The following request needs at least a `title` property in the body for creating a new task.

It will return the new created task.

```bash
POST /tasks

body: {
	title: 'New task!'
}
```

Response:

```json
{
    "createdAt": "2023-06-26T11:57:11.579Z",
    "isDone": false,
    "id": "cf838b78-8138-42e1-92d9-5474c4842e50",
    "title": "New task!",
    "updatedAt": "2023-06-26T12:07:44.120Z"
}
```

#### Delete Task

The following request needs a task `id` as route parameter.

It returns the number of deleted tasks (`1` is expected).

```bash
DELETE /tasks/:id
```

#### Update Task

The following request needs at least the task `id` in the body for updating the corresponding task.

It returns the number of updated tasks (`1` is expected).

```bash
PUT /tasks

body: {
	id: 'cf838b78-8138-42e1-92d9-5474c4842e50'
	title: 'New task!!!'
}
```
