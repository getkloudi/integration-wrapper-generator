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
import Account from './Account';
import GroupAllOfLinks from './GroupAllOfLinks';

/**
 * The GroupAllOf model module.
 * @module model/GroupAllOf
 * @version 1.0.0
 */
class GroupAllOf {
    /**
     * Constructs a new <code>GroupAllOf</code>.
     * A group object
     * @alias module:model/GroupAllOf
     */
    constructor() { 
        
        GroupAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GroupAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GroupAllOf} obj Optional instance to populate.
     * @return {module:model/GroupAllOf} The populated <code>GroupAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GroupAllOf();

            if (data.hasOwnProperty('full_slug')) {
                obj['full_slug'] = ApiClient.convertToType(data['full_slug'], 'String');
            }
            if (data.hasOwnProperty('links')) {
                obj['links'] = GroupAllOfLinks.constructFromObject(data['links']);
            }
            if (data.hasOwnProperty('members')) {
                obj['members'] = ApiClient.convertToType(data['members'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('owner')) {
                obj['owner'] = Account.constructFromObject(data['owner']);
            }
            if (data.hasOwnProperty('slug')) {
                obj['slug'] = ApiClient.convertToType(data['slug'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The concatenation of the owner's username and the group's slug, separated with a colon (e.g. `acme:developers`) 
 * @member {String} full_slug
 */
GroupAllOf.prototype['full_slug'] = undefined;

/**
 * @member {module:model/GroupAllOfLinks} links
 */
GroupAllOf.prototype['links'] = undefined;

/**
 * The number of members in this group
 * @member {Number} members
 */
GroupAllOf.prototype['members'] = undefined;

/**
 * @member {String} name
 */
GroupAllOf.prototype['name'] = undefined;

/**
 * @member {module:model/Account} owner
 */
GroupAllOf.prototype['owner'] = undefined;

/**
 * The \"sluggified\" version of the group's name. This contains only ASCII characters and can therefore be slightly different than the name
 * @member {String} slug
 */
GroupAllOf.prototype['slug'] = undefined;






export default GroupAllOf;

