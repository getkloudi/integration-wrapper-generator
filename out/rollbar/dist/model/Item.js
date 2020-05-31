"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Level = _interopRequireDefault(require("./Level"));

var _Status = _interopRequireDefault(require("./Status2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Item model module.
 * @module model/Item
 * @version 1.1.0
 */
var Item = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Item</code>.
   * @alias module:model/Item
   */
  function Item() {
    _classCallCheck(this, Item);

    Item.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Item, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Item</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Item} obj Optional instance to populate.
     * @return {module:model/Item} The populated <code>Item</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Item();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('project_id')) {
          obj['project_id'] = _ApiClient["default"].convertToType(data['project_id'], 'Number');
        }

        if (data.hasOwnProperty('counter')) {
          obj['counter'] = _ApiClient["default"].convertToType(data['counter'], 'Number');
        }

        if (data.hasOwnProperty('environment')) {
          obj['environment'] = _ApiClient["default"].convertToType(data['environment'], 'String');
        }

        if (data.hasOwnProperty('platform')) {
          obj['platform'] = _ApiClient["default"].convertToType(data['platform'], 'String');
        }

        if (data.hasOwnProperty('framework')) {
          obj['framework'] = _ApiClient["default"].convertToType(data['framework'], 'String');
        }

        if (data.hasOwnProperty('hash')) {
          obj['hash'] = _ApiClient["default"].convertToType(data['hash'], 'String');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('first_occurrence_id')) {
          obj['first_occurrence_id'] = _ApiClient["default"].convertToType(data['first_occurrence_id'], 'Number');
        }

        if (data.hasOwnProperty('first_occurrence_timestamp')) {
          obj['first_occurrence_timestamp'] = _ApiClient["default"].convertToType(data['first_occurrence_timestamp'], 'Number');
        }

        if (data.hasOwnProperty('activating_occurrence_id')) {
          obj['activating_occurrence_id'] = _ApiClient["default"].convertToType(data['activating_occurrence_id'], 'Number');
        }

        if (data.hasOwnProperty('last_activated_timestamp')) {
          obj['last_activated_timestamp'] = _ApiClient["default"].convertToType(data['last_activated_timestamp'], 'Number');
        }

        if (data.hasOwnProperty('last_resolved_timestamp')) {
          obj['last_resolved_timestamp'] = _ApiClient["default"].convertToType(data['last_resolved_timestamp'], 'Number');
        }

        if (data.hasOwnProperty('last_muted_timestamp')) {
          obj['last_muted_timestamp'] = _ApiClient["default"].convertToType(data['last_muted_timestamp'], 'Number');
        }

        if (data.hasOwnProperty('last_occurrence_id')) {
          obj['last_occurrence_id'] = _ApiClient["default"].convertToType(data['last_occurrence_id'], 'Number');
        }

        if (data.hasOwnProperty('last_occurrence_timestamp')) {
          obj['last_occurrence_timestamp'] = _ApiClient["default"].convertToType(data['last_occurrence_timestamp'], 'Number');
        }

        if (data.hasOwnProperty('total_occurrences')) {
          obj['total_occurrences'] = _ApiClient["default"].convertToType(data['total_occurrences'], 'Number');
        }

        if (data.hasOwnProperty('last_modified_by')) {
          obj['last_modified_by'] = _ApiClient["default"].convertToType(data['last_modified_by'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _Status["default"].constructFromObject(data['status']);
        }

        if (data.hasOwnProperty('level')) {
          obj['level'] = _Level["default"].constructFromObject(data['level']);
        }

        if (data.hasOwnProperty('integrations_data')) {
          obj['integrations_data'] = _ApiClient["default"].convertToType(data['integrations_data'], Object);
        }

        if (data.hasOwnProperty('assigned_user_id')) {
          obj['assigned_user_id'] = _ApiClient["default"].convertToType(data['assigned_user_id'], 'Number');
        }

        if (data.hasOwnProperty('group_item_id')) {
          obj['group_item_id'] = _ApiClient["default"].convertToType(data['group_item_id'], 'Number');
        }

        if (data.hasOwnProperty('group_status')) {
          obj['group_status'] = _ApiClient["default"].convertToType(data['group_status'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return Item;
}();
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
var _default = Item;
exports["default"] = _default;