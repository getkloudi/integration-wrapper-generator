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
import Branchrestriction from './Branchrestriction';

/**
 * The PaginatedBranchrestrictions model module.
 * @module model/PaginatedBranchrestrictions
 * @version 1.1.2
 */
class PaginatedBranchrestrictions {
    /**
     * Constructs a new <code>PaginatedBranchrestrictions</code>.
     * A paginated list of branch restriction rules.
     * @alias module:model/PaginatedBranchrestrictions
     */
    constructor() { 
        
        PaginatedBranchrestrictions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PaginatedBranchrestrictions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaginatedBranchrestrictions} obj Optional instance to populate.
     * @return {module:model/PaginatedBranchrestrictions} The populated <code>PaginatedBranchrestrictions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaginatedBranchrestrictions();

            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('page')) {
                obj['page'] = ApiClient.convertToType(data['page'], 'Number');
            }
            if (data.hasOwnProperty('pagelen')) {
                obj['pagelen'] = ApiClient.convertToType(data['pagelen'], 'Number');
            }
            if (data.hasOwnProperty('next')) {
                obj['next'] = ApiClient.convertToType(data['next'], 'String');
            }
            if (data.hasOwnProperty('previous')) {
                obj['previous'] = ApiClient.convertToType(data['previous'], 'String');
            }
            if (data.hasOwnProperty('values')) {
                obj['values'] = ApiClient.convertToType(data['values'], [Branchrestriction]);
            }
        }
        return obj;
    }


}

/**
 * Total number of objects in the response. This is an optional element that is not provided in all responses, as it can be expensive to compute.
 * @member {Number} size
 */
PaginatedBranchrestrictions.prototype['size'] = undefined;

/**
 * Page number of the current results. This is an optional element that is not provided in all responses.
 * @member {Number} page
 */
PaginatedBranchrestrictions.prototype['page'] = undefined;

/**
 * Current number of objects on the existing page. The default value is 10 with 100 being the maximum allowed value. Individual APIs may enforce different values.
 * @member {Number} pagelen
 */
PaginatedBranchrestrictions.prototype['pagelen'] = undefined;

/**
 * Link to the next page if it exists. The last page of a collection does not have this value. Use this link to navigate the result set and refrain from constructing your own URLs.
 * @member {String} next
 */
PaginatedBranchrestrictions.prototype['next'] = undefined;

/**
 * Link to previous page if it exists. A collections first page does not have this value. This is an optional element that is not provided in all responses. Some result sets strictly support forward navigation and never provide previous links. Clients must anticipate that backwards navigation is not always available. Use this link to navigate the result set and refrain from constructing your own URLs.
 * @member {String} previous
 */
PaginatedBranchrestrictions.prototype['previous'] = undefined;

/**
 * @member {Array.<module:model/Branchrestriction>} values
 */
PaginatedBranchrestrictions.prototype['values'] = undefined;






export default PaginatedBranchrestrictions;

