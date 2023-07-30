const createJob = async (req, res) => {
    res.send('Create Job')
}

const getAllJob = async (req, res) => {
    res.send('getAllJob')
}

const deleteJob = async (req, res) => {
    res.send('deleteJob')
}

const updateJob = async (req, res) => {
    res.send('updateJob')
}

const showStats = async (req, res) => {
    res.send('showStats')
}

export {createJob, deleteJob, getAllJob, updateJob, showStats}