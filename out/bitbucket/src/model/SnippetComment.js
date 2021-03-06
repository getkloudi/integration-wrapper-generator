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
import GroupAllOfLinks from './GroupAllOfLinks';
import ModelObject from './ModelObject';
import Snippet from './Snippet';
import SnippetCommentAllOf from './SnippetCommentAllOf';

/**
 * The SnippetComment model module.
 * @module model/SnippetComment
 * @version 1.2.0
 */
class SnippetComment {
    /**
     * Constructs a new <code>SnippetComment</code>.
     * @alias module:model/SnippetComment
     * @extends module:model/ModelObject
     * @implements module:model/ModelObject
     * @implements module:model/SnippetCommentAllOf
     * @param type {String} 
     */
    constructor(type) { 
        ModelObject.initialize(this, type);SnippetCommentAllOf.initialize(this);
        SnippetComment.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
    }

    /**
     * Constructs a <code>SnippetComment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SnippetComment} obj Optional instance to populate.
     * @return {module:model/SnippetComment} The populated <code>SnippetComment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SnippetComment();
            ModelObject.constructFromObject(data, obj);
            ModelObject.constructFromObject(data, obj);
            SnippetCommentAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('links')) {
                obj['links'] = GroupAllOfLinks.constructFromObject(data['links']);
            }
            if (data.hasOwnProperty('snippet')) {
                obj['snippet'] = Snippet.constructFromObject(data['snippet']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/GroupAllOfLinks} links
 */
SnippetComment.prototype['links'] = undefined;

/**
 * @member {module:model/Snippet} snippet
 */
SnippetComment.prototype['snippet'] = undefined;


// Implement ModelObject interface:
/**
 * @member {String} type
 */
ModelObject.prototype['type'] = undefined;
// Implement SnippetCommentAllOf interface:
/**
 * @member {module:model/GroupAllOfLinks} links
 */
SnippetCommentAllOf.prototype['links'] = undefined;
/**
 * @member {module:model/Snippet} snippet
 */
SnippetCommentAllOf.prototype['snippet'] = undefined;




export default SnippetComment;

