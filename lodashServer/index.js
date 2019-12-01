let express = require('express');
let app = express();
let _ = require('lodash');
let dot = require('dot-object');
let mapper = require('./mapper.json');

let errorCodes = {
    'INVALID_INTEGRATION_TYPE': 'Invalid integration/integration type',
    'INVALID_METHOD': 'Invalid method',
    'INVALID_ENTITY': 'Invalid entity',
    'INTEGRATION_NOT_CONFIGURED': 'Integration not configured',
    'INTEGRATION_MISCONFIGURED': 'Multiple integrations found for these settings',
    'INVALID_OPTION_PROVIDED': 'Invalide option provided as arguement',
    'UNKNOWN_MAPPING_TYPE': 'Unknown mapping type'
};

let PORT = 3000;

app.get('/', function(req, res) {
    let integration = 'JIRA';
    let entity = 'PULL_REQUEST';
    let method = "GET"
    let incomingOptionsBeforeTransformation = {
        pr: {
            title: 'title of the pr',
            description: 'description of the pr'            
        },
        create_on: '2019-11-29T00:00:00.123456'
    };

    result = transform(integration, entity, method, incomingOptionsBeforeTransformation);
    res.status(200).json(result);
});

let transform = (integration, entity, method, incomingOptionsBeforeTransformation) => {
    let json = {};
    responseItem = _.map(mapper, (o) => {
        methods = o.method.split("|");
        if(o.type === 'RESPONSE' && o.integration === integration && o.entity === entity && methods.indexOf(method) !== -1){
            return o
        }
    });
    
    // Remove undefines from the array
    responseItem = _.without(responseItem, undefined);

    if(responseItem.length == 0){
        return errorCodes['INTEGRATION_NOT_CONFIGURED'];
    } else if(responseItem.length > 1) {
        return errorCodes['INTEGRATION_MISCONFIGURED'];
    } else {
        // for items in incomingOptionsBeforeTransformation, find json which has a value = item
        let itemMap = responseItem[0]['map'];
        let dotObj = dot.dot(incomingOptionsBeforeTransformation);
        let invertedMap = [];        
        itemMap.forEach((item) => {
            invertedMap.push(_.invert(item));
        });
        for(let item in dotObj){            
            invertedMap.filter((o, index) => {                
                if(o[item]){
                    switch(itemMap[index]['type']){
                        case 'ONE-TO-ONE':
                            json[o[item]] = dotObj[item];
                            break;
                        case 'FUNCTIONAL':
                            json[o[item]] = itemMap[index]['value']
                            break;
                        default:
                            return errorCodes['UNKNOWN_MAPPING_TYPE'];
                    }
                } else {
                    return errorCodes['INVALID_OPTION_PROVIDED'];
                }                
            });
        }        
    }
    return json;
}


app.listen(PORT, function() {
    console.log('Server is running on PORT:',PORT);
});