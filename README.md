# KloudiIntergations IO Server

KloudiIntergations IO Server that contains all the generated client for available integratinos.

The code-gen works for OpenAPI spec v3. For some of the integrations like Sentry we are still using the old method.

## Command to run the utility

```node index --name <integration_name> --spec src/api-spec/<integration_name>.json -v <version_number>```

### Example:

```node index --name github --spec src/api-spec/github.json -v 1.4.2```


### Gotchas:
While building aws-ec2 following steps needs to be taken care of

1. allowUndefinedOpts needs to be set true
2. Once we have performed the code generation command we need to go and edit the buildPath to .ec2{region}.
This is done because current openapi-generator only supports v2 and v2 doesn't have multiple paths option.
3. Once we have performed the code generation command we need to go and add parser.js & util.js and ec2-2016-11-15.min.json so that we can parse the XML response in JSON format.
4. Please refer mapper.json to see how authentication needs to happen for aws-ec2. Very tricky and uncalled for steps.
