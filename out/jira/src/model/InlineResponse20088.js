/**
 * Jira
 * The Jira Cloud Platform REST API
 *
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The InlineResponse20088 model module.
 * @module model/InlineResponse20088
 * @version 1.1.0
 */
class InlineResponse20088 {
    /**
     * Constructs a new <code>InlineResponse20088</code>.
     * 
     * @alias module:model/InlineResponse20088
     * @param baseUrl {String} 
     * @param buildDate {String} 
     * @param buildNumber {Number} 
     * @param scmInfo {String} 
     * @param serverTime {String} 
     * @param serverTitle {String} 
     * @param version {String} 
     * @param versionNumbers {Array.<Object>} 
     */
    constructor(baseUrl, buildDate, buildNumber, scmInfo, serverTime, serverTitle, version, versionNumbers) { 
        
        InlineResponse20088.initialize(this, baseUrl, buildDate, buildNumber, scmInfo, serverTime, serverTitle, version, versionNumbers);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, baseUrl, buildDate, buildNumber, scmInfo, serverTime, serverTitle, version, versionNumbers) { 
        obj['baseUrl'] = baseUrl;
        obj['buildDate'] = buildDate;
        obj['buildNumber'] = buildNumber;
        obj['scmInfo'] = scmInfo;
        obj['serverTime'] = serverTime;
        obj['serverTitle'] = serverTitle;
        obj['version'] = version;
        obj['versionNumbers'] = versionNumbers;
    }

    /**
     * Constructs a <code>InlineResponse20088</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20088} obj Optional instance to populate.
     * @return {module:model/InlineResponse20088} The populated <code>InlineResponse20088</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20088();

            if (data.hasOwnProperty('baseUrl')) {
                obj['baseUrl'] = ApiClient.convertToType(data['baseUrl'], 'String');
            }
            if (data.hasOwnProperty('buildDate')) {
                obj['buildDate'] = ApiClient.convertToType(data['buildDate'], 'String');
            }
            if (data.hasOwnProperty('buildNumber')) {
                obj['buildNumber'] = ApiClient.convertToType(data['buildNumber'], 'Number');
            }
            if (data.hasOwnProperty('scmInfo')) {
                obj['scmInfo'] = ApiClient.convertToType(data['scmInfo'], 'String');
            }
            if (data.hasOwnProperty('serverTime')) {
                obj['serverTime'] = ApiClient.convertToType(data['serverTime'], 'String');
            }
            if (data.hasOwnProperty('serverTitle')) {
                obj['serverTitle'] = ApiClient.convertToType(data['serverTitle'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
            if (data.hasOwnProperty('versionNumbers')) {
                obj['versionNumbers'] = ApiClient.convertToType(data['versionNumbers'], [Object]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} baseUrl
 */
InlineResponse20088.prototype['baseUrl'] = undefined;

/**
 * @member {String} buildDate
 */
InlineResponse20088.prototype['buildDate'] = undefined;

/**
 * @member {Number} buildNumber
 */
InlineResponse20088.prototype['buildNumber'] = undefined;

/**
 * @member {String} scmInfo
 */
InlineResponse20088.prototype['scmInfo'] = undefined;

/**
 * @member {String} serverTime
 */
InlineResponse20088.prototype['serverTime'] = undefined;

/**
 * @member {String} serverTitle
 */
InlineResponse20088.prototype['serverTitle'] = undefined;

/**
 * @member {String} version
 */
InlineResponse20088.prototype['version'] = undefined;

/**
 * @member {Array.<Object>} versionNumbers
 */
InlineResponse20088.prototype['versionNumbers'] = undefined;






export default InlineResponse20088;

