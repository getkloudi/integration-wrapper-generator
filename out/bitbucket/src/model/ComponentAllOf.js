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
import BranchrestrictionAllOfLinks from './BranchrestrictionAllOfLinks';

/**
 * The ComponentAllOf model module.
 * @module model/ComponentAllOf
 * @version 1.0.0
 */
class ComponentAllOf {
    /**
     * Constructs a new <code>ComponentAllOf</code>.
     * A component as defined in a repository&#39;s issue tracker.
     * @alias module:model/ComponentAllOf
     */
    constructor() { 
        
        ComponentAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ComponentAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ComponentAllOf} obj Optional instance to populate.
     * @return {module:model/ComponentAllOf} The populated <code>ComponentAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ComponentAllOf();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('links')) {
                obj['links'] = BranchrestrictionAllOfLinks.constructFromObject(data['links']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
ComponentAllOf.prototype['id'] = undefined;

/**
 * @member {module:model/BranchrestrictionAllOfLinks} links
 */
ComponentAllOf.prototype['links'] = undefined;

/**
 * @member {String} name
 */
ComponentAllOf.prototype['name'] = undefined;






export default ComponentAllOf;

