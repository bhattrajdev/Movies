import express from 'expresss'


const router = express.router()

router.route('/').get(getMovies)



export default router;