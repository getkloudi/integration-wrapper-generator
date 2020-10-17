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
 * The Forks model module.
 * @module model/Forks
 * @version 1.4.4
 */
class Forks {
    /**
     * Constructs a new <code>Forks</code>.
     * @alias module:model/Forks
     * @extends 
     */
    constructor() { 
        
        Forks.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Forks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Forks} obj Optional instance to populate.
     * @return {module:model/Forks} The populated <code>Forks</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Forks();

            ApiClient.constructFromObject(data, obj, '');
            

        }
        return obj;
    }


}






export default Forks;

