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
import InlineResponse200106Values from './InlineResponse200106Values';

/**
 * The InlineResponse200106 model module.
 * @module model/InlineResponse200106
 * @version 1.3.1
 */
class InlineResponse200106 {
    /**
     * Constructs a new <code>InlineResponse200106</code>.
     * 
     * @alias module:model/InlineResponse200106
     * @param lastPage {Boolean} 
     * @param nextPage {String} 
     * @param self {String} 
     * @param since {Number} 
     * @param until {Number} 
     * @param values {Array.<module:model/InlineResponse200106Values>} 
     */
    constructor(lastPage, nextPage, self, since, until, values) { 
        
        InlineResponse200106.initialize(this, lastPage, nextPage, self, since, until, values);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, lastPage, nextPage, self, since, until, values) { 
        obj['lastPage'] = lastPage;
        obj['nextPage'] = nextPage;
        obj['self'] = self;
        obj['since'] = since;
        obj['until'] = until;
        obj['values'] = values;
    }

    /**
     * Constructs a <code>InlineResponse200106</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse200106} obj Optional instance to populate.
     * @return {module:model/InlineResponse200106} The populated <code>InlineResponse200106</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse200106();

            if (data.hasOwnProperty('lastPage')) {
                obj['lastPage'] = ApiClient.convertToType(data['lastPage'], 'Boolean');
            }
            if (data.hasOwnProperty('nextPage')) {
                obj['nextPage'] = ApiClient.convertToType(data['nextPage'], 'String');
            }
            if (data.hasOwnProperty('self')) {
                obj['self'] = ApiClient.convertToType(data['self'], 'String');
            }
            if (data.hasOwnProperty('since')) {
                obj['since'] = ApiClient.convertToType(data['since'], 'Number');
            }
            if (data.hasOwnProperty('until')) {
                obj['until'] = ApiClient.convertToType(data['until'], 'Number');
            }
            if (data.hasOwnProperty('values')) {
                obj['values'] = ApiClient.convertToType(data['values'], [InlineResponse200106Values]);
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} lastPage
 */
InlineResponse200106.prototype['lastPage'] = undefined;

/**
 * @member {String} nextPage
 */
InlineResponse200106.prototype['nextPage'] = undefined;

/**
 * @member {String} self
 */
InlineResponse200106.prototype['self'] = undefined;

/**
 * @member {Number} since
 */
InlineResponse200106.prototype['since'] = undefined;

/**
 * @member {Number} until
 */
InlineResponse200106.prototype['until'] = undefined;

/**
 * @member {Array.<module:model/InlineResponse200106Values>} values
 */
InlineResponse200106.prototype['values'] = undefined;






export default InlineResponse200106;

