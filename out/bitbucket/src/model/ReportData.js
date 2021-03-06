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

/**
 * The ReportData model module.
 * @module model/ReportData
 * @version 1.2.0
 */
class ReportData {
    /**
     * Constructs a new <code>ReportData</code>.
     * A key-value element that will be displayed along with the report.
     * @alias module:model/ReportData
     */
    constructor() { 
        
        ReportData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReportData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReportData} obj Optional instance to populate.
     * @return {module:model/ReportData} The populated <code>ReportData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReportData();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], Object);
            }
        }
        return obj;
    }


}

/**
 * The type of data contained in the value field. If not provided, then the value will be detected as a boolean, number or string.
 * @member {module:model/ReportData.TypeEnum} type
 */
ReportData.prototype['type'] = undefined;

/**
 * A string describing what this data field represents.
 * @member {String} title
 */
ReportData.prototype['title'] = undefined;

/**
 * The value of the data element.
 * @member {Object} value
 */
ReportData.prototype['value'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
ReportData['TypeEnum'] = {

    /**
     * value: "BOOLEAN"
     * @const
     */
    "BOOLEAN": "BOOLEAN",

    /**
     * value: "DATE"
     * @const
     */
    "DATE": "DATE",

    /**
     * value: "DURATION"
     * @const
     */
    "DURATION": "DURATION",

    /**
     * value: "LINK"
     * @const
     */
    "LINK": "LINK",

    /**
     * value: "NUMBER"
     * @const
     */
    "NUMBER": "NUMBER",

    /**
     * value: "PERCENTAGE"
     * @const
     */
    "PERCENTAGE": "PERCENTAGE",

    /**
     * value: "TEXT"
     * @const
     */
    "TEXT": "TEXT"
};



export default ReportData;

