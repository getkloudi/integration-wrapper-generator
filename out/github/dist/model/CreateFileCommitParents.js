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
 * The CreateFileCommitParents model module.
 * @module model/CreateFileCommitParents
 * @version 1.4.3
 */
var CreateFileCommitParents =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CreateFileCommitParents</code>.
   * @alias module:model/CreateFileCommitParents
   */
  function CreateFileCommitParents() {
    _classCallCheck(this, CreateFileCommitParents);

    CreateFileCommitParents.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateFileCommitParents, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreateFileCommitParents</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateFileCommitParents} obj Optional instance to populate.
     * @return {module:model/CreateFileCommitParents} The populated <code>CreateFileCommitParents</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateFileCommitParents();

        if (data.hasOwnProperty('html_url')) {
          obj['html_url'] = _ApiClient["default"].convertToType(data['html_url'], 'String');
        }

        if (data.hasOwnProperty('sha')) {
          obj['sha'] = _ApiClient["default"].convertToType(data['sha'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CreateFileCommitParents;
}();
/**
 * @member {String} html_url
 */


CreateFileCommitParents.prototype['html_url'] = undefined;
/**
 * @member {String} sha
 */

CreateFileCommitParents.prototype['sha'] = undefined;
/**
 * @member {String} url
 */

CreateFileCommitParents.prototype['url'] = undefined;
var _default = CreateFileCommitParents;
exports["default"] = _default;