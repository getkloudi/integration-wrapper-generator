"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Icon = _interopRequireDefault(require("./Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Status model module.
 * @module model/Status
 * @version 1.4.0
 */
var Status = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Status</code>.
   * The status of the item.
   * @alias module:model/Status
   */
  function Status() {
    _classCallCheck(this, Status);

    Status.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Status, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Status</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Status} obj Optional instance to populate.
     * @return {module:model/Status} The populated <code>Status</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Status();

        if (data.hasOwnProperty('icon')) {
          obj['icon'] = _ApiClient["default"].convertToType(data['icon'], _Icon["default"]);
        }

        if (data.hasOwnProperty('resolved')) {
          obj['resolved'] = _ApiClient["default"].convertToType(data['resolved'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return Status;
}();
/**
 * Details of the icon representing the status. If not provided, no status icon displays in Jira.
 * @member {module:model/Icon} icon
 */


Status.prototype['icon'] = undefined;
/**
 * Whether the item is resolved. If set to \"true\", the link to the issue is displayed in a strikethrough font, otherwise the link displays in normal font.
 * @member {Boolean} resolved
 */

Status.prototype['resolved'] = undefined;
var _default = Status;
exports["default"] = _default;