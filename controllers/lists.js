export const test = (req, res) => {
    console.log('in lists test function');
    res.send({
        message: 'Lists test function!'
    });
};

export const addListItem = (req, res) => {
    const listToAdd = req.body;
    res.send({
        message: 'Lists addListItem function!',
        itemAdded: listToAdd,
    });
}

// export default test;