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
import InlineResponse20050InwardIssue from './InlineResponse20050InwardIssue';
import InlineResponse20050OutwardIssue from './InlineResponse20050OutwardIssue';
import InlineResponse20050Type from './InlineResponse20050Type';

/**
 * The InlineResponse20050 model module.
 * @module model/InlineResponse20050
 * @version 1.0.0
 */
class InlineResponse20050 {
    /**
     * Constructs a new <code>InlineResponse20050</code>.
     * 
     * @alias module:model/InlineResponse20050
     * @param id {String} 
     * @param inwardIssue {module:model/InlineResponse20050InwardIssue} 
     * @param outwardIssue {module:model/InlineResponse20050OutwardIssue} 
     * @param type {module:model/InlineResponse20050Type} 
     */
    constructor(id, inwardIssue, outwardIssue, type) { 
        
        InlineResponse20050.initialize(this, id, inwardIssue, outwardIssue, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, inwardIssue, outwardIssue, type) { 
        obj['id'] = id;
        obj['inwardIssue'] = inwardIssue;
        obj['outwardIssue'] = outwardIssue;
        obj['type'] = type;
    }

    /**
     * Constructs a <code>InlineResponse20050</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20050} obj Optional instance to populate.
     * @return {module:model/InlineResponse20050} The populated <code>InlineResponse20050</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20050();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('inwardIssue')) {
                obj['inwardIssue'] = InlineResponse20050InwardIssue.constructFromObject(data['inwardIssue']);
            }
            if (data.hasOwnProperty('outwardIssue')) {
                obj['outwardIssue'] = InlineResponse20050OutwardIssue.constructFromObject(data['outwardIssue']);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = InlineResponse20050Type.constructFromObject(data['type']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
InlineResponse20050.prototype['id'] = undefined;

/**
 * @member {module:model/InlineResponse20050InwardIssue} inwardIssue
 */
InlineResponse20050.prototype['inwardIssue'] = undefined;

/**
 * @member {module:model/InlineResponse20050OutwardIssue} outwardIssue
 */
InlineResponse20050.prototype['outwardIssue'] = undefined;

/**
 * @member {module:model/InlineResponse20050Type} type
 */
InlineResponse20050.prototype['type'] = undefined;






export default InlineResponse20050;

