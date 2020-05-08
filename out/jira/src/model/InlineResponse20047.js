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
import InlineResponse2009Author from './InlineResponse2009Author';

/**
 * The InlineResponse20047 model module.
 * @module model/InlineResponse20047
 * @version 1.1.0
 */
class InlineResponse20047 {
    /**
     * Constructs a new <code>InlineResponse20047</code>.
     * 
     * @alias module:model/InlineResponse20047
     * @param isWatching {Boolean} 
     * @param self {String} 
     * @param watchCount {Number} 
     * @param watchers {Array.<module:model/InlineResponse2009Author>} 
     */
    constructor(isWatching, self, watchCount, watchers) { 
        
        InlineResponse20047.initialize(this, isWatching, self, watchCount, watchers);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, isWatching, self, watchCount, watchers) { 
        obj['isWatching'] = isWatching;
        obj['self'] = self;
        obj['watchCount'] = watchCount;
        obj['watchers'] = watchers;
    }

    /**
     * Constructs a <code>InlineResponse20047</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20047} obj Optional instance to populate.
     * @return {module:model/InlineResponse20047} The populated <code>InlineResponse20047</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20047();

            if (data.hasOwnProperty('isWatching')) {
                obj['isWatching'] = ApiClient.convertToType(data['isWatching'], 'Boolean');
            }
            if (data.hasOwnProperty('self')) {
                obj['self'] = ApiClient.convertToType(data['self'], 'String');
            }
            if (data.hasOwnProperty('watchCount')) {
                obj['watchCount'] = ApiClient.convertToType(data['watchCount'], 'Number');
            }
            if (data.hasOwnProperty('watchers')) {
                obj['watchers'] = ApiClient.convertToType(data['watchers'], [InlineResponse2009Author]);
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} isWatching
 */
InlineResponse20047.prototype['isWatching'] = undefined;

/**
 * @member {String} self
 */
InlineResponse20047.prototype['self'] = undefined;

/**
 * @member {Number} watchCount
 */
InlineResponse20047.prototype['watchCount'] = undefined;

/**
 * @member {Array.<module:model/InlineResponse2009Author>} watchers
 */
InlineResponse20047.prototype['watchers'] = undefined;






export default InlineResponse20047;

