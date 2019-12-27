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
import ModelObject from './ModelObject';
import SnippetAllOf from './SnippetAllOf';

/**
 * The Snippet model module.
 * @module model/Snippet
 * @version 1.1.0
 */
class Snippet {
    /**
     * Constructs a new <code>Snippet</code>.
     * @alias module:model/Snippet
     * @extends module:model/ModelObject
     * @implements module:model/ModelObject
     * @implements module:model/SnippetAllOf
     * @param type {String} 
     */
    constructor(type) { 
        ModelObject.initialize(this, type);SnippetAllOf.initialize(this);
        Snippet.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
    }

    /**
     * Constructs a <code>Snippet</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Snippet} obj Optional instance to populate.
     * @return {module:model/Snippet} The populated <code>Snippet</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Snippet();
            ModelObject.constructFromObject(data, obj);
            ModelObject.constructFromObject(data, obj);
            SnippetAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('created_on')) {
                obj['created_on'] = ApiClient.convertToType(data['created_on'], 'Date');
            }
            if (data.hasOwnProperty('creator')) {
                obj['creator'] = Account.constructFromObject(data['creator']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('is_private')) {
                obj['is_private'] = ApiClient.convertToType(data['is_private'], 'Boolean');
            }
            if (data.hasOwnProperty('owner')) {
                obj['owner'] = Account.constructFromObject(data['owner']);
            }
            if (data.hasOwnProperty('scm')) {
                obj['scm'] = ApiClient.convertToType(data['scm'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('updated_on')) {
                obj['updated_on'] = ApiClient.convertToType(data['updated_on'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {Date} created_on
 */
Snippet.prototype['created_on'] = undefined;

/**
 * @member {module:model/Account} creator
 */
Snippet.prototype['creator'] = undefined;

/**
 * @member {Number} id
 */
Snippet.prototype['id'] = undefined;

/**
 * @member {Boolean} is_private
 */
Snippet.prototype['is_private'] = undefined;

/**
 * @member {module:model/Account} owner
 */
Snippet.prototype['owner'] = undefined;

/**
 * The DVCS used to store the snippet.
 * @member {module:model/Snippet.ScmEnum} scm
 */
Snippet.prototype['scm'] = undefined;

/**
 * @member {String} title
 */
Snippet.prototype['title'] = undefined;

/**
 * @member {Date} updated_on
 */
Snippet.prototype['updated_on'] = undefined;


// Implement ModelObject interface:
/**
 * @member {String} type
 */
ModelObject.prototype['type'] = undefined;
// Implement SnippetAllOf interface:
/**
 * @member {Date} created_on
 */
SnippetAllOf.prototype['created_on'] = undefined;
/**
 * @member {module:model/Account} creator
 */
SnippetAllOf.prototype['creator'] = undefined;
/**
 * @member {Number} id
 */
SnippetAllOf.prototype['id'] = undefined;
/**
 * @member {Boolean} is_private
 */
SnippetAllOf.prototype['is_private'] = undefined;
/**
 * @member {module:model/Account} owner
 */
SnippetAllOf.prototype['owner'] = undefined;
/**
 * The DVCS used to store the snippet.
 * @member {module:model/SnippetAllOf.ScmEnum} scm
 */
SnippetAllOf.prototype['scm'] = undefined;
/**
 * @member {String} title
 */
SnippetAllOf.prototype['title'] = undefined;
/**
 * @member {Date} updated_on
 */
SnippetAllOf.prototype['updated_on'] = undefined;



/**
 * Allowed values for the <code>scm</code> property.
 * @enum {String}
 * @readonly
 */
Snippet['ScmEnum'] = {

    /**
     * value: "hg"
     * @const
     */
    "hg": "hg",

    /**
     * value: "git"
     * @const
     */
    "git": "git"
};



export default Snippet;

