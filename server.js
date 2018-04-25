const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()

    server.get('/p/:id', (req, res) => {
      const actualPage = '/post'
      const queryParams = { title: req.params.id }
      app.render(req, res, actualPage, queryParams)
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(4000, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:4000')
    })
  })
  .catch((ex) => {
    process.exit(1)
  })

// const express = require('express')
// const next = require('next')
// // const routes = require('./routes')
//
// const dev = process.env.NODE_ENV !== 'production'
// const app = next({ dev })
// const handle = app.getRequestHandler()
// // const handler = routes.getRequestHandler(app)
//
// app.prepare()
//   .then(() => {
//     const server = express()
//     // server.use(handler)
//
//     server.get('*', (req, res) => {
//       return handle(req, res)
//     })
//
//     server.listen(4000, (err) => {
//       if (err) throw err
//       console.log('> Ready on http://localhost:4000')
//     })
//   })
