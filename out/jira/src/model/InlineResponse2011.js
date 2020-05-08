/**
 * Jira
 * The Jira Cloud Platform REST API
 *
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import InlineResponse2011Schema from './InlineResponse2011Schema';

/**
 * The InlineResponse2011 model module.
 * @module model/InlineResponse2011
 * @version 1.3.1
 */
class InlineResponse2011 {
    /**
     * Constructs a new <code>InlineResponse2011</code>.
     * 
     * @alias module:model/InlineResponse2011
     * @param clauseNames {Array.<Object>} 
     * @param custom {Boolean} 
     * @param id {String} 
     * @param name {String} 
     * @param navigable {Boolean} 
     * @param orderable {Boolean} 
     * @param schema {module:model/InlineResponse2011Schema} 
     * @param searchable {Boolean} 
     */
    constructor(clauseNames, custom, id, name, navigable, orderable, schema, searchable) { 
        
        InlineResponse2011.initialize(this, clauseNames, custom, id, name, navigable, orderable, schema, searchable);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, clauseNames, custom, id, name, navigable, orderable, schema, searchable) { 
        obj['clauseNames'] = clauseNames;
        obj['custom'] = custom;
        obj['id'] = id;
        obj['name'] = name;
        obj['navigable'] = navigable;
        obj['orderable'] = orderable;
        obj['schema'] = schema;
        obj['searchable'] = searchable;
    }

    /**
     * Constructs a <code>InlineResponse2011</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2011} obj Optional instance to populate.
     * @return {module:model/InlineResponse2011} The populated <code>InlineResponse2011</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2011();

            if (data.hasOwnProperty('clauseNames')) {
                obj['clauseNames'] = ApiClient.convertToType(data['clauseNames'], [Object]);
            }
            if (data.hasOwnProperty('custom')) {
                obj['custom'] = ApiClient.convertToType(data['custom'], 'Boolean');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('navigable')) {
                obj['navigable'] = ApiClient.convertToType(data['navigable'], 'Boolean');
            }
            if (data.hasOwnProperty('orderable')) {
                obj['orderable'] = ApiClient.convertToType(data['orderable'], 'Boolean');
            }
            if (data.hasOwnProperty('schema')) {
                obj['schema'] = InlineResponse2011Schema.constructFromObject(data['schema']);
            }
            if (data.hasOwnProperty('searchable')) {
                obj['searchable'] = ApiClient.convertToType(data['searchable'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<Object>} clauseNames
 */
InlineResponse2011.prototype['clauseNames'] = undefined;

/**
 * @member {Boolean} custom
 */
InlineResponse2011.prototype['custom'] = undefined;

/**
 * @member {String} id
 */
InlineResponse2011.prototype['id'] = undefined;

/**
 * @member {String} name
 */
InlineResponse2011.prototype['name'] = undefined;

/**
 * @member {Boolean} navigable
 */
InlineResponse2011.prototype['navigable'] = undefined;

/**
 * @member {Boolean} orderable
 */
InlineResponse2011.prototype['orderable'] = undefined;

/**
 * @member {module:model/InlineResponse2011Schema} schema
 */
InlineResponse2011.prototype['schema'] = undefined;

/**
 * @member {Boolean} searchable
 */
InlineResponse2011.prototype['searchable'] = undefined;






export default InlineResponse2011;

