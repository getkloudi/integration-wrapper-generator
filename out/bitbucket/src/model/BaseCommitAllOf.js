/**
 * Bitbucket
 * Code against the Bitbucket API to automate simple tasks, embed Bitbucket data into your own site, build mobile or desktop apps, or even add custom UI add-ons into Bitbucket itself using the Connect framework.
 *
 * The version of the OpenAPI document: 2.0
 * Contact: support@bitbucket.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Author from './Author';
import BaseCommit from './BaseCommit';

/**
 * The BaseCommitAllOf model module.
 * @module model/BaseCommitAllOf
 * @version 1.0.0
 */
class BaseCommitAllOf {
    /**
     * Constructs a new <code>BaseCommitAllOf</code>.
     * The common base type for both repository and snippet commits.
     * @alias module:model/BaseCommitAllOf
     */
    constructor() { 
        
        BaseCommitAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BaseCommitAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BaseCommitAllOf} obj Optional instance to populate.
     * @return {module:model/BaseCommitAllOf} The populated <code>BaseCommitAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BaseCommitAllOf();

            if (data.hasOwnProperty('author')) {
                obj['author'] = Author.constructFromObject(data['author']);
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('hash')) {
                obj['hash'] = ApiClient.convertToType(data['hash'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('parents')) {
                obj['parents'] = ApiClient.convertToType(data['parents'], [BaseCommit]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Author} author
 */
BaseCommitAllOf.prototype['author'] = undefined;

/**
 * @member {Date} date
 */
BaseCommitAllOf.prototype['date'] = undefined;

/**
 * @member {String} hash
 */
BaseCommitAllOf.prototype['hash'] = undefined;

/**
 * @member {String} message
 */
BaseCommitAllOf.prototype['message'] = undefined;

/**
 * @member {Array.<module:model/BaseCommit>} parents
 */
BaseCommitAllOf.prototype['parents'] = undefined;






export default BaseCommitAllOf;

