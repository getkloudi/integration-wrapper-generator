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
 * The RepoBranch model module.
 * @module model/RepoBranch
 * @version 1.0.0
 */
var RepoBranch =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>RepoBranch</code>.
   * Create branch
   * @alias module:model/RepoBranch
   */
  function RepoBranch() {
    _classCallCheck(this, RepoBranch);

    RepoBranch.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RepoBranch, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RepoBranch</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RepoBranch} obj Optional instance to populate.
     * @return {module:model/RepoBranch} The populated <code>RepoBranch</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RepoBranch();

        if (data.hasOwnProperty('commit')) {
          obj['commit'] = _ApiClient["default"].convertToType(data['commit'], 'String');
        }

        if (data.hasOwnProperty('developers_can_merge')) {
          obj['developers_can_merge'] = _ApiClient["default"].convertToType(data['developers_can_merge'], 'String');
        }

        if (data.hasOwnProperty('developers_can_push')) {
          obj['developers_can_push'] = _ApiClient["default"].convertToType(data['developers_can_push'], 'String');
        }

        if (data.hasOwnProperty('merged')) {
          obj['merged'] = _ApiClient["default"].convertToType(data['merged'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('protected')) {
          obj['protected'] = _ApiClient["default"].convertToType(data['protected'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RepoBranch;
}();
/**
 * @member {String} commit
 */


RepoBranch.prototype['commit'] = undefined;
/**
 * @member {String} developers_can_merge
 */

RepoBranch.prototype['developers_can_merge'] = undefined;
/**
 * @member {String} developers_can_push
 */

RepoBranch.prototype['developers_can_push'] = undefined;
/**
 * @member {String} merged
 */

RepoBranch.prototype['merged'] = undefined;
/**
 * @member {String} name
 */

RepoBranch.prototype['name'] = undefined;
/**
 * @member {String} protected
 */

RepoBranch.prototype['protected'] = undefined;
var _default = RepoBranch;
exports["default"] = _default;