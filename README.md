# KloudiIntergations IO Server

KloudiIntergations IO Server that contains all the generated client for available integratinos.

The code-gen works for OpenAPI spec v3. For some of the integrations like Sentry we are still using the old method.

## Command to run the utility

```node index --name <integration_name> --spec src/api-spec/<integration_name>.json -v <version_number>```

### Example:

```node index --name github --spec src/api-spec/github.json -v 1.4.2```
