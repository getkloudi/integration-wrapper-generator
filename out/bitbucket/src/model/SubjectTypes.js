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
import SubjectTypesRepository from './SubjectTypesRepository';

/**
 * The SubjectTypes model module.
 * @module model/SubjectTypes
 * @version 1.1.2
 */
class SubjectTypes {
    /**
     * Constructs a new <code>SubjectTypes</code>.
     * The mapping of resource/subject types pointing to their individual event types.
     * @alias module:model/SubjectTypes
     */
    constructor() { 
        
        SubjectTypes.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SubjectTypes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SubjectTypes} obj Optional instance to populate.
     * @return {module:model/SubjectTypes} The populated <code>SubjectTypes</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SubjectTypes();

            if (data.hasOwnProperty('repository')) {
                obj['repository'] = SubjectTypesRepository.constructFromObject(data['repository']);
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = SubjectTypesRepository.constructFromObject(data['user']);
            }
            if (data.hasOwnProperty('team')) {
                obj['team'] = SubjectTypesRepository.constructFromObject(data['team']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/SubjectTypesRepository} repository
 */
SubjectTypes.prototype['repository'] = undefined;

/**
 * @member {module:model/SubjectTypesRepository} user
 */
SubjectTypes.prototype['user'] = undefined;

/**
 * @member {module:model/SubjectTypesRepository} team
 */
SubjectTypes.prototype['team'] = undefined;






export default SubjectTypes;

