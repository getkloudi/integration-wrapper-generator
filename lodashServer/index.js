let express = require('express');
let app = express();
let _ = require('lodash');
let dot = require('dot-object');
let mapper = require('./mapper.json');

let PORT = 3000;

let errorCodes = {
    'INVALID_INTEGRATION_TYPE': 'Invalid integration/integration type',
    'INVALID_METHOD': 'Invalid method',
    'INVALID_ENTITY': 'Invalid entity',
    'INTEGRATION_NOT_CONFIGURED': 'Integration not configured',
    'INTEGRATION_MISCONFIGURED': 'Multiple integrations found for these settings',
    'INVALID_OPTION_PROVIDED': 'Invalide option provided as arguement',
    'UNKNOWN_MAPPING_TYPE': 'Unknown mapping type',
    'MAPPING_MISCONFIGURED': 'No valid mapping found',
    'INPUT_MISCONFIGURED': 'Input not found',
    'OUTPUT_MISCONFIGURED': 'Output not found'
};

app.get('/', function(req, res) {
    let integration = 'JIRA';
    let entity = 'PULL_REQUEST';
    let method = "GET";

    let incomingOptionsBeforeTransformation = {
        "pr": {
            "title": "PR Title",
            "description": "PR Description"
        },
        "source": {
            "commit": {
                "hash": "HASH VALUE"
            }
        },
        "author": {
            "display_name": "Author Name"
        },
        "participants": [
            {
                "user": {
                    "display_name": "Participant Display Name",
                    "id": "Participant 1 ID"
                }
            },
            {
                "user": {
                    "display_name": "Participant 2 Display Name",
                    "id": "Participant 2 ID"
                }
            }
        ]
    };

    result = transform(integration, entity, method, incomingOptionsBeforeTransformation);
    res.status(200).json(result);
});

let transform = (integration, entity, method, incomingOptionsBeforeTransformation) => {
    let result = [];
    responseItem = _.map(mapper, (o) => {
        methods = o.method.split("|");
        if(o.type === 'RESPONSE' && o.integration === integration && o.entity === entity && methods.indexOf(method) !== -1){
            return o
        }
    });
    
    // Remove undefines from the array
    responseItem = _.without(responseItem, undefined);

    if (responseItem.length == 0){
        return errorCodes['INTEGRATION_NOT_CONFIGURED'];
    } else if (responseItem.length > 1) {
        return errorCodes['INTEGRATION_MISCONFIGURED'];
    } else {
        responseItem = responseItem[0];
        let mapping = responseItem.map;
        // check if incoming options are of type array, if not convert it to array
        incomingOptionsBeforeTransformation = checkAndConvertToArray(incomingOptionsBeforeTransformation);
        if (!mapping){
            return errorCodes['MAPPING_MISCONFIGURED'];
        }
        incomingOptionsBeforeTransformation.forEach((incomingOption) => {
            let incomingOptionDotObj = dot.dot(incomingOption);
            let json = {};
            mapping.forEach((item) => {
                let input = item.input;
                let output = item.output;
                if (!input){
                    return errorCodes['INPUT_MISCONFIGURED']
                }
                if (!output) {
                    return errorCodes['OUTPUT_MISCONFIGURED']
                }

                if (input.root){
                    let root = incomingOption[input.root];
                    root.forEach((obj, index) => {
                        let objDot = dot.dot(obj);
                        objKeys = Object.keys(objDot);
                        objKeys.forEach((element) => {
                            let denormInputKey = denormKey(input.key, index);
                            if (denormInputKey === `${input.root}[${index}].${element}`){
                                json = parseInput(incomingOptionDotObj, input.type, denormInputKey, input.value, denormKey(output.key, index), json);
                            }                            
                        });                        
                    });
                } else {
                    json = parseInput(incomingOptionDotObj, input.type, input.key, input.value, output.key, json);
                }
            });
            result.push(json);
        });
    }
    return result;
}


const denormKey = (key, value) => {
    return key.replace('${index}', value);
}

const checkAndConvertToArray = (options) => {
    if (!Array.isArray(options)){
        return [options];
    }
    return options;
};

const parseInput = (incomingOptionDotObj, type, inputKey, inputValue, outputKey, json) => {
    switch (type) {
        case 'ONE-TO-ONE':
            _.set(json, outputKey, incomingOptionDotObj[inputKey]);
            break;
        case 'CONSTANT':
            _.set(json, outputKey, inputValue);
            break;
        case 'FUNCTION':
            _.set(json, outputKey, eval(inputValue)(incomingOptionDotObj[inputKey]));
            break;
    }
    return json;
};

const generateFullCommitHash = (option) => {
    return option;
};

const getPullRequestFromID = (option) => {
    return option;
}

app.listen(PORT, function() {
    console.log('Server is running on PORT:',PORT);
});