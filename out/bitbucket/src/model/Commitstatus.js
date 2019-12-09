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
import CommitstatusAllOf from './CommitstatusAllOf';
import CommitstatusAllOfLinks from './CommitstatusAllOfLinks';
import ModelObject from './ModelObject';

/**
 * The Commitstatus model module.
 * @module model/Commitstatus
 * @version 1.0.0
 */
class Commitstatus {
    /**
     * Constructs a new <code>Commitstatus</code>.
     * @alias module:model/Commitstatus
     * @extends module:model/ModelObject
     * @implements module:model/ModelObject
     * @implements module:model/CommitstatusAllOf
     * @param type {String} 
     */
    constructor(type) { 
        ModelObject.initialize(this, type);CommitstatusAllOf.initialize(this);
        Commitstatus.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
    }

    /**
     * Constructs a <code>Commitstatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Commitstatus} obj Optional instance to populate.
     * @return {module:model/Commitstatus} The populated <code>Commitstatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Commitstatus();
            ModelObject.constructFromObject(data, obj);
            ModelObject.constructFromObject(data, obj);
            CommitstatusAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('created_on')) {
                obj['created_on'] = ApiClient.convertToType(data['created_on'], 'Date');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('links')) {
                obj['links'] = CommitstatusAllOfLinks.constructFromObject(data['links']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('refname')) {
                obj['refname'] = ApiClient.convertToType(data['refname'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('updated_on')) {
                obj['updated_on'] = ApiClient.convertToType(data['updated_on'], 'Date');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Date} created_on
 */
Commitstatus.prototype['created_on'] = undefined;

/**
 * A description of the build (e.g. \"Unit tests in Bamboo\")
 * @member {String} description
 */
Commitstatus.prototype['description'] = undefined;

/**
 * An identifier for the status that's unique to         its type (current \"build\" is the only supported type) and the vendor,         e.g. BB-DEPLOY
 * @member {String} key
 */
Commitstatus.prototype['key'] = undefined;

/**
 * @member {module:model/CommitstatusAllOfLinks} links
 */
Commitstatus.prototype['links'] = undefined;

/**
 * An identifier for the build itself, e.g. BB-DEPLOY-1
 * @member {String} name
 */
Commitstatus.prototype['name'] = undefined;

/**
 *  The name of the ref that pointed to this commit at the time the status object was created. Note that this the ref may since have moved off of the commit. This optional field can be useful for build systems whose build triggers and configuration are branch-dependent (e.g. a Pipeline build). It is legitimate for this field to not be set, or even apply (e.g. a static linting job).
 * @member {String} refname
 */
Commitstatus.prototype['refname'] = undefined;

/**
 * Provides some indication of the status of this commit
 * @member {module:model/Commitstatus.StateEnum} state
 */
Commitstatus.prototype['state'] = undefined;

/**
 * @member {Date} updated_on
 */
Commitstatus.prototype['updated_on'] = undefined;

/**
 * A URL linking back to the vendor or build system, for providing more information about whatever process produced this status. Accepts context variables `repository` and `commit` that Bitbucket will evaluate at runtime whenever at runtime. For example, one could use https://foo.com/builds/{repository.full_name} which Bitbucket will turn into https://foo.com/builds/foo/bar at render time.
 * @member {String} url
 */
Commitstatus.prototype['url'] = undefined;

/**
 * The commit status' id.
 * @member {String} uuid
 */
Commitstatus.prototype['uuid'] = undefined;


// Implement ModelObject interface:
/**
 * @member {String} type
 */
ModelObject.prototype['type'] = undefined;
// Implement CommitstatusAllOf interface:
/**
 * @member {Date} created_on
 */
CommitstatusAllOf.prototype['created_on'] = undefined;
/**
 * A description of the build (e.g. \"Unit tests in Bamboo\")
 * @member {String} description
 */
CommitstatusAllOf.prototype['description'] = undefined;
/**
 * An identifier for the status that's unique to         its type (current \"build\" is the only supported type) and the vendor,         e.g. BB-DEPLOY
 * @member {String} key
 */
CommitstatusAllOf.prototype['key'] = undefined;
/**
 * @member {module:model/CommitstatusAllOfLinks} links
 */
CommitstatusAllOf.prototype['links'] = undefined;
/**
 * An identifier for the build itself, e.g. BB-DEPLOY-1
 * @member {String} name
 */
CommitstatusAllOf.prototype['name'] = undefined;
/**
 *  The name of the ref that pointed to this commit at the time the status object was created. Note that this the ref may since have moved off of the commit. This optional field can be useful for build systems whose build triggers and configuration are branch-dependent (e.g. a Pipeline build). It is legitimate for this field to not be set, or even apply (e.g. a static linting job).
 * @member {String} refname
 */
CommitstatusAllOf.prototype['refname'] = undefined;
/**
 * Provides some indication of the status of this commit
 * @member {module:model/CommitstatusAllOf.StateEnum} state
 */
CommitstatusAllOf.prototype['state'] = undefined;
/**
 * @member {Date} updated_on
 */
CommitstatusAllOf.prototype['updated_on'] = undefined;
/**
 * A URL linking back to the vendor or build system, for providing more information about whatever process produced this status. Accepts context variables `repository` and `commit` that Bitbucket will evaluate at runtime whenever at runtime. For example, one could use https://foo.com/builds/{repository.full_name} which Bitbucket will turn into https://foo.com/builds/foo/bar at render time.
 * @member {String} url
 */
CommitstatusAllOf.prototype['url'] = undefined;
/**
 * The commit status' id.
 * @member {String} uuid
 */
CommitstatusAllOf.prototype['uuid'] = undefined;



/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */
Commitstatus['StateEnum'] = {

    /**
     * value: "SUCCESSFUL"
     * @const
     */
    "SUCCESSFUL": "SUCCESSFUL",

    /**
     * value: "FAILED"
     * @const
     */
    "FAILED": "FAILED",

    /**
     * value: "INPROGRESS"
     * @const
     */
    "INPROGRESS": "INPROGRESS",

    /**
     * value: "STOPPED"
     * @const
     */
    "STOPPED": "STOPPED"
};



export default Commitstatus;

