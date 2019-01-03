# Sample loopback 4 application

[![LoopBack](<https://github.com/strongloop/loopback-next/raw/master/docs/site/imgs/branding/Powered-by-LoopBack-Badge-(blue)-@2x.png>)](http://loopback.io/)

## Relationship test

This follows the [TodoList Tutorial](https://loopback.io/doc/en/lb4/todo-list-tutorial.html) pretty closely. But when I try and run the `GET /todo-lists` endpoint I get a `500` error. I am not sure if I am setting something up incorrectly or if there is another issue.

## How to test

- run `npm run dev`
- open the API explorer [`http://127.0.0.1:3000/explorer/`](http://127.0.0.1:3000/explorer/)
- remove the filters set by the explorer
- run the `/todo-lists` GET endpoint
- See the `500 error`
