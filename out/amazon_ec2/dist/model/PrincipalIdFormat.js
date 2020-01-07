"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IdFormat = _interopRequireDefault(require("./IdFormat"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PrincipalIdFormat model module.
 * @module model/PrincipalIdFormat
 * @version 1.1.0
 */
var PrincipalIdFormat =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PrincipalIdFormat</code>.
   * PrincipalIdFormat description
   * @alias module:model/PrincipalIdFormat
   */
  function PrincipalIdFormat() {
    _classCallCheck(this, PrincipalIdFormat);

    PrincipalIdFormat.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PrincipalIdFormat, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PrincipalIdFormat</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrincipalIdFormat} obj Optional instance to populate.
     * @return {module:model/PrincipalIdFormat} The populated <code>PrincipalIdFormat</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PrincipalIdFormat();

        if (data.hasOwnProperty('Arn')) {
          obj['Arn'] = _ApiClient["default"].convertToType(data['Arn'], 'String');
        }

        if (data.hasOwnProperty('Statuses')) {
          obj['Statuses'] = _ApiClient["default"].convertToType(data['Statuses'], [_IdFormat["default"]]);
        }
      }

      return obj;
    }
  }]);

  return PrincipalIdFormat;
}();
/**
 * @member {String} Arn
 */


PrincipalIdFormat.prototype['Arn'] = undefined;
/**
 * @member {Array.<module:model/IdFormat>} Statuses
 */

PrincipalIdFormat.prototype['Statuses'] = undefined;
var _default = PrincipalIdFormat;
exports["default"] = _default;