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
import ErrorCollection from './ErrorCollection';

/**
 * The BulkOperationErrorResult model module.
 * @module model/BulkOperationErrorResult
 * @version 1.4.0
 */
class BulkOperationErrorResult {
    /**
     * Constructs a new <code>BulkOperationErrorResult</code>.
     * @alias module:model/BulkOperationErrorResult
     */
    constructor() { 
        
        BulkOperationErrorResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BulkOperationErrorResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BulkOperationErrorResult} obj Optional instance to populate.
     * @return {module:model/BulkOperationErrorResult} The populated <code>BulkOperationErrorResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BulkOperationErrorResult();

            if (data.hasOwnProperty('elementErrors')) {
                obj['elementErrors'] = ErrorCollection.constructFromObject(data['elementErrors']);
            }
            if (data.hasOwnProperty('failedElementNumber')) {
                obj['failedElementNumber'] = ApiClient.convertToType(data['failedElementNumber'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ErrorCollection} elementErrors
 */
BulkOperationErrorResult.prototype['elementErrors'] = undefined;

/**
 * @member {Number} failedElementNumber
 */
BulkOperationErrorResult.prototype['failedElementNumber'] = undefined;

/**
 * @member {Number} status
 */
BulkOperationErrorResult.prototype['status'] = undefined;






export default BulkOperationErrorResult;
