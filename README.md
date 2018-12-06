# Severless Email service

## call it locally with test data

`$ sls invoke local --function send -p send-email-data.json`

## call the remote function 

`$ sls invoke --function send -p send-email-data.json`

## call it with curl

`$ curl -X POST https://your-sls-func-id.execute-api.us-east-1.amazonaws.com/prod/email -d '{"to_address":"some email"}'`

## logs

`$ sls logs --function send`
