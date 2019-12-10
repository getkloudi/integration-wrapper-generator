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
 * The RepoDiff model module.
 * @module model/RepoDiff
 * @version 1.0.0
 */
var RepoDiff =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>RepoDiff</code>.
   * @alias module:model/RepoDiff
   */
  function RepoDiff() {
    _classCallCheck(this, RepoDiff);

    RepoDiff.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RepoDiff, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RepoDiff</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RepoDiff} obj Optional instance to populate.
     * @return {module:model/RepoDiff} The populated <code>RepoDiff</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RepoDiff();

        if (data.hasOwnProperty('a_mode')) {
          obj['a_mode'] = _ApiClient["default"].convertToType(data['a_mode'], 'String');
        }

        if (data.hasOwnProperty('b_mode')) {
          obj['b_mode'] = _ApiClient["default"].convertToType(data['b_mode'], 'String');
        }

        if (data.hasOwnProperty('deleted_file')) {
          obj['deleted_file'] = _ApiClient["default"].convertToType(data['deleted_file'], 'String');
        }

        if (data.hasOwnProperty('diff')) {
          obj['diff'] = _ApiClient["default"].convertToType(data['diff'], 'String');
        }

        if (data.hasOwnProperty('new_file')) {
          obj['new_file'] = _ApiClient["default"].convertToType(data['new_file'], 'String');
        }

        if (data.hasOwnProperty('new_path')) {
          obj['new_path'] = _ApiClient["default"].convertToType(data['new_path'], 'String');
        }

        if (data.hasOwnProperty('old_path')) {
          obj['old_path'] = _ApiClient["default"].convertToType(data['old_path'], 'String');
        }

        if (data.hasOwnProperty('renamed_file')) {
          obj['renamed_file'] = _ApiClient["default"].convertToType(data['renamed_file'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RepoDiff;
}();
/**
 * @member {String} a_mode
 */


RepoDiff.prototype['a_mode'] = undefined;
/**
 * @member {String} b_mode
 */

RepoDiff.prototype['b_mode'] = undefined;
/**
 * @member {String} deleted_file
 */

RepoDiff.prototype['deleted_file'] = undefined;
/**
 * @member {String} diff
 */

RepoDiff.prototype['diff'] = undefined;
/**
 * @member {String} new_file
 */

RepoDiff.prototype['new_file'] = undefined;
/**
 * @member {String} new_path
 */

RepoDiff.prototype['new_path'] = undefined;
/**
 * @member {String} old_path
 */

RepoDiff.prototype['old_path'] = undefined;
/**
 * @member {String} renamed_file
 */

RepoDiff.prototype['renamed_file'] = undefined;
var _default = RepoDiff;
exports["default"] = _default;