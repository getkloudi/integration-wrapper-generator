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
import Repo from './Repo';

/**
 * The TeamRepos model module.
 * @module model/TeamRepos
 * @version 1.4.6
 */
class TeamRepos {
    /**
     * Constructs a new <code>TeamRepos</code>.
     * @alias module:model/TeamRepos
     * @extends 
     */
    constructor() { 
        
        TeamRepos.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TeamRepos</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TeamRepos} obj Optional instance to populate.
     * @return {module:model/TeamRepos} The populated <code>TeamRepos</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TeamRepos();

            ApiClient.constructFromObject(data, obj, '');
            

        }
        return obj;
    }


}






export default TeamRepos;

