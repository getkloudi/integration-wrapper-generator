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
import Branch from './Branch';
import ModelObject from './ModelObject';
import Project from './Project';
import RepositoryAllOf from './RepositoryAllOf';
import RepositoryAllOfLinks from './RepositoryAllOfLinks';

/**
 * The Repository model module.
 * @module model/Repository
 * @version 1.1.2
 */
class Repository {
    /**
     * Constructs a new <code>Repository</code>.
     * @alias module:model/Repository
     * @extends module:model/ModelObject
     * @implements module:model/ModelObject
     * @implements module:model/RepositoryAllOf
     * @param type {String} 
     */
    constructor(type) { 
        ModelObject.initialize(this, type);RepositoryAllOf.initialize(this);
        Repository.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
    }

    /**
     * Constructs a <code>Repository</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Repository} obj Optional instance to populate.
     * @return {module:model/Repository} The populated <code>Repository</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Repository();
            ModelObject.constructFromObject(data, obj);
            ModelObject.constructFromObject(data, obj);
            RepositoryAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('links')) {
                obj['links'] = RepositoryAllOfLinks.constructFromObject(data['links']);
            }
            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('full_name')) {
                obj['full_name'] = ApiClient.convertToType(data['full_name'], 'String');
            }
            if (data.hasOwnProperty('is_private')) {
                obj['is_private'] = ApiClient.convertToType(data['is_private'], 'Boolean');
            }
            if (data.hasOwnProperty('parent')) {
                obj['parent'] = Repository.constructFromObject(data['parent']);
            }
            if (data.hasOwnProperty('scm')) {
                obj['scm'] = ApiClient.convertToType(data['scm'], 'String');
            }
            if (data.hasOwnProperty('owner')) {
                obj['owner'] = Account.constructFromObject(data['owner']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('created_on')) {
                obj['created_on'] = ApiClient.convertToType(data['created_on'], 'Date');
            }
            if (data.hasOwnProperty('updated_on')) {
                obj['updated_on'] = ApiClient.convertToType(data['updated_on'], 'Date');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('language')) {
                obj['language'] = ApiClient.convertToType(data['language'], 'String');
            }
            if (data.hasOwnProperty('has_issues')) {
                obj['has_issues'] = ApiClient.convertToType(data['has_issues'], 'Boolean');
            }
            if (data.hasOwnProperty('has_wiki')) {
                obj['has_wiki'] = ApiClient.convertToType(data['has_wiki'], 'Boolean');
            }
            if (data.hasOwnProperty('fork_policy')) {
                obj['fork_policy'] = ApiClient.convertToType(data['fork_policy'], 'String');
            }
            if (data.hasOwnProperty('project')) {
                obj['project'] = Project.constructFromObject(data['project']);
            }
            if (data.hasOwnProperty('mainbranch')) {
                obj['mainbranch'] = Branch.constructFromObject(data['mainbranch']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/RepositoryAllOfLinks} links
 */
Repository.prototype['links'] = undefined;

/**
 * The repository's immutable id. This can be used as a substitute for the slug segment in URLs. Doing this guarantees your URLs will survive renaming of the repository by its owner, or even transfer of the repository to a different user.
 * @member {String} uuid
 */
Repository.prototype['uuid'] = undefined;

/**
 * The concatenation of the repository owner's username and the slugified name, e.g. \"evzijst/interruptingcow\". This is the same string used in Bitbucket URLs.
 * @member {String} full_name
 */
Repository.prototype['full_name'] = undefined;

/**
 * @member {Boolean} is_private
 */
Repository.prototype['is_private'] = undefined;

/**
 * @member {module:model/Repository} parent
 */
Repository.prototype['parent'] = undefined;

/**
 * @member {module:model/Repository.ScmEnum} scm
 */
Repository.prototype['scm'] = undefined;

/**
 * @member {module:model/Account} owner
 */
Repository.prototype['owner'] = undefined;

/**
 * @member {String} name
 */
Repository.prototype['name'] = undefined;

/**
 * @member {String} description
 */
Repository.prototype['description'] = undefined;

/**
 * @member {Date} created_on
 */
Repository.prototype['created_on'] = undefined;

/**
 * @member {Date} updated_on
 */
Repository.prototype['updated_on'] = undefined;

/**
 * @member {Number} size
 */
Repository.prototype['size'] = undefined;

/**
 * @member {String} language
 */
Repository.prototype['language'] = undefined;

/**
 * @member {Boolean} has_issues
 */
Repository.prototype['has_issues'] = undefined;

/**
 * @member {Boolean} has_wiki
 */
Repository.prototype['has_wiki'] = undefined;

/**
 *  Controls the rules for forking this repository.  * **allow_forks**: unrestricted forking * **no_public_forks**: restrict forking to private forks (forks cannot   be made public later) * **no_forks**: deny all forking 
 * @member {module:model/Repository.ForkPolicyEnum} fork_policy
 */
Repository.prototype['fork_policy'] = undefined;

/**
 * @member {module:model/Project} project
 */
Repository.prototype['project'] = undefined;

/**
 * @member {module:model/Branch} mainbranch
 */
Repository.prototype['mainbranch'] = undefined;


// Implement ModelObject interface:
/**
 * @member {String} type
 */
ModelObject.prototype['type'] = undefined;
// Implement RepositoryAllOf interface:
/**
 * @member {module:model/RepositoryAllOfLinks} links
 */
RepositoryAllOf.prototype['links'] = undefined;
/**
 * The repository's immutable id. This can be used as a substitute for the slug segment in URLs. Doing this guarantees your URLs will survive renaming of the repository by its owner, or even transfer of the repository to a different user.
 * @member {String} uuid
 */
RepositoryAllOf.prototype['uuid'] = undefined;
/**
 * The concatenation of the repository owner's username and the slugified name, e.g. \"evzijst/interruptingcow\". This is the same string used in Bitbucket URLs.
 * @member {String} full_name
 */
RepositoryAllOf.prototype['full_name'] = undefined;
/**
 * @member {Boolean} is_private
 */
RepositoryAllOf.prototype['is_private'] = undefined;
/**
 * @member {module:model/Repository} parent
 */
RepositoryAllOf.prototype['parent'] = undefined;
/**
 * @member {module:model/RepositoryAllOf.ScmEnum} scm
 */
RepositoryAllOf.prototype['scm'] = undefined;
/**
 * @member {module:model/Account} owner
 */
RepositoryAllOf.prototype['owner'] = undefined;
/**
 * @member {String} name
 */
RepositoryAllOf.prototype['name'] = undefined;
/**
 * @member {String} description
 */
RepositoryAllOf.prototype['description'] = undefined;
/**
 * @member {Date} created_on
 */
RepositoryAllOf.prototype['created_on'] = undefined;
/**
 * @member {Date} updated_on
 */
RepositoryAllOf.prototype['updated_on'] = undefined;
/**
 * @member {Number} size
 */
RepositoryAllOf.prototype['size'] = undefined;
/**
 * @member {String} language
 */
RepositoryAllOf.prototype['language'] = undefined;
/**
 * @member {Boolean} has_issues
 */
RepositoryAllOf.prototype['has_issues'] = undefined;
/**
 * @member {Boolean} has_wiki
 */
RepositoryAllOf.prototype['has_wiki'] = undefined;
/**
 *  Controls the rules for forking this repository.  * **allow_forks**: unrestricted forking * **no_public_forks**: restrict forking to private forks (forks cannot   be made public later) * **no_forks**: deny all forking 
 * @member {module:model/RepositoryAllOf.ForkPolicyEnum} fork_policy
 */
RepositoryAllOf.prototype['fork_policy'] = undefined;
/**
 * @member {module:model/Project} project
 */
RepositoryAllOf.prototype['project'] = undefined;
/**
 * @member {module:model/Branch} mainbranch
 */
RepositoryAllOf.prototype['mainbranch'] = undefined;



/**
 * Allowed values for the <code>scm</code> property.
 * @enum {String}
 * @readonly
 */
Repository['ScmEnum'] = {

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


/**
 * Allowed values for the <code>fork_policy</code> property.
 * @enum {String}
 * @readonly
 */
Repository['ForkPolicyEnum'] = {

    /**
     * value: "allow_forks"
     * @const
     */
    "allow_forks": "allow_forks",

    /**
     * value: "no_public_forks"
     * @const
     */
    "no_public_forks": "no_public_forks",

    /**
     * value: "no_forks"
     * @const
     */
    "no_forks": "no_forks"
};



export default Repository;

