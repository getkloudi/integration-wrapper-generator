"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _StatusCategory = _interopRequireDefault(require("./StatusCategory"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The StatusDetails model module.
 * @module model/StatusDetails
 * @version 1.4.0
 */
var StatusDetails = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>StatusDetails</code>.
   * A status.
   * @alias module:model/StatusDetails
   */
  function StatusDetails() {
    _classCallCheck(this, StatusDetails);

    StatusDetails.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(StatusDetails, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>StatusDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StatusDetails} obj Optional instance to populate.
     * @return {module:model/StatusDetails} The populated <code>StatusDetails</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new StatusDetails();

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('iconUrl')) {
          obj['iconUrl'] = _ApiClient["default"].convertToType(data['iconUrl'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }

        if (data.hasOwnProperty('statusCategory')) {
          obj['statusCategory'] = _ApiClient["default"].convertToType(data['statusCategory'], _StatusCategory["default"]);
        }
      }

      return obj;
    }
  }]);

  return StatusDetails;
}();
/**
 * The description of the status.
 * @member {String} description
 */


StatusDetails.prototype['description'] = undefined;
/**
 * The URL of the icon used to represent the status.
 * @member {String} iconUrl
 */

StatusDetails.prototype['iconUrl'] = undefined;
/**
 * The ID of the status.
 * @member {String} id
 */

StatusDetails.prototype['id'] = undefined;
/**
 * The name of the status.
 * @member {String} name
 */

StatusDetails.prototype['name'] = undefined;
/**
 * The URL of the status.
 * @member {String} self
 */

StatusDetails.prototype['self'] = undefined;
/**
 * The category assigned to the status.
 * @member {module:model/StatusCategory} statusCategory
 */

StatusDetails.prototype['statusCategory'] = undefined;
var _default = StatusDetails;
exports["default"] = _default;