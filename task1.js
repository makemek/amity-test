const data = {
    users: [
        {
            id: 1,
            name: 'foo',
        },
        {
            id: 2,
            name: 'bar',
        },
        {
            id: 3,
            name: 'alice',
        }
    ],
    messages: [
        {
            id: 1,
            text: 'hello',
            userId: 1,
            receiverId: 2,
        },
        {
            id: 1,
            text: 'world',
            userId: 3,
            receiverId: 1,
        }
    ]
}

const out = normalizeReceivedData(data)
console.log(out)

function normalizeReceivedData(receivedData) {
    const { users, messages } = receivedData

    return messages.map(message => {
        const {
            text: messageText,
            userId,
            receiverId,
        } = message
        const { name: userFromName } = users.find(({ id }) => id === userId) || {}
        const { name: userToName } = users.find(({ id }) => id === receiverId) || {}
        return {
            messageText,
            userFromName,
            userToName,
        }
    })
}
