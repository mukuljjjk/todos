const express = require('express')
const cors = require('cors')
const { createTodo } = require('./types')
const { todo } = require('./db')
const app = express()
app.use(express.json())
app.use(cors())
const PORT = 3000

app.post("/todo", async (req, res) => {
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if (!parsePayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs."
        })
        return;
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false,

    })
    res.json({
        msg: "Todo created"
    })
})

app.get("/todos", async (req, res) => {
    const todos = await todo.find({});
    res.json({
        todos
    })
})

app.put("/completed", async (req, res) => {
    const updatePayload = req.body;
    const parsePayload = createTodo.safeParse(updatePayload);
    if (!parsePayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs."
        })
        return;
    }

    await todo.update({
        _id: updatePayload.id


    }, {
        completed: true
    })
    res.json({
        msg: "Todo completed"
    })

})



app.listen(PORT, () => {
    console.log(`App is listening on the port ${PORT}`)
})