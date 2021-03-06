/**
 * The Jira Cloud platform REST API
 * Jira Cloud platform REST API documentation
 *
 * The version of the OpenAPI document: 1001.0.0-SNAPSHOT
 * Contact: ecosystem@atlassian.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import JqlQueryOrderByClause from './JqlQueryOrderByClause';

/**
 * The JqlQuery model module.
 * @module model/JqlQuery
 * @version 1.4.0
 */
class JqlQuery {
    /**
     * Constructs a new <code>JqlQuery</code>.
     * A parsed JQL query.
     * @alias module:model/JqlQuery
     */
    constructor() { 
        
        JqlQuery.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>JqlQuery</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JqlQuery} obj Optional instance to populate.
     * @return {module:model/JqlQuery} The populated <code>JqlQuery</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JqlQuery();

            if (data.hasOwnProperty('orderBy')) {
                obj['orderBy'] = JqlQueryOrderByClause.constructFromObject(data['orderBy']);
            }
            if (data.hasOwnProperty('where')) {
                obj['where'] = ApiClient.convertToType(data['where'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/JqlQueryOrderByClause} orderBy
 */
JqlQuery.prototype['orderBy'] = undefined;

/**
 * A JQL query clause.
 * @member {Object} where
 */
JqlQuery.prototype['where'] = undefined;






export default JqlQuery;

