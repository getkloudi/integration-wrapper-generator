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
import Repository from './Repository';
import User from './User';

/**
 * The RepositoryPermission model module.
 * @module model/RepositoryPermission
 * @version 1.1.0
 */
class RepositoryPermission {
    /**
     * Constructs a new <code>RepositoryPermission</code>.
     * A user&#39;s permission for a given repository.
     * @alias module:model/RepositoryPermission
     * @param type {String} 
     */
    constructor(type) { 
        
        RepositoryPermission.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
        obj['type'] = type;
    }

    /**
     * Constructs a <code>RepositoryPermission</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RepositoryPermission} obj Optional instance to populate.
     * @return {module:model/RepositoryPermission} The populated <code>RepositoryPermission</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RepositoryPermission();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('permission')) {
                obj['permission'] = ApiClient.convertToType(data['permission'], 'String');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = User.constructFromObject(data['user']);
            }
            if (data.hasOwnProperty('repository')) {
                obj['repository'] = Repository.constructFromObject(data['repository']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} type
 */
RepositoryPermission.prototype['type'] = undefined;

/**
 * @member {module:model/RepositoryPermission.PermissionEnum} permission
 */
RepositoryPermission.prototype['permission'] = undefined;

/**
 * @member {module:model/User} user
 */
RepositoryPermission.prototype['user'] = undefined;

/**
 * @member {module:model/Repository} repository
 */
RepositoryPermission.prototype['repository'] = undefined;





/**
 * Allowed values for the <code>permission</code> property.
 * @enum {String}
 * @readonly
 */
RepositoryPermission['PermissionEnum'] = {

    /**
     * value: "admin"
     * @const
     */
    "admin": "admin",

    /**
     * value: "write"
     * @const
     */
    "write": "write",

    /**
     * value: "read"
     * @const
     */
    "read": "read"
};



export default RepositoryPermission;

