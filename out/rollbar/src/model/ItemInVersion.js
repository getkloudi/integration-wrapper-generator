/**
 * Rollbar API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Item from './Item';
import ItemInVersionAllOf from './ItemInVersionAllOf';
import Level from './Level';
import Status2 from './Status2';

/**
 * The ItemInVersion model module.
 * @module model/ItemInVersion
 * @version 1.1.0
 */
class ItemInVersion {
    /**
     * Constructs a new <code>ItemInVersion</code>.
     * @alias module:model/ItemInVersion
     * @implements module:model/Item
     * @implements module:model/ItemInVersionAllOf
     */
    constructor() { 
        Item.initialize(this);ItemInVersionAllOf.initialize(this);
        ItemInVersion.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ItemInVersion</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ItemInVersion} obj Optional instance to populate.
     * @return {module:model/ItemInVersion} The populated <code>ItemInVersion</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemInVersion();
            Item.constructFromObject(data, obj);
            ItemInVersionAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('project_id')) {
                obj['project_id'] = ApiClient.convertToType(data['project_id'], 'Number');
            }
            if (data.hasOwnProperty('counter')) {
                obj['counter'] = ApiClient.convertToType(data['counter'], 'Number');
            }
            if (data.hasOwnProperty('environment')) {
                obj['environment'] = ApiClient.convertToType(data['environment'], 'String');
            }
            if (data.hasOwnProperty('platform')) {
                obj['platform'] = ApiClient.convertToType(data['platform'], 'String');
            }
            if (data.hasOwnProperty('framework')) {
                obj['framework'] = ApiClient.convertToType(data['framework'], 'String');
            }
            if (data.hasOwnProperty('hash')) {
                obj['hash'] = ApiClient.convertToType(data['hash'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('first_occurrence_id')) {
                obj['first_occurrence_id'] = ApiClient.convertToType(data['first_occurrence_id'], 'Number');
            }
            if (data.hasOwnProperty('first_occurrence_timestamp')) {
                obj['first_occurrence_timestamp'] = ApiClient.convertToType(data['first_occurrence_timestamp'], 'Number');
            }
            if (data.hasOwnProperty('activating_occurrence_id')) {
                obj['activating_occurrence_id'] = ApiClient.convertToType(data['activating_occurrence_id'], 'Number');
            }
            if (data.hasOwnProperty('last_activated_timestamp')) {
                obj['last_activated_timestamp'] = ApiClient.convertToType(data['last_activated_timestamp'], 'Number');
            }
            if (data.hasOwnProperty('last_resolved_timestamp')) {
                obj['last_resolved_timestamp'] = ApiClient.convertToType(data['last_resolved_timestamp'], 'Number');
            }
            if (data.hasOwnProperty('last_muted_timestamp')) {
                obj['last_muted_timestamp'] = ApiClient.convertToType(data['last_muted_timestamp'], 'Number');
            }
            if (data.hasOwnProperty('last_occurrence_id')) {
                obj['last_occurrence_id'] = ApiClient.convertToType(data['last_occurrence_id'], 'Number');
            }
            if (data.hasOwnProperty('last_occurrence_timestamp')) {
                obj['last_occurrence_timestamp'] = ApiClient.convertToType(data['last_occurrence_timestamp'], 'Number');
            }
            if (data.hasOwnProperty('total_occurrences')) {
                obj['total_occurrences'] = ApiClient.convertToType(data['total_occurrences'], 'Number');
            }
            if (data.hasOwnProperty('last_modified_by')) {
                obj['last_modified_by'] = ApiClient.convertToType(data['last_modified_by'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = Status2.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('level')) {
                obj['level'] = Level.constructFromObject(data['level']);
            }
            if (data.hasOwnProperty('integrations_data')) {
                obj['integrations_data'] = ApiClient.convertToType(data['integrations_data'], Object);
            }
            if (data.hasOwnProperty('assigned_user_id')) {
                obj['assigned_user_id'] = ApiClient.convertToType(data['assigned_user_id'], 'Number');
            }
            if (data.hasOwnProperty('group_item_id')) {
                obj['group_item_id'] = ApiClient.convertToType(data['group_item_id'], 'Number');
            }
            if (data.hasOwnProperty('group_status')) {
                obj['group_status'] = ApiClient.convertToType(data['group_status'], 'Number');
            }
            if (data.hasOwnProperty('first_in_version_occurrence_id')) {
                obj['first_in_version_occurrence_id'] = ApiClient.convertToType(data['first_in_version_occurrence_id'], 'Number');
            }
            if (data.hasOwnProperty('first_in_version_occurrence_timestamp')) {
                obj['first_in_version_occurrence_timestamp'] = ApiClient.convertToType(data['first_in_version_occurrence_timestamp'], 'Number');
            }
            if (data.hasOwnProperty('last_in_version_occurrence_id')) {
                obj['last_in_version_occurrence_id'] = ApiClient.convertToType(data['last_in_version_occurrence_id'], 'Number');
            }
            if (data.hasOwnProperty('last_in_version_occurrence_timestamp')) {
                obj['last_in_version_occurrence_timestamp'] = ApiClient.convertToType(data['last_in_version_occurrence_timestamp'], 'Number');
            }
            if (data.hasOwnProperty('occurrences_in_version')) {
                obj['occurrences_in_version'] = ApiClient.convertToType(data['occurrences_in_version'], 'Number');
            }
            if (data.hasOwnProperty('people_in_version')) {
                obj['people_in_version'] = ApiClient.convertToType(data['people_in_version'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The item ID
 * @member {Number} id
 */
ItemInVersion.prototype['id'] = undefined;

/**
 * The item's project ID
 * @member {Number} project_id
 */
ItemInVersion.prototype['project_id'] = undefined;

/**
 * The item identifier withing the project
 * @member {Number} counter
 */
ItemInVersion.prototype['counter'] = undefined;

/**
 * @member {String} environment
 */
ItemInVersion.prototype['environment'] = undefined;

/**
 * @member {String} platform
 */
ItemInVersion.prototype['platform'] = undefined;

/**
 * @member {String} framework
 */
ItemInVersion.prototype['framework'] = undefined;

/**
 * Fingerprint that identifies the item
 * @member {String} hash
 */
ItemInVersion.prototype['hash'] = undefined;

/**
 * @member {String} title
 */
ItemInVersion.prototype['title'] = undefined;

/**
 * First occurrence ID of the item in the version
 * @member {Number} first_occurrence_id
 */
ItemInVersion.prototype['first_occurrence_id'] = undefined;

/**
 * First occurrence timestamp of the item
 * @member {Number} first_occurrence_timestamp
 */
ItemInVersion.prototype['first_occurrence_timestamp'] = undefined;

/**
 * Occurrence ID that activated the item
 * @member {Number} activating_occurrence_id
 */
ItemInVersion.prototype['activating_occurrence_id'] = undefined;

/**
 * Last activation timestamp
 * @member {Number} last_activated_timestamp
 */
ItemInVersion.prototype['last_activated_timestamp'] = undefined;

/**
 * Last timestamp the item was resolved
 * @member {Number} last_resolved_timestamp
 */
ItemInVersion.prototype['last_resolved_timestamp'] = undefined;

/**
 * Last timestamp the item was muted
 * @member {Number} last_muted_timestamp
 */
ItemInVersion.prototype['last_muted_timestamp'] = undefined;

/**
 * Last received occurrence ID of the item
 * @member {Number} last_occurrence_id
 */
ItemInVersion.prototype['last_occurrence_id'] = undefined;

/**
 * Last received occurrence timestamp
 * @member {Number} last_occurrence_timestamp
 */
ItemInVersion.prototype['last_occurrence_timestamp'] = undefined;

/**
 * Total number of occurrences on the item
 * @member {Number} total_occurrences
 */
ItemInVersion.prototype['total_occurrences'] = undefined;

/**
 * Last user ID that modified the item
 * @member {String} last_modified_by
 */
ItemInVersion.prototype['last_modified_by'] = undefined;

/**
 * @member {module:model/Status2} status
 */
ItemInVersion.prototype['status'] = undefined;

/**
 * @member {module:model/Level} level
 */
ItemInVersion.prototype['level'] = undefined;

/**
 * @member {Object} integrations_data
 */
ItemInVersion.prototype['integrations_data'] = undefined;

/**
 * User ID the item is assigned to
 * @member {Number} assigned_user_id
 */
ItemInVersion.prototype['assigned_user_id'] = undefined;

/**
 * Group item this item belongs to
 * @member {Number} group_item_id
 */
ItemInVersion.prototype['group_item_id'] = undefined;

/**
 * @member {Number} group_status
 */
ItemInVersion.prototype['group_status'] = undefined;

/**
 * First occurrence ID of the item on the version
 * @member {Number} first_in_version_occurrence_id
 */
ItemInVersion.prototype['first_in_version_occurrence_id'] = undefined;

/**
 * First occurrence timestamp of the item on the version
 * @member {Number} first_in_version_occurrence_timestamp
 */
ItemInVersion.prototype['first_in_version_occurrence_timestamp'] = undefined;

/**
 * Last received occurrence ID of the item on the version
 * @member {Number} last_in_version_occurrence_id
 */
ItemInVersion.prototype['last_in_version_occurrence_id'] = undefined;

/**
 * Last received occurrence timestamp on the version
 * @member {Number} last_in_version_occurrence_timestamp
 */
ItemInVersion.prototype['last_in_version_occurrence_timestamp'] = undefined;

/**
 * Total number of item occurrences on this version
 * @member {Number} occurrences_in_version
 */
ItemInVersion.prototype['occurrences_in_version'] = undefined;

/**
 * Number of affected people by this item on this version
 * @member {Number} people_in_version
 */
ItemInVersion.prototype['people_in_version'] = undefined;


// Implement Item interface:
/**
 * The item ID
 * @member {Number} id
 */
Item.prototype['id'] = undefined;
/**
 * The item's project ID
 * @member {Number} project_id
 */
Item.prototype['project_id'] = undefined;
/**
 * The item identifier withing the project
 * @member {Number} counter
 */
Item.prototype['counter'] = undefined;
/**
 * @member {String} environment
 */
Item.prototype['environment'] = undefined;
/**
 * @member {String} platform
 */
Item.prototype['platform'] = undefined;
/**
 * @member {String} framework
 */
Item.prototype['framework'] = undefined;
/**
 * Fingerprint that identifies the item
 * @member {String} hash
 */
Item.prototype['hash'] = undefined;
/**
 * @member {String} title
 */
Item.prototype['title'] = undefined;
/**
 * First occurrence ID of the item in the version
 * @member {Number} first_occurrence_id
 */
Item.prototype['first_occurrence_id'] = undefined;
/**
 * First occurrence timestamp of the item
 * @member {Number} first_occurrence_timestamp
 */
Item.prototype['first_occurrence_timestamp'] = undefined;
/**
 * Occurrence ID that activated the item
 * @member {Number} activating_occurrence_id
 */
Item.prototype['activating_occurrence_id'] = undefined;
/**
 * Last activation timestamp
 * @member {Number} last_activated_timestamp
 */
Item.prototype['last_activated_timestamp'] = undefined;
/**
 * Last timestamp the item was resolved
 * @member {Number} last_resolved_timestamp
 */
Item.prototype['last_resolved_timestamp'] = undefined;
/**
 * Last timestamp the item was muted
 * @member {Number} last_muted_timestamp
 */
Item.prototype['last_muted_timestamp'] = undefined;
/**
 * Last received occurrence ID of the item
 * @member {Number} last_occurrence_id
 */
Item.prototype['last_occurrence_id'] = undefined;
/**
 * Last received occurrence timestamp
 * @member {Number} last_occurrence_timestamp
 */
Item.prototype['last_occurrence_timestamp'] = undefined;
/**
 * Total number of occurrences on the item
 * @member {Number} total_occurrences
 */
Item.prototype['total_occurrences'] = undefined;
/**
 * Last user ID that modified the item
 * @member {String} last_modified_by
 */
Item.prototype['last_modified_by'] = undefined;
/**
 * @member {module:model/Status2} status
 */
Item.prototype['status'] = undefined;
/**
 * @member {module:model/Level} level
 */
Item.prototype['level'] = undefined;
/**
 * @member {Object} integrations_data
 */
Item.prototype['integrations_data'] = undefined;
/**
 * User ID the item is assigned to
 * @member {Number} assigned_user_id
 */
Item.prototype['assigned_user_id'] = undefined;
/**
 * Group item this item belongs to
 * @member {Number} group_item_id
 */
Item.prototype['group_item_id'] = undefined;
/**
 * @member {Number} group_status
 */
Item.prototype['group_status'] = undefined;
// Implement ItemInVersionAllOf interface:
/**
 * First occurrence ID of the item on the version
 * @member {Number} first_in_version_occurrence_id
 */
ItemInVersionAllOf.prototype['first_in_version_occurrence_id'] = undefined;
/**
 * First occurrence timestamp of the item on the version
 * @member {Number} first_in_version_occurrence_timestamp
 */
ItemInVersionAllOf.prototype['first_in_version_occurrence_timestamp'] = undefined;
/**
 * Last received occurrence ID of the item on the version
 * @member {Number} last_in_version_occurrence_id
 */
ItemInVersionAllOf.prototype['last_in_version_occurrence_id'] = undefined;
/**
 * Last received occurrence timestamp on the version
 * @member {Number} last_in_version_occurrence_timestamp
 */
ItemInVersionAllOf.prototype['last_in_version_occurrence_timestamp'] = undefined;
/**
 * Total number of item occurrences on this version
 * @member {Number} occurrences_in_version
 */
ItemInVersionAllOf.prototype['occurrences_in_version'] = undefined;
/**
 * Number of affected people by this item on this version
 * @member {Number} people_in_version
 */
ItemInVersionAllOf.prototype['people_in_version'] = undefined;




export default ItemInVersion;

