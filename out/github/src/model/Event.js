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
import EventRepo from './EventRepo';
import Organization from './Organization';

/**
 * The Event model module.
 * @module model/Event
 * @version 1.3.3
 */
class Event {
    /**
     * Constructs a new <code>Event</code>.
     * @alias module:model/Event
     */
    constructor() { 
        
        Event.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Event</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Event} obj Optional instance to populate.
     * @return {module:model/Event} The populated <code>Event</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Event();

            if (data.hasOwnProperty('actor')) {
                obj['actor'] = Actor.constructFromObject(data['actor']);
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], Object);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('org')) {
                obj['org'] = Organization.constructFromObject(data['org']);
            }
            if (data.hasOwnProperty('payload')) {
                obj['payload'] = ApiClient.convertToType(data['payload'], Object);
            }
            if (data.hasOwnProperty('public')) {
                obj['public'] = ApiClient.convertToType(data['public'], 'Boolean');
            }
            if (data.hasOwnProperty('repo')) {
                obj['repo'] = EventRepo.constructFromObject(data['repo']);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Actor} actor
 */
Event.prototype['actor'] = undefined;

/**
 * @member {Object} created_at
 */
Event.prototype['created_at'] = undefined;

/**
 * @member {Number} id
 */
Event.prototype['id'] = undefined;

/**
 * @member {module:model/Organization} org
 */
Event.prototype['org'] = undefined;

/**
 * @member {Object} payload
 */
Event.prototype['payload'] = undefined;

/**
 * @member {Boolean} public
 */
Event.prototype['public'] = undefined;

/**
 * @member {module:model/EventRepo} repo
 */
Event.prototype['repo'] = undefined;

/**
 * @member {String} type
 */
Event.prototype['type'] = undefined;






export default Event;

