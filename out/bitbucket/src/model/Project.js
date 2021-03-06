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
import ModelObject from './ModelObject';
import ProjectAllOf from './ProjectAllOf';
import ProjectAllOfLinks from './ProjectAllOfLinks';
import Team from './Team';

/**
 * The Project model module.
 * @module model/Project
 * @version 1.2.0
 */
class Project {
    /**
     * Constructs a new <code>Project</code>.
     * @alias module:model/Project
     * @extends module:model/ModelObject
     * @implements module:model/ModelObject
     * @implements module:model/ProjectAllOf
     * @param type {String} 
     */
    constructor(type) { 
        ModelObject.initialize(this, type);ProjectAllOf.initialize(this);
        Project.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
    }

    /**
     * Constructs a <code>Project</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Project} obj Optional instance to populate.
     * @return {module:model/Project} The populated <code>Project</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Project();
            ModelObject.constructFromObject(data, obj);
            ModelObject.constructFromObject(data, obj);
            ProjectAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('links')) {
                obj['links'] = ProjectAllOfLinks.constructFromObject(data['links']);
            }
            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('owner')) {
                obj['owner'] = Team.constructFromObject(data['owner']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('is_private')) {
                obj['is_private'] = ApiClient.convertToType(data['is_private'], 'Boolean');
            }
            if (data.hasOwnProperty('created_on')) {
                obj['created_on'] = ApiClient.convertToType(data['created_on'], 'Date');
            }
            if (data.hasOwnProperty('updated_on')) {
                obj['updated_on'] = ApiClient.convertToType(data['updated_on'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ProjectAllOfLinks} links
 */
Project.prototype['links'] = undefined;

/**
 * The project's immutable id.
 * @member {String} uuid
 */
Project.prototype['uuid'] = undefined;

/**
 * The project's key.
 * @member {String} key
 */
Project.prototype['key'] = undefined;

/**
 * @member {module:model/Team} owner
 */
Project.prototype['owner'] = undefined;

/**
 * The name of the project.
 * @member {String} name
 */
Project.prototype['name'] = undefined;

/**
 * @member {String} description
 */
Project.prototype['description'] = undefined;

/**
 *  Indicates whether the project is publicly accessible, or whether it is private to the team and consequently only visible to team members. Note that private projects cannot contain public repositories.
 * @member {Boolean} is_private
 */
Project.prototype['is_private'] = undefined;

/**
 * @member {Date} created_on
 */
Project.prototype['created_on'] = undefined;

/**
 * @member {Date} updated_on
 */
Project.prototype['updated_on'] = undefined;


// Implement ModelObject interface:
/**
 * @member {String} type
 */
ModelObject.prototype['type'] = undefined;
// Implement ProjectAllOf interface:
/**
 * @member {module:model/ProjectAllOfLinks} links
 */
ProjectAllOf.prototype['links'] = undefined;
/**
 * The project's immutable id.
 * @member {String} uuid
 */
ProjectAllOf.prototype['uuid'] = undefined;
/**
 * The project's key.
 * @member {String} key
 */
ProjectAllOf.prototype['key'] = undefined;
/**
 * @member {module:model/Team} owner
 */
ProjectAllOf.prototype['owner'] = undefined;
/**
 * The name of the project.
 * @member {String} name
 */
ProjectAllOf.prototype['name'] = undefined;
/**
 * @member {String} description
 */
ProjectAllOf.prototype['description'] = undefined;
/**
 *  Indicates whether the project is publicly accessible, or whether it is private to the team and consequently only visible to team members. Note that private projects cannot contain public repositories.
 * @member {Boolean} is_private
 */
ProjectAllOf.prototype['is_private'] = undefined;
/**
 * @member {Date} created_on
 */
ProjectAllOf.prototype['created_on'] = undefined;
/**
 * @member {Date} updated_on
 */
ProjectAllOf.prototype['updated_on'] = undefined;




export default Project;

