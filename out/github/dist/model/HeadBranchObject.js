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
 * The HeadBranchObject model module.
 * @module model/HeadBranchObject
 * @version 1.4.6
 */
var HeadBranchObject = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>HeadBranchObject</code>.
   * @alias module:model/HeadBranchObject
   */
  function HeadBranchObject() {
    _classCallCheck(this, HeadBranchObject);

    HeadBranchObject.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(HeadBranchObject, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>HeadBranchObject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HeadBranchObject} obj Optional instance to populate.
     * @return {module:model/HeadBranchObject} The populated <code>HeadBranchObject</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new HeadBranchObject();

        if (data.hasOwnProperty('sha')) {
          obj['sha'] = _ApiClient["default"].convertToType(data['sha'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return HeadBranchObject;
}();
/**
 * @member {String} sha
 */


HeadBranchObject.prototype['sha'] = undefined;
/**
 * @member {String} type
 */

HeadBranchObject.prototype['type'] = undefined;
/**
 * @member {String} url
 */

HeadBranchObject.prototype['url'] = undefined;
var _default = HeadBranchObject;
exports["default"] = _default;