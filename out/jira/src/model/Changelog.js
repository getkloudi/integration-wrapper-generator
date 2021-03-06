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
import ChangeDetails from './ChangeDetails';
import HistoryMetadata from './HistoryMetadata';
import UserDetails from './UserDetails';

/**
 * The Changelog model module.
 * @module model/Changelog
 * @version 1.4.0
 */
class Changelog {
    /**
     * Constructs a new <code>Changelog</code>.
     * A changelog.
     * @alias module:model/Changelog
     */
    constructor() { 
        
        Changelog.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Changelog</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Changelog} obj Optional instance to populate.
     * @return {module:model/Changelog} The populated <code>Changelog</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Changelog();

            if (data.hasOwnProperty('author')) {
                obj['author'] = ApiClient.convertToType(data['author'], UserDetails);
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('historyMetadata')) {
                obj['historyMetadata'] = ApiClient.convertToType(data['historyMetadata'], HistoryMetadata);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [ChangeDetails]);
            }
        }
        return obj;
    }


}

/**
 * The user who made the change.
 * @member {module:model/UserDetails} author
 */
Changelog.prototype['author'] = undefined;

/**
 * The date on which the change took place.
 * @member {Date} created
 */
Changelog.prototype['created'] = undefined;

/**
 * The history metadata associated with the changed.
 * @member {module:model/HistoryMetadata} historyMetadata
 */
Changelog.prototype['historyMetadata'] = undefined;

/**
 * The ID of the changelog.
 * @member {String} id
 */
Changelog.prototype['id'] = undefined;

/**
 * The list of items changed.
 * @member {Array.<module:model/ChangeDetails>} items
 */
Changelog.prototype['items'] = undefined;






export default Changelog;

