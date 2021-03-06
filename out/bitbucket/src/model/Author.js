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
import Account from './Account';
import AuthorAllOf from './AuthorAllOf';
import ModelObject from './ModelObject';

/**
 * The Author model module.
 * @module model/Author
 * @version 1.2.0
 */
class Author {
    /**
     * Constructs a new <code>Author</code>.
     * @alias module:model/Author
     * @extends module:model/ModelObject
     * @implements module:model/ModelObject
     * @implements module:model/AuthorAllOf
     * @param type {String} 
     */
    constructor(type) { 
        ModelObject.initialize(this, type);AuthorAllOf.initialize(this);
        Author.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
    }

    /**
     * Constructs a <code>Author</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Author} obj Optional instance to populate.
     * @return {module:model/Author} The populated <code>Author</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Author();
            ModelObject.constructFromObject(data, obj);
            ModelObject.constructFromObject(data, obj);
            AuthorAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('raw')) {
                obj['raw'] = ApiClient.convertToType(data['raw'], 'String');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = Account.constructFromObject(data['user']);
            }
        }
        return obj;
    }


}

/**
 * The raw author value from the repository. This may be the only value available if the author does not match a user in Bitbucket.
 * @member {String} raw
 */
Author.prototype['raw'] = undefined;

/**
 * @member {module:model/Account} user
 */
Author.prototype['user'] = undefined;


// Implement ModelObject interface:
/**
 * @member {String} type
 */
ModelObject.prototype['type'] = undefined;
// Implement AuthorAllOf interface:
/**
 * The raw author value from the repository. This may be the only value available if the author does not match a user in Bitbucket.
 * @member {String} raw
 */
AuthorAllOf.prototype['raw'] = undefined;
/**
 * @member {module:model/Account} user
 */
AuthorAllOf.prototype['user'] = undefined;




export default Author;

