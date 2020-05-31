"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The OccurrenceInstance model module.
 * @module model/OccurrenceInstance
 * @version 1.1.0
 */
var OccurrenceInstance = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OccurrenceInstance</code>.
   * @alias module:model/OccurrenceInstance
   */
  function OccurrenceInstance() {
    _classCallCheck(this, OccurrenceInstance);

    OccurrenceInstance.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(OccurrenceInstance, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>OccurrenceInstance</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OccurrenceInstance} obj Optional instance to populate.
     * @return {module:model/OccurrenceInstance} The populated <code>OccurrenceInstance</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OccurrenceInstance();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('project_id')) {
          obj['project_id'] = _ApiClient["default"].convertToType(data['project_id'], 'Number');
        }

        if (data.hasOwnProperty('item_id')) {
          obj['item_id'] = _ApiClient["default"].convertToType(data['item_id'], 'Number');
        }

        if (data.hasOwnProperty('timestamp')) {
          obj['timestamp'] = _ApiClient["default"].convertToType(data['timestamp'], 'Number');
        }

        if (data.hasOwnProperty('version')) {
          obj['version'] = _ApiClient["default"].convertToType(data['version'], 'Number');
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], Object);
        }

        if (data.hasOwnProperty('billable')) {
          obj['billable'] = _ApiClient["default"].convertToType(data['billable'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return OccurrenceInstance;
}();
/**
 * The occurrence id
 * @member {Number} id
 */


OccurrenceInstance.prototype['id'] = undefined;
/**
 * The project id
 * @member {Number} project_id
 */

OccurrenceInstance.prototype['project_id'] = undefined;
/**
 * The item id
 * @member {Number} item_id
 */

OccurrenceInstance.prototype['item_id'] = undefined;
/**
 * The timestamp in ms when the occurrence was received
 * @member {Number} timestamp
 */

OccurrenceInstance.prototype['timestamp'] = undefined;
/**
 * @member {Number} version
 */

OccurrenceInstance.prototype['version'] = undefined;
/**
 * The occurrence data sent to the API
 * @member {Object} data
 */

OccurrenceInstance.prototype['data'] = undefined;
/**
 * @member {Number} billable
 */

OccurrenceInstance.prototype['billable'] = undefined;
var _default = OccurrenceInstance;
exports["default"] = _default;