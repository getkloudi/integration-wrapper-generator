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
 * The Contributor model module.
 * @module model/Contributor
 * @version 1.1.0
 */
var Contributor =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>Contributor</code>.
   * Get repository contributors
   * @alias module:model/Contributor
   */
  function Contributor() {
    _classCallCheck(this, Contributor);

    Contributor.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Contributor, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Contributor</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Contributor} obj Optional instance to populate.
     * @return {module:model/Contributor} The populated <code>Contributor</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Contributor();

        if (data.hasOwnProperty('additions')) {
          obj['additions'] = _ApiClient["default"].convertToType(data['additions'], 'String');
        }

        if (data.hasOwnProperty('commits')) {
          obj['commits'] = _ApiClient["default"].convertToType(data['commits'], 'String');
        }

        if (data.hasOwnProperty('deletions')) {
          obj['deletions'] = _ApiClient["default"].convertToType(data['deletions'], 'String');
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Contributor;
}();
/**
 * @member {String} additions
 */


Contributor.prototype['additions'] = undefined;
/**
 * @member {String} commits
 */

Contributor.prototype['commits'] = undefined;
/**
 * @member {String} deletions
 */

Contributor.prototype['deletions'] = undefined;
/**
 * @member {String} email
 */

Contributor.prototype['email'] = undefined;
/**
 * @member {String} name
 */

Contributor.prototype['name'] = undefined;
var _default = Contributor;
exports["default"] = _default;