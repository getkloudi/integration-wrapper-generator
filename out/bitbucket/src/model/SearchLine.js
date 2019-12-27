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
import SearchSegment from './SearchSegment';

/**
 * The SearchLine model module.
 * @module model/SearchLine
 * @version 1.1.2
 */
class SearchLine {
    /**
     * Constructs a new <code>SearchLine</code>.
     * @alias module:model/SearchLine
     */
    constructor() { 
        
        SearchLine.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SearchLine</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SearchLine} obj Optional instance to populate.
     * @return {module:model/SearchLine} The populated <code>SearchLine</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SearchLine();

            if (data.hasOwnProperty('line')) {
                obj['line'] = ApiClient.convertToType(data['line'], 'Number');
            }
            if (data.hasOwnProperty('segments')) {
                obj['segments'] = ApiClient.convertToType(data['segments'], [SearchSegment]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} line
 */
SearchLine.prototype['line'] = undefined;

/**
 * @member {Array.<module:model/SearchSegment>} segments
 */
SearchLine.prototype['segments'] = undefined;






export default SearchLine;

