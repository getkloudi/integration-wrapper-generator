"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Release = _interopRequireDefault(require("./Release"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RepoTag model module.
 * @module model/RepoTag
 * @version 1.0.0
 */
var RepoTag =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>RepoTag</code>.
   * Create a new repository tag
   * @alias module:model/RepoTag
   */
  function RepoTag() {
    _classCallCheck(this, RepoTag);

    RepoTag.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RepoTag, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RepoTag</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RepoTag} obj Optional instance to populate.
     * @return {module:model/RepoTag} The populated <code>RepoTag</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RepoTag();

        if (data.hasOwnProperty('commit')) {
          obj['commit'] = _ApiClient["default"].convertToType(data['commit'], 'String');
        }

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('release')) {
          obj['release'] = _Release["default"].constructFromObject(data['release']);
        }
      }

      return obj;
    }
  }]);

  return RepoTag;
}();
/**
 * @member {String} commit
 */


RepoTag.prototype['commit'] = undefined;
/**
 * @member {String} message
 */

RepoTag.prototype['message'] = undefined;
/**
 * @member {String} name
 */

RepoTag.prototype['name'] = undefined;
/**
 * @member {module:model/Release} release
 */

RepoTag.prototype['release'] = undefined;
var _default = RepoTag;
exports["default"] = _default;