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
import Snippet from './Snippet';
import SnippetCommitAllOfLinks from './SnippetCommitAllOfLinks';

/**
 * The SnippetCommitAllOf model module.
 * @module model/SnippetCommitAllOf
 * @version 1.2.0
 */
class SnippetCommitAllOf {
    /**
     * Constructs a new <code>SnippetCommitAllOf</code>.
     * 
     * @alias module:model/SnippetCommitAllOf
     */
    constructor() { 
        
        SnippetCommitAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SnippetCommitAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SnippetCommitAllOf} obj Optional instance to populate.
     * @return {module:model/SnippetCommitAllOf} The populated <code>SnippetCommitAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SnippetCommitAllOf();

            if (data.hasOwnProperty('links')) {
                obj['links'] = SnippetCommitAllOfLinks.constructFromObject(data['links']);
            }
            if (data.hasOwnProperty('snippet')) {
                obj['snippet'] = Snippet.constructFromObject(data['snippet']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/SnippetCommitAllOfLinks} links
 */
SnippetCommitAllOf.prototype['links'] = undefined;

/**
 * @member {module:model/Snippet} snippet
 */
SnippetCommitAllOf.prototype['snippet'] = undefined;






export default SnippetCommitAllOf;

