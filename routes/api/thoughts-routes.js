const router = require ('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    addThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require ('../../controllers/thoughts-controller');

router
    .route('/')
    .get(getAllThoughts);

router  
    .route('/:userId')
    .post(addThought);

router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

router
    .route('/:thoughtsId/reactions/')
    .post(addReaction)
    .delete(deleteReaction);

module.exports = router;
