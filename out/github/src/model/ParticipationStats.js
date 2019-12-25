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

/**
 * The ParticipationStats model module.
 * @module model/ParticipationStats
 * @version 1.4.0
 */
class ParticipationStats {
    /**
     * Constructs a new <code>ParticipationStats</code>.
     * @alias module:model/ParticipationStats
     */
    constructor() { 
        
        ParticipationStats.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ParticipationStats</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ParticipationStats} obj Optional instance to populate.
     * @return {module:model/ParticipationStats} The populated <code>ParticipationStats</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ParticipationStats();

            if (data.hasOwnProperty('all')) {
                obj['all'] = ApiClient.convertToType(data['all'], ['Number']);
            }
            if (data.hasOwnProperty('owner')) {
                obj['owner'] = ApiClient.convertToType(data['owner'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<Number>} all
 */
ParticipationStats.prototype['all'] = undefined;

/**
 * @member {Array.<Number>} owner
 */
ParticipationStats.prototype['owner'] = undefined;






export default ParticipationStats;

