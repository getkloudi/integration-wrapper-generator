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
import Snippet from './Snippet';

/**
 * The SnippetCommentAllOf model module.
 * @module model/SnippetCommentAllOf
 * @version 1.2.0
 */
class SnippetCommentAllOf {
    /**
     * Constructs a new <code>SnippetCommentAllOf</code>.
     * A comment on a snippet.
     * @alias module:model/SnippetCommentAllOf
     */
    constructor() { 
        
        SnippetCommentAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SnippetCommentAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SnippetCommentAllOf} obj Optional instance to populate.
     * @return {module:model/SnippetCommentAllOf} The populated <code>SnippetCommentAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SnippetCommentAllOf();

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
SnippetCommentAllOf.prototype['links'] = undefined;

/**
 * @member {module:model/Snippet} snippet
 */
SnippetCommentAllOf.prototype['snippet'] = undefined;






export default SnippetCommentAllOf;

