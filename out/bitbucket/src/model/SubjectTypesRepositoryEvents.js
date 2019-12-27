/**
 * Bitbucket API
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

/**
 * The SubjectTypesRepositoryEvents model module.
 * @module model/SubjectTypesRepositoryEvents
 * @version 1.1.0
 */
class SubjectTypesRepositoryEvents {
    /**
     * Constructs a new <code>SubjectTypesRepositoryEvents</code>.
     * @alias module:model/SubjectTypesRepositoryEvents
     */
    constructor() { 
        
        SubjectTypesRepositoryEvents.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SubjectTypesRepositoryEvents</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SubjectTypesRepositoryEvents} obj Optional instance to populate.
     * @return {module:model/SubjectTypesRepositoryEvents} The populated <code>SubjectTypesRepositoryEvents</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SubjectTypesRepositoryEvents();

            if (data.hasOwnProperty('href')) {
                obj['href'] = ApiClient.convertToType(data['href'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} href
 */
SubjectTypesRepositoryEvents.prototype['href'] = undefined;

/**
 * @member {String} name
 */
SubjectTypesRepositoryEvents.prototype['name'] = undefined;






export default SubjectTypesRepositoryEvents;
