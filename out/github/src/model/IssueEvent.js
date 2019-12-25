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
import IssueEventIssue from './IssueEventIssue';

/**
 * The IssueEvent model module.
 * @module model/IssueEvent
 * @version 1.4.0
 */
class IssueEvent {
    /**
     * Constructs a new <code>IssueEvent</code>.
     * @alias module:model/IssueEvent
     */
    constructor() { 
        
        IssueEvent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IssueEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueEvent} obj Optional instance to populate.
     * @return {module:model/IssueEvent} The populated <code>IssueEvent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IssueEvent();

            if (data.hasOwnProperty('actor')) {
                obj['actor'] = Actor.constructFromObject(data['actor']);
            }
            if (data.hasOwnProperty('commit_id')) {
                obj['commit_id'] = ApiClient.convertToType(data['commit_id'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('event')) {
                obj['event'] = ApiClient.convertToType(data['event'], 'String');
            }
            if (data.hasOwnProperty('issue')) {
                obj['issue'] = IssueEventIssue.constructFromObject(data['issue']);
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Actor} actor
 */
IssueEvent.prototype['actor'] = undefined;

/**
 * @member {String} commit_id
 */
IssueEvent.prototype['commit_id'] = undefined;

/**
 * ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @member {String} created_at
 */
IssueEvent.prototype['created_at'] = undefined;

/**
 * @member {String} event
 */
IssueEvent.prototype['event'] = undefined;

/**
 * @member {module:model/IssueEventIssue} issue
 */
IssueEvent.prototype['issue'] = undefined;

/**
 * @member {String} url
 */
IssueEvent.prototype['url'] = undefined;






export default IssueEvent;

