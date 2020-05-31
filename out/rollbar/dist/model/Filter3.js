"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Operation = _interopRequireDefault(require("./Operation"));

var _Type = _interopRequireDefault(require("./Type"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Filter3 model module.
 * @module model/Filter3
 * @version 1.1.0
 */
var Filter3 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Filter3</code>.
   * @alias module:model/Filter3
   */
  function Filter3() {
    _classCallCheck(this, Filter3);

    Filter3.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Filter3, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Filter3</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Filter3} obj Optional instance to populate.
     * @return {module:model/Filter3} The populated <code>Filter3</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Filter3();

        if (data.hasOwnProperty('type')) {
          obj['type'] = _Type["default"].constructFromObject(data['type']);
        }

        if (data.hasOwnProperty('operation')) {
          obj['operation'] = _Operation["default"].constructFromObject(data['operation']);
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Filter3;
}();
/**
 * @member {module:model/Type} type
 */


Filter3.prototype['type'] = undefined;
/**
 * @member {module:model/Operation} operation
 */

Filter3.prototype['operation'] = undefined;
/**
 * @member {String} value
 */

Filter3.prototype['value'] = undefined;
var _default = Filter3;
exports["default"] = _default;