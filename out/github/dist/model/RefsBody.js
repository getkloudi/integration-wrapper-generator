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
 * The RefsBody model module.
 * @module model/RefsBody
 * @version 1.4.4
 */
var RefsBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RefsBody</code>.
   * @alias module:model/RefsBody
   */
  function RefsBody() {
    _classCallCheck(this, RefsBody);

    RefsBody.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RefsBody, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RefsBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RefsBody} obj Optional instance to populate.
     * @return {module:model/RefsBody} The populated <code>RefsBody</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RefsBody();

        if (data.hasOwnProperty('ref')) {
          obj['ref'] = _ApiClient["default"].convertToType(data['ref'], 'String');
        }

        if (data.hasOwnProperty('sha')) {
          obj['sha'] = _ApiClient["default"].convertToType(data['sha'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RefsBody;
}();
/**
 * @member {String} ref
 */


RefsBody.prototype['ref'] = undefined;
/**
 * @member {String} sha
 */

RefsBody.prototype['sha'] = undefined;
var _default = RefsBody;
exports["default"] = _default;