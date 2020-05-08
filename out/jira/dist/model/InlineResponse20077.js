"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CloudidRestApi3ProjectProjectIdOrKeyStatusesStatuses = _interopRequireDefault(require("./CloudidRestApi3ProjectProjectIdOrKeyStatusesStatuses"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse20077 model module.
 * @module model/InlineResponse20077
 * @version 1.1.0
 */
var InlineResponse20077 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20077</code>.
   * @alias module:model/InlineResponse20077
   * @param id {String} 
   * @param name {String} 
   * @param self {String} 
   * @param statuses {Array.<module:model/CloudidRestApi3ProjectProjectIdOrKeyStatusesStatuses>} 
   * @param subtask {Boolean} 
   */
  function InlineResponse20077(id, name, self, statuses, subtask) {
    _classCallCheck(this, InlineResponse20077);

    InlineResponse20077.initialize(this, id, name, self, statuses, subtask);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20077, null, [{
    key: "initialize",
    value: function initialize(obj, id, name, self, statuses, subtask) {
      obj['id'] = id;
      obj['name'] = name;
      obj['self'] = self;
      obj['statuses'] = statuses;
      obj['subtask'] = subtask;
    }
    /**
     * Constructs a <code>InlineResponse20077</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20077} obj Optional instance to populate.
     * @return {module:model/InlineResponse20077} The populated <code>InlineResponse20077</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20077();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }

        if (data.hasOwnProperty('statuses')) {
          obj['statuses'] = _ApiClient["default"].convertToType(data['statuses'], [_CloudidRestApi3ProjectProjectIdOrKeyStatusesStatuses["default"]]);
        }

        if (data.hasOwnProperty('subtask')) {
          obj['subtask'] = _ApiClient["default"].convertToType(data['subtask'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20077;
}();
/**
 * @member {String} id
 */


InlineResponse20077.prototype['id'] = undefined;
/**
 * @member {String} name
 */

InlineResponse20077.prototype['name'] = undefined;
/**
 * @member {String} self
 */

InlineResponse20077.prototype['self'] = undefined;
/**
 * @member {Array.<module:model/CloudidRestApi3ProjectProjectIdOrKeyStatusesStatuses>} statuses
 */

InlineResponse20077.prototype['statuses'] = undefined;
/**
 * @member {Boolean} subtask
 */

InlineResponse20077.prototype['subtask'] = undefined;
var _default = InlineResponse20077;
exports["default"] = _default;