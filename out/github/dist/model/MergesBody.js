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
 * The MergesBody model module.
 * @module model/MergesBody
 * @version 1.4.1
 */
var MergesBody =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>MergesBody</code>.
   * @alias module:model/MergesBody
   */
  function MergesBody() {
    _classCallCheck(this, MergesBody);

    MergesBody.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(MergesBody, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>MergesBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MergesBody} obj Optional instance to populate.
     * @return {module:model/MergesBody} The populated <code>MergesBody</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MergesBody();

        if (data.hasOwnProperty('base')) {
          obj['base'] = _ApiClient["default"].convertToType(data['base'], 'String');
        }

        if (data.hasOwnProperty('commit_message')) {
          obj['commit_message'] = _ApiClient["default"].convertToType(data['commit_message'], 'String');
        }

        if (data.hasOwnProperty('head')) {
          obj['head'] = _ApiClient["default"].convertToType(data['head'], 'String');
        }
      }

      return obj;
    }
  }]);

  return MergesBody;
}();
/**
 * @member {String} base
 */


MergesBody.prototype['base'] = undefined;
/**
 * @member {String} commit_message
 */

MergesBody.prototype['commit_message'] = undefined;
/**
 * @member {String} head
 */

MergesBody.prototype['head'] = undefined;
var _default = MergesBody;
exports["default"] = _default;