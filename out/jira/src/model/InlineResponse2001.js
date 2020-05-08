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
 * The InlineResponse2001 model module.
 * @module model/InlineResponse2001
 * @version 1.2.0
 */
class InlineResponse2001 {
    /**
     * Constructs a new <code>InlineResponse2001</code>.
     * @alias module:model/InlineResponse2001
     * @param defaultGroups {Array.<Object>} 
     * @param defined {Boolean} 
     * @param groups {Array.<Object>} 
     * @param hasUnlimitedSeats {Boolean} 
     * @param key {String} 
     * @param name {String} 
     * @param numberOfSeats {Number} 
     * @param platform {Boolean} 
     * @param remainingSeats {Number} 
     * @param selectedByDefault {Boolean} 
     * @param userCount {Number} 
     * @param userCountDescription {String} 
     */
    constructor(defaultGroups, defined, groups, hasUnlimitedSeats, key, name, numberOfSeats, platform, remainingSeats, selectedByDefault, userCount, userCountDescription) { 
        
        InlineResponse2001.initialize(this, defaultGroups, defined, groups, hasUnlimitedSeats, key, name, numberOfSeats, platform, remainingSeats, selectedByDefault, userCount, userCountDescription);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, defaultGroups, defined, groups, hasUnlimitedSeats, key, name, numberOfSeats, platform, remainingSeats, selectedByDefault, userCount, userCountDescription) { 
        obj['defaultGroups'] = defaultGroups;
        obj['defined'] = defined;
        obj['groups'] = groups;
        obj['hasUnlimitedSeats'] = hasUnlimitedSeats;
        obj['key'] = key;
        obj['name'] = name;
        obj['numberOfSeats'] = numberOfSeats;
        obj['platform'] = platform;
        obj['remainingSeats'] = remainingSeats;
        obj['selectedByDefault'] = selectedByDefault;
        obj['userCount'] = userCount;
        obj['userCountDescription'] = userCountDescription;
    }

    /**
     * Constructs a <code>InlineResponse2001</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2001} obj Optional instance to populate.
     * @return {module:model/InlineResponse2001} The populated <code>InlineResponse2001</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2001();

            if (data.hasOwnProperty('defaultGroups')) {
                obj['defaultGroups'] = ApiClient.convertToType(data['defaultGroups'], [Object]);
            }
            if (data.hasOwnProperty('defined')) {
                obj['defined'] = ApiClient.convertToType(data['defined'], 'Boolean');
            }
            if (data.hasOwnProperty('groups')) {
                obj['groups'] = ApiClient.convertToType(data['groups'], [Object]);
            }
            if (data.hasOwnProperty('hasUnlimitedSeats')) {
                obj['hasUnlimitedSeats'] = ApiClient.convertToType(data['hasUnlimitedSeats'], 'Boolean');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('numberOfSeats')) {
                obj['numberOfSeats'] = ApiClient.convertToType(data['numberOfSeats'], 'Number');
            }
            if (data.hasOwnProperty('platform')) {
                obj['platform'] = ApiClient.convertToType(data['platform'], 'Boolean');
            }
            if (data.hasOwnProperty('remainingSeats')) {
                obj['remainingSeats'] = ApiClient.convertToType(data['remainingSeats'], 'Number');
            }
            if (data.hasOwnProperty('selectedByDefault')) {
                obj['selectedByDefault'] = ApiClient.convertToType(data['selectedByDefault'], 'Boolean');
            }
            if (data.hasOwnProperty('userCount')) {
                obj['userCount'] = ApiClient.convertToType(data['userCount'], 'Number');
            }
            if (data.hasOwnProperty('userCountDescription')) {
                obj['userCountDescription'] = ApiClient.convertToType(data['userCountDescription'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<Object>} defaultGroups
 */
InlineResponse2001.prototype['defaultGroups'] = undefined;

/**
 * @member {Boolean} defined
 */
InlineResponse2001.prototype['defined'] = undefined;

/**
 * @member {Array.<Object>} groups
 */
InlineResponse2001.prototype['groups'] = undefined;

/**
 * @member {Boolean} hasUnlimitedSeats
 */
InlineResponse2001.prototype['hasUnlimitedSeats'] = undefined;

/**
 * @member {String} key
 */
InlineResponse2001.prototype['key'] = undefined;

/**
 * @member {String} name
 */
InlineResponse2001.prototype['name'] = undefined;

/**
 * @member {Number} numberOfSeats
 */
InlineResponse2001.prototype['numberOfSeats'] = undefined;

/**
 * @member {Boolean} platform
 */
InlineResponse2001.prototype['platform'] = undefined;

/**
 * @member {Number} remainingSeats
 */
InlineResponse2001.prototype['remainingSeats'] = undefined;

/**
 * @member {Boolean} selectedByDefault
 */
InlineResponse2001.prototype['selectedByDefault'] = undefined;

/**
 * @member {Number} userCount
 */
InlineResponse2001.prototype['userCount'] = undefined;

/**
 * @member {String} userCountDescription
 */
InlineResponse2001.prototype['userCountDescription'] = undefined;






export default InlineResponse2001;

