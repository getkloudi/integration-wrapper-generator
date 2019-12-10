/**
 * GitHub
 * Powerful collaboration, code review, and code management for open source and private projects. 
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
import Actor from './Actor';

/**
 * The NotificationsRepository model module.
 * @module model/NotificationsRepository
 * @version 1.2.0
 */
class NotificationsRepository {
    /**
     * Constructs a new <code>NotificationsRepository</code>.
     * @alias module:model/NotificationsRepository
     */
    constructor() { 
        
        NotificationsRepository.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>NotificationsRepository</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NotificationsRepository} obj Optional instance to populate.
     * @return {module:model/NotificationsRepository} The populated <code>NotificationsRepository</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NotificationsRepository();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('fork')) {
                obj['fork'] = ApiClient.convertToType(data['fork'], 'Boolean');
            }
            if (data.hasOwnProperty('full_name')) {
                obj['full_name'] = ApiClient.convertToType(data['full_name'], 'String');
            }
            if (data.hasOwnProperty('html_url')) {
                obj['html_url'] = ApiClient.convertToType(data['html_url'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('owner')) {
                obj['owner'] = Actor.constructFromObject(data['owner']);
            }
            if (data.hasOwnProperty('private')) {
                obj['private'] = ApiClient.convertToType(data['private'], 'Boolean');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} description
 */
NotificationsRepository.prototype['description'] = undefined;

/**
 * @member {Boolean} fork
 */
NotificationsRepository.prototype['fork'] = undefined;

/**
 * @member {String} full_name
 */
NotificationsRepository.prototype['full_name'] = undefined;

/**
 * @member {String} html_url
 */
NotificationsRepository.prototype['html_url'] = undefined;

/**
 * @member {Number} id
 */
NotificationsRepository.prototype['id'] = undefined;

/**
 * @member {String} name
 */
NotificationsRepository.prototype['name'] = undefined;

/**
 * @member {module:model/Actor} owner
 */
NotificationsRepository.prototype['owner'] = undefined;

/**
 * @member {Boolean} private
 */
NotificationsRepository.prototype['private'] = undefined;

/**
 * @member {String} url
 */
NotificationsRepository.prototype['url'] = undefined;






export default NotificationsRepository;

